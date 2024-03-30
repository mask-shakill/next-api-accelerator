import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Post page</h1>
        <div className="py-28">
          <Link
            href={"post/create-post/"}
            className="bg-slate-700 text-white px-5 py-2 rounded-md "
          >
            Create Post{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
