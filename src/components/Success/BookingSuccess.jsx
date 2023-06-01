import React from 'react'
import { Link } from 'react-router-dom'

const BookingSuccess = () => {
  return (
    <div>

      <h1 style={{ textAlign: 'center', justifyContent: "center", marginTop: '5%' }}>Booking Successfull</h1>

      <p style={{ textAlign: 'center', justifyContent: "center", marginTop: '2%' }}><Link to="/" style={{ textDecoration: 'none' }}>Go to Home</Link></p>
    </div>
  )
}

export default BookingSuccess