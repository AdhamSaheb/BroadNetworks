import { Member } from './../../Models/member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members : Member[] = [
    new Member('Mohammad Saheb', 'https://www.suitdoctors.com/wp-content/uploads/2016/11/dummy-man-570x570.png' , 'CEO and Founder', 'Communications Engineer') ,
    new Member('Ahmad Saheb', 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png', 'Partner' , 'CEO of Trusted Systems') ,
    new Member('Adham Saheb', 'https://zakirhussain.in/wp-content/uploads/2017/12/dummy-person.png', 'Junior Engineer' , 'Web and Mobile App Developer') ,
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
