import React from 'react';
import customer1 from '../images/Customers/customer-1.jpg'
import customer2 from '../images/Customers/customer-2.jpg'
import customer3 from '../images/Customers/customer-3.jpg'
export default function Customer() {
    return (
        <section class="section-testimonials">
            <div class="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div class="row">
                <div class="col span-1-of-3">
                    <blockquote>
                        Punjabi Tadka is just awesome! I just launched a startup which leaves me with no time for cooking, so Punjabi Tadka is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src={customer1} alt="customer 1"/>Alberto Duncan</cite>
                    </blockquote>
                </div>
                <div class="col span-1-of-3">
                    <blockquote>
                        Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite><img src={customer2} alt="customer 1"/>Joana Silva</cite>
                    </blockquote>
                </div>
                <div class="col span-1-of-3">
                    <blockquote>
                        I was looking for a quick and easy food delivery service in Edmonton. I tried a lot of them and ended up with Punjabi Tadka. Best food delivery service in the South Area. Keep up the great work!
                        <cite><img src={customer3} alt="customer 1"/>Milton Chapman</cite>
                    </blockquote>
                </div>
            
            
            </div>
        </section>
    )
}
