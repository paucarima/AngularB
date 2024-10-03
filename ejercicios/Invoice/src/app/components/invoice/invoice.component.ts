import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { CustomerViewComponent } from "../customer-view/customer-view.component";
import { InvoiceDetailComponent } from "../invoice-detail/invoice-detail.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetailComponent],
  templateUrl: './invoice.component.html',

})

export class InvoiceComponent implements OnInit{
    //COMPONENTE PARA LLAMAR  
    invoice!:Invoice;
    //se realiza una instancia  a service como componente  con InvoiceService 
    constructor(private service:InvoiceService){
      ///
    }
  ngOnInit(): void {
    //metodo vacio que llama los datos de factura y se guarda en invoice                
    this.invoice=this.service.getInvoice();
  }
}
