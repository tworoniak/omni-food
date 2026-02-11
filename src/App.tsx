import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
