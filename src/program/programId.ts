import { PublicKey } from "@solana/web3.js";

// Program ID defined in the provided IDL. Do not edit, it will get overwritten.
export const PROGRAM_ID_IDL = new PublicKey(
  "Hf9qq3seBtR7nPeDRAwxmww2vsh53MG84arhuG9tQ89U"
);

// This constant will not get overwritten on subsequent code generations and it's safe to modify it's value.
export const LAST_SENDER_PROGRAM_ID: PublicKey = PROGRAM_ID_IDL;
