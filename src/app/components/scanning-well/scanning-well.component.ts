import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommissaryService } from 'src/app/commissary.service';
import { PantryItem } from 'src/app/pantryItem';

@Component({
  selector: 'app-scanning-well',
  templateUrl: './scanning-well.component.html',
  styleUrls: ['./scanning-well.component.css'],
})
export class ScanningWellComponent {
  @Input() scanning?: boolean;
  @Input() currCode?: string;
  @Input() toggleScanning?: () => void;
  @Input() carriagePressed?: () => void;
  @Output() currCodeChange = new EventEmitter();
  @Input() pantryItems?: PantryItem[];

  scanInputArr: string[] = [];

  constructor(private commissaryService: CommissaryService) {}

  pushIntoCurrCodeArr(): void {
    console.log(`this is supposed to log when the scanning clean up scan button is pressed but it doesn't work right now`)
    this.currCode && this.scanInputArr.push(this.currCode);
  }

  beginScanCleanUp(): void {
    if (this.pantryItems) {
      for (let item of this.pantryItems.filter(item => item.inPantry)) {
        if (item.code) {
          if (!this.scanInputArr.includes(item.code) && item.inPantry) {
            let input =
              prompt(`Do you still have the following item in your pantry?
                    ${item.product?.name}`);
            if ('no' == input) {
              this.commissaryService.unstockPantryItem(item).subscribe(data => data);
            } else {
              continue;
            }
          }
        } else {
          let input =
            prompt(`Do you still have the following item in your pantry?
                  ${item.custom?.name}`);
          if ('no' == input) {
            this.commissaryService.unstockPantryItem(item).subscribe(data => data);
          }
        }
      }
    }
  }
}
