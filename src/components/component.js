import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <button className="app-component-button buttonFilledSecondary">
        {props.button}
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Try the PRO plan',
}

AppComponent.propTypes = {
  button: PropTypes.string,
}

export default AppComponent
