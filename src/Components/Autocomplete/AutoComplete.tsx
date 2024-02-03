// AutocompleteMain.tsx
import { useState, useEffect } from 'react';
import InputItem from '../Input/Input';
import Results from '../Results/Results';
import ErrorMessage from '../Error/ErrorMessage';
import useDebounce from '../../Custom Hooks/Debounce';
import { Country } from '../../Interfaces/Country.interface';
const AutocompleteMain = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 300); //Delay API query by 300ms

  useEffect(() => {
    //Fetch data & update state ...
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data: Country[] = await response.json();

        const filteredResults = data.filter((country) => //filter based on debounced query
          country.name.common.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        //set filtered results
        setResults(filteredResults);
        setError(null); //reset error
      } catch (err) {
        setResults([]);
        setError('Error fetching data from the API');
      }
    };

    if (debouncedQuery.trim() !== '') {  //is query blank or empty?
      fetchData();
    } else {
      setResults([]);
      setError(null);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <InputItem value={query} onChange={(value) => setQuery(value)} />
      <ErrorMessage error={error} />
      {results.length > 0 && <Results results={results} query={debouncedQuery} />}
      {results.length === 0 && !error && debouncedQuery.trim() !== '' && <div>Country not found</div>}
    </div>
  );
};

export default AutocompleteMain;
