import React, {useState, useRef, useEffect} from 'react';

const Example2 = () => {

  // Se crearán dos contadores distintos
  // Cada uno con un estado diferente
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Creando una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente(vista HTML)
  const myRef = useRef();

  function incrementer1() {
    setCounter1(counter1 + 1)
  }

  function incrementer2() {
    setCounter2(counter2 + 1)
  }

  /*
    Trabajando con useEffect()
  */
  /*
    ? Caso 1: Ejecutar SIEMPRE un snippet de código
    Cada vez que haya un cambio en el estado del componente
    se ejecuta aquello que esté dentro del useEffect()
  */
  // useEffect(
  //   () => {
  //     console.log("Cambio en el estado del componente");
  //     console.log("Mostrando referencia a elemento del DOM:");
  //     console.log(myRef);
  //   }
  // );

  /*
    ? CASO 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
    Cada vez que haya un cambio en contador 1, se ejecuta lo qu diga el useEffect()
    En caso de que cambie contador 2, no hará ejecución.
  */

    useEffect(
      () => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(myRef);
      },
      [
        counter1,
        counter2
      ]
    );

  return(
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>Contador 1: {counter1}</h2>
      <h2>Contador 2: {counter2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={myRef}>
        Ejemplo de elemento referenciado
      </h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={() => incrementer1()}>Incrementar contador 1</button>
        <button onClick={() => incrementer2()}>Incrementar contador 2</button>
      </div>
    </div>
  );
}

export default Example2;
