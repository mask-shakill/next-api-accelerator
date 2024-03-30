import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  file: {
    type: String,
  },
});

export const File = mongoose.models.File || mongoose.model("File", fileSchema);
