import { NextRequest, NextResponse } from "next/server";

export async function POST(proof: NextRequest) {
  let verifyData;
  const proofData = await proof.json();
  console.log(proofData, "proofbody");
  try {
    const verifyRes = await fetch(
      `https://developer.worldcoin.org/api/v1/verify/${`app_staging_e38f622e8302820e4f685c8da6090529`}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...proofData,
          action: "Datacat-onboard",
        }),
      }
    );
    verifyData = await verifyRes.json();
    console.log(verifyData, "verifyData");
  } catch (error) {
    console.error("Error:", error);
  }
  return NextResponse.json(verifyData);
}
