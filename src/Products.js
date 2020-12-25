import React from 'react'

// import diligenceHeaderImage from './assets/diligence_header_image.jpg'
import diligenceHeaderImage from './assets/Luminance-platform2.jpg'
import luminanceDiligenceHeader from './assets/Luminance_diligence.png'

const Products = () => {

  return (
    <section>
      <div className="products-header-section-1-wrap">
        <div className="prdoucts-diligience-header-image-wrap">
        <img className="products-diligience-header-image" src={diligenceHeaderImage} alt="diligience-header" />
        </div>
        <div className="products-diligience-header-wrap">
        <img className="products-diligience-header" src={luminanceDiligenceHeader} alt="luminance-diligience-header" />
        </div>
      </div>

    </section>
  )

}

export default Products