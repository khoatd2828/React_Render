import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BodyComponent } from './BaiTapThucHanhLayout/BodyComponent'
import { HeaderComponent } from './BaiTapThucHanhLayout/HeaderComponent'
import { FooterComponent } from './BaiTapThucHanhLayout/FooterComponent'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>
  )
}

export default App
