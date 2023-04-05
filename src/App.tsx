import './App.css';
import Layout from './Layout';
import SendParcelPage from './pages/SendParcelPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import TrackingPage from './pages/TrackingPage';
import RecievedPage from './pages/ReceivedPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<SendParcelPage />} />
          <Route path="/track" element={<TrackingPage />} />
          <Route path="/received" element={<RecievedPage />} />
      </Routes>
    </div>
  );
}

