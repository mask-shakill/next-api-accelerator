## File Upload v: 1

```python

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { dbConnect } from "@/dbConfig/dbConfig";
import { File } from "@/models/FileUpload";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await dbConnect();

    // Get the uploaded file from the form data
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    // Check if a file was uploaded
    if (!image) {
      return NextResponse.json({ msg: "Error: No file uploaded" });
    }

    // Read the uploaded file as a buffer
    const buffer = await fs.readFile(image.path);

    // Define the file name
    const fileName = image.name;

    // Define the path where you want to save the file
    const filePath = path.join(process.cwd(), "public", fileName);

    // Write the buffer to the file
    await fs.writeFile(filePath, buffer);

    // Save the file path to the database
    const fileData = new File({ file: filePath });
    await fileData.save();

    return NextResponse.json({
      msg: "File processed and saved successfully",
      fileName,
    });
  } catch (err) {
    console.error("Error processing file:", err);
    return NextResponse.json(new Error("File processing failed"));
  }
};

```

# file upload v: 2

```python
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { dbConnect } from "@/dbConfig/dbConfig";
import { File } from "@/models/FileUpload";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await dbConnect();

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json({ msg: "Error: No file uploaded" });
    }

    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Ensure the file name doesn't contain any special characters or directory separators
    const safeFileName = image.name.replace(/[^\w.-]/g, "_");

    // Define the path where you want to save the file
    const filePath = path.join(process.cwd(), "public", safeFileName);

    // Write the buffer to the file
    await fs.writeFile(filePath, buffer);

    // Save the file path to the database
    const fileData = new File({ file: filePath });
    await fileData.save();

    return NextResponse.json({
      msg: "File processed and saved successfully",
      fileName: safeFileName,
    });
  } catch (err) {
    console.error("Error processing file:", err);
    return NextResponse.json(new Error("File processing failed"));
  }
};
```
