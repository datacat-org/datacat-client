import axios from "axios";

export const createUser = async (body: any) => {
  const res = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, body);
  return res;
};

export const checkIfUserExists = async (obj: any) => {
  const res = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/wallet/${obj.address}`
  );
  return res;
};

export const getUserDataForDataset = async (paramsObj: any) => {
  const res = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${paramsObj.userId}/data/${paramsObj.datasetId}`
  );
  return res;
};
