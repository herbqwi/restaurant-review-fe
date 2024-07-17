import React from 'react';
import "./image-upload.css";
import { FaCloudUploadAlt, FaImages, FaPlus, FaRegImages, FaUpload } from 'react-icons/fa';
<<<<<<< HEAD

interface IProps {
  controller: { value: string[], set: any },
=======
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  controller: { value: IRestaurant.RestaurantData, set: any },
>>>>>>> development
}

const ImageUpload = ({ controller }: IProps) => {
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader: any = new FileReader();

    reader.onloadend = () => {
<<<<<<< HEAD
      controller.set([...controller.value, reader.result]);
=======
      controller.set({ ...controller.value, images: [...controller.value.images, reader.result] })
>>>>>>> development
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (index: number) => {
<<<<<<< HEAD
    const updatedImages = [...controller.value];
    updatedImages.splice(index, 1);
    controller.set(updatedImages);
=======
    const updatedImages = [...controller.value.images];
    updatedImages.splice(index, 1);
    controller.set({ ...controller.value, images: updatedImages });
>>>>>>> development
  };

  return (
    <div className="image-upload">
<<<<<<< HEAD
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
=======
      <label htmlFor="" style={{ fontFamily: 'cursive' }}>اضافة صور</label>
      <input id="file-upload" type="file" className="img-file" onChange={handleImageUpload} style={{ display: 'none' }} />
      <div className="uploaded-images">
        {controller.value && controller.value.images.map((img, index) => (
          <div className='img-master' key={index}>
            <img onClick={() => { handleImageDelete(index) }} src={img} alt="Uploaded" className="uploaded-image" />
          </div>
        ))}
        <label htmlFor="file-upload" className="file-upload-label">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </label>
>>>>>>> development
      </div>
    </div>
  );
};

export default ImageUpload;
