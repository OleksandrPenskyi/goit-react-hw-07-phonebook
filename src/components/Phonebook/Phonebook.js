import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../Loader';
import { contactsSelectors } from '../../redux/contacts';

import Error from '../Error';

import styles from './Phonebook.module.css';

const Phonebook = ({ title, children, isLoading, error }) => (
  <section className={styles.Wrapper}>
    <h1>{title}</h1>
    {isLoading && <Loading />}

    {children}
    {error && <Error />}
  </section>
);

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
  error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(Phonebook);

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
