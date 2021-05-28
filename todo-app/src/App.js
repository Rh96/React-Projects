// Bootstrap Library
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Container fluid style={{ padding: 0, margin: 0 }}>
      <Header />
      <Footer />
    </Container>
  );
}

export default App;
