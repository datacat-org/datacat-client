"use client";

import { useEffect, useRef, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import { Button } from "./ui/button";
import { useFilesStore } from "@/states/filesStore";
import { uploadToLH } from "@/lib/uploadToLH";
export default function DragAndDrop() {
  const setFilesArray = useFilesStore((state: any) => state.setFilesArray);
  const [files, setFiles] = useState<any>([]);

  useEffect(() => {
    setFilesArray(files);
  }, [files]);

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  async function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        try {
          setFiles((prevState: any) => [...prevState, e.target.files[i]]);
        } catch (error) {
          console.error(error, "error from lh");
        }
      }
    }
  }

  async function handleSubmitFile(e: any) {
    if (files.length === 0) {
      console.log("No files to upload");
    } else {
      const res = await uploadToLH(files);
      console.log("res from upload to lh", res.body.cidArray);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
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
            Upload Files
          </Button> */}
        </div>
      )}
    </div>
  );
}
