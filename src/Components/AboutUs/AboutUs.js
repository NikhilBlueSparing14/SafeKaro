import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section id="AboutUs" className="main-aboutus">
      <div className="about">
        <article className="about-article">
          <h1>ABout Us</h1>
          {/* <img src={img} alt="pic" className="about-img"/> */}
          <content className="about-content">
          We are an insurance platform that easily guides you through the
         jungle of choices in finding, comparing and buying policies that
           best fit your personal needs and circumstances. We get you covered
           in minutes, against – guaranteed – the best price possible. Simple.
           Quick. Carefree. Thanks to a passionate and experienced team of
           professionals, intelligent algorithms and automated suggestions.
           We’re always here for you. We never close. 24 hours a day, 7 days a
           week at your service. With real people answering the phone or chat
           (from 10 am to 10 pm). Right now, right here in our hometown
           Singapore.
           <br/>
           Our Vision Whatever you do, whoever you are, we all need insurances.
           Some are mandatory, others we buy because we want to protect what we
           value. As brokers, it is our role to come to you with personalized
           recommendations, based on our in-depth knowledge and broad access to
           the market for insurances, finding good cover against a fair price.
           Insurances can be very technical and customers are easily
           disadvantaged by a lack of knowledge and information. Our platform
           aims to make a contribution to creating a better and fairer world
           where insurances are always clear, transparent, fairly priced and
           properly advised and sold. We are a bunch of experts. We have a deep
           knowledge of insurances. Combined with a huge belief in digital
           efficiency. We love to break down the barriers of unnecessary
           complexity.
          </content>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
