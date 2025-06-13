import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { StaticImageData } from "next/image";

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

export interface KingCardData {
  address: string;
  reward: number;
  image: StaticImageData;
}

export interface LiveFeedCardData {
  time: string;
  address: string;
  amount: string;
}

export type GameData = {
  gameId: number;
  gameTimeDuration: number;
  stakedSol: number;
  solFromGameBefore: number;
  createdAt: string;
};
