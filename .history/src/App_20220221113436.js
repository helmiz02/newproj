
import { Divider } from '@mui/material';
import './App.css';
import Header from './component/header';
import Videos from './component/videos';
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <div >
     <Header />
     <Divider />
     <Videos />
    </div>
  );
}

export default App;
