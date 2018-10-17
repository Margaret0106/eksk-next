import React from 'react';
import { string } from 'prop-types';

const StepSlide = ({id, className, onClick, stepTitle, stepText}) => {
    
  return (      
    <li className={className} onClick={e => onClick(id)}>
        <a href={`#step${id}`}  aria-controls={`step${id}`} data-toggle="tab">
        <div className="steps-list__title">
            {stepTitle}
        </div>
        <div className="steps-list__text">
            {stepText}
        </div>
        </a>
    </li>
  );
};

StepSlide.propTypes = { 
    stepTitle: string,
    stepText: string
};

export default StepSlide;
