import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StripeService } from 'ngx-stripe';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ngx-stripe',
  templateUrl: './ngx-stripe.component.html',
  styleUrls: ['./ngx-stripe.component.scss']
})
export class NgxStripeComponent  {
  product = [
    {
      title: 'Starter',
      subTitle: 'Popular House Plant',
      description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
      price: "45",
      price_id:"price_1LptosA2J9cyQhkSZJsdWjeV"
    },
    {
      title: 'Professional',
      subTitle: 'Popular House Plant',
      description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
      price: "75",
      price_id:"price_1LptpUA2J9cyQhkSJNQSdfLd"
    },
    {
      title: 'Enterprise',
      subTitle: 'Popular House Plant',
      description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
      price: "100",
      price_id:"price_1LptprA2J9cyQhkS42Pyyvqo"
    },
    {
      title: 'Free Trail',
      subTitle: 'Popular House Plant',
      description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
      price: "0",
price_id:"price_1LptxuA2J9cyQhkS0EWuRZrA"
    }
  ]
  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

url(){

  
}
  checkout(data:any) {
    // Check the server.js tab to see an example implementation
    this.http.post('http://localhost:3000/subscribe', { data })
      .pipe(
        switchMap((session:any) => {
          console.log(session);
          
          return this.stripeService.redirectToCheckout({ sessionId: session.sessionId })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
