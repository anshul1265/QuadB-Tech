import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Summary from '../Summary/Summary';

const HomeCard = ({ data }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  };
  return (
    <>
      <Card style={{ width: '18rem', display: 'flex' }}>
        <Card.Img variant="top" src={data.show.image.medium} style={{
          resize: 'contain'
        }} />
        <Card.Body>
          <Card.Title>{data.show.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Language: {data.show.language}</ListGroup.Item>
          <ListGroup.Item>Rating: {data.show.rating.average}</ListGroup.Item>
          <ListGroup.Item>Genres: {data.show.genres.join(', ')}</ListGroup.Item>
        </ListGroup>
        <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="dark" onClick={handleShow} style={{ textDecoration: 'none', color: '#fff' }}>
            View Details
          </Button>
          <Button variant='primary'>
            <Link to={`/booking/${data.show.id}`} style={{ textDecoration: 'none', color: '#fff' }}>Book Now</Link>
          </Button>
        </Card.Body>
      </Card>
      <Summary
        link={`${data.show.id}`}
        open={show}
        closeModal={handleClose}
      />
    </>
  )
}

export default HomeCard