import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.css']
})
export class CreatPostComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  fileToUpload: FileList = null;
  handleFileInput(files: FileList) {
    
    this.fileToUpload = files;
    console.log(this.fileToUpload);
    
  }
}
