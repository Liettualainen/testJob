import React from 'react';
import PropTypes from 'prop-types';


function ButtonLoadMore({ onClick, disabled }) {
  //const hidden = { display: disabled ? "none" : "inherited" };
  return (
    <button type="button" onClick={onClick}  className="Button" style={ { display: disabled ? "none" : "inherited" } }>
      Loadmore
    </button>
  );
}

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};