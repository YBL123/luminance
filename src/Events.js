import React from 'react'

import event1 from './assets/event1.jpg'
import event2 from './assets/event2.jpg'
import event3 from './assets/event3.jpg'
import event4 from './assets/event4.jpg'

const Events = () => {

  return (
    <div className="events-page-wrap">

      <div className="events-headr-p-wrap">
        <div className="events-header-wrap">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="events-description-wrap">
          <p>
            Meet Luminance representatives where you are. Luminance participates in tradeshows and conferences around the world.
            You can join us for our exclusive Luminance seminars and webinars for a more personalised experience.
        </p>
        </div>
      </div>


      <div className="upcoming-events-wrap">

        <div className="upcoming-event-wrap">
          <img className="event-image" src={event1} alt="event1" />
          <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
          <h4>26 JANUARY 2021</h4>
          <h4>WEBINAR</h4>
          <button className="request-invitation-button">REQUEST INVITATION</button>
        </div>
        <div>
          <img className="event-image" src={event2} alt="event2" />
          <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
          <h4>26 JANUARY 2021</h4>
          <h4>WEBINAR</h4>
          <button className="request-invitation-button">REQUEST INVITATION</button>
        </div>
        <div>
          <img className="event-image" src={event3} alt="event3" />
          <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
          <h4>26 JANUARY 2021</h4>
          <h4>WEBINAR</h4>
          <button className="request-invitation-button">REQUEST INVITATION</button>
        </div>
        <div>
          <img className="event-image" src={event4} alt="event4" />
          <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
          <h4>26 JANUARY 2021</h4>
          <h4>WEBINAR</h4>
          <button className="request-invitation-button">REQUEST INVITATION</button>
        </div>

      </div>
    </div>
  )

}

export default Events