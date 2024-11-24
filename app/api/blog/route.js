import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile, unlink } from "fs/promises";

const { NextResponse } = require("next/server");

const loadDB = async ()=>{
    await connectDB();
}
loadDB();


//API Endpoint for getting all blogs
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({blog})
    }
    else{
        const blogs = await BlogModel.find();
        return NextResponse.json({blogs})
    }

    
}


// API Endpoint for uploading blogs
export async function POST(request) {
    try {
        const formData = await request.formData();

        // Extract the image and validate its existence
        const timestamp = Date.now();
        const image = formData.get("image");

        if (!image) {
            return NextResponse.json({ success: false, error: "Image is required" }, { status: 400 });
        }

        // Save the image to the file system
        const imageByteData = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageByteData);
        const path = `./public/uploads/${timestamp}_${image.name}`;
        await writeFile(path, imageBuffer);
        const imageUrl = `/uploads/${timestamp}_${image.name}`;

        // Construct the blog data object
        const blogData = {
            title: formData.get("title"),
            description: formData.get("description"),
            category: formData.get("category"),
            author: formData.get("author"),
            image: imageUrl,
            authorImg: formData.get("authorImg"),
        };

        // Save the blog data to the database
        await BlogModel.create(blogData);

        return NextResponse.json({ success: true, message: "Blog added successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}


//Creating API Endpoint for delete blog
export async function DELETE(request) {
    try {
      // Connect to the database
      await connectDB();
  
      // Get the blog ID from the request query parameters
      const blogId = request.nextUrl.searchParams.get("id");
      if (!blogId) {
        return NextResponse.json(
          { success: false, message: "Blog ID is required" },
          { status: 400 }
        );
      }
  
      // Find and delete the blog in the database
      const blog = await BlogModel.findByIdAndDelete(blogId);
      if (!blog) {
        return NextResponse.json(
          { success: false, message: "Blog not found" },
          { status: 404 }
        );
      }
  
      // Construct the file path from the blog's data (adjust based on your schema)
      const filePath = `./public/uploads/${blog.image}`;
      try {
        // Attempt to delete the associated file
        await unlink(filePath);
        console.log(`File deleted: ${filePath}`);
      } catch (fileError) {
        console.warn(`File not found or could not be deleted: ${filePath}`);
      }
  
      // Respond with a success message
      return NextResponse.json({
        success: true,
        message: "Blog and associated file deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
      return NextResponse.json(
        { success: false, message: "An error occurred while deleting the blog" },
        { status: 500 }
      );
    }
  }