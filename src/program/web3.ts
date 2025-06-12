import {
  ComputeBudgetProgram,
  Connection,
  Keypair,
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import idl from "./last_send.json";
import { LastSend } from "./last_send";
import { LAST_SENDER_PROGRAM_ID } from "./programId";
import { GAME_STATE, GLOBAL_STATE, VAULT_SEED } from "./seed";
import { AnchorError, Program } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { errorAlert } from "@/components/others/Toast";
import { execTx } from "./transaction";
import { claimTX, createPoolTX, stakeSolTX } from "@/utils/util";
import { claimInfo, createPoolInfo, stakeSolInfo } from "@/utils/types";
import { WalletSignTransactionError } from "@solana/wallet-adapter-base";

export const commitmentLevel = "confirmed";

export const rcpUrl =
  process.env.NEXT_PUBLIC_SOLANA_RPC || clusterApiUrl("devnet");
export const connection = new Connection(rcpUrl, commitmentLevel);
export const LastSendProgramId = new PublicKey(LAST_SENDER_PROGRAM_ID);
export const pumpProgramInterface = JSON.parse(JSON.stringify(idl));

export const initialize = async (wallet: WalletContextState) => {
  console.log("clicked initialize");
  const provider = new anchor.AnchorProvider(connection, wallet as any, {
    preflightCommitment: "confirmed",
  });
  anchor.setProvider(provider);

  const program = new Program(
    pumpProgramInterface,
    provider
  ) as Program<LastSend>;

  // check the connection
  if (!wallet.publicKey || !connection) {
    errorAlert("Wallet Not Connected");
    return "WalletError";
  }

  try {
    const [globalState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GLOBAL_STATE)],
      program.programId
    );
    const transaction = new Transaction().add(
      //Mint new tokens....Tx
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 80_000,
      }),
      ComputeBudgetProgram.setComputeUnitLimit({
        units: 200_000,
      })
    );

    const initGameIx = await program.methods
      .initialize()
      .accounts({ admin: wallet.publicKey })
      .instruction();

    transaction.add(initGameIx);
    transaction.feePayer = wallet.publicKey;
    const blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;
    const txid = await execTx(transaction, connection, wallet, "confirmed");
    console.log("🚀 ~ initialize ~ txid:", txid);

    if (txid == null) {
      return false;
    }
    const globalStateAccount = await program.account.globalState.fetch(
      globalState
    );
    console.log("initialized globalstate", globalStateAccount);

    return txid;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export const createGame = async (
  wallet: WalletContextState,
  gameTime: number
) => {
  const provider = new anchor.AnchorProvider(connection, wallet as any, {
    preflightCommitment: "confirmed",
  });
  anchor.setProvider(provider);
  const program = new Program(
    pumpProgramInterface,
    provider
  ) as Program<LastSend>;

  // check the connection
  if (!wallet.publicKey || !connection) {
    errorAlert("Wallet Not Connected");
    return "WalletError";
  }

  try {
    console.log(connection.rpcEndpoint, "llllllllllllllllllllllllllllll");
    const [globalState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GLOBAL_STATE)],
      program.programId
    );
    console.log("🚀 ~ globalState:", globalState.toBase58());
    const globalStateAccount = await program.account.globalState.fetch(
      globalState
    );
    console.log("🚀 ~ globalStateAccount:", globalStateAccount);
    let game_id = globalStateAccount.totalCount;
    console.log("🚀 ~ game_id:", game_id);
    const gameIdBuffer = game_id.toArrayLike(Buffer, "le", 8);

    const [gameState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GAME_STATE), gameIdBuffer],
      program.programId
    );
    console.log("🚀 ~ gameState:", gameState.toBase58());

    const [solVault] = PublicKey.findProgramAddressSync(
      [Buffer.from(VAULT_SEED), gameIdBuffer],
      program.programId
    );
    console.log("🚀 ~ solVault:", solVault.toBase58());
    const transaction = new Transaction().add(
      //Mint new tokens....Tx
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 60_000,
      }),
      ComputeBudgetProgram.setComputeUnitLimit({
        units: 200_000,
      })
    );

    const createGame = await program.methods
      .createPool(new anchor.BN(gameTime))
      .accounts({ admin: wallet.publicKey })
      .instruction();

    transaction.add(createGame);
    transaction.feePayer = wallet.publicKey;
    const blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;

    const txid = await execTx(transaction, connection, wallet, "confirmed");
    console.log("🚀 ~ cratePoolApi ~ txid:", txid);
    if (txid == null) {
      return false;
    }
    //console
    let gameStateAccount = await program.account.gameState.fetch(gameState);
    console.log("claim gamestate", gameStateAccount);
    const readableTime = new Date(
      Number(gameStateAccount.atStartTime.toString()) * 1000
    );
    console.log("Start Time:", readableTime.toLocaleString());
    console.log("Game ID:", gameStateAccount.gameId.toNumber());
    console.log("Pot Balance:", gameStateAccount.potBalance.toNumber());
    console.log("Last Sender:", gameStateAccount.lastSender.toBase58());
    console.log("Second Sender:", gameStateAccount.secondSender.toBase58());
    console.log("Third Sender:", gameStateAccount.thirdSender.toBase58());
    console.log("Dev Wallet:", gameStateAccount.developerWallet.toBase58());
    console.log(
      "time duration second",
      gameStateAccount.timeDuration.toNumber()
    );

    const res = {
      gameId: gameStateAccount.gameId.toNumber(),
      potBalance: gameStateAccount.potBalance.toNumber(),
      readableStartTime: new Date(
        Number(gameStateAccount.atStartTime.toString()) * 1000
      ).toLocaleString(),
      lastSender: gameStateAccount.lastSender.toBase58(),
      secondSender: gameStateAccount.secondSender.toBase58(),
      thirdSender: gameStateAccount.thirdSender.toBase58(),
      timeDuration: gameStateAccount.timeDuration.toNumber(),
    };

    const value: createPoolInfo = {
      game_id: res.gameId,
      game_time_duration: res.timeDuration,
      is_pool_open: globalStateAccount.isPoolOpen,
      is_claimed: gameStateAccount.claimed,
    };
    console.log("web3 value", value);
    //  const result = await createPoolTX(value);
    //  console.log("🚀 ~ result:", result);

    return res.timeDuration;
  } catch (error) {
    console.log("Error ", error);
    return false;
  }
};

