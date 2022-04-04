import React from 'react';
import { useNavigate } from 'react-router-dom';
import useJson from '../../hooks/useReview';

import CustomerReview from './CustomerReview/CustomerReview';
import './Home.css'
const Home = () => {
    const review = useJson('reviews');
    const navg = useNavigate()
    return (
        <main>
            <section className='home'>
                <section className="title">
                    <h1 className=''>
                        Buy MSI MODERN 15
                    </h1>
                    <h2>
                        Heepy Coding
                    </h2>
                    <p>
                        MSI, MSI gaming, dragon, and dragon shield names and logos, as well as any other MSI service or product names or logos displayed on the MSI website, are registered trademarks or trademarks of MSI.
                    </p>
                    <button>Live Demo</button>
                </section>
                <section className='mobilePhoneImge'>
                    <img src="https://asset.msi.com/resize/image/global/product/product_16237438867fec807cead14d092124f3dc67ddc3ef.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="" className='img-fluid' />
                </section>

            </section>
            <section >
                <h1 style={{ fontWeight: 'bolder', textAlign: 'center' }}>Customer Reviews:</h1>
                <div className='reviews'>
                    {

                        review.slice(0, 3).map(review => <CustomerReview review={review}></CustomerReview>)
                    }
                </div>
                <div className='seeAll' >
                    <button onClick={() => navg('/reviews')}>See All Review</button>
                </div>

            </section>
        </main>
    );
};

export default Home;