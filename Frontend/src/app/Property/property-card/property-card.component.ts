import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl:  'property-card.component.html',
  styleUrls: ['property-card.component.css']
}

)
export class PropertyCardComponent{
  property: any = {
    "id" : 1,
    "name": "Galaxy House",
    "type": "flat",
    "price": 30000
  }
}
