import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
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
