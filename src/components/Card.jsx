import React, { useContext } from 'react'
import "./Card.css"
import { TravelDataContext } from '../context/context'

const Card = ({title, theme, destination, createdAt, content, rating}) => {
  return (
    <div className="card-wrapper">
      <div className="journal-card">
        <div className="card-header">
          <span className="location-pin">📍</span>
          <span className="destination">{destination} / {theme}</span>
        </div>

        <h2 className="card-title">{title}</h2>

        <div className="card-sub-info">
          <span className="card-date">{createdAt}</span>
          <div className="card-rating">
            <span className="stars">{"★".repeat(rating || 0)}</span>
            <span className="score">{rating ? `${rating}.0` : "0.0"}</span>
          </div>
        </div>

        <p className="card-content">{content}</p>
      </div>
    </div>
  )
}

export default Card
