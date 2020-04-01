import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'notesfile';
import { MynotesService } from '../mynotes.service';

@Component({
  selector: 'app-notedialog',
  templateUrl: './notedialog.component.html',
  styleUrls: ['./notedialog.component.css']
})
export class NotedialogComponent implements OnInit {


  datasource : any;
  notemy  : Note;
  constructor(public dialogobj : MatDialogRef<NotedialogComponent>,
    private noteservice : MynotesService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      
  
    }

    updateRec()
    {
 this.noteservice.editNote(this.notemy).subscribe(
   (res)=>
   console.log(res)
 );
 this.dialogobj.close();
    }
  ngOnInit(): void {
  //  this.notemy=new Note();
    //this.notemy = this.datasource["result"];
  let noteid=this.data["paramid"];
    console.log(noteid);

    this.notemy=this.noteservice.getNotefromId(noteid);

//console.log(this.notemy);
  }

  closedialog()
  {
this.dialogobj.close();
  }

}
