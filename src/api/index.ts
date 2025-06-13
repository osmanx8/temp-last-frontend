import axios from "axios";
const BACKEND_URL = "http://146.19.215.151:5000/api";
/**
 * @return last Winner user model and his tx
 */
export const getLastWinnerData = async () => {
  try {
    console.log("arrive here last winner");
    const response = await axios.get(`${BACKEND_URL}/last-winner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching last winner:", error);
    return null;
  }
};

export const getLeaderBoardData = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching leader board data:", error);
    return null;
  }
};

export const getLiveFeedData = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/live-feed`);
    return response.data;
  } catch (error) {
    console.error("Error fetching live feed data:", error);
    return null;
  }
};

export const getGameStats = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/game-stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game stats:", error);
    return null;
  }
};

export const getReferralCodeAmount = async (user: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/referral`, {
      user,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching referral code:", error);
    return null;
  }
};

export const getTime = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/get-time`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game time:", error);
    return null;
  }
};

export const getPotBalance = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/get-Pot`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current pot balalance:", error);
    return null;
  }
};
