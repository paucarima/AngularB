import { Component, Input } from '@angular/core';
import { Company } from '../../model/Company';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',

})
export class CompanyViewComponent {
  //creando componente para llamar hmtl
  @Input()company!:Company
  //input preparado para recibir la información
}
