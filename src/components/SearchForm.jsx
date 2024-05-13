import { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const SearchForm = ({ formSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(value);
  };

  return (
    <section className="searchForm content">
      <h1>
        Dive into a world of <span>visual storytelling</span>
      </h1>
      <form data-testid="search-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          data-testid="search-input"
          value={value}
          aria-label="Search"
          onChange={handleInputChange}
        />
        <Button type="submit" title="Search" aria-label="Search">
          Search
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;
