
import React from 'react'

function Footer() {
  return (
    <><footer className="bg-dark text-center text-lg-start text-white">
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 Copyright: 
       <a className="text-white copywrite text-bold" href="#" >
      Netflix
      </a>
    </div>
    {/* Copyright */}
  </footer>
  </>
  )
}

export default Footer