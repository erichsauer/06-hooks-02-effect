import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  pageNumber,
  perPage,
  onPerPageChange,
  onPageNumberChange,
}) => {
  return (
    <>
      <button
        onClick={() => onPageNumberChange('back')}
        disabled={pageNumber === 1}
      >
        Previous
      </button>
      <button
        onClick={() => onPageNumberChange('next')}
        disabled={pageNumber >= 497 / perPage}
      >
        Next
      </button>
      <select name="perPage" value={perPage} onChange={onPerPageChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </>
  );
};

Controls.propTypes = {};

export default Controls;
