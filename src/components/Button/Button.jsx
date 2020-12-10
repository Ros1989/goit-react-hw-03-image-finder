import React from 'react';
import propTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={() => onLoadMore()}>
      load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: propTypes.func,
};
