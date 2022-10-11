import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'angular-stripe';
  // priceId = 'price_1HSxpTFHabj9XRH6DMA8pC7l';
  priceId="price_1LnPbNA2J9cyQhkSkgMAsUcs"
  product = {
    title: 'Starter',
    subTitle: 'Popular House Plant',
    description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
    price: "45"
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);

  async checkout() {
    // Call your backend to create the Checkout session.

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe:any = await this.stripePromise;
    try {
      await stripe.redirectToCheckout({
        mode: 'subscription',     
         customerEmail:"sam@gmail.com"
        ,
        lineItems: [{ price: this.priceId, quantity: this.quantity }],
        // lineItems: [{ price: this.priceId}],
        successUrl: `${window.location.href}/success`,
        cancelUrl: `${window.location.href}/failure`,
      }).then((result:any)=>{
        alert(result)
      })
     
      
    } catch (error) {
       // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
      console.log(error);
    
    }
    
   

  }
}
