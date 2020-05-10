import React from 'react';
import PropTypes from 'prop-types';

function ContactsListItem({ name, number, onDeleteContact }) {
    return (
        <>
            <div>{name}</div>
            <div>{number}</div>
            <div>
                <button type="button" onClick={onDeleteContact}>
                    Delete
                </button>
            </div>
        </>
    );
}

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
