import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'



@Component({
  selector: 'app-profil-tc',
  templateUrl: './profil-tc.component.html',
  styleUrls: ['./profil-tc.component.css']
})
export class ProfilTcComponent implements OnInit{

  constructor(private _http: HttpService, private router: Router , private local : LocalService) { }

  userData : any ; 

  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.tcProfil(obj).subscribe((res)=>{
      this.userData = res[0]
      console.log(this.userData)
    })
  }
  updateProfil(){
    this.router.navigateByUrl('/editTc')
  }


  searchProfil(profilName){
    this._http.findProfil({profilName}).subscribe((res)=>{
      this.local.otherProfile = res[0]
      this.router.navigateByUrl('/resultSearch')
    })
  };
}