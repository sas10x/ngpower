import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './model/Client';

const phUrl = "https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=FID%20desc&resultOffset=0&resultRecordCount=500&cacheHint=true";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<any[]>(phUrl);
  }
  // getClients() {
  //   return this.http.get<Client[]>(phUrl);
  // }
}
