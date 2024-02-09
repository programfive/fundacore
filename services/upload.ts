import axios from "axios";

export async function upload(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET || ""
    );
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUD_API_KEY || "");
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      formData
    );
    return response.data;
  } catch (error) {
    return ;
  }
}
