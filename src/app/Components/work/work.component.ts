import { Service } from './../../Models/service.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  services : Service[] = [
    new Service('Custom Software Solutions','../../../assets/icons/software.svg','Short Description' ),
    new Service('Mobile App Development','../../../assets/icons/mobile.png', `` ),
    new Service('Web Application Development','../../../assets/icons/web.png','Short Description' ),
    new Service('Data Migration Services','../../../assets/icons/data.png','Short Description' ),
    new Service('Consultation','../../../assets/icons/consultation.png','Short Description' ),
    new Service('Network Solutions','../../../assets/icons/network.jpg','Some Longer Description to see what can happen if text is actually long' ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
