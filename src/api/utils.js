import axios from "axios";

export const imageUpload=async ImageData=>{
     // put raw image data in formdata
    const imageFormData = new FormData();
    imageFormData.append("image", ImageData);
// Upload Image data in ImageBb using post request
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFormData
    );
    return  data?.data?.display_url;
}