import { Component, AfterViewInit } from '@angular/core';
import { MapService } from './map.service';
import * as L from 'leaflet';
import { map } from 'rxjs';
import { PopupService } from '../shared/popups/popup.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map!: L.Map;
  message: string | undefined;
  loading: boolean = true;


  constructor(private mapService: MapService,
    private popupService: PopupService) { }

  private initMap(): void {

    //Basemap urls
    const osm_huminatarian = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const osm_map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const esri_dark_gray_base = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="http://sevices.arcgisonline.com/arcgis/rest/services">ESRI</a> arcgisonline'
    });

    const world_street_map = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC...'
    });

    const world_imagery = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cube, USDA, USGS, AEX...'
    });

    this.map = L.map('map', {
      layers: [osm_huminatarian] // Deafault Basemap
    }).setView([50.43, 30.52], 11);


    let marker: any = null;
    this.map.on("click", e => {
      if (marker !== null) {
        this.map.removeLayer(marker);
      }
      marker = L.marker([e.latlng.lat, e.latlng.lng]).bindPopup(this.popupService.makeUndefinedMarkerPopup(e.latlng.lng.toString(), e.latlng.lat.toString())).addTo(this.map);
    });
    //Initilize basemaps
    const baseLayers = {
      "Open Street Map": osm_map,
      "Osm Huminatarian": osm_huminatarian,
      "Esri Dark Gray Base": esri_dark_gray_base,
      "World Street Map": world_street_map,
      "World Imagery": world_imagery
    }
    L.control.layers(baseLayers).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMap(this.map, this.loading);
    this.loading = false;
    //.subscribe(

    //       (data: any) => {
    //         for (const c of data.features) {
    //           const lon = c.coordinates[0];
    //           const lat = c.coordinates[1];
    //           const marker = L.marker([lat, lon]);

    //           marker.addTo(this.map);
    //         }
    //         // Process data and update the map or other components

    //         // // Example: Update legend content
    //         // const legendElement = document.getElementById('legend');
    //         // if (legendElement) {
    //         //   legendElement.innerHTML = `<h5 id="legendTitle"> WATER CONSUMPTION IN (KL)</h5>`;
    //         //   const grades = [0, 10, 15, 20, 25, 30, 35, 40];
    //         //   for (let i = 0; i < grades.length; i++) {
    //         //     legendElement.innerHTML += `<i style="background:${this.getColor(grades[i] + 1)}"></i> ${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}`;
    //         //   }
    //         // }

    //         // // Example: Update bar chart content
    //         // this.displayhorBarChart(data);

    //         // Set loading to false to display the map and other components
    //         this.loading = false;
    //       },
    //       error => {
    //         console.error('Error fetching data:', error);
    //         this.loading = false;
    //       }
    //     );
  }





  // ngOnInit(): void {
  //   this.initMap();
  //   this.mapService.getMap().subscribe(
  //     (data: any) => {
  //       // Process data and update the map or other components

  //       // // Example: Update legend content
  //       // const legendElement = document.getElementById('legend');
  //       // if (legendElement) {
  //       //   legendElement.innerHTML = `<h5 id="legendTitle"> WATER CONSUMPTION IN (KL)</h5>`;
  //       //   const grades = [0, 10, 15, 20, 25, 30, 35, 40];
  //       //   for (let i = 0; i < grades.length; i++) {
  //       //     legendElement.innerHTML += `<i style="background:${this.getColor(grades[i] + 1)}"></i> ${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}`;
  //       //   }
  //       // }

  //       // // Example: Update bar chart content
  //       // this.displayhorBarChart(data);

  //       // Set loading to false to display the map and other components
  //       this.loading = false;
  //     },
  //     error => {
  //       console.error('Error fetching data:', error);
  //       this.loading = false;
  //     }
  //   );
  // }


}
