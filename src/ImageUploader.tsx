import React from 'react';
import storage from './firebase';
import { ref, uploadBytes } from 'firebase/storage';

const ImageUploader = () => {
  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const storageRef = ref(storage, `image/${file.name}`);
    const uplaodedFile = await uploadBytes(storageRef, file);
    console.log(uplaodedFile);
  };
  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input
          className="imageUploadInput"
          multiple
          name="imageURL"
          type="file"
          accept=".png,.jpeg,.jpg"
          onChange={uploadFile}
        />
      </div>
      <p>または</p>
      <button>
        ファイルを選択
        <input
          className="imageUploadInput"
          type="file"
          onChange={uploadFile}
          accept=".png,.jpeg,.jpg"
        />
      </button>
    </div>
  );
};

export default ImageUploader;
