"use client";
import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [name, setUserName] = useState("");
  const [email, setDesc] = useState("");
  const [file, setFile] = useState<File>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const postData = { name, email, file };
    console.log(postData);
    axios
      .post("http://localhost:3000/api/post/create/", postData)
      .then((response) => {
        console.log("Post created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-700 p-10 gap-y-2 rounded-lg"
      >
        <label className="text-white" htmlFor="title">
          User Name
        </label>
        <input
          className="p-2 rounded"
          type="text"
          value={name}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label className="text-white" htmlFor="desc">
          Description
        </label>
        <input
          className="p-2 rounded"
          type="text"
          value={email}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input
          className="p-2 rounded"
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />

        <button className="bg-green-500 text-white font-bold py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
