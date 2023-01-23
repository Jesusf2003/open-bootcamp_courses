import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task-list';
import ContactComponent from './components/pure/contact';

function App() {

  const contactTest = {
    name: 'Fernando',
    last_name: 'Canales',
    email: 'fc@correo.com',
    connected: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <GreetingF name={"Martín"}></GreetingF> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Martín"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactComponent contact={contactTest}></ContactComponent>
      </header>
    </div>
  );
}

export default App;
