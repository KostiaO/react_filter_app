import React, { useEffect } from 'react';
import './CardCatalog.scss';

import { Card } from '../Card/Card';

import { AppDispatch, setGoods } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsSelector, getIsPriceLessSelector, getIsRatefulSelector, getLoadingSelector, getQuerySelector } from '../../store/selectors';
import { BallTriangle } from 'react-loader-spinner';

export const CardCatalog: React.FC = () => {

  const isPriceless = useSelector(getIsPriceLessSelector);

  const isRatefull = useSelector(getIsRatefulSelector);

  const otherFilters = (goodsToFilt: Good[]) => {
    let resultArr = [ ...goodsToFilt ];


    if (isRatefull) {
      resultArr = resultArr.filter(good => Number(good.Ratings[0].Value.slice(0, 3)) > 7);
    }

    if (isPriceless) {
      resultArr = resultArr.filter((good) => {
        if (good.BoxOffice === 'N/A' || !good.BoxOffice) {
          return true;
        } else {
          return Number(good.BoxOffice.slice(1, good.BoxOffice.length)) <= 30000;
        }
      })
    }

    return resultArr;
  }

  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(getLoadingSelector);

  const goods: Good[] = useSelector(getGoodsSelector);

  const queryToFilter = useSelector(getQuerySelector);

  useEffect(() => {
    console.log('dispatched');
    
    dispatch(setGoods());
  }, []);

  console.log(loading);

  console.log(goods);
  if (loading) {
    return (
      <div className='loader'>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#00acdc"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    )
  }

  const filteredGoods = goods.filter(good => good.Title.toLowerCase().includes(queryToFilter.toLowerCase()));

  const filteredGoodsByOther = otherFilters(filteredGoods) || [ ...filteredGoods ];

  return (
    <div className='catalog'>
      {filteredGoodsByOther.map((good: Good) => (
        <Card 
          good={good}
        />
      ))}
    </div>
  )
};