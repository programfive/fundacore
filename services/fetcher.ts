import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);
