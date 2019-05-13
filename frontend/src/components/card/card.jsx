import React from 'react';

import './style.less';

const Card = props => {
    console.log('Card is initiated', props);
    
    const {
        title, 
        img_src: imgSrc, 
        created_date: dateOfCreation, 
        published_date: dateOfPublish, 
        description
    } = props.props;
    return(
        <div className="container">
            <div className="header">
                <p className="title">{title}</p>
                <p className="date">{dateOfPublish ? dateOfPublish : dateOfCreation}</p>
            </div>
            <img src={imgSrc} alt={title}></img>
            <p className="description">{description}</p>
        </div>
    );
}

export default Card;