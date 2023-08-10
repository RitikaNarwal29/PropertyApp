import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import{Routes,RouterModule}from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { RealEstateService } from './services/real-estate.service';
import { Add_propertyComponent } from './Property/Add_property/Add_property.component';
import { PropertyDetailComponent } from './Property/Property-Detail/Property-Detail.component';

const appRoutes: Routes =[
  {path:'', component: PropertyListComponent},
  {path:'rent', component: PropertyListComponent},
  {path:'add-property', component: Add_propertyComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    Add_propertyComponent,
    PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RealEstateService],
  bootstrap: [AppComponent],
})
export class AppModule { }
