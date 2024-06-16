import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import CounterFunctionalComponent from './component/CounterFunctionalComponent';

function App() {
  return (
    <div>
      <Header></Header>
      <CounterFunctionalComponent></CounterFunctionalComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
