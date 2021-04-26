import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board.model';
import { Column } from '../model/column.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  // board: Board = new Board('Test Board', [
  //   new Column('Ideas', [
  //     "Some random idea",
  //     "This is another random idea",
  //     "build an awesome application"
  //   ]),
  //   new Column('Research', [
  //     "Lorem ipsum",
  //     "foo",
  //     "This was in the 'Research' column"
  //   ]),
  //   new Column('Todo', [
  //     'Get to work',
  //     'Pick up groceries',
  //     'Go home',
  //     'Fall asleep'
  //   ]),
  //   new Column('Done', [
  //     'Get up',
  //     'Brush teeth',
  //     'Take a shower',
  //     'Check e-mail',
  //     'Walk dog'
  //   ])
  // ]);

  board: Board = new Board;
  column: Column= new Column;

  
  ngOnInit(): void {
    this.service.getBoardData().subscribe(data=>
      {
        this.board=data;
       // this.column=data.columns;
        console.log(this.board);
      });
      
  }

  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
