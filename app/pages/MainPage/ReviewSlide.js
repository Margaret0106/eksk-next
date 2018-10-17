import React from 'react';
import { string } from 'prop-types';

const ReviewSlide = ({reviewName, reviewAuthor, reviewText, image}) => {
    
  return (     

    <div className="swiper-slide reviews-list__item">
        <div className="reviews-list__text">
        {reviewText}
        </div>
        <div className="reviews-list__author">
            <img src={image} alt=""/>
            <div className="reviews-list__author-info">
                <div className="reviews-list__author-name">
                    {reviewName}
                </div>
                <div className="reviews-list__author-status">
                    {reviewAuthor}
                </div>
            </div>
        </div>
    </div>
  );
};

ReviewSlide.propTypes = { 
    stepTitle: string,
    stepText: string
};

export default ReviewSlide;
