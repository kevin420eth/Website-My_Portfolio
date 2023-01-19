import './App.css';
import {Header, Home, About, Skill, Service, Qualification, Testimonial, Contact, Footer} from './components/index'

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
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
