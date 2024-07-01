/*
  Ejemplo Hooks:
  - useState()
  - useContext()
*/
import React, {useState, useContext} from 'react';

/*
  @returns Excample 3
  Dispone de un contexto que va a tener un valor que recibe desde el padre
*/
const Component1 = () => {

  // Inicializamos un contexto vacío que va a rellenarse con
  // los datos del contexto del padre
  const state = React.createContext(null);

  return(
    <div>
      <h1>
        El Token es: {state.token}
      </h1>
      {/* Pintamos el componente 2 */}
      <Component2></Component2>
    </div>
  );
}

const Component2 = () => {

  const state = useContext();

  return(
    <div>
      <h2>
        La sesión es: {state.sesion}
      </h2>
    </div>
  );
}

export default function ComponentWithContext() {

  const initialState = {
    token: '1234567',
    sesion: 1
  }

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(initialState);

  function updateSession() {
  }

  return(
    <div>
    </div>
  );
}
