import logo from './logo.svg';
import './App.css';
import Testimonio from './componente/Testimonio.jsx'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dice nuestros alumnos sobre freeCodecamp:</h1>
      <Testimonio nombre='Shawn' pais='Suecia' imagen='shawn' cargo='Ingeniera de amazon' empresa='Amazon' testimonio='loreMinim dolore do laborum cillum reprehenderit sit nisi aute Lorem eiusmod nulla consectetur. Lorem officia fugiat ut commodo sit labore dolor nisi ullamco eu. Adipisicing et aliqua qui enim occaecat tempor. Sunt aute mollit sint adipisicing proident irure consequat et incididunt enim. Do eiusmod consequat cupidatat irure anim pariatur sunt. Irure ullamco nulla nostrud enim aliqua commodo culpa.'/>
    <Testimonio nombre='Emma bostion' pais='Suecia' imagen='emma' cargo='Ingeniera de software' empresa='Spotify' testimonio='loreMinim dolore do laborum cillum reprehenderit sit nisi aute Lorem eiusmod nulla consectetur. Lorem officia fugiat ut commodo sit labore dolor nisi ullamco eu. Adipisicing et aliqua qui enim occaecat tempor. Sunt aute mollit sint adipisicing proident irure consequat et incididunt enim. Do eiusmod consequat cupidatat irure anim pariatur sunt. Irure ullamco nulla nostrud enim aliqua commodo culpa.'/>
    <Testimonio nombre='Sarah ' pais='Suecia' imagen='sarah' cargo='Ingeniera de software' empresa='Spotify' testimonio='loreMinim dolore do laborum cillum reprehenderit sit nisi aute Lorem eiusmod nulla consectetur. Lorem officia fugiat ut commodo sit labore dolor nisi ullamco eu. Adipisicing et aliqua qui enim occaecat tempor. Sunt aute mollit sint adipisicing proident irure consequat et incididunt enim. Do eiusmod consequat cupidatat irure anim pariatur sunt. Irure ullamco nulla nostrud enim aliqua commodo culpa.'/>

    </div>
    </div>
  );
}

export default App;
