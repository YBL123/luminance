import React from 'react'

// import diligenceHeaderImage from './assets/diligence_header_image.jpg'
import diligenceHeaderImage from './assets/Luminance-platform2.jpg'
import luminanceDiligenceHeader from './assets/Luminance_diligence.png'
import diligienceQuote from './assets/diligence-birdbird-quote.png'

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
    </>
  )

}

export default Products