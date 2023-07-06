import React from 'react';
import "./image-upload.css";
import { FaCloudUploadAlt, FaImages, FaPlus, FaRegImages, FaUpload } from 'react-icons/fa';

interface IProps {
  controller: { value: string[], set: any },
}

const ImageUpload = ({ controller }: IProps) => {
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader: any = new FileReader();

    reader.onloadend = () => {
      controller.set([...controller.value, reader.result]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...controller.value];
    updatedImages.splice(index, 1);
    controller.set(updatedImages);
  };

  return (
    <div className="image-upload">
     <label htmlFor="" style={{fontFamily:'cursive'}}>اضف صور :</label>
      <input id="file-upload" type="file" className="img-file" onChange={handleImageUpload} style={{ display: 'none' }} />
      <div className="uploaded-images">
        {controller.value && controller.value.map((img, index) => (
          <div className='img-master' key={index}>
            <img src={img} alt="Uploaded" className="uploaded-image" />
            <button type={"button"} onClick={() => handleImageDelete(index)} className='x-button'>
              x
            </button>
          </div>
        ))}
        <label htmlFor="file-upload" className="file-upload-label">
        <FaRegImages size={"29px"} className="plus-icon" />
      </label>
      </div>
    </div>
  );
};

export default ImageUpload;
