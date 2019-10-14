import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public serverElements = [{type: 'server', serverName: 'TestServer', serverContent: 'Just a test server'}];

  constructor() { }

  ngOnInit() {
  }

  addServer(data) {
    this.serverElements.push({
      type: 'server',
      serverName: data.name,
      serverContent: data.content
    });
  }

  addBlueprint(data) {
    this.serverElements.push({
      type: 'blueprint',
      serverName: data.name,
      serverContent: data.content
    });
  }

}
