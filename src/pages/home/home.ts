import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Image } from '../../models/image.model';
import { ListScrollPage } from '../list-scroll/listScroll';
import { ListVirtualScrollPage } from '../list-virtual-scroll/listVirtualScroll';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images: Observable<Image>;
  listScroll: any = ListScrollPage;
  listVirtualScroll: any = ListVirtualScrollPage;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient
  ) {}

  ionViewWillEnter() {
    this.images = this.http.get<Image>('https://picsum.photos/list');
  }

  ionViewDidLeave() {

  }

  onScrollEnd(event: any) {
    console.log('on scroll end', event);
  }
}
