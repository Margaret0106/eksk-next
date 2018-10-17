import React from 'react';
import road from 'svg-react-loader?name=Icon!../../static/images/svg/road.svg';
import snowflake from 'svg-react-loader?name=Icon!../../static/images/svg/snowflake.svg';
import water from 'svg-react-loader?name=Icon!../../static/images/svg/water.svg';
import garbage from 'svg-react-loader?name=Icon!../../static/images/svg/garbage.svg';
import repair from 'svg-react-loader?name=Icon!../../static/images/svg/repair.svg';
import plants from 'svg-react-loader?name=Icon!../../static/images/svg/plants.svg';
import neighbours from 'svg-react-loader?name=Icon!../../static/images/svg/neighbours.svg';

const ICONS = {
    road,
    snowflake,
    water,
    garbage,
    repair,
    plants,
    neighbours
};

export default (name) => {
    let Icon = ICONS[name];
    return <Icon className = 'icon' / > ;
}