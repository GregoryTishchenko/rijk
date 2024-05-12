import { useState } from 'react';

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
        <input
          type="text"
          data-testid="search-input"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
