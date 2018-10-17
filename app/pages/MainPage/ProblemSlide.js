import React from 'react';
import { string } from 'prop-types';
import Icons from '../../components/Icons';

const ProblemSlide = ({id, className, onClick, iconName, iconText}) => {
    
  return (      
    <li className={className} onClick={e => onClick(id)}>
        <a href={`#problem${id}`} aria-controls={`problem${id}`} data-toggle="tab"></a>
        <div className="problems-list__icon">           
            {Icons(`${iconName}`)}            
        </div>
        <div className="problems-list__title">
            {iconText}
        </div>
    </li>
  );
};

ProblemSlide.propTypes = { 
    iconName: string,
    iconText: string
};

export default ProblemSlide;
