import axios from "axios";

export const createUser = async (body: any) => {
  const res = axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/economy/consumer`,
    body
  );
  return res;
};

export const buyDataset = async (body: any) => {
  const res = axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/economy/buy`,
    body
  );
  return res;
};
