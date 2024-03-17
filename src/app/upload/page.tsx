"use client";
import BlurCircles from "@/components/BlurCircles";
import ConnectWallet from "@/components/ConnectWallet";
import DragAndDrop from "@/components/DragDrop";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createDataset } from "@/services/datasets";
import { useFilesStore } from "@/states/filesStore";
import { useToast } from "@chakra-ui/toast";
import { useRef } from "react";

export default function UploadDataset() {
  const filesArray = useFilesStore((state: any) => state.filesArray);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const labelsCsvRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleUploadDataset = async () => {
    //convert files array to form data
    const formData = new FormData();
    filesArray.forEach((file: any) => {
      formData.append("files", file);
    });
    formData.append("labels", "");
    formData.append("creator_id", "65f5e21a0f15c853d05731fb");
    formData.append("name", nameRef.current!.value.toString());

    const res = await createDataset(formData);

    console.log("res from upload dataset", res);
    if (res.status === 200) {
      toast({
        title: "Dataset uploaded",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error uploading dataset",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="px-10 flex justify-center items-start flex-col min-w-[400px]">
      <Hero />
      <ConnectWallet />
      <h1 className="mb-3 mt-[100px]">Upload Dataset</h1>
      <div className="flex flex-row-reverse justify-between items-start w-90 mt-5">
        <div className="flex flex-col items-start justify-between w-[30%] h-[66vh]  border-l-1 border-gray-600 px-1">
          <div className="flex flex-col items-start justify-start h-[50vh]  border-l-1 border-gray-600 px-1">
            <Input
              type="text"
              placeholder="Enter dataset name"
              className="mt-4 w-[400px]"
              ref={nameRef}
            />
            <Input
              type="number"
              placeholder="Enter price(optional)"
              className="mt-4 w-[400px]"
              ref={priceRef}
            />
            <Input
              type="text"
              placeholder="Enter labels csv"
              className="mt-4 w-[400px]"
              ref={labelsCsvRef}
            />
          </div>
          <div className="flex flex-col items-start justify-between h-[15vh]">
            <Button className="mt-4 w-[400px]" onClick={handleUploadDataset}>
              Upload
            </Button>
            <Button className="mt-4 w-[400px]" variant="outline">
              Cancel
            </Button>
          </div>
        </div>
        <div className="w-[70%] flex items-center justify-start">
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
}
