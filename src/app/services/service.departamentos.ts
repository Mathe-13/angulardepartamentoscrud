import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceDepartamentos {
    url = environment.apiDepartamentos;

    constructor(private _http: HttpClient) { }

    async getDepartamentosAsync(): Promise<Departamento[]> {
        let request = "api/departamentos";
        return firstValueFrom(
            this._http.get<Departamento[]>(this.url + request));
    }

    async createDepartmaneto(departamento: Departamento): Promise<any> {
        //Convertimos el objto recibido a JSON
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        //Incluimos la key de content-type
        header = header.set("content-type", "application/json");
        let request = "api/departamentos";
        return firstValueFrom(
            this._http.post(this.url + request, json, { headers: header })
        );
    }

    async findDepartamentoAsync(id: number): Promise<Departamento> {
        let request = "api/departamentos/" + id;
        return firstValueFrom(this._http.get<Departamento>(this.url + request));
    }

    async updateDepartamentoAsync(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("content-type", "application/json");
        let request = "api/departamentos";
        return firstValueFrom(
            this._http.put(this.url + request, json, { headers: header })
        )
    }
}