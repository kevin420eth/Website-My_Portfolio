import './App.css';
import {Header, Home, About, Skill, Service, Qualification, Contact, Footer, Scrollup} from './components/index'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
