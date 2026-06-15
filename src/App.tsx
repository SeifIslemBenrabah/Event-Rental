import { useState } from 'react';
import AppRoutes from './routes/AppRoutes.tsx'
import LoadingScreen from './components/layout/LoadingScreen.tsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <AppRoutes />
    </>
  );
}

export default App
