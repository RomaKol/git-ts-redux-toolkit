import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from './SearchForm';
import { useAppDispatch, useAppSelector, usePrevious } from './store/hooks';
import { getRepositories } from './store/gitReducer';

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleTextChange = useCallback((value: string) => {
    // pushQueryParams({ text: value, page: 1 });
    // setCurrentPage(1);
    setText(value);
    dispatch(getRepositories({value, page: '1'}));
  }, [dispatch]);

  // const handlePaginationChange = (page: string) => {
  //   pushQueryParams({ page });
  //   setCurrentPage(page);
  //   getRepositories(text, page);
  // }

  // const handleClear = () => {
  //   clearQueryParams();
  //   clearResults();
  // }

  // useEffect(() => {
  //   text && handleTextChange(text);
  // }, [text])

  return (
    <div className="App">
      <SearchForm
        text={text}
        onSubmit={handleTextChange}
      />
    </div>
  );
}

export default App;
