import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  private url = "http://localhost:8080/api/v1/motorcycle"
  private url1 = "http://localhost:8080/api/v1/motorcycle_type"

  constructor(private http: HttpClient) { }

  getMotorcycle() {
    return this.http.get(`${this.url}/list`)
  }
  getMotorcycleType() {
    return this.http.get(`${this.url1}/list`)
  }
}
