import './index.css'
import Header from './Components/Header'
import Routes from './Routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export  default function App(){



  return <>
    <Header />
    <Routes/>
    <ToastContainer />
  </>
}

