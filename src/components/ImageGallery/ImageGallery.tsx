import s from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ dataImage, openModal }) => {
  return (
    <ul className={s.galaryList}>
      {dataImage.map(item => (
        <ImageCard key={item.id} dataImage={item} openModal={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
