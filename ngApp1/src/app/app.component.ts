import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //relative to index.html
  // you can also use single and double quotes, but if you have html in multiple lines then use backticks
  //template: `<h1>Sirf template use kia hai,no html file, {{authorFirstName}} <h1>`,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtBxVal = '';
  h2IfShow = false;  
  h2IfShowStr: string = 'yes';
  title = 'ngApp1';
  disabledBox = true;
  authorFirstName = 'Owais bhai';
  authorLastName = 'Qureshi walay';
  getFullName() { return this.authorFirstName +" "+ this.authorLastName;} 
  getFullNameAlert() { alert(this.authorFirstName +" "+ this.authorLastName);} 
  obj={
    name: 'Peter',
    age: 25
  }
  arry = ['Bruce','David','Asad'];
  a = 100;
  b = 200;
  siteUrl = window.location.href;

  getMyNameFromVar(variableName:any){ alert(variableName); }
  getMyNameFromValue(str:string){ alert(str); }
  myEvent(str:string){ console.log(str);  } 
  assignValToPtag(str:string){ this.txtBxVal = str; }
  enableTxtBox(){
  this.disabledBox = false;
  }
}
