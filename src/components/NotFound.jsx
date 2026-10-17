import React from 'react'
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default NotFound
