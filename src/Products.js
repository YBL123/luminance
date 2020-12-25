import React from 'react'

// import diligenceHeaderImage from './assets/diligence_header_image.jpg'
import diligenceHeaderImage from './assets/Luminance-platform2.jpg'
import luminanceDiligenceHeader from './assets/Luminance_diligence.png'

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
            Explore Discovery
          </button>
        </div>
        </div>
      </div>
    </section>
    </>
  )

}

export default Products