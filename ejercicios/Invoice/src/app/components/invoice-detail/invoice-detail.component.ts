import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';

@Component({
  selector: 'invoice-detail',
  standalone: true,
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.component.html',

})
export class InvoiceDetailComponent {
  @Input()items!:InvoiceItem[]
}
