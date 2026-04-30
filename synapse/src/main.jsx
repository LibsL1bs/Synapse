import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Homepage/App' //aqui estava importando o App.jsx da raiz, mas agora deve importar o App.jsx da pasta Homepage pra iniciar nela (depois tem que ajeitar pra quando o usuario estiver logado, já ir pra pagina do dashborad (que ainda tem que fazer))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
