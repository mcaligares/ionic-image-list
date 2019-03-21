import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../../models/image.model';

@Component({
  selector: 'page-list-virtual-scroll',
  templateUrl: 'listVirtualScroll.html'
})
export class ListVirtualScrollPage {

  images: Array<Image>;

  constructor(public http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get<Array<Image>>('https://picsum.photos/list').toPromise().then((images: Array<Image>) => {
      this.images = images.map(img => new Image(img));
    });
  }

}
