import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  message: any; 
  otherProfile : any ;
  companyInfo : any = {};
  constructor() { }

}
