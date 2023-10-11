import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions} from 'ngx-panzoom';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-zoomable-canvas',
  templateUrl: './zoomable-canvas.component.html',
  styleUrls: ['./zoomable-canvas.component.scss']
})
export class ZoomableCanvasComponent implements OnInit {

  private panZoomAPI: PanZoomAPI;
  private apiSubscription: Subscription;
  @Input() imgPath:string = '';


  width = 256;
  height = this.width;
  panZoomConfig: PanZoomConfig = new PanZoomConfig({
    zoomLevels:10,
    scalePerZoomLevel:1.5,
    neutralZoomLevel:1,
    initialZoomLevel:1,
    initialPanY:0,
    freeMouseWheelFactor:0.002,
    zoomButtonIncrement:5,
    });

  constructor() { }

  ngOnInit(): void {
    this.apiSubscription = this.panZoomConfig.api.subscribe( (api: PanZoomAPI) =>
      this.initAPI(api)
      )
  }

  initAPI(api:PanZoomAPI):void{
    this.panZoomAPI = api
  }
  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
  onResetViewClick(): void{
    this.panZoomAPI.resetView();

  }

}
