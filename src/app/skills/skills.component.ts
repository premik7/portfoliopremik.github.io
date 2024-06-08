import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    'Java', 'Android SDK', 'XML', 'Firebase', 'RESTful APIs',
    'Git', 'Material Design'
  ];

  constructor() { }

  ngOnInit(): void { }
}
