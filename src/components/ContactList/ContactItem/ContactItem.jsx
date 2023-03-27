import React from 'react';
import PT from 'prop-types';
import s from './ContactItem.module.css';
export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}{' '}
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PT.string.isRequired,
  name: PT.string.isRequired,
  number: PT.string.isRequired,
  onDelete: PT.func.isRequired,
};
