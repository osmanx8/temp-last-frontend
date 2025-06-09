import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";

export type createPoolInfo = {
  game_id: number;
  game_time_duration: number; //second
  is_pool_open: boolean;
  is_claimed: boolean;
};

export type stakeSolInfo = {
  user: string;
  game_id: number;
  pot_balance: number;
  stake_sol: number;
  last_sender: string;
  second_sender: string;
  third_sender: string;
  at_start_time: Date;
  game_time_duration: number;
};

export type claimInfo = {
  game_id: number;
  is_claimed: boolean;
  is_pool_open: boolean;
};
