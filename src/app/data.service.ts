import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './model/Client';
import { Case } from './model/Case';

const phUrl = "https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=FID%20desc&resultOffset=0&resultRecordCount=500&cacheHint=true";
const phUri = "https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=FID%20desc&resultOffset=0&resultRecordCount=500&cacheHint=true";
const url = "https://covid19.mathdro.id/api/daily/4-22-2020";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<any[]>(phUrl);
  }
  getDatas() {
    return this.http.get<any[]>(url);
  }

  // getGrades() {
    //   return this.http.get<Grade[]>(gradesUrl);
    // }
}
