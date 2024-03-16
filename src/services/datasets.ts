import axios from "axios";

export const fetchDatasetsForAnnotation = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/datases?status=PENDING`
  );
  return res;
};

export const fetchDatasetsForMarketplace = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/dataset?status=REVIEWED`
  );
  return res;
};

export const fetchRecordToAnnotate = async (paramsObj: any) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/dataset/annotate`,
    {
      params: paramsObj,
    }
  );
  return res;
};

export const reviewRecord = async (body: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/dataset/review`,
    body
  );
  return res;
};

export const createDataset = async (body: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/dataset`,
    body
  );
  return res;
};

export const addLabeledData = async (body: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/dataset/labeled`,
    body
  );
  return res;
};
