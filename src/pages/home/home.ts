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
  		center: new google.maps.LatLng(-34.397, 150.644),
  		zoom: 8
  	};
  	let map = new google.maps.Map(mapCanvas, mapOptions);
  }

}
