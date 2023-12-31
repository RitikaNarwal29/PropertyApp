import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Property-Detail',
  templateUrl: './Property-Detail.component.html',
  styleUrls: ['./Property-Detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId : number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params ['id']
      }
    )
  }

  onSelectNext()
  {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
