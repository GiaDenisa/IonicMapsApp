import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {} from '@types/googlemaps';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) 
  
{ 
console.log("Am ajuns in constructorul de pe pagina home");
  }




  ngAfterViewInit() {

    let map = document.getElementById('map');
    console.log(map);
    this.initMap(map);
  }

  initMap(mapCanvas)
  {
    var mapOptions = {
      center: new google.maps.LatLng(44.439663, 26.096306),
      zoom: 12
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
  }

   }


  

