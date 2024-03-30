import mongoose, { Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  file: string;
}

const postSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  file: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model<IUser>("Post", postSchema);
export default Post;
