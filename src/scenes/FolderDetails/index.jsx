import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryView from "../../components/GalleryView";
import { Box } from "@mui/material"; // تأكد من استيراد Box بشكل صحيح
import Header from "../../components/Header";
import { useParams } from 'react-router-dom';

const FolderView = () => {
  const { folderId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('Folder ID:', folderId);  // يجب أن تظهر قيمة صحيحة الآن
    if (folderId) {
      axios.get(`http://localhost:8081/api/folders/${folderId}/images`)
        .then((res) => setImages(res.data))
        .catch((err) => console.error(err));
    }
  }, [folderId]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: "250px", // إذا في سايدبار
        width: "calc(100vw - 250px)",
      }}
    >
      {/* تأكد من وجود Header لديك في الكود، واستخدام المتغير `event` بشكل صحيح */}
      {/* يمكنك استبدال `event.title` هنا بمحتوى مناسب في حال كانت متغيرات غير معرفة */}
      <Header title={"Folder Gallery"} subtitle={`Dashboard / Folders`} />
      
     <GalleryView
  images={images}
  folderId={folderId}
  setImages={setImages}
/>

    </Box>
  );
};

export default FolderView;
