import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'notesfile';
import { MynotesService } from '../mynotes.service';
import { MatDialog } from '@angular/material/dialog';
import { NotedialogComponent } from '../notedialog/notedialog.component';
import { MyrouteModule } from '../myroute/myroute.module';
import { MyroutingService } from '../myrouting.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


 @Input()
  notemy : Note;

  constructor(private noteserve : MynotesService,public mydialog: MatDialog,private rouserve : MyroutingService) { }

  ngOnInit(): void {
  }

  openNote()
  {
    let result=this.notemy;

    this.rouserve.openEditdialogcomponent(this.notemy.id);


  }



  showval()
  {

    this.noteserve.deletNote(this.notemy.id);
  //  console.log(this.notemy.text + " " + this.notemy.title);

   

  }



 
}
