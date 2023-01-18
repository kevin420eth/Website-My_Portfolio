import './App.css';
import {Header, Home, About, Skill} from './components/index'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skill />
      </main>
    </div>
  );
}

export default App;
