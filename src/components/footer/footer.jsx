import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'


const footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>


          <FacebookIcon/>
          <YouTubeIcon/>
          <LinkedInIcon/>
          

        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Discription</li>
              <li>Inverstor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privecy</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>
        <div className="service-code">
          <p>
            Service Code
          </p>
        </div>
        <div className="copy-write">
          &copy;1997-2024 Netflix, Inc.
        </div>

      </div>
      
    </div>
  )
}

export default footer
