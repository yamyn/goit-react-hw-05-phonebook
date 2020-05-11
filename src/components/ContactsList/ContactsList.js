import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { list, item } from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';
import slideTransition from '../../transitions/slide.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <TransitionGroup component="ul" className={list}>
        {contacts.map(({ id, name, number }, index) => (
            <CSSTransition
                key={id}
                timeout={300}
                classNames={slideTransition}
                unmountOnExit
            >
                <li key={id} className={item}>
                    <ContactsListItem
                        index={index + 1}
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
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
