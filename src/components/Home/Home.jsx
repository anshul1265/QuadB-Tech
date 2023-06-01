import React, { useEffect, useState } from 'react';
import HomeCard from '../Card/HomeCard';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: '1rem' }}>
      <Row xs={1} md={3} lg={4} className="g-4">
        {cards.map((item) => (
          <Col>
            <HomeCard data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
