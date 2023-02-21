import { Component, OnInit } from '@angular/core';
import { BarcodeService } from 'src/app/barcode.service';
import { CommissaryService } from 'src/app/commissary.service';
import { PantryItem } from 'src/app/pantryItem';

@Component({
  selector: 'app-pantry-well',
  templateUrl: './pantry-well.component.html',
  styleUrls: ['./pantry-well.component.css'],
})
export class PantryWellComponent implements OnInit {
  currCode: string = '';
  scanning: boolean = false;
  currItem: PantryItem = { inPantry: true };
  pantryItems: PantryItem[] = [];

  constructor(
    private barcodeService: BarcodeService,
    private commissaryService: CommissaryService
  ) {}

  ngOnInit(): void {
    this.getPantry();
  }

  getPantry(): void {
    this.commissaryService.getPantry().subscribe((pantryItems) => {
      this.pantryItems = pantryItems
        .sort((a, b) => {
          if (a.aliasList && b.aliasList) {
            if (a.aliasList?.length > b.aliasList?.length) {
              return -1;
            }
          }
          return 1
        })
        .sort((a, b) => {
          if (a.inPantry > b.inPantry) {
            return 1;
          }
          return -1;
        });
      // console.log(JSON.stringify(pantryItems.filter(item => item.inPantry).map(item => {
      //   if (item.product?.name) {
      //     return item.product.name
      //   } else if (item.custom?.name) {
      //     return item.custom.name
      //   } else {
      //     return "null"
      //   }
      // })))
    });
  }

  addPantryItem(pantryItem: PantryItem): void {
    this.commissaryService
      .addPantryItem(pantryItem)
      .subscribe((pantryItem) => this.pantryItems.push(pantryItem));
  }

  putItemInPantry(pantryItem: PantryItem): void {
    if (pantryItem.inPantry === false) {
      this.commissaryService
        .putPantryItemInPantry(pantryItem)
        .subscribe((pantryItem: PantryItem) => {
          this.pantryItems.forEach((item, i) => {
            if (item.code === pantryItem.code) {
              this.pantryItems[i].inPantry = true;
            }
          });
        });
    }
  }

  toggleScanning() {
    this.scanning = !this.scanning;
  }

  carriagePressed() {
    this.currItem = {
      inPantry: true,
    };

    try {
      this.barcodeService.getItem(this.currCode).subscribe(
        (data: PantryItem) => {
          this.currItem = data;
          let flaggy = true;
          this.pantryItems.forEach((item) => {
            if (item.code == this.currItem.code) {
              this.putItemInPantry(item);
              flaggy = false;
            }
          });

          if (flaggy && this.currItem.hasOwnProperty('code')) {
            this.addPantryItem(this.currItem);
          }

          let audio = new Audio();
          audio.src = '../../assets/audio/pingSound.mp3';
          audio.load();
          audio.play();
        },
        (err) => {
          let audio = new Audio();
          audio.src = '../../assets/audio/errorSound.mp3';
          audio.load();
          audio.play();
        }
      );
    } catch {}

    this.currCode = '';
  }

  deleteItem(pantryItem: PantryItem): void {
    this.pantryItems = this.pantryItems.filter((p) => p !== pantryItem);
    this.commissaryService.deleteItem(Number(pantryItem.id)).subscribe();
  }
}
