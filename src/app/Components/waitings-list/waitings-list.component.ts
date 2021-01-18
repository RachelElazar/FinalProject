import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitings-list',
  templateUrl: './waitings-list.component.html',
  styleUrls: ['./waitings-list.component.css']
})
export class WaitingsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  links = ['/AdvancedStudy', '/StudentsList', '/WaitingsList'];
  activeLink = this.links[0];
  
  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
