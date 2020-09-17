import React from 'react';
import appiPhone from '../ProjectImages/ExtraImages/appiPhone.png';
import AppleStore from '../ProjectImages/ExtraImages/AppleStore.svg';
import googleplay from '../ProjectImages/ExtraImages/googleplay.png'

export default function FoodApp() {
    return (
        <div>
             <section className="section-steps">
                    <div className="row">
                        <h2>How it works as App &mdash; Simple as 1, 2 , 3</h2>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-2 steps-box">
                            <img src={appiPhone} alt="Punjabi Tarka app on iphone" class="app-screen"/>
                        </div>
                        <div className="col span-1-of-2 steps-box">
                            <div className="works-step">
                                <div>1</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                            </div>
                            <div className="works-step">
                                <div>2</div>
                                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                            </div>
                            <div className="works-step">
                                <div>3</div>
                                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                            </div>
                            <a href="#" className="btn-app"><img src={AppleStore} alt="App Store Button"/></a>
                            <a href="#" className="btn-app"><img src={googleplay} alt="Play Store Button"/></a>
                        </div>
                    </div>
                </section>
        </div>
    )
}
