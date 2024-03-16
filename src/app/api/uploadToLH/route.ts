import lighthouse from "@lighthouse-web3/sdk";

export async function POST(files: File[]) {
  let cidArray: any[] = [];
  files.forEach(async (file) => {
    const uploadResponse = await lighthouse.upload(
      file,
      "139d27ee3e0e410faeba981916563ef8"
    );

    console.log(uploadResponse);
    cidArray.push(uploadResponse.data.Hash);
  });

  return {
    status: 200,
    body: {
      cidArray,
    },
  };
}
