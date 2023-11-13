import { Component, AfterViewInit } from '@angular/core';
import { MapService } from './map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map: any;
  message: string | undefined;
  loading: boolean = true;

  constructor(private mapService: MapService) { }

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
