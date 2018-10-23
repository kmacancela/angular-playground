import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*
    styles: [`
    h3{
      color: red
    }`] 
  */
})
export class AppComponent {
  username = '';
  usernameCreationStatus = 'No username created yet.'
  showSecret = false;
  log = [];

  isUsernameEmpty(){
    if(this.username === '') return true;
    return false;
  }

  onCreateUsername(){
    this.usernameCreationStatus = 'Username ' + this.username + ' was created.';
    this.username = '';
  }

  getToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
