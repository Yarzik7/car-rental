import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './styles/variables.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter basename="/car-rental/">
    <App />
  </BrowserRouter>
  // </StrictMode>
);
