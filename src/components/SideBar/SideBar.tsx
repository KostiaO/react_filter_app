import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceLess, setRateFull } from '../../store';
import { getIsPriceLessSelector, getIsRatefulSelector } from '../../store/selectors';

import './SideBar.scss';

export const SideBar: React.FC = React.memo(() => {

  const dispatch = useDispatch();

  const isRateful = useSelector(getIsRatefulSelector);

  const isPriceless = useSelector(getIsPriceLessSelector);

  return (
    <div className='sidebar'>
      <div className='sidebar__filter'>
        <label className='sidebar__label'>
          <input 
            type="checkbox"
            checked={isRateful}
            onChange={() => dispatch(setRateFull(!isRateful))}
          />
          <h3>rate higher 7</h3>
        </label>
      </div>

      <div className='sidebar__filter'>
        <label className='sidebar__label'>
          <input 
            type="checkbox" 
            checked={isPriceless}
            onChange={() => dispatch(setPriceLess(!isPriceless))}
          />
          <h3>Price lower 30k</h3>
        </label>
      </div>
    </div>
  );
});