import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef) { }

  async deleteDepartamento(id: number): Promise<void> {
    await this._service.deleteDepartamentoAsync(id);
    await this.loadDepartamento();
  }

  async loadDepartamento(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadDepartamento();
  }

}
