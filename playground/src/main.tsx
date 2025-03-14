import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderHours from './index/headhours.tsx'
import NavBar from './index/navbar.tsx'
import MainLanding from './index/mainLanding.tsx'
import Cards from './index/cards.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col justify-center align-center">
    <HeaderHours/>
    <NavBar />
    <MainLanding />
    <Cards />
    </div>
  </StrictMode>,
)
