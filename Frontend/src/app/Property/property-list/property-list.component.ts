
import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../services/real-estate.service';
import { IProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];

constructor(private RealEstateService: RealEstateService){}
ngOnInit(): void{
  this.RealEstateService.getAllProperties().subscribe(
    data=>
    {
      this.properties = data;
      console.log(data);
    },
    )

}

}
