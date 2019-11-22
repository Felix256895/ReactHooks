import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../../reducer/detail';
import { getCurrData } from '../../api';
import Header from '../../components/Header';
import Loading from '../../assets/ajax-loader.gif';
import './index.css';

export default function Detail(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const imdbID = props.location.state.imdbID;
  useEffect(() => {
    document.title = 'detail';
    get(imdbID);
  }, []);
  const get = imdbID => {
    dispatch({
      type: 'REQUSET'
    });
    getCurrData(imdbID).then(reponse => {
      if (reponse.data.Response === 'True') {
        dispatch({
          type: 'SUCCESS',
          payload: reponse.data
        });
      } else {
        dispatch({
          type: 'FAILURE',
          error: reponse.data.Error
        });
      }
    });
  };
  const {
    loading,
    errorMessage,
    details: {
      Title,
      Year,
      Poster,
      Director,
      Writer,
      Actors,
      Type,
      Country,
      Language,
      Released,
      Runtime,
      Plot
    }
  } = state;

  return (
    <div className="detail" style={{ background: '#fff' }}>
      <Header text="Detail" />
      <div className="detail__box">
        {loading && !errorMessage ? (
          <img className="loading" src={Loading} alt="Loading spinner" />
        ) : errorMessage ? (
          <div className="error">{errorMessage}</div>
        ) : (
          <div className="detail__content">
            <h2 className="detail__title__label">{Title}</h2>
            <h3 className="detail__title__time">{Year}</h3>
            <div className="detail__content__text">
              <div className="detail__content__img">
                <img src={Poster} alt={`The Movie Title ${Title}`} />
              </div>
              <div className="detail__content__introduce">
                <div className="introduce__item">
                  Director:
                  <span className="introduce__description">{Director}</span>
                </div>
                <div className="introduce__item">
                  Screenwriter:
                  <span className="introduce__description">{Writer}</span>
                </div>
                <div className="introduce__item">
                  Starring:
                  <span className="introduce__description">{Actors}</span>
                </div>
                <div className="introduce__item">
                  Type: <span className="introduce__description">{Type}</span>
                </div>
                <div className="introduce__item">
                  Country:
                  <span className="introduce__description">{Country}</span>
                </div>
                <div className="introduce__item">
                  Language:
                  <span className="introduce__description">{Language}</span>
                </div>
                <div className="introduce__item">
                  Release date:
                  <span className="introduce__description">{Released}</span>
                </div>
                <div className="introduce__item">
                  Length:
                  <span className="introduce__description">{Runtime}</span>
                </div>
              </div>
            </div>
            <div className="detail__plot">
              Plot: <span className="introduce__description">{Plot}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
