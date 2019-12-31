import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const Form = ({ value, onChange, onCreate, onKeyPress }) => (
  <div className="form">
    <textarea value={value} onChange={onChange} onKeyPress={onKeyPress} />
    <button type="button" className="create-button" onClick={onCreate}>
      추가
    </button>
  </div>
);

Form.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onCreate: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default Form;
