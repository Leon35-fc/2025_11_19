import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {

    state = {
        selected : false
    }

    handleClick () {
        if(this.setState()){
            this.state = 'border border-warning'
        } else {''}
    }

    render(props){

    return( 
        <Col xs={12} sm={6} md={4} lg={4}>
        <Card key={props.book.id}  onClick={this.state} className="bg-primary shadow mb-3 me-2 h-100 w-75 {value}">
        <Card.Img variant='top' src={props.book.img} />
        <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
        Book description
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    )
    }
}

export default SingleBook