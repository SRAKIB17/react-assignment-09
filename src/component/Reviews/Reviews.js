import React from 'react';
import useJson from '../../hooks/useReview';
import CustomerReview from '../Home/CustomerReview/CustomerReview';

const Reviews = () => {
    const review = useJson('reviews')

    return (
        <div className='reviews'>
            {review.map(review=><CustomerReview review={review}></CustomerReview>)}
        </div>
    );
};

export default Reviews;