import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Footer extends React.Component {

  render() {
    
    return (
      <section className="footer-section">
        <div className="footer-wrap">
        <Link to="/Contact" className="footer-item">Contact</Link> 
        <Link to="/Legal" className="footer-item">Legal</Link> 
        </div>
        <div className="copy">Copyright © 2020 Luminance Technologies Ltd.</div>
      </section >
    )
  }
}

export default withRouter(Footer)




{/* <section>
<div>
  <h1>Learn how Luminance can deliver:</h1>
</div>
<div>

</div>
<div>
  <button>
    REQUEST MORE INFORMATION
  </button>
</div>
</section> */}