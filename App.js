import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import { Provider } from 'react-redux';
import {store} from './State/store';

function App() {
  return (
  <>  
  <Provider store={store}>
    <Navbar/>
    <div className="container">
      <Shop/>
    </div>
  </Provider>
  </>
  );
}

export default App;
