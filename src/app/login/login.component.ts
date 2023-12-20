import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      username : string = "tony blair";
      today : Date = new Date();
      balance : number = 20000;
      title : string = "Login";
      accessCount : number = 2;
      imgUrl : string = "https://wallpapers.com/wallpapers/bus-in-sky-animated-cartoon-jrugczle7lyo4zia.html";
      facebookUrl : string = "https://www.facebook.com/";
      twitterUrl : string = "https://twitter.com/";
      isDisabled : boolean = false;
      isFaceBookAcctAvailble : boolean = false;
      email : string = "abc@gmail.com";
      address:string="Hyderabad";
      profileComplPercent : number = 0.8;


       getCurrentDate() : Date {
        return new Date();
       }

       getSocialMediaLink() : string {
           if(this.isFaceBookAcctAvailble) {
              return  this.facebookUrl;
           } else {
              return this.twitterUrl;
           }
       }

       updateEmail(newEmail : string) {
          this.email = newEmail;
       }
 
}
