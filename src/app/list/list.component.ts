import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  displayedColumns: string[] = ['Country_Region', 'Last_Update', 'Confirmed', 'Deaths', 'Recovered', 'Active'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

// "fips": "",
// "admin2": "",
// "provinceState": "",
// "countryRegion": "Iran",
// "lastUpdate": "2020-04-05 23:06:26",
// "lat": "32.427908",
// "long": "53.68804599999999",
// "confirmed": "58226",
// "deaths": "3603",
// "recovered": "19736",
// "active": "34887",
// "combinedKey": "Iran"

/* Static data */ 
export interface PeriodicElement {
  Country_Region: string;
  Last_Update: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "Country_Region": "Japan",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 2617,
    "Deaths": 63,
    "Recovered": 514,
    "Active": 2040,
  },
  {
    "Country_Region": "Korea, South",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 10062,
    "Deaths": 174,
    "Recovered": 6021,
    "Active": 3867,
  },
  {
    "Country_Region": "Thailand",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 1978,
    "Deaths": 19,
    "Recovered": 612,
    "Active": 1347,
  },
  {
    "Country_Region": "India",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 2567,
    "Deaths": 72,
    "Recovered": 192,
    "Active": 2303,
  },
  {
    "Country_Region": "Singapore",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 1114,
    "Deaths": 5,
    "Recovered": 282,
    "Active": 827,
  },
  {
    "Country_Region": "Taiwan",
    "Last_Update": "03/04/2020 08:10",
    "Confirmed": 348,
    "Deaths": 5,
    "Recovered": 50,
    "Active": 293,
  },
  {
    "Country_Region": "Philippines",
    "Last_Update": "03/04/2020 22:46",
    "Confirmed": 3018,
    "Deaths": 136,
    "Recovered": 52,
    "Active": 2830,
  }
 ];

