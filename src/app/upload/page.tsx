import DragAndDrop from "@/components/DragDrop";

export default function UploadDataset() {
  return (
    <div className="p-10 flex justify-center items-start flex-col min-w-[400px]">
      <h1 className="mb-3">Upload Dataset</h1>
      <DragAndDrop />
    </div>
  );
}