export const stakingSol = async (
  wallet: WalletContextState,
  currentSol: number
) => {
  const provider = new anchor.AnchorProvider(connection, wallet as any, {
    preflightCommitment: "confirmed",
  });
  anchor.setProvider(provider);
  const program = new Program(
    pumpProgramInterface,
    provider
  ) as Program<LastSend>;

  // check the connection
  if (!wallet.publicKey || !connection) {
    errorAlert("Wallet Not Connected");
    return "WalletError";
  }

  try {
    console.log(connection.rpcEndpoint, "llllllllllllllllllllllllllllll");
    const [globalState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GLOBAL_STATE)],
      program.programId
    );
    console.log("🚀 ~ globalState:", globalState.toBase58());
    const globalStateAccount = await program.account.globalState.fetch(
      globalState
    );
    console.log("🚀 ~ globalStateAccount:", globalStateAccount);
    const game_id = globalStateAccount.totalCount.sub(new anchor.BN(1)); // Use consistently
    console.log("🚀 ~ game_id:", game_id);
    const gameIdBuffer = game_id.toArrayLike(Buffer, "le", 8);

    const [gameState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GAME_STATE), gameIdBuffer],
      program.programId
    );
    console.log("🚀 ~ gameState:", gameState.toBase58());

    const [solVault] = PublicKey.findProgramAddressSync(
      [Buffer.from(VAULT_SEED), gameIdBuffer],
      program.programId
    );
    const vaultBalanceLamports = await connection.getBalance(solVault);
    const vaultBalanceSOL = vaultBalanceLamports / 1e9;

    console.log(`Vault balance: ${vaultBalanceSOL} SOL`);
    console.log("🚀 ~ solVault:balance", solVault.toBase58());
    const transaction = new Transaction().add(
      //Mint new tokens....Tx
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 60_000,
      }),
      ComputeBudgetProgram.setComputeUnitLimit({
        units: 200_000,
      })
    );

    const stakeSol = await program.methods
      .stakeSol(new anchor.BN(game_id), new anchor.BN(currentSol))
      .accounts({})
      .instruction();

    transaction.add(stakeSol);
    transaction.feePayer = wallet.publicKey;
    const blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;

    try {
      const txid = await execTx(transaction, connection, wallet, "confirmed");
      console.log("🚀 ~ staking sol lApi ~ txid:", txid);

      if (!txid) {
        return false; // if txid is empty or undefined
      }

      // Transaction succeeded, continue logic here
      //console
      let gameStateAccount = await program.account.gameState.fetch(gameState);
      console.log("claim gamestate", gameStateAccount);
      const readableTime = new Date(
        Number(gameStateAccount.atStartTime.toString()) * 1000
      );
      console.log("Start Time:", readableTime.toLocaleString());
      console.log("Game ID:", gameStateAccount.gameId.toNumber());
      console.log("Pot Balance:", gameStateAccount.potBalance.toNumber());
      console.log("Last Sender:", gameStateAccount.lastSender.toBase58());
      console.log("Second Sender:", gameStateAccount.secondSender.toBase58());
      console.log("Third Sender:", gameStateAccount.thirdSender.toBase58());
      console.log("Dev Wallet:", gameStateAccount.developerWallet.toBase58());
      console.log(
        "time duration second",
        gameStateAccount.timeDuration.toNumber()
      );

      const res = {
        gameId: gameStateAccount.gameId.toNumber(),
        potBalance: gameStateAccount.potBalance.toNumber(),
        readableStartTime: new Date(
          Number(gameStateAccount.atStartTime.toString()) * 1000
        ).toLocaleString(),
        lastSender: gameStateAccount.lastSender.toBase58(),
        secondSender: gameStateAccount.secondSender.toBase58(),
        thirdSender: gameStateAccount.thirdSender.toBase58(),
        timeDuration: gameStateAccount.timeDuration.toNumber(),
      };

      const value: stakeSolInfo = {
        user: wallet.publicKey.toBase58(),
        game_id: res.gameId,
        pot_balance: res.potBalance,
        stake_sol: currentSol,
        last_sender: res.lastSender,
        second_sender: res.secondSender,
        third_sender: res.thirdSender,
        at_start_time: new Date(
          Number(gameStateAccount.atStartTime.toString()) * 1000
        ),
        game_time_duration: res.timeDuration,
      };
      // const rerult = await stakeSolTX(value);
      // console.log("🚀 ~ rerult:", rerult);

      return res.timeDuration;
    } catch (error: any) {
      if (
        error.name === "WalletSignTransactionError" ||
        error.message?.toLowerCase().includes("user rejected")
      ) {
        console.warn("⚠️ User rejected the transaction.");
        return false; // return false if user didn’t sign
      }

      console.error("❌ Unexpected error during transaction:", error);
      return false; // catch-all for other errors
    }
  } catch (error) {
    console.log("Error ", error);
    return false;
  }
};

export const claim = async (wallet: WalletContextState) => {
  console.log("claim call");
  const provider = new anchor.AnchorProvider(connection, wallet as any, {
    preflightCommitment: "confirmed",
  });
  anchor.setProvider(provider);
  const program = new Program(
    pumpProgramInterface,
    provider
  ) as Program<LastSend>;
  // check the connection
  if (!wallet.publicKey || !connection) {
    errorAlert("Wallet Not Connected");
    return "WalletError";
  }
  try {
    console.log(connection.rpcEndpoint, "llllllllllllllllllllllllllllll");
    const [globalState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GLOBAL_STATE)],
      program.programId
    );
    console.log("🚀 ~ globalState:", globalState.toBase58());
    const globalStateAccount = await program.account.globalState.fetch(
      globalState
    );
    console.log("🚀 ~ globalStateAccount:", globalStateAccount);
    let game_id = globalStateAccount.totalCount;
    const gameIdBuffer = game_id.toArrayLike(Buffer, "le", 8);
    const gameIdBuffer0 = game_id
      .sub(new anchor.BN(1))
      .toArrayLike(Buffer, "le", 8);

    const [gameState] = PublicKey.findProgramAddressSync(
      [Buffer.from(GAME_STATE), gameIdBuffer0],
      program.programId
    );
    console.log("🚀 ~ gameState:", gameState.toBase58());
    let gameStateAccount = await program.account.gameState.fetch(gameState);
    let lastSender = gameStateAccount.lastSender;
    let secondSender = gameStateAccount.secondSender;
    let thirdSender = gameStateAccount.thirdSender;
    let devWallet = globalStateAccount.developerWallet;

    const [solVault] = PublicKey.findProgramAddressSync(
      [Buffer.from(VAULT_SEED), gameIdBuffer0],
      program.programId
    );
    const balance = await connection.getBalance(solVault);
    console.log("solVault Current balance:", balance / 1e9, "SOL");

    const [nextSolVault] = PublicKey.findProgramAddressSync(
      [Buffer.from(VAULT_SEED), gameIdBuffer],
      program.programId
    );
    console.log("🚀 ~ solVault:", solVault.toBase58());

    const transaction = new Transaction().add(
      //Mint new tokens....Tx
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 60_000,
      }),
      ComputeBudgetProgram.setComputeUnitLimit({
        units: 200_000,
      })
    );

    const claim = await program.methods
      .claim()
      .accounts({
        lastSender,
        devWallet,
        secondSender,
        thirdSender,
        admin: wallet.publicKey,
      })
      .instruction();

    transaction.add(claim);
    transaction.feePayer = wallet.publicKey;
    console.log("🚀 ~ claim ~ publicKey:", wallet.publicKey.toBase58());

    const blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;

    const txid = await execTx(transaction, connection, wallet, "confirmed");
    console.log("🚀 ~ claim ~ txid:", txid);
    if (txid == null) {
      return false;
    }
    //console
    gameStateAccount = await program.account.gameState.fetch(gameState);
    console.log("claim gamestate", gameStateAccount);
    const readableTime = new Date(
      Number(gameStateAccount.atStartTime.toString()) * 1000
    );
    console.log("Start Time:", readableTime.toLocaleString());
    console.log("Game ID:", gameStateAccount.gameId.toNumber());
    console.log("Pot Balance:", gameStateAccount.potBalance.toNumber());
    console.log("Last Sender:", gameStateAccount.lastSender.toBase58());
    console.log("Second Sender:", gameStateAccount.secondSender.toBase58());
    console.log("Third Sender:", gameStateAccount.thirdSender.toBase58());
    console.log("Dev Wallet:", gameStateAccount.developerWallet.toBase58());
    console.log(
      "time duration second",
      gameStateAccount.timeDuration.toNumber()
    );
    console.log(
      "next solvalut balance",
      await connection.getBalance(nextSolVault)
    );
    const res = {
      gameId: gameStateAccount.gameId.toNumber(),
      potBalance: gameStateAccount.potBalance.toNumber(),
      readableStartTime: new Date(
        Number(gameStateAccount.atStartTime.toString()) * 1000
      ).toLocaleString(),
      lastSender: gameStateAccount.lastSender.toBase58(),
      secondSender: gameStateAccount.secondSender.toBase58(),
      thirdSender: gameStateAccount.thirdSender.toBase58(),
      timeDuration: gameStateAccount.timeDuration.toNumber(),
    };

    const value: claimInfo = {
      game_id: gameStateAccount.gameId.toNumber(),
      is_claimed: gameStateAccount.claimed,
      is_pool_open: globalStateAccount.isPoolOpen,
    };
    // const result = await claimTX(value);
    // console.log("result", result);
    return true;
  } catch (error) {
    console.log("Error ", error);
    return false;
  }
};
