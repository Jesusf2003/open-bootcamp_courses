import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './../../models/contact.class';
import ContactDetailComponent from '../container/contactF';

export const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h3>Apellidos: {contact.last_name}</h3>
      <h3>Email: {contact.email}</h3>
      <ContactDetailComponent state={true}></ContactDetailComponent>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
