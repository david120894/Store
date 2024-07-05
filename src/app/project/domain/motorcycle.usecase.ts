import {Motorcycle} from "./model/motorcycle";
import {Brandcycle} from "./model/brandcycle";

export abstract class MotorcycleUseCase {

  abstract getMotorcycle(): Promise<any>

  abstract createMotorcycle(body: FormData): Promise<any>

  abstract updateMotorcycle(id: number, body: any): Promise<any>

  abstract getMotorcycleById(id: number): Promise<any>

  abstract getBrandMotorcycle(): Promise<any>

  abstract getBrandMotorcycleById(id: number): Promise<any>

  abstract createBrandMotorcycle(body: Brandcycle): Promise<any>

  abstract updateBrandMotorcycle(id: number, body: Brandcycle): Promise<any>

  abstract getMotorcycleType(): Promise<any>

  abstract getMotorcycleTypeById(id: number): Promise<any>

  abstract createMotorcycleType(body: any): Promise<any>

  abstract updateMotorcycleType(id: number, body: any): Promise<any>

  abstract getMediaFile(fileName: string): string

  abstract deleteMotorcycleType(id: number): Promise<any>

  abstract getProductMotorcycle(): Promise<any>

  abstract getProductMotorcycleById(id: number): Promise<any>

  abstract createProductMotorcycle(body: FormData): Promise<any>

  abstract getFileProduct(fileName: string): string

  abstract getProductMotorcycleType(): Promise<any>

}
