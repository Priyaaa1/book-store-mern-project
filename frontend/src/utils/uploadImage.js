const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset");

  const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url;
};

export default uploadImageToCloudinary;