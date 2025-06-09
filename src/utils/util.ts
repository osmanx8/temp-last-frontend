import axios, { AxiosRequestConfig } from "axios";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { createPoolInfo, stakeSolInfo, claimInfo } from "./types";
import dotenv from "dotenv";

dotenv.config();

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const createPoolTX = async (value: createPoolInfo) => {
  console.log("call backend for createPool", value);
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/createpool`,
    value
  );
  return res;
};

export const stakeSolTX = async (value: stakeSolInfo) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stakesol`,
    value
  );
  return res;
};

export const claimTX = async (value: claimInfo) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claim`,
    value
  );
  return res;
};
