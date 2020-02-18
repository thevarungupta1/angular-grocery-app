import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories = [];
  public _image_url =  'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(
      x => this.categories = x.data
    )
  }

}
