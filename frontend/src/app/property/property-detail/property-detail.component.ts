import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private rote: ActivatedRoute, private router: Router) { }

  public propertyId: number;

  ngOnInit() {
    this.propertyId = +this.rote.snapshot.params['id'];
    this.rote.params.subscribe(
      (params) => {
        this.propertyId = +params['id']
      }
    )
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
