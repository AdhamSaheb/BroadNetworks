import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  companies : string[]= [
    '../../../assets/logos/motorola.jpg',
    '../../../assets/logos/waveip.png',
    '../../../assets/logos/ceragon.png',
    '../../../assets/logos/issd.png',
    '../../../assets/logos/forte.png',
    '../../../assets/logos/isbak.png',


  ]


  partners : string[]= [
    '../../../assets/logos/trusted-systems.png',
    '../../../assets/logos/forte.png',



  ]
  constructor() { }

  ngOnInit(): void {
  }

}


