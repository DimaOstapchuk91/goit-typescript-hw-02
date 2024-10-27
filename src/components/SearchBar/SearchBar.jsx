import toast from 'react-hot-toast';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.elements.serchInput.value;
    if (!inputValue) {
      return toast('Text must be entered to search for images!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    onSubmit(inputValue);
  };
  return (
    <header className={s.searchWrap}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          name='serchInput'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button className={s.searchBtn} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
