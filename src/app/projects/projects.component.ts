import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'ToDoList',
      description: 'Description of project 1',
      image : 'https://static.vecteezy.com/system/resources/thumbnails/003/529/153/small/business-to-do-list-flat-icon-modern-style-free-vector.jpg',
      link: 'http://example.com/project1',
      repo: 'https://github.com/premik7/ToDoList.git'
    },
    {
      title: 'MathGame',
      description: 'Description of project 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSck9Z0aZkNptgxIla2u2fsMUmMo0KmAFvIQ&usqp=CAU',
      link: 'http://example.com/project2',
      repo: 'https://github.com/premik7/MathGame.git'
    },
    // Add more projects here
    {
      title: 'GuessingGame',
      description: 'Description of project 2',
      image: 'https://gurmeet.net/Images/puzzles/number_guessing_game_transparent.png',
      link: 'http://example.com/project2',
      repo: 'https://github.com/premik7/GuessingGame.git'
    },
    {
      title: 'PhotoAlbum',
      description: 'Description of project 2',
      image: 'https://cdn-icons-png.freepik.com/256/5677/5677926.png?semt=ais_hybrid',
      link: 'http://example.com/project2',
      repo: 'https://github.com/premik7/PhotoAlbum.git'
    },
    {
      title: 'Calculator',
      description: 'Description of project 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CGmyKZaFi_7MjusJ8TlIyjfbfoCJM7oxTw&usqp=CAU',
      link: 'http://example.com/project2',
      repo: 'https://github.com/premik7/Calculator.git'
    },
    {
      title: 'InformationBook',
      description: 'Description of project 2',
      image: 'https://cdn-icons-png.flaticon.com/256/12338/12338273.png',
      link: 'http://example.com/project2',
      repo: 'https://github.com/premik7/InformationBook.git'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}