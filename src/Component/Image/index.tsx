import { Button } from "@mui/material";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../Static/Logo";
import { config, lien } from "../../Static/static";
import Header from "../Header";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const Images: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const user = useSelector((state: any) => state.user.user);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };
  const sendData = async () => {
    try {
      if (fileList.length > 0) {
        const response = await axios.put(
          `${lien}/updateFileAgent`,
          {
            id: user._id,
            filename: fileList[0].thumbUrl,
          },
          config
        );
        if (response.status === 200) {
          window.location.replace("/image");
        }
      } else {
        successAlert("Importer la photo en cliquant sur upload", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Header />
      <Logo text="Photo de profil" />
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <ImgCrop rotationSlider>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && "+ Upload"}
          </Upload>
        </ImgCrop>
        <Button
          onClick={() => sendData()}
          sx={{ marginTop: "10px" }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default Images;
