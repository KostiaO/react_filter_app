import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, setQuery } from "../../store";
import { getQuerySelector } from "../../store/selectors";

import './Header.scss';

export const Header: React.FC = React.memo(() => {

  const dispatch = useDispatch<AppDispatch>();

  const query = useSelector(getQuerySelector);

  return (
    <header className="header">
      <input 
        type="text" 
        className="header__search" 
        value={query}
        onChange={({ target }) => dispatch(setQuery(target.value))}
      />
      <h1>Filter by name</h1>
    </header>
  );
});