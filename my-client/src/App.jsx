import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/Navigation/Navigation'
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  )
}

export default App
