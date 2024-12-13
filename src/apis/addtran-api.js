import axios from "axios";
import createAuthHeader from "../utils/createAuthHeader";
import useUserStore from "../stores/userStore";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const token = useUserStore.getState().token;

export const getInputCatApi = async () =>
  await axios.get(`${baseUrl}/addtran/cat`, createAuthHeader(token));
export const getInputAcctApi = async () =>
  await axios.get(`${baseUrl}/addtran/acct`, createAuthHeader(token));
export const getInputTripApi = async () =>
  await axios.get(`${baseUrl}/addtran/trip`, createAuthHeader(token));
