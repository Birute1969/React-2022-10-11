import { Greeting } from './Greeting/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Greeting isLoggedIn={true} unreadMessages={[1, 1, 1]} />
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
}

export default App;
