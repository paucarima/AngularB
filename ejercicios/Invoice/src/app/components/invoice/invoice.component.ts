import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
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
