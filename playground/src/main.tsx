import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderHours from './index/headhours.tsx'
import NavBar from './index/navbar.tsx'
import MainLanding from './index/mainLanding.tsx'
import Cards from './index/cards.tsx'
import Products from './index/producs.tsx'
import About from './index/about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col justify-center items-center max-w-screen w-full overflow-x-hidden">
    <HeaderHours />
    <NavBar />
    <MainLanding />
    <Cards />
    <Products />
    <About />
    </div>
  </StrictMode>,
)
