import { Component } from '@angular/core';
import { GradableImage } from 'src/app/models/gradable_images';
import data from 'src/assets/fake_data.json'

@Component({
  selector: 'app-grading-interface',
  templateUrl: './grading-interface.component.html',
  styleUrls: ['./grading-interface.component.scss']
})
export class GradingInterfaceComponent {

  activeId = 1;
  listImages: GradableImage[] = data.listImages as GradableImage[];
  confidenceScore: number = -1;
  constructor() {

  }

  getImageSelectorStyle(image: GradableImage) {
    let activeImage = image.id === this.activeId ? 'activeImage' : ''
    return image.status + ' ' + activeImage
  }

  changeActiveImage(image: GradableImage) {
    this.activeId = image.id;
  }


}
