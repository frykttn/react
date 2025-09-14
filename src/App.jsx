import Bienvenidos from "./components/Bienvenidos";
import TeoriaComponente from "./components/TeoriaComponente";
import Contador from "./components/Contador";
function App() {
  //aqui agrego la logica del componente
  const modulo = 2
  return (
    // aqui puedo agregar mas logica
    <main className="container my-5">
      <h1>Hola mundo</h1>
      {/* <Bienvenidos></Bienvenidos> */}
      <Bienvenidos/>
      <TeoriaComponente comision='Web 13' modulo={modulo}/>
      <Contador/>
    </main>
  );
}

export default App;
