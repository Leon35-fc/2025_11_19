import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNavbar from './components/TopNavBar'
import BottomFooter from './components/BottomFooter'
import AllTheBooks from './components/AllTheBooks'
import { Container, Row } from 'react-bootstrap'
import SingleBook from './components/SingleBook'
import library from './data/fantasy.json'
import BookList from './components/BookList'

function App() {

  return (
    <>
      <TopNavbar/>
      <Container className='bg-primary-subtle'>
        <Row>
          <h1 className="text-center my-3">I migliori libri <span className='text-danger'>{library[0].category}</span> del web!</h1>
            <Row className="d-flex flex-wrap justify-content-center"></Row>
        {/* <AllTheBooks/> */}
          {/* <SingleBook bookList={library}/> */}
          <BookList bookList={library}/>
        </Row>
      </Container>
      <BottomFooter/>
    </>
  )
}

export default App