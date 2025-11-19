import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {

    state = {
        selected : false
    }

    render(props){

    return( 
        <Col xs={12} sm={6} md={4} lg={4}>
        <Card key={this.props.book.id} className="bg-primary shadow mb-3 me-2 h-100 w-75">
        <Card.Img variant='top' src={this.props.book.img} />
        <Card.Body>
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>
            
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    )
    }
}

export default SingleBook