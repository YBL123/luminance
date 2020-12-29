import React from 'react'

import event1 from './assets/event1.jpg'
import event2 from './assets/event2.jpg'
import event3 from './assets/event3.jpg'
import event4 from './assets/event4.jpg'

import event5 from './assets/event5.jpg'
import event6 from './assets/event6.jpg'
import event7 from './assets/event7.jpg'
import event8 from './assets/event8.jpg'

const Events = () => {

  return (
    <>
      <section>
        <div className="events-page-wrap">

          <div className="events-headr-p-wrap">
            <div className="events-header-wrap">
              <h1 className="events-header-h1">UPCOMING EVENTS</h1>
            </div>
            <div className="events-description-wrap">
              <p className="events-description-text">
                Meet Luminance representatives where you are. Luminance participates in tradeshows and conferences around the world.
                You can join us for our exclusive Luminance seminars and webinars for a more personalised experience.
  </p>
            </div>
          </div>


          <div className="upcoming-events-wrap">

            <div className="upcoming-event-wrap">
              <img className="event-image" src={event1} alt="event1" />
              <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
              <h4 className="event-date">26 JANUARY 2021</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event2} alt="event2" />
              <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
              <h4 className="event-date">26 JANUARY 2021</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event3} alt="event3" />
              <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
              <h4 className="event-date">26 JANUARY 2021</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event4} alt="event4" />
              <h3 className="event-header">Luminance Diligence: A year in review</h3>
              <h4 className="event-date">12 January 2021</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>

          </div>
        </div>
      </section>


      <section>
        <div className="events-page-wrap">

          <div className="events-headr-p-wrap">
            <div className="events-header-wrap">
              <h1 className="events-header-h1">PREVIOUS EVENTS</h1>
            </div>
          </div>


          <div className="upcoming-events-wrap">

            <div className="upcoming-event-wrap">
              <img className="event-image" src={event5} alt="event5" />
              <h3 className="event-header">Executing quick and efficient syndicated loan reviews using AI</h3>
              <h4 className="event-date">	17 December 2020</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event6} alt="event6" />
              <h3 className="event-header">Improving Contract management with AI</h3>
              <h4 className="event-date">16 December 2020</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event7} alt="event7" />
              <h3 className="event-header">A (data)Room with a View: AI-powered data visualisation for lawyers</h3>
              <h4 className="event-date">15 December 2020</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>
            <div className="upcoming-event-wrap">
              <img className="event-image" src={event8} alt="event8" />
              <h3 className="event-header">Using AI technology to establish successful outside counsel guidelines</h3>
              <h4 className="event-date">10 December 2020</h4>
              <h4 className="webinar">WEBINAR</h4>
              <button className="request-invitation-button">REQUEST INVITATION</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )

}

export default Events