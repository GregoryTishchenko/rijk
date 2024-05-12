import { useEffect, useState } from 'react';
import ApiService from './Api/ApiService';
import { useFetch } from './hooks/useFetch';

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

  console.log(items);
  return <div className="App">Init</div>;
}

export default App;
