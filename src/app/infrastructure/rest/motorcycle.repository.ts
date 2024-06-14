import {MotorcycleRepository} from "../../domain/motorcycle.repository";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleRestRepository implements MotorcycleRepository {

   url = "http://localhost:8080/api/v1"
  constructor(private httpMotorcycle: HttpClient) {
  }

  getMotorcycle(): Promise<any> {
    const url1 = `${this.url}/motorcycle/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url1)
    )
  }

  getMotorcycleType() : Promise<any> {
     const url = `${this.url}/motorcycle_type/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  createMotorcycle(body: any):Promise<any> {
     const  url = `${this.url}/motorcycle/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url,body)
    )
  }
}
