import React from 'react';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onClick={onClick}
            id={id}
          />
        );
      })}
    </ul>
  );
};

const filterContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
