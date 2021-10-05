import { Component, OnInit } from '@angular/core';
import { ColorModel } from '../models/color-model';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  color!:  ColorModel

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {

    this.fetchNewColor();
  }

  refresh(){
    this.fetchNewColor();
  }

  fetchNewColor(){
    this.colorService.getRandomColor().subscribe((data)=>{
      if(data){
        this.color = new ColorModel(data.id, data.uid, data.hex_value, data.color_name)
      }
    })
  }

}
