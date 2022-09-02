import React from "react";

import { useEffect } from 'react';

import './Card.scss';

interface Props {
  good: Good
}

export const Card: React.FC<Props> = ({ good }) => {

  useEffect(() => {
    
  },[]);

  return (
    <div className="card" data-qa="card">
        <img src={good.Poster} alt="d" className="card__logo"></img>
        <div className="card__title">
            {good.Title}
        </div>
        <div className="card__code">Код товара: {good.imdbID}</div>
        <div className="card__rate">
          <div className={`card__stars stars stars--${Math.round(Number(good.Ratings[0].Value.slice(0, 3)) / 2)}`}>
            <div className="card_star"></div>
            <div className="card_star"></div>
            <div className="card_star"></div>
            <div className="card_star"></div>
            <div className="card_star"></div>
          </div>
          <div className="card__feedback feedback">Отзыв: {good.Ratings[0].Value}</div>
        </div>
        <div className="card__price">
          <div className="card__text text">Цена:</div>
          <div className="card__num num">{good.BoxOffice === 'N/A' || !good.BoxOffice ? '10000$' : good.BoxOffice}</div>
        </div>
        <a href="/" className="card__link link" data-qa="card-hover">Купить</a>
    </div>
  );
}