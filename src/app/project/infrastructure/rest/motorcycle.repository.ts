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

  getMotorcycleType(): Promise<any> {
    const url = `${this.url}/motorcycle_type/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  getMotorcycleById(id:number): Promise<any> {
    const url = `${this.url}/motorcycle/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  updateMotorcycle(id: number, body: any): Promise<any> {
    const url = `${this.url}/motorcycle/update/${id}`
    return lastValueFrom(
      this.httpMotorcycle.put(url,body)
    )
  }

  getMotorcycleTypeById(id: number): Promise<any> {
    const url = `${this.url}/motorcycle_type/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  createMotorcycle(body: any): Promise<any> {
    const url = `${this.url}/motorcycle/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url, body)
    )
  }

  createMotorcycleType(body: any): Promise<any> {
    const url = `${this.url}/motorcycle_type/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url, body)
    )
  }

  updateMotorcycleType(id: number, body: any): Promise<any> {
    const url = `${this.url}/motorcycle_type/update/${id}`
    return lastValueFrom(
      this.httpMotorcycle.put(url, body)
    )
  }

  deleteMotorcycleType(id: number): Promise<any> {
    const url = `${this.url}/motorcycle_type/delete/${id}`
    return lastValueFrom(
      this.httpMotorcycle.delete(url)
    )
  }

  getMediaFile(fileName: string): Promise<any> {
    const url = `${this.url}/motorcycle/image/${fileName}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }
}
