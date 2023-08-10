import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Add_property',
  templateUrl: './Add_property.component.html',
  styleUrls: ['./Add_property.component.css']
})
export class Add_propertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
onBack()
{
this.router.navigate(["/"]);
}
}
