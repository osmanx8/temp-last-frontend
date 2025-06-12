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

export const fetchTX = async () => {
  console.log("herre fetch api");
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/fetch`
    );
    console.log("arrive fetch data...", res);
    return res;
  } catch (err) {
    console.log("er", err);
  }
};

export const formatStake = (
  data: {
    amount: number;
    time: string;
    user: string;
  }[]
) => {
  return data.map((value) => {
    const date = new Date(value.time);

    const formattedTime = `${date.getDate()} / ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(
      date.getSeconds()
    ).padStart(2, "0")}`;
    const shortAddress = `${value.user.slice(0, 4)}...${value.user.slice(-4)}`;
    const formattedAmount = `${value.amount} SOL`;

    return {
      time: formattedTime,
      user: shortAddress,
      amount: formattedAmount,
    };
  });
};
