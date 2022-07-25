import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  tasks: Array<{id: number, description: string, status: boolean}> = []

  ngOnInit(): void {
  }

}
