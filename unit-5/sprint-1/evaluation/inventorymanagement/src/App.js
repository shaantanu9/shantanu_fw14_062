import { Notebook } from './components/Notebook';
import { Book } from './components/Book';
import { Pen } from './components/Pen';
import { Inkpen } from './components/Inkpen';
function App() {
  return (
    <div className='App'>

    <Book item ={"Book"}/>
    <Pen item ={"Pen"}/>
    <Notebook item ={"NoteBook"}/>
    <Inkpen item ={"InkPen"}/>

    </div>
  );
}

export default App;