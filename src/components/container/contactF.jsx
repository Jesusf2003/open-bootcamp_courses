import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactDetailComponent(state) {

  const [connected, setConnected] = useState(state);

  return(
    <div>
      <h3> {connected === false ? 'Contacto no disponible' : 'Contacto en línea' } </h3>
      <button onClick={ () => setConnected(!connected) }>
        {connected === false ? 'Conectado' : 'Desconectado'}
      </button>
    </div>
  );
}

ContactDetailComponent.propTypes = {
  state: PropTypes.bool
}

export default ContactDetailComponent;
