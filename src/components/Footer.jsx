import React from 'react'
import "../styles/components/footer.css"

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="footerHead">
        <h1>Let's Connect !</h1>
        <p>
            <a href='/'>About Us</a> | <a href='/'>Contact Us</a> | <a href='/'>Share our story</a>
        </p>
        <p>Made with ❤️ by The Amethyst</p>
      </div>

      <div className="footerImg"></div>
    </div>
  );
}

export default Footer