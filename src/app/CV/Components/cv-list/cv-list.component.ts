import { Component, OnInit } from '@angular/core';
import { CVServiceService } from '../../Services/cvservice.service';
import { Cvdto } from '../../Modal/cvdto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css',
})
export class CvListComponent implements OnInit {
  list: Cvdto[] = [];
  constructor(public service: CVServiceService) { }
  ngOnInit(): void {
    this.loadData();
  }
loadData()
{
  this.service.getAll().subscribe(res=>{
    this.list = res;
  })
}
  deleteCV(id: number)
  {
    this.service.delete(id).subscribe(()=>{
      this.loadData();
    });    
  }
}
