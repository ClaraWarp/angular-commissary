import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommissaryService } from 'src/app/commissary.service';
import { PantryItem } from 'src/app/pantryItem';

@Component({
  selector: 'app-pantry-item-card',
  templateUrl: './pantry-item-card.component.html',
  styleUrls: ['./pantry-item-card.component.css'],
})
export class PantryItemCardComponent {
  @Input() pantryItem: PantryItem = {inPantry: true};
  @Output() emitDelete = new EventEmitter<PantryItem>();

  constructor(private commissaryService: CommissaryService) {}

  toggleAlias() {
    if (prompt('type "alias" to toggle the pantry item aliasList') == 'alias') {
      let tarAlias = prompt("type the alias that you want to toggle")
      // so here I have to go to the commissary Service and add a function to toggle alias, then I'll subscribe to that here
    }
  }

  changeImage() {
    if (prompt('type "image" to change the pantry item picture') == 'image') {
      let newSrc = prompt('please enter url for new image src')
      newSrc && this.commissaryService.changePantryImage(this.pantryItem, newSrc).subscribe(data => {
        this.pantryItem = data
      })
    }
  }

  deleteItem() {
    if (prompt('type "confirm" to delete pantry item') == 'confirm') {
      this.emitDelete.emit(this.pantryItem);
    }
  }

  toggleStockItem() {
    if (this.pantryItem?.inPantry) {
      this.commissaryService
        .unstockPantryItem(this.pantryItem)
        .subscribe((pantryItem: PantryItem) => {
          this.pantryItem = pantryItem;
        });
    } else if (this.pantryItem) {
      this.commissaryService
        .putPantryItemInPantry(this.pantryItem)
        .subscribe((pantryItem: PantryItem) => {
          this.pantryItem = pantryItem;
        });
    }
  }
}
