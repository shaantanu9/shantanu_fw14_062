import { Notebook } from './components/Notebook';
import { Book } from './components/Book';
import { Pen } from './components/Pen';
import { Inkpen } from './components/Inkpen';
function App() {
  return (
    <div className='App'>

    <Book item ={"Book"}/>
    <Pen item ={"Pen"}/>
    <Notebook item ={"Notebook"}/>
    <Inkpen item ={"Inkpen"}/>
    <div className="total">1</div>

    </div>
  );
}

export default App;