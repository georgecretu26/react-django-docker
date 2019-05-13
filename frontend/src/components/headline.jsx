import React from 'react';

import PropTypes from 'prop-types';

const Headline = ({children, title}) => {
    console.log(title)
    return(
    <div>
        <h1>{title}</h1>
        {children}
    </div>)
}

Headline.displayName = 'Headline';
Headline.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

export default Headline;