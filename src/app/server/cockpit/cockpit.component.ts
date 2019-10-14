import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() addServer = new EventEmitter<{name: string, content: string}>();
  @Output() addBlueprint = new EventEmitter<{name: string, content: string}>();

  public serverName = '';
  public serverContent = '';

  constructor() { }

  ngOnInit() {
  }

  createServer() {
    this.addServer.emit({name: this.serverName, content: this.serverContent});
  }

  createBlueprint() {
    this.addBlueprint.emit({name: this.serverName, content: this.serverContent});
  }

}
