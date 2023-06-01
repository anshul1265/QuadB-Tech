import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Booking.css';
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [name, setName] = useState('abc');
  const [email, setEmail] = useState('abc@email.com');
  const [phone, setPhone] = useState('1234567890');
  const [numOfPeople, setNumOfPeople] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowData(response.data);
        setMovieName(response.data.name); // Set the default value for movieName
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchShowData();
  }, [id]);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if the number of bookings in localStorage is less than 5
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Save form data to localStorage
    const formData = {
      movieName,
      name,
      email,
      phone,
      numOfPeople,
    };

    await localStorage.setItem("bookings", JSON.stringify([...bookings, formData]));

    navigate("/bookingSuccess");
  };



  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='booking__container'>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control type="text" value={movieName} readOnly />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Number of People</Form.Label>
          <Form.Control type="number" placeholder={numOfPeople} onChange={(e) => setNumOfPeople(parseInt(e.target.value))} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book
        </Button>
      </Form>
    </div>
  );
};

export default Booking;
