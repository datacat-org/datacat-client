import lighthouse from "@lighthouse-web3/sdk";

export async function uploadToLH(files: File[]) {
  let cidArray: any[] = [];
  const uploadResponse = await lighthouse.upload(
    files,
    "139d27ee3e0e410faeba981916563ef8",
    true
  );

  console.log(uploadResponse);
  uploadResponse.data.forEach((file: any) => {
    cidArray.push(file.Hash);
  });

  return {
    status: 200,
    body: {
      cidArray,
    },
  };
}
