import React, { useReducer, useEffect, useRef, useState } from 'react';
import { initialState, reducer } from '../../reducer/list';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Movie from '../../components/Movie';
import { getData } from '../../api';
import Loading from '../../assets/ajax-loader.gif';
import './index.css';

const defaultParams = 'man';

export default function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState('');
  const [count, setCount] = useState(2);
  const myRef = useRef(null);
  useEffect(() => {
    document.title = 'React Hooks';
    get(defaultParams);
  }, []);
  const search = value => {
    dispatch({ type: 'SEARCH_MOVIES' });
    setSearchValue(value);
    get(value);
  };
  const get = (param, page = 1) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUSET'
    });
    getData(param, page).then(reponse => {
      if (reponse.data.Response === 'True') {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: reponse.data.Search
        });
      } else {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: reponse.data.Error
        });
      }
    });
  };
  const handleLoadMore = () => {
    setCount(count + 1);
    get(defaultParams || searchValue, count);
  };
  const handleClick = imdbID => {
    console.log(imdbID);
    props.history.push({
      pathname: '/detail',
      state: {
        imdbID: imdbID
      }
    });
  };
  const { movies, loading, errorMessage } = state;
  return (
    <div style={{ background: '#fff' }}>
      <Header text="React Hooks" />
      <Search search={search} />
      <p className="intro">
        Sharing a few of our favourite movies {searchValue}
      </p>
      <div className="movie__box" ref={myRef}>
        {movies.map(movie => (
          <Movie handleClick={handleClick} key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="movie__box">
        {!loading && !errorMessage && movies.length >= 8 && (
          <button className="load__more" onClick={handleLoadMore}>
            Load more
          </button>
        )}
        {loading && !errorMessage && (
          <img className="loading" src={Loading} alt="Loading spinner" />
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
}
