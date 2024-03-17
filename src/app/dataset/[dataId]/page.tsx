"use client";

import { useParams, useRouter } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ConnectWallet from "@/components/ConnectWallet";
import { fetchRecordToAnnotate, reviewRecord } from "@/services/datasets";
import { useUserStore } from "@/states/userStore";
import { useToast } from "@chakra-ui/toast";
import { Router } from "next/router";

export default function DatasetPage(props: any) {
  const { dataId } = useParams();
  const id = useUserStore((state: any) => state.id);
  const [score, setScore] = useState(5);
  const toast = useToast();
  const router = useRouter();

  const [record, setRecord] = useState<any>({});

  const handleFetchDataRecord = async () => {
    console.log("Fetching record", dataId, id);
    const res = await fetchRecordToAnnotate({
      dataset_id: dataId,
      annotator_id: id,
    });
    console.log("res from fetchRecordToAnnotate", res);
    if (res.status === 200) {
      setRecord(res.data.data);
    }
  };

  const handleReviewRecord = async () => {
    console.log("Reviewing record");
    const res = await reviewRecord({
      user_id: id,
      data_id: dataId,
      grade: score,
    });
    console.log("res from reviewRecord", res);
    if (res.status === 200) {
      toast({
        title: "Record reviewed",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/datasets");
    }
  };

  useEffect(() => {
    handleFetchDataRecord();
  }, []);

  return (
    <>
      <Hero />
      <ConnectWallet />
      <div className="p-10 h-screen overflow-hidden">
        <div className="flex flex-row-reverse justify-between items-start w-90 mt-5">
          <div className="flex flex-col items-start justify-start w-[30%] h-[90vh] mt-[100px] border-l-1 border-gray-600 px-1">
            <div className="flex flex-col items-start justify-around h-[30vh]">
              <h2>
                Dataset ID: <b>{id}</b>
              </h2>
              <p>Name: {props.name}</p>
              Mark the resume out of 10: {score}
              <Slider
                defaultValue={[5]}
                max={10}
                step={1}
                value={[score]}
                className="w-[300px] my-5"
                onValueChange={(value) => setScore(value[0])}
              />
            </div>
            <div className="w-full flex flex-col justify-end items-start h-[45vh]">
              <Button
                variant={"outline"}
                className="w-full"
                onClick={handleReviewRecord}
              >
                Submit
              </Button>
              <Button variant={"link"} className="w-full">
                Exit
              </Button>
            </div>
          </div>
          <div className="w-[70%] flex items-center justify-start">
            <iframe
              src={`https://gateway.lighthouse.storage/ipfs/${record.cid}`}
              className="h-[650px] w-[900px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}
