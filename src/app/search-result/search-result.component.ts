import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private local : LocalService , private _http : HttpService) { }
  userData: any; 
  ngOnInit(): void {
    console.log(this.local.otherProfile)
    this.userData = this.local.otherProfile
  }
}
