import { useEffect, useState } from 'react';
import ApiService from './Api/ApiService';
import { useFetch } from './hooks/useFetch';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Button from './components/UI/button/Button';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const [fetchItems, isLoading, error] = useFetch(async (query, page) => {
    const response = await ApiService.getCollection(query, page);
    setItems([...items, ...response.data.artObjects]);
  });

  useEffect(() => {
    fetchItems(query, page);
  }, [query, page]);

  const handleLoadMore = () => {
    // prevent click if the state is loading
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearchQuery = (value) => {
    if (value !== query) {
      setQuery(value);
      setPage(1);
      setItems([]);
    }
  };

  return (
    <>
      <Header />
      <SearchForm formSubmit={handleSearchQuery} />

      <section className="content artsObjects">
        {error && <p>Error: {error}</p>}

        {!error && (
          <Button onClick={handleLoadMore} data-testid="load-more-button">
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        )}
      </section>

      <footer>
        <p>by Grégory TISHCHENKO for Worklife</p>
      </footer>
    </>
  );
}

export default App;
