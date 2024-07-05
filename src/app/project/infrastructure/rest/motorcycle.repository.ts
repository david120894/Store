import {MotorcycleRepository} from "../../domain/motorcycle.repository";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {lastValueFrom, Observable} from "rxjs";
import {Motorcycle} from "../../domain/model/motorcycle";
import {Brandcycle} from "../../domain/model/brandcycle";

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

  getMotorcycleById(id: number): Promise<any> {
    const url = `${this.url}/motorcycle/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  createMotorcycle(body: FormData): Promise<any> {
    const url = `${this.url}/motorcycle/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url, body)
    )
  }

  updateMotorcycle(id: number, body: any): Promise<any> {
    const url = `${this.url}/motorcycle/update/${id}`
    return lastValueFrom(
      this.httpMotorcycle.put(url, body)
    )
  }

  getBrandMotorcycle(): Promise<any> {
    const url = `${this.url}/brandcycle/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  getBrandMotorcycleById(id: number): Promise<any> {
    const url = `${this.url}/brandcycle/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  createBrandMotorcycle(body: Brandcycle): Promise<any> {
    const url = `${this.url}/brandcycle/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url, body)
    )
  }

  updateBrandMotorcycle(id: number, body: Brandcycle): Promise<any> {
    const url = `${this.url}/brandcycle/update/${id}`
    return lastValueFrom(
      this.httpMotorcycle.put(url, body)
    )
  }

  getMotorcycleType(): Promise<any> {
    const url = `${this.url}/motorcycle_type/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  getMotorcycleTypeById(id: number): Promise<any> {
    const url = `${this.url}/motorcycle_type/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
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

  getMediaFile(fileName: string): string {
    return `${this.url}/motorcycle/image/${fileName}`
  }

  getProductMotorcycle(): Promise<any> {
    const url = `${this.url}/product/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  getProductMotorcycleById(id: number): Promise<any> {
    const url = `${this.url}/product/view/${id}`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }

  createProductMotorcycle(body: FormData): Promise<any> {
    const url = `${this.url}/product/create`
    return lastValueFrom(
      this.httpMotorcycle.post(url, body)
    )
  }

  getFileProduct(fileName: string): string {
    return `${this.url}/product/image/${fileName}`
  }

  getProductMotorcycleType(): Promise<any> {
    const url = `${this.url}/product_type/list`
    return lastValueFrom(
      this.httpMotorcycle.get(url)
    )
  }
}
