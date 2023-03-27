import React from 'react';
import PT from 'prop-types';
import styles from './Form.module.css';
export default function Form({ getValue }) {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    getValue(contact);
    form.reset();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
Form.propTypes = {
  getValue: PT.func.isRequired,
};
