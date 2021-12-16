import { Component, OnInit } from '@angular/core';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public travelAppDataArticlesSource1: any = null;
  public travelAppDataArticlesSource2: any = null;
  public travelAppDataArticlesSource3: any = null;
  public travelAppDataArticlesSource4: any = null;
  public travelAppDataSelectedArticles: any = null;

  constructor(
    private travelAppDataService: TravelAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppDataService.getData('Articles Source 1').subscribe(data => this.travelAppDataArticlesSource1 = data);
    this.travelAppDataService.getData('Articles Source 2').subscribe(data => this.travelAppDataArticlesSource2 = data);
    this.travelAppDataService.getData('Articles Source 3').subscribe(data => this.travelAppDataArticlesSource3 = data);
    this.travelAppDataService.getData('Articles Source 4').subscribe(data => this.travelAppDataArticlesSource4 = data);
    this.travelAppDataService.getData('Selected Articles').subscribe(data => this.travelAppDataSelectedArticles = data);
  }
}
