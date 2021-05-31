import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';

import ContactListItem from './ContactListItem';

class ContactList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getContacts: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.filteredContacts.map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} id={id} key={id} />
        ))}
      </ul>
    );
  }
}

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: filterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
