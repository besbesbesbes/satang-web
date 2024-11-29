import axios from "axios";
import createAuthHeader from "../utils/createAuthHeader";
import useUserStore from "../stores/userStore";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const token = useUserStore.getState().token;

export const getTransApi = async (body) =>
  await axios.post(`${baseUrl}/trans`, body, createAuthHeader(token));
