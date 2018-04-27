import React from 'react'

const UserStory = ({ updateStatus }) => (
  <div>
    <button className="deliver"
            data-behavior="deliver"
            onClick={ () => updateStatus('delivered')
      }>Deliver
    </button>
  <button className="finish"
          data-behavior="finish"
          onClick={ () => updateStatus('finished')
      }>Finish
  </button>
  </div>
)

export default UserStory
