import axios from "axios";

export const fetchCircleWalletBalance = async (id: string) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${id}/wallet/balance`
  );
  return res;
};
