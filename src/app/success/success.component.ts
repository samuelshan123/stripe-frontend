import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  STRIPE_DATA:any;

  constructor(    private http: HttpClient    ) { }

  ngOnInit(): void {
    this.getUrl()
  }

  getUrl(){
    var url = new URLSearchParams(window.location.search);
var parms = url.get("session_id");
console.log(parms)
this.getSession(parms)
  }
  generateInvoice(){
    this.http.post('http://localhost:3000/invoice',{cus_id:this.STRIPE_DATA.customer}).subscribe((x:any)=>{
      console.log(x);
      
  })
  }
  getSession(parms:any){
    this.http.post('http://localhost:3000/checkout',{sessionId:parms}).subscribe((x:any)=>{
      console.log(x);
      this.STRIPE_DATA=x
      
    },(error)=>{
      console.log(error);
      
    })
  }

}
