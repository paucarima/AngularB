import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../model/Invoice';

//servicio visible para todo o singleton, el decorador lo permite
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  //invoice se inicializa con los datos de invoiceData
  private invoice:Invoice=invoiceData;
  

  constructor() { }

  //metodo que devuelvo los datos almacenados en invoice
  getInvoice():Invoice{
    return this.invoice;
  }
}
