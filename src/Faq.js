import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Faq extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Faq">
        <div id="alignCenter">
          <h1 className="title is-2">Frequently Asked Questions</h1>
        </div>
        <h2 className="subtitle is-5">Do you offer a free consultation?</h2>
        <p>
          Of course! If you're considering building a website, I'd be happy to meet with you for 30 minutes to discuss what options I can offer you. Use the <Link to="/contact">contact</Link> form to get started.
        </p><br/>
        <h2 className="subtitle is-5">What payment options do you accept and how do I pay?</h2>
        <p>
           I accept PayPal and Venmo. The client can opt for either of the two payment options. One option is to pay an initial payment of 50% of the total cost, and then pay the other 50% upon completion of your website.
           The second option is a 6 month payment plan where you pay a 30% initial down payment and then pay 1/6 of the remaining cost each month for 6 months. You must sign and agree to the invoice before we start.
        </p><br/>
        <h2 className="subtitle is-5">Do I get a free website domain?</h2>
        <p>
          Yes, you will be provided a free domain on Heroku. Example: www.mysite.herokuapp.com. If you want a unique, non-heroku domain name, you will be responsible for paying an additional $100 in setup costs and for the cost of the domain name itself.
        </p><br/>
      <h2 className="subtitle is-5">Can you create a WordPress blog or content management system for me?</h2>
        <p>Absolutely, I can build you a custom content management system using WordPress on the back-end and a completely custom front-end.</p><br/>
        <h2 className="subtitle is-5">How long will it take you to build my website?</h2>
        <p>The client should expect a small-sized project done in 1-3 months, a medium project done in 3-5 months, and a large project in 6 months or more depending on the project scope. If I need to adjust the timeline, I'll be sure to communicate this with you.</p><br/>
        <h2 className="subtitle is-5">Can you set up a test environment for me?</h2>
        <p>Yes, I can setup a test environment for an additional charge. This is a good idea if you want to preview desired changes before putting them on your live production site.</p>
      </div>
    );
  }
}

export default Faq;
