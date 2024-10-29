import { FC } from 'react';
import s from './ImageCard.module.css';
import { ApiImage, modalOpenData } from '../../types';

interface ImageCardProps {
  dataImage: ApiImage;
  openModal: (imgUrl: modalOpenData) => void;
}

const ImageCard: FC<ImageCardProps> = ({ dataImage, openModal }) => {
  const { urls, description, likes } = dataImage;

  return (
    <li>
      <div>
        <img
          className={s.imgGalary}
          onClick={() => openModal({ url: urls.full, name: description })}
          src={urls.small}
          alt={description}
        />
      </div>
      <div className={s.likesBox}>
        <p>Likes: {likes} </p>
      </div>
    </li>
  );
};
export default ImageCard;
