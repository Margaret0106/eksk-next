import React from 'react';
import road from 'svg-react-loader?name=Icon!../../static/images/svg/road.svg';
import snowflake from 'svg-react-loader?name=Icon!../../static/images/svg/snowflake.svg';
import water from 'svg-react-loader?name=Icon!../../static/images/svg/water.svg';
import garbage from 'svg-react-loader?name=Icon!../../static/images/svg/garbage.svg';
import repair from 'svg-react-loader?name=Icon!../../static/images/svg/repair.svg';
import plants from 'svg-react-loader?name=Icon!../../static/images/svg/plants.svg';
import neighbours from 'svg-react-loader?name=Icon!../../static/images/svg/neighbours.svg';
import arrow from 'svg-react-loader?name=Icon!../../static/images/svg/arrow.svg';
import apple from 'svg-react-loader?name=Icon!../../static/images/svg/apple.svg';
import google from 'svg-react-loader?name=Icon!../../static/images/svg/google.svg';
import city from 'svg-react-loader?name=Icon!../../static/images/svg/city.svg';
import alert from 'svg-react-loader?name=Icon!../../static/images/svg/alert.svg';
import orange from 'svg-react-loader?name=Icon!../../static/images/svg/orange.svg';
import ok from 'svg-react-loader?name=Icon!../../static/images/svg/ok.svg';


const ICONS = {
    road,
    snowflake,
    water,
    garbage,
    repair,
    plants,
    neighbours,
    arrow, 
    apple,
    google, 
    city, 
    alert, 
    orange, 
    ok
};

export default (name) => {
    let Icon = ICONS[name];
    return <Icon className = {`svg-icon svg-icon-${name}`} / > ;
}