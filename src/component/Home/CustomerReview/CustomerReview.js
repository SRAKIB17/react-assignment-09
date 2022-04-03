import React from 'react';
import './CustomerReview.css'
const CustomerReview = (props) => {
    const { review: { name, rating, body } } = props
    return (
        <div className='review'>
            <div className='Profile'>
                <div>
                    {name.substr(0,1)}
                </div>
                <h3>
                    {name}
                </h3>
            </div>

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