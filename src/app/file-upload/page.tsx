"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const FileUpload = () => {
  const [image, setImage] = useState<File | null>(null);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) {
        return;
      }
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post("/api/upload-image", formData);
      const data = await response.data;
      console.log({ data });
    } catch (err: any) {
      console.log("err", err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandle}
        className="flex flex-col items-center p-20 bg-slate-500"
      >
        <div className="flex flex-col gap-y-5">
          <label className="text-2xl font-bold" htmlFor="file">
            Upload a File
          </label>
          <input onChange={onChangeHandle} type="file" />
          <button className="bg-green-500 p-2 font-bold rounded text-bold text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FileUpload;
