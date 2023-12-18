import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power:10,
    id: uuid()
  }]
  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();



  onDeleteCharacter(id ?:string):void{

    //TODO
    if(!id)return;
      this.onDelete.emit(id);

  }
 }
