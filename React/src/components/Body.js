import React from 'react';
import "../Styles/main.css";


function Body(){

    return (
    <body>

       <div class="main-text">
            <video src="video1.mp4" autoPlay muted loop></video>
            <h1>
                Model website
            </h1>
            <h2>
                <p>
                    Welcome to our model website! We are dedicated to providing high-quality content and services to our visitors. Whether you're looking for the latest fashion trends, beauty tips, or lifestyle advice, we've got you covered.
                </p>
                <p>
                    Our team of experts is passionate about staying up-to-date on the latest trends and sharing their knowledge with our audience. From fitness and nutrition to travel and entertainment, we have a wide range of topics to explore.
                </p>
            </h2>
            
        </div>
          
        <section class="goal">
            <video src="video1.mp4" autoPlay muted loop></video>
            <div class="information">
            <h2>What's our goal?</h2> 
                <p>
                    Our website features a user-friendly interface that makes it easy to navigate and find the information you're looking for. We also offer a variety of resources, such as videos, articles, and podcasts, to help you stay informed and entertained.
                    In addition to our content, we offer a variety of services to help you reach your goals. Our personal styling and consulting services can help you find the perfect look for any occasion, while our wellness coaching and nutrition services can help you achieve optimal health and wellness.
                </p>

            <a href="/#"><b>Learn more!</b></a>
            </div>
        </section>
        
    </body>

    )
}


export default Body