import React from 'react';
import useReview from '../../hooks/useReview';
import CustomerReview from './CustomerReview/CustomerReview';
import './Home.css'
const Home = () => {
    const review = useReview().slice(0, 3)

    return (
        <main>
            <section className='home'>
                <section className="title">
                    <h1 className=''>
                        Samsung Galaxy S22 Ultra.
                    </h1>
                    <h2>
                        The best Samsung phone you can buy.
                    </h2>
                    <p>
                        Which Samsung has the best camera?
                        Image result for samsung best titee
                        Overall, the best Samsung phone right now is the Samsung Galaxy S22 Ultra, with fantastic cameras and top build quality. It is expensive though, so if you don't want to spend that much, we recommend the Samsung Galaxy S20 FE, which the one of best camera phones despite being a very affordable price.
                    </p>
                    <button>Live Demo</button>
                </section>
                <section className='mobilePhoneImge'>
                    <img src="https://cdn.mos.cms.futurecdn.net/3MrxJrq63Vr37anmdLUhgR-1024-80.jpg.webp" alt="" className='img-fluid' />
                </section>

            </section>
            <section >
                <h1 style={{ fontWeight: 'bolder', textAlign: 'center' }}>Customer Reviews:</h1>
                <div className='reviews'>
                    {

                        review.map(review => <CustomerReview review={review}></CustomerReview>)
                    }
                </div>

            </section>
        </main>
    );
};

export default Home;