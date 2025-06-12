import { PublicKey } from "@solana/web3.js";

// Program ID defined in the provided IDL. Do not edit, it will get overwritten.
export const PROGRAM_ID_IDL = new PublicKey(
  "6H3Urhfm4emdo6rC48npwrtgHGU7CsjyfShvSJdJHx4A"
);

// This constant will not get overwritten on subsequent code generations and it's safe to modify it's value.
export const LAST_SENDER_PROGRAM_ID: PublicKey = PROGRAM_ID_IDL;
