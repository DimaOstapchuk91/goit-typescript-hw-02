import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchArticles } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [dataImage, setDataImage] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [getErr, setGetErr] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    const getData = async () => {
      try {
        setGetErr(false);
        setIsLoader(true);
        const data = await fetchArticles(page, searchValue);
        setDataImage(prev => [...prev, ...data.results]);
        setMaxPage(data.total_pages);
        if (data.total_pages === 0) {
          getNotFaundData();
        }
      } catch {
        setGetErr(true);
      } finally {
        setIsLoader(false);
      }
    };
    getData();
  }, [page, searchValue]);

  function openModal(imgUrl) {
    setImageModal(imgUrl);
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const getNotFaundData = () => {
    return toast('The data for your request was not found', {
      icon: '😥',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const getSubmitValue = value => {
    setSearchValue(value);
    setDataImage([]);
    setPage(1);
  };

  const getLoadMoreImg = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={getSubmitValue} />
      {isLoader && <Loader />}
      {dataImage.length > 0 && (
        <ImageGallery dataImage={dataImage} openModal={openModal} />
      )}
      {dataImage.length > 0 && maxPage > page && (
        <LoadMoreBtn loadMore={getLoadMoreImg} />
      )}
      {getErr && <ErrorMessage />}
      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        imageModal={imageModal}
      />
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}

export default App;
