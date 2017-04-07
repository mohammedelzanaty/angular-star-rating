import { Component } from '@angular/core';
import {StarRatingConfig} from "../../../../src/star-rating-config";
import {starRatingColor} from "../../../../src/star-rating-struct";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  starRatingConfig;

  constructor() {

    this.starRatingConfig = {};

    this.starRatingConfig.id = 1221;
    this.starRatingConfig.rating = 2.7;
    this.starRatingConfig.showHalfStars = true;
    this.starRatingConfig.numOfStars = 7;
    this.starRatingConfig.size = "large";
    this.starRatingConfig.space = "around";
    this.starRatingConfig.staticColor = "negative";
    this.starRatingConfig.disabled  = false;
    this.starRatingConfig.starType = "svg";
    this.starRatingConfig.labelPosition = "right";
    this.starRatingConfig.labelText = "Label text here";
    this.starRatingConfig.labelVisible = true;
    this.starRatingConfig.speed = "slow";
    this.starRatingConfig.direction = "rtl";
    this.starRatingConfig.readOnly = false;
    this.starRatingConfig.getColor = (rating: number, numOfStars: number, staticColor?: starRatingColor) => {
      return staticColor || "ok";
    };
    this.starRatingConfig.getHalfStarVisible=(rating):boolean => {
     return Math.abs(rating % 1) > 0.6;
    };

    //Outputs
    this.starRatingConfig.onClick = ($event) => {
      console.log('onClick $event: ', $event);
    };

    this.starRatingConfig.onRatingChange = ($event) => {
      console.log('onRatingUpdated $event: ', $event);
    };
  }


}