import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      today : Date = new Date();
      title : string = "Login";
      accessCount : number = 2;
      imgUrl : string = "https://wallpapers.com/wallpapers/bus-in-sky-animated-cartoon-jrugczle7lyo4zia.html";
      facebookUrl : string = "https://www.facebook.com/";
      twitterUrl : string = "https://twitter.com/";
      isDisabled : boolean = false;
      isFaceBookAcctAvailble : boolean = false;
      email : string = "abc@gmail.com";


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
