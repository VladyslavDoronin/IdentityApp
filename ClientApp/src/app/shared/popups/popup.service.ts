import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCapitalPopup(lon: string, lat: string, color: string): string {
    return `` +
      `<div>lon: ${lon}</div>` +
      `<div>lat: ${lat}</div>` +
      `<div>color: <span class="popupTextColor${color}">${color}</span></div>` +
      `<div>Any data ........</div>`
  }

  makeUndefinedMarkerPopup(lon: string, lat: string): string {
    return `` +
      `<div>lon: ${lon}</div>` +
      `<div>lat: ${lat}</div>`
  }
}
