import ReactDOM from 'react-dom/client';
import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { About } from './components/4_pages/About';
import { NotFound } from './components/4_pages/error/NotFound';
import { ApiDocs } from './components/4_pages/ApiDocs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 参考: https://reffect.co.jp/react/react-router-6#Not_Found_Routes
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/api/docs" element={<ApiDocs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
