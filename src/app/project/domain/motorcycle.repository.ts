import {Motorcycle} from "./model/motorcycle";
import {Brandcycle} from "./model/brandcycle";
import {Observable} from "rxjs";

export abstract class MotorcycleRepository {

  abstract getMotorcycle(): Promise<Motorcycle>

  abstract createMotorcycle(body: FormData): Promise<any>

  abstract updateMotorcycle(id: number, body: any): Promise<any>

  abstract getMotorcycleById(id: number): Promise<any>

  abstract getMotorcycleByMotorcycleType(id: number): Promise<any>

  abstract getMotorcycleByMotorcycleBrand(id: number): Promise<any>

  abstract getBrandMotorcycle(): Promise<any>

  abstract getBrandMotorcycleById(id: number): Promise<any>

  abstract createBrandMotorcycle(body: Brandcycle): Promise<any>

  abstract updateBrandMotorcycle(id: number, body: Brandcycle): Promise<any>

  abstract getMotorcycleType(): Promise<any>

  abstract getMotorcycleTypeById(id: number): Promise<any>

  abstract createMotorcycleType(body: any): Promise<any>

  abstract updateMotorcycleType(id: number, body: any): Promise<any>

  abstract deleteMotorcycleType(id: number): Promise<any>

  abstract getMediaFile(fileName: string): string

  abstract getProductMotorcycle(): Promise<any>

  abstract getProductMotorcycleById(id: number): Promise<any>

  abstract createProductMotorcycle(body: FormData): Promise<any>

  abstract getFileProduct(fileName: string): string

  abstract getProductMotorcycleType(): Promise<any>

  abstract getProductMotorcycleTypeId(id: number): Promise<any>

  abstract createProductMotorcycleType(body: any): Promise<any>

  abstract updateProductMotorcycleType(body: any, id: number): Promise<any>

  abstract getProductMotorcycleByType(id: number): Promise<any>

}
