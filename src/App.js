import './App.css';
import Header from './components/header/Header';
import Slider from './components/container/slider/Slider';
import Conteiner from './components/container/Container';




function App() {
  return (
    <div className="App">
      <Header/>
      <Conteiner/>
      <h1>Автоматический Слайдер в React</h1>
      <Slider />
    </div>
  );
}

export default App;
