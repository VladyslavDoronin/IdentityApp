import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet'
import { PopupService } from 'src/app/shared/popups/popup.service';

const iconGreenUrl = 'assets/images/light-green.png';
const iconGreen = L.icon({
  iconUrl: iconGreenUrl,
  iconSize: [25, 40],
  popupAnchor: [-0, -10]
});

const iconRedUrl = 'assets/images/light-red.png';
const iconRed = L.icon({
  iconUrl: iconRedUrl,
  iconSize: [25, 40],
  popupAnchor: [-0, -10]
});

const iconYellowUrl = 'assets/images/light-yellow.png';
const iconYellow = L.icon({
  iconUrl: iconYellowUrl,
  iconSize: [25, 40],
  popupAnchor: [-0, -10]
});


// const redIcon = new L.Icon({
//   iconRetinaUrl: require('../img/light-yellow.png'),
//   iconSize: [25, 40],
//   popupAnchor: [-0, -10],
// });

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient,
    private popupService: PopupService) { }

  getMap(map: any, loading: boolean) {
    return this.http.get(`${environment.appUrl}map/get-map`)
      .subscribe({
        next: (res: any) => {

          for (const c of res) {
            const conv_coord = JSON.parse(c.coordinates);
            const lon = conv_coord[0];
            const lat = conv_coord[1];

            var color: string = JSON.parse(c.color);
            const marker = L.marker([lat, lon]);
            if (color === 'red') {
              marker.setIcon(iconRed);
            }
            else if (color === 'green') {
              marker.setIcon(iconGreen);
            }
            else {
              marker.setIcon(iconYellow);;
            }
            marker.bindPopup(this.popupService.makeCapitalPopup(lon, lat, color));
            marker.addTo(map);
          }
          loading = false;
        },
        error: error => {
          console.error('Error fetching data:', error);
          loading = false;
        }
      });
  }

}
