import React, { useState } from 'react';

const ExampleComponent = () => {

  const initialValue = 0;
  const initialPerson = {
    name: 'Fernando',
    email: 'fcr@email.com'
  };

  /*
    El Valor inicial y persona inicial son parte del estado
    del componente para así poder gestionar su cambio y
    que éste se vea reflejado en la vista del componente.

    const [variable, function] = useState(value)
  */
  const [count, setCount] = useState(initialValue);
  const [person, setPerson] = useState(initialPerson);

  /*
    Función para actualizar el estado privado que contiene
    el contador.
  */
  function incrementCounter() {
    // function to Change(newValue)
    setCount(count + 1);
  }

  /*
    Función para actualizar el estado de persona en el
    componente
  */
  function updatePerson(name) {
    setPerson(
      {
        name: name,
        email: name + '@gmail.com'
      }
    );
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>Contador: {count}</h2>
      <h2>Datos de la persona: </h2>
      <h3>Nombre: {person.name}</h3>
      <h4>Email: {person.email}</h4>
      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={() => incrementCounter()}>Incrementar contador</button>
      <button onClick={() => updatePerson(person.name)}>Actualizar persona</button>
    </div>
  );
}

export default ExampleComponent;
