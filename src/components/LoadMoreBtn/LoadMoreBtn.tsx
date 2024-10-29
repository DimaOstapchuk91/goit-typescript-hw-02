import { FC } from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  const handleLoadMore = () => {
    loadMore();
  };
  return (
    <div className={s.buttonBox}>
      <button className={s.loadBtn} onClick={handleLoadMore} type='button'>
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
