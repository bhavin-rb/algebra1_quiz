import { Routes, Route} from 'react-router-dom';
import Intro from './components/Intro';
import Question from './components/Question';
import './App.css';


function App() {
 

  return (
    
    
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/quiz" element={<Question />} />
        {/* <Route path="/quiz" element={<Question score={this.state.scores} />} /> */}

      </Routes>
   
  );
}

export default App;
