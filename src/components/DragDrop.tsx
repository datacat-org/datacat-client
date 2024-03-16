"use client";

import { useEffect, useRef, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import { Button } from "./ui/button";
import { useFilesStore } from "@/states/filesStore";
export default function DragAndDrop() {
  const setFilesArray = useFilesStore((state: any) => state.setFilesArray);
  const [files, setFiles] = useState<any>([]);

  useEffect(() => {
    setFilesArray(files);
  }, [files]);

  function convertFileToBuffer(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  const progressCallback = (progressData: any) => {
    let percentageDone: any = 0;
    console.log(percentageDone);
  };

  const uploadFile = async (fileBuffer: any) => {
    const output = await lighthouse.uploadBuffer(
      fileBuffer,
      "82c6f69c.139d27ee3e0e410faeba981916563ef8"
    );
    console.log("File Status:", output);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );
    return output.data.Hash;
  };

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  async function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        try {
          const cid = await uploadFile(convertFileToBuffer(e.target.files[i]));
          setFiles((prevState: any) => [...prevState, cid]);
        } catch (error) {
          console.error(error, "error from lh");
        }
      }
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        const cid = uploadFile(convertFileToBuffer(e.dataTransfer.files[i]));
        setFiles((prevState: any) => [...prevState, cid]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }
  return (
    <div className="flex flex-col items-start justify-start min-h-[200px] min-w-[500px]">
      <form
        className={`${
          dragActive
            ? "bg-gray-400 border-2 border-dashed border-black-2"
            : "bg-gray-100 border-2 border-dashed border-black-2"
        }  p-4 w-100 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
        />

        <p>
          Drag & Drop files or{" "}
          <span
            className="font-bold text-black-600 cursor-pointer"
            onClick={openFileExplorer}
          >
            <u>Select files</u>
          </span>{" "}
          to upload
        </p>
      </form>
      {files.length > 0 && (
        <div className="w-1/2">
          <h1>Files</h1>
          <ul>
            {files.map((file: any, idx: any) => (
              <li key={idx} className="flex justify-start items-center">
                <p>{file.name}</p>
                <button
                  onClick={() => removeFile(file.name, idx)}
                  className="text-black-500 px-3 py-1 rounded-lg"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {/* <Button onClick={handleSubmitFile} variant="default">
            Submit
          </Button> */}
        </div>
      )}
    </div>
  );
}
