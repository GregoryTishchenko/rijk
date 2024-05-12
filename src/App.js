import { useEffect, useState } from 'react';
import ApiService from './Api/ApiService';
import { useFetch } from './hooks/useFetch';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

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

  return (
    <>
      <Header />
      <SearchForm />
    </>
  );
}

export default App;
