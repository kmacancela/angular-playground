import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = 'Testserver';
  serverCreated = false;

  /*At the initiation of this component, this constructor will wait 2 seconds 
    before the valye of allowNewServer changes to true. 
  */
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    //explict casting needed
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
