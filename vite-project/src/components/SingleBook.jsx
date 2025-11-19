import { Card, Col } from "react-bootstrap";

function SingleBook (props) {

    console.log('SINGLE BOOK', props);
    

    return( 
        <Col xs={12} sm={6} md={4} lg={4}>
        <Card key={props.book.id}  className="bg-primary shadow mb-3 me-2 h-100 w-75">
        <Card.Img variant='top' src={props.book.img} />
        <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    )
}

export default SingleBook