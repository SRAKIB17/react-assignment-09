import React from 'react';
import './CustomerReview.css'
const CustomerReview = (props) => {
    const {review:{name, rating, body}} = props
    return (
        <div className='review'>
            <h3>
                {name}
            </h3>
            <small>
                {rating}
            </small>
            <p>
                {
                    body
                }
            </p>
        </div>
    );
};

export default CustomerReview;