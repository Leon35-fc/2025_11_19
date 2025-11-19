import { Container, Row, Col, Card } from 'react-bootstrap'
import { Component } from 'react'
import library from '../data/fantasy.json'

class AllTheBooks extends Component {

    render() {
        return(
            <Container className='bg-primary-subtle'>
                <Row>
                <h1 className="text-center my-3">I migliori libri <span className='text-danger'>{library[0].category}</span> del web!</h1>
                    <Row className="d-flex flex-wrap justify-content-center">
                        { library.map((book) => {
                            return(
                            <Card key={book.id} xs={12} sm={6} md={4} lg={3} className="bg-primary shadow mb-4 me-4 w-25">
                                <Card.Img variant='book' src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            )
                            })
                        }
                    </Row>
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks