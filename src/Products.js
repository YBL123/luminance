import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import diligenceHeaderImage from './assets/diligence_header_image.jpg'
import diligenceHeaderImage from './assets/Luminance-platform2.jpg'
import luminanceDiligenceHeader from './assets/Luminance_diligence.png'
import diligienceQuote from './assets/diligence-birdbird-quote.png'

import useLuminancesAi from './assets/use-luminances-ai-built-models-or-build-your-own.png'
import blockAutomatic from './assets/1000-block-Automatic-pre-set-clause-models.png'
import beginReview from './assets/begin-your-review-within-the-hour.png'

const Products = () => {

  return (
    <>
      <section className="products-section-1">
        <div className="products-header-section-1-wrap">
          <div className="products-diligience-header-image-wrap">
            <img className="products-diligience-header-image" src={diligenceHeaderImage} alt="diligience-header" />
          </div>
          <div className="products-diligience-header-wrap">
            <img className="products-diligience-header" src={luminanceDiligenceHeader} alt="luminance-diligience-header" />
            <div className="products-section-1-paragraph-1">
              Luminance’s Diligence platform applies a unique combination of machine learning algorithms to the process of contract review. By blending both supervised and unsupervised machine learning, Luminance provides lawyers with the most rigorous analysis of their documents, instantly highlighting anomalous areas or risks that require urgent attention. Luminance works across the entire dataset, negating the need to rely on sampling, and gives lawyers confidence that no critical document or clause has been missed during review.
        </div>
            <div className="products-section-1-paragraph-2">
              Able to be deployed and used within hours, Luminance is trusted by over 250 customers globally to provide the quickest, most comprehensive document reviews available
        </div>
            <div className="products-section-1-paragraph-3">
              Learn about Luminance's other products:
        </div>
            <div className="products-section-1-paragraph-4">
              <button className="products-explore-discovery-button">
                {">"} Explore Discovery
          </button>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section-2">
        <div className="products-section-2-wrap">
          <div className="products-section-2-quote-image-wrap">
            <img className="products-diligience-quote-image" src={diligienceQuote} alt="diligience-quote-imag" />
          </div>
          <div className="products-diligience-section-2-text-wrap">
            <div className="products-diligience-section-2-line-1">
              The value of Luminance for law firms
        </div>
            <div className="products-diligience-section-2-line-2">
              Fast, rigorous and cost-effective reviews for clients
        </div>
            <div className="products-diligience-section-2-line-3">
              Do more with less: using Luminance, lawyers can fulfil the most thorough review possible, derived from the entire data set, completed faster and incurring less cost
        </div>
            <div className="products-diligience-section-2-line-4">
              Provide better advice on clients’ risk and business planning
        </div>
            <div className="products-diligience-section-2-line-5">
              Because Luminance expedites the review process, lawyers can spend more time advising clients around business-critical issues, such as indications of bribery or change of control clauses. By instantly surfacing these red flags, negotiating positions can be strengthened from the outset, ensuring the best outcome for clients.
        </div>
            <div className="products-diligience-section-2-line-6">
              Additional revenue opportunities
        </div>
            <div className="products-diligience-section-2-line-7">
              Luminance allows less resource to be used up on reviews, allowing firms to expand the range of services they can offer to clients.
        </div>
          </div>
        </div>
      </section>

      <section className="products-section-3">
        <div className="products-section-3-div-wrap">
          <div className="products-section-3-video-wrap">
            <iframe title="products-section-3-video" src="https://player.vimeo.com/video/427026743" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          <div className="products-section-3-text-wrap">
            <h3 className="prdoucts-section3-key-benefits-header">KEY BENEFITS</h3>
            <h1 className="prdoucts-section3-key-benefits-h1">Speed: expedite the review </h1>
            <h3 className="prdoucts-section3-key-benefits-h3">
              From 79 documents reviewed per hour manually to <span className="home-blue-span"> over 3600 documents reviewed per hour </span>using Luminance
          </h3>
            <h4 className="prdoucts-section3-key-benefits-h4"> - Bird & Bird</h4>
            <h1 className="prdoucts-section3-key-benefits-h1">Confidence: review 100% of documents</h1>
            <h3 className="prdoucts-section3-key-benefits-h3">
              Using Luminance, the lawyers conducted their review 400 times faster, ensuring they could <span className="home-blue-span"> read and understand every document </span>rather than rely on sampling or outsourcing to meet deadlines.
          </h3>
            <h4 className="prdoucts-section3-key-benefits-h4">- Dentons</h4>
            <h1 className="prdoucts-section3-key-benefits-h1">Boost productivity</h1>
            <h3 className="prdoucts-section3-key-benefits-h3">
              Review time slashed <span className="home-blue-span"> from seven months to just 10 days</span>, representing a <span className="home-blue-span">1,440% increase in productivity</span> and a <span className="home-blue-span">95% time-saving</span>.
          </h3>
            <h4 className="prdoucts-section3-key-benefits-h4">- EY</h4>
          </div>
        </div>
      </section>

      <section className="products-section-4">
        <div className="products-section-4-div-wrap">
          <div className="products-section-4-text-wrap">
            <div products-section-4-text-part-1-wrap>
              <h2 className="prdoucts-section-4-h2">RELATED RESOURCES</h2>
              <h1 className="prdoucts-section-4-h1-diligence">Luminance Diligence</h1>
              <h2 className="prdoucts-section-4-h2-diligence">product brochure</h2>
              <div className="products-section-4-request-button-wrap">
                <button className="products-section-4-request-button">REQUEST</button>
              </div>
            </div>
            <div products-section-4-text-part-2-wrap>
              <h1 className="prdoucts-section-4-h1">Case studies</h1>
              <div className="products-section-4-links-wrap">
                <Link to="/BIRD&BIRD" className="products-section-4-link"><span className="blue-span">BIRD & BIRD</span></Link>
                <Link to="/M&A DUE DILIGENCE" className="products-section-4-link">M&A DUE DILIGENCE</Link>
                <Link to="/PENNINGTONS MANCHES COOPER" className="products-section-4-link">PENNINGTONS MANCHES COOPER</Link>
                <Link to="/GILIBERTI" className="products-section-4-link">GILIBERTI</Link>
                <Link to="/VIEIRA DE ALMEIDA" className="products-section-4-link">VIEIRA DE ALMEIDA</Link>
              </div>
              <div className="products-section-4-dowload-button-wrap">
                <button className="products-section-4-download-button">DOWNLOAD</button>
              </div>
              <h2 className="prdoucts-section-4-h2">SEE MORE RESOURCES HERE</h2>
            </div>
          </div>
          <div className="products-section-4-video-wrap">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/379008957" width="640" height="360" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="products-section-5">
        <div className="products-section-5-div-wrap">
          <div className="products-section-5-h1-wrap">
            <h1 className="products-section-5-h1">Pre-set clause models for rapid document analysis:</h1>
          </div>
          <div className="products-section-5-icons-wrap">
            <div className="products-section-5-icon-title-wrap">
            <div className="products-section-5-icon-wrap">
              <img className="products-section-5-icon" src={useLuminancesAi} alt="use-luminances-ai-icon" />
            </div>
            <div>
              <h1 className="products-section-5-icon-h1">Use Luminance’s AI-built models or build your own</h1>
              </div>
            </div>
            <div className="products-section-5-icon-title-wrap">
            <div className="products-section-5-icon-wrap">
              <img className="products-section-5-icon" src={blockAutomatic} alt="block-automati-icon" />
            </div>
            <div>
            <h1 className="products-section-5-icon-h1">Automatic pre-set clause models</h1>
            </div>
            </div>
            <div className="products-section-5-icon-title-wrap">
            <div className="products-section-5-icon-wrap">
              <img className="products-section-5-icon" src={beginReview} alt="begin-review-icon" />
            </div>
            <div>
            <h1 className="products-section-5-icon-h1">Begin your review within the hour</h1>
            </div>
          </div>
          </div>
          <div>
            <h1 className="products-section-5-icon-h1">Clause models are designed for due diligence, lease review, compliance, employment review, underwriting and more</h1>
          </div>
        </div>
      </section>
    </>
  )

}

export default Products