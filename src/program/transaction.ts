// import { WalletContextState } from "@solana/wallet-adapter-react";
// import { Connection, Transaction } from "@solana/web3.js";

// export const execTx = async (
//   transaction: Transaction,
//   connection: Connection,
//   payer: WalletContextState,
//   commitment: "confirmed" | "finalized" = "confirmed"
// ) => {
//   try {
//     if (!payer.signTransaction) {
//       throw new Error("Wallet does not support signing transactions.");
//     }

//     //  Sign the transaction with payer wallet
//     const signedTx = await payer.signTransaction(transaction);
//     // Serialize, send and confirm the transaction
//     const rawTransaction = signedTx.serialize();
//     console.log(await connection.simulateTransaction(signedTx));
//     // return;
//     const txid = await connection.sendRawTransaction(rawTransaction, {
//       skipPreflight: true,
//       maxRetries: 2,
//       preflightCommitment: "processed",
//     });
//     console.log(
//       `https://solscan.io/tx/${txid}?cluster=custom&customUrl=${connection.rpcEndpoint}`
//     );
//     try {
//       const confirmed = await connection.confirmTransaction(txid, commitment);
//       console.log("err ", confirmed.value.err);
//       if (confirmed.value.err === null) {
//         return true;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.log("confirm error: ", error);
//       return false;
//     }
//   } catch (e) {
//     console.log("confirm transaction error: ", e);
//     return false;
//   }
//   return null;
// };

import { WalletContextState } from "@solana/wallet-adapter-react";
import { Connection, Transaction, Commitment } from "@solana/web3.js";

/**
 * Executes a Solana transaction using a connected wallet.
 *
 * @param transaction - The Transaction to be executed.
 * @param connection - The Solana Connection object.
 * @param payer - The WalletContextState from wallet adapter.
 * @param commitment - Optional commitment level ("confirmed" by default).
 * @returns Promise resolving to `true` (success), `null` (confirmed with error), or `false` (failed to send/confirm).
 */
export const execTx = async (
  transaction: Transaction,
  connection: Connection,
  payer: WalletContextState,
  commitment: Commitment = "confirmed"
): Promise<boolean | null> => {
  try {
    if (!payer.signTransaction) {
      throw new Error("Wallet does not support signing transactions.");
    }

    // Sign the transaction
    const signedTx = await payer.signTransaction(transaction);

    // Simulate the transaction (for debugging)
    const simulation = await connection.simulateTransaction(signedTx);
    console.log("🧪 Simulation result:", simulation);

    // Serialize and send transaction
    const rawTransaction = signedTx.serialize();
    const txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true, // Set to false in production for safer validation
      maxRetries: 2,
      preflightCommitment: "processed",
    });

    console.log(
      `🚀 Transaction sent: https://solscan.io/tx/${txid}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );

    // Confirm transaction
    const confirmation = await connection.confirmTransaction(txid, commitment);
    console.log("✅ Confirmation result:", confirmation.value);

    if (confirmation.value.err === null) {
      return true; // Success
    } else {
      console.warn(
        "⚠️ Transaction confirmed with error:",
        confirmation.value.err
      );
      return null; // Confirmed but failed
    }
  } catch (error) {
    console.error("❌ Transaction execution failed:", error);
    return false; // Exception occurred
  }
};
