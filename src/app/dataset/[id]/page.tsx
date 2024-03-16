"use client";
import { useParams } from "next/navigation";

export default function DatasetPage(props: any) {
  const { id } = useParams();
  return (
    <div>
      <h1>Dataset</h1>
      <p>Welcome to the dataset</p>
      <h1>{id}</h1>
    </div>
  );
}
