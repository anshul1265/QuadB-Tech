import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Summary = ({
  link,
  open,
  closeModal
}) => {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${link}`);
        setShowData(response.data);
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchShowData();
  }, [link]);

  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <Modal show={open} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{showData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{showData.summary}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModal}>
          <Link to={`/booking/${link}`} style={{ color: '#fff', textDecoration: 'none' }}>Book Now</Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Summary;
