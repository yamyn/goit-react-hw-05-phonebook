import React from 'react';
import PropTypes from 'prop-types';

import { list, item } from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul className={list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={item}>
                <ContactsListItem
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                />
            </li>
        ))}
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
