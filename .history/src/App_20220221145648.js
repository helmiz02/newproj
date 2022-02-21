
import { Divider } from '@mui/material';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Videos from './component/videos';

function App() {
  return (
    <div style={{width:"100%"}}>
     <Header />
     <Divider />
     <Videos />
     <Footer />
    </div>
  );
}

export default App;
