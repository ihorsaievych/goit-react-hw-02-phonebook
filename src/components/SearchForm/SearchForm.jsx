import React from 'react';
import PT from 'prop-types';
export default function SearchForm({ value, onChangeValue }) {
  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    onChangeValue(value);
  };
  return (
    <form>
      <label>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Search"
        />
      </label>
    </form>
  );
}
SearchForm.propTypes = {
  value: PT.string.isRequired,
  onChangeValue: PT.func.isRequired,
};
