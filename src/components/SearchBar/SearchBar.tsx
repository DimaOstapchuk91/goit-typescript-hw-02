import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { FC, FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    // const element = form.elements as any;
    // const search = element.searchInput as any;
    // const inputValue: any = search.value;

    const inputValue = (
      form.elements.namedItem('searchInput') as HTMLInputElement
    )?.value;

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
          name='searchInput'
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
