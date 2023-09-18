import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = ''
  @Input()
  contentTitle:string = ''
  @Input()
  contentDescription = ''
  private id:string | null = '0'
  @Input()
  linkToVisit = ''

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
     this.id = value.get('id')
      )
      this.setValuesTocomponent(this.id)
  }

  setValuesTocomponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]
    console.log(result);

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.linkToVisit = result.linkToVisit
  }

}
