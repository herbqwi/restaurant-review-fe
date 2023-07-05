import './image-editor.css'
import React, { useRef } from 'react';
import Button from '../../common/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  controller: { value: string | null, set: React.Dispatch<React.SetStateAction<string | null>> }
}

const ImageEditor = ({ controller }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        controller.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(controller.value != undefined);

  return (
    <div className="image-editor">
      <div className="image-container">
        <div className="image-wrapper">
          {controller.value != undefined ? <img src={controller.value} alt="Profile Image" /> : <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512" fill="none">
            <g clip-path="url(#clip0_1765_7055)">
              <path d="M0 0H512V512H0V0Z" fill="#222D3A" />
              <path d="M330.085 110.955C311.299 90.672 285.059 79.5024 256.097 79.5024C226.981 79.5024 200.655 90.6044 181.955 110.762C163.053 131.141 153.843 158.838 156.005 188.746C160.292 247.751 205.192 295.75 256.097 295.75C307.003 295.75 351.826 247.76 356.18 188.765C358.371 159.128 349.103 131.489 330.085 110.955Z" fill="#B3BAC0" />
              <path d="M53.9275 511.997H458.333C459 503 458.206 483.499 456.333 473.141C448.185 427.941 422.757 389.972 382.789 363.327C347.282 339.675 302.305 326.642 256.13 326.642C209.956 326.642 164.978 339.666 129.471 363.327C89.5038 389.982 64.0754 427.951 55.9275 473.15C54.0546 483.509 53.5001 504.5 53.9275 511.997Z" fill="#B3BAC0" />
            </g>
            <defs>
              <clipPath id="clip0_1765_7055">
                <rect width="512" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>}
        </div>
      </div>
      <div className="actions">
        <Button type="button" onClick={() => { fileInputRef.current?.click(); }}>تعديل الصورة</Button>
        <Button type="button" onClick={() => { controller.set(null) }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageEditor;
