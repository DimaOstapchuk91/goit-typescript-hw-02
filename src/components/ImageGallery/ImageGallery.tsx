import s from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';
import { ApiImage, ModalOpenData } from '../../types';
import { FC } from 'react';

interface ImageGalleryProps {
  dataImage: ApiImage[];
  openModal: (imgUrl: ModalOpenData) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ dataImage, openModal }) => {
  return (
    <ul className={s.galaryList}>
      {dataImage.map((item: ApiImage) => (
        <ImageCard key={item.id} dataImage={item} openModal={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
