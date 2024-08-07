import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS
import { router } from './routes';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durabilidade da animação
      easing: 'ease-in-out', // Efeito de transição
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
