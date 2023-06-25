import React, { useEffect, useState } from 'react';

const ImageUpload = () => {
  const [base64Image, setBase64Image] = useState('');

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader: any = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {base64Image && <img src={base64Image} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
