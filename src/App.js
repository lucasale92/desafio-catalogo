import './App.css'
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const onAdd = (count) =>{
    alert(`Agregaste ${count} productos`)
  }
  return (
    <div className="App">
        <h1> Pastas Lau Estilo Casero</h1>
      <NavBar />
      <ItemListContainer greeting={'Hola! Bienvenido a mi página'} />
      <ItemCount inicial ={1} max ={10} onAdd={onAdd} />
    </div>
  );
}

export default App;
