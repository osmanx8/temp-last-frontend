import axios from "axios";
const BACKEND_URL = "http://localhost:5000/api";
/**
 * @return last Winner user model and his tx
 */
export const getLastWinnerData = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/last-winner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching last winner:", error);
    return null;
  }
};

export const getLeaderBoardData = async (isDaily: boolean) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/leaderboard?isDaily=${isDaily}`
    );
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

export const getGameStates = async (isDaily: boolean) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/game-stats?isDaily=${isDaily}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching game stats:", error);
    return null;
  }
};

export const getReferralCode = async (user: string) => {
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
