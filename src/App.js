import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import InstLogin from './screens/institutescreen/InstLogin/InstLogin';

function App() {
  return (

<Router>
        <Routes>
                <Route exact path='/' element={<InstLogin />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
