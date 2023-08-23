import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Insert from './components/insert';
import Delete from './components/delete';
import Display from './components/view';
import Update from './components/update'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Insert/>}/>
        <Route path="/deleteUser" element={<Delete/>}/>
        <Route path="/displayAllUser" element={<Display/>}/>
        <Route path="/updateUser" element={<Update/>}/>

      </Routes>
    </div>
  );
}

export default App;
