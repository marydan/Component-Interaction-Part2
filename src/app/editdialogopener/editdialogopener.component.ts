import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NotedialogComponent } from '../notedialog/notedialog.component';

@Component({
  selector: 'app-editdialogopener',
  templateUrl: './editdialogopener.component.html',
  styleUrls: ['./editdialogopener.component.css']
})
export class EditdialogopenerComponent implements OnInit {

  constructor(private dialog:MatDialog,private route:ActivatedRoute) {

const noteid=+this.route.snapshot.paramMap.get('mynoteId');

const notedialog=this.dialog.open(NotedialogComponent,
   {
     data :{paramid:noteid,}
   });



   }

  ngOnInit(): void {
  }

}
