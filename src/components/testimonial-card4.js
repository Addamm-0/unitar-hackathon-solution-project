import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card4.css'

const TestimonialCard4 = (props) => {
  return (
    <div
      className={`testimonial-card4-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card4-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
          className=""
        ></path>
      </svg>
      <span className="testimonial-card4-text">{props.quote}</span>
      <div className="testimonial-card4-profile">
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card4-image"
        />
        <div className="testimonial-card4-container">
          <span className="testimonial-card4-text1">{props.name}</span>
          <span className="testimonial-card4-text2">{props.role}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialCard4.defaultProps = {
  quote:
    'Inclusolve is a lifesaver for my students!It is the only platform i have found that caters to such a wide range of abilities and learning needs.My students with disabilities can finally participate in online learning alongside there peers.The collaborative features are fantastic for building bridges between students from different backgrounds and experience.This is not just a platform,it is a community that fosters understanding and acceptance.',
  role: '',
  rootClassName: '',
  pictureSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  pictureAlt: 'John Doe',
  name: 'John Doe',
}

TestimonialCard4.propTypes = {
  quote: PropTypes.string,
  role: PropTypes.string,
  rootClassName: PropTypes.string,
  pictureSrc: PropTypes.string,
  pictureAlt: PropTypes.string,
  name: PropTypes.string,
}

export default TestimonialCard4
