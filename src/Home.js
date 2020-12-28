import React from 'react'

import libor from './assets/libor.png'
import dataProtection from './assets/data_protection.png'
import dueDiligence from './assets/due_diligence.png'
import realEstate from './assets/real_estate.png'
import repapering from './assets/repapering.png'

const Home = () => {

  return (
    <>
      <section className="home-header-section">
        <div className="home-text-section-1">
          <h1 className="home-text-section-1-h1">The artificial intelligence platform for the legal profession</h1>
          <h3 className="home-text-section-1-h3">
            Analyse documents with unmatched speed and enhanced confidence, and apply that learning across all departments and practice areas
        </h3>
        </div>
      </section>
      <section className="home-section-2">
        <div className="home-section-2-info-wrap">
          <h1 className="home-text-section-2-h1-award">
            Award-winning AI technology
          </h1>
          <h2 className="home-text-section-2-h2-award">
            for the legal profession
            </h2>
          <h4 className="home-founded-by-text">
            Founded by mathematicians from the University of Cambridge, Luminance’s Legal Inference Transformation Engine (LITE) uniquely combines supervised and unsupervised machine learning to provide the most robust, powerful platform for legal analysis available to lawyers. Luminance’s technology can read and form an understanding of legal documentation in any language and jurisdiction, immediately surfacing the most relevant information and vastly reducing the amount of time spent on document review.
            </h4>
          <h5 className="home-founded-by-text-2">
            Luminance is used by over 250 law firms and organisations in over 50 countries and in more than 80 languages across a wide range of practice areas, including M&A due diligence, property portfolio analysis, eDiscovery, contract negotiation and model document comparison.
            </h5>
        </div>
        <div>
          <button className="home-learn-about-diligence-button">LEARN ABOUT DILIGIENCE</button>
        </div>
        <div>
          <h4 className="home-h4">
            <span className="home-blue-span">250+ </span>
            CUSTOMERS <span className="home-grey-span"> | </span>
            <span className="home-blue-span"> 50+ </span>
            COUNTRIES <span className="home-grey-span"> | </span>
            <span className="home-blue-span"> 80+ </span>
            LANGUAGES <span className="home-grey-span"> | </span>
            IN USE BY OVER
            <span className="home-blue-span"> ONE-FIFTH </span>
            OF GLOBAL TOP LAW FIRMS
          </h4>
        </div>
      </section>
      <section className="home-section-3">
        <div className="home-section-3-div-info">
          <h1 className="home-section-3-h1-bottom">
            One Product across the spectrum of Legal Projects
          </h1>
          <h3 className="home-section-3-h3-bottom">
            With over 1000 pre-set concept models, Luminance automatically labels key information
            in your documents for a range of projects including...
          </h3>
        </div>
        <div className="home-case-icons-wrap">
          <div className="home-case-icons-names-wrap">
            <div className="home-case-icon-wrap">
              <img className="home-case-icons" src={dataProtection} alt="data-protection" />
            </div>
            <div className="home-icon-name-wrap">
              <h5 className="home-case-icon-names">Data Protection</h5>
            </div>
          </div>
          <div className="home-case-icons-names-wrap">
            <div className="home-case-icon-wrap">
              <img className="home-case-icons" src={dueDiligence} alt="due-diligence" />
            </div>
            <div className="home-icon-name-wrap">
              <h5 className="home-case-icon-names">Due Diligence</h5>
            </div>
          </div>
          <div className="home-case-icons-names-wrap">
            <div className="home-case-icon-wrap">
              <img className="home-case-icons" src={libor} alt="LIBOR" />
            </div>
            <div className="home-icon-name-wrap">
              <h5 className="home-case-icon-names">LIBOR</h5>
            </div>
          </div>
          <div className="home-case-icons-names-wrap">
            <div className="home-case-icon-wrap">
              <img className="home-case-icons" src={realEstate} alt="real-Estate" />
            </div>
            <div className="home-case-icon-name-wrap">
              <h5 className="home-case-icon-names">Real Estate</h5>
            </div>
          </div>
          <div className="home-case-icons-names-wrap">
            <div className="home-case-icon-wrap">
              <img className="home-case-icons" src={repapering} alt="repapering" />
            </div>
            <div className="home-case-icon-name-wrap">
              <h5 className="home-case-icon-names">Repapering</h5>
            </div>
          </div>

        </div>
        <div>
          <button className="home-view-more-cases-button">VIEW MORE CASES</button>
        </div>
      </section>
    </>

  )

}

export default Home