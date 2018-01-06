import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import {} from '@types/googlemaps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) 
  
{ 
console.log("Am ajuns in constructorul de pe pagina home");
  }


showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Îți mulțumim!',
      subTitle: 'Evenimentul a fost adăugat cu succes!',
      buttons: ['OK']
    });
    alert.present();
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


  

