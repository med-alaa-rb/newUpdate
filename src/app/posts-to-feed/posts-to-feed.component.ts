import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'

@Component({
  selector: 'app-posts-to-feed',
  templateUrl: './posts-to-feed.component.html',
  styleUrls: ['./posts-to-feed.component.css']
})
export class PostsToFeedComponent implements OnInit {
  

  constructor(private _http: HttpService, private router: Router , private local : LocalService) { }
  owner : any ; 
  email : any ; 
  imageUrl: any;

  ngOnInit(): void {
    this.owner = this.local.companyInfo.owner ;
    this.email = this.local.companyInfo.email 
    console.log(this.local.companyInfo)
   }

  collect([]){
    this._http.savePosts(arguments).subscribe((data)=>{
      console.log('posts sended')
    })
  }
  imgUpload(img) {
    console.log("IMG FROM VER==> ", img.target.files[0]);
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append("img", img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this._http.uploadImg(formData).subscribe((resp) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.imageUrl = resp["msg"].url;
    });
  }
}
