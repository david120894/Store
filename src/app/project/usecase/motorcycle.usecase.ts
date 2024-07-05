import {MotorcycleUseCase} from "../domain/motorcycle.usecase";
import {Injectable} from "@angular/core";
import {MotorcycleRepository} from "../domain/motorcycle.repository";
import {Motorcycle} from "../domain/model/motorcycle";
import {Brandcycle} from "../domain/model/brandcycle";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleUcase implements MotorcycleUseCase {
  constructor(private readonly motorcycleRepository: MotorcycleRepository) {
  }

  getMotorcycle(): Promise<any> {
    return this.motorcycleRepository.getMotorcycle()
  }

  getMotorcycleById(id: number): Promise<any> {
    return this.motorcycleRepository.getMotorcycleById(id);
  }

  createMotorcycle(body: FormData): Promise<any> {
    return this.motorcycleRepository.createMotorcycle(body);
  }

  updateMotorcycle(id: number, body: any): Promise<any> {
    return this.motorcycleRepository.updateMotorcycle(id, body);
  }

  getBrandMotorcycle(): Promise<any> {
    return this.motorcycleRepository.getBrandMotorcycle()
  }

  getBrandMotorcycleById(id: number): Promise<any> {
    return this.motorcycleRepository.getBrandMotorcycleById(id);
  }

  createBrandMotorcycle(body: Brandcycle): Promise<any> {
    return this.motorcycleRepository.createBrandMotorcycle(body);
  }

  updateBrandMotorcycle(id: number, body: Brandcycle): Promise<any> {
    return this.motorcycleRepository.updateBrandMotorcycle(id, body);
  }

  getMotorcycleType(): Promise<any> {
    return this.motorcycleRepository.getMotorcycleType()
  }

  getMotorcycleTypeById(id: number): Promise<any> {
    return this.motorcycleRepository.getMotorcycleTypeById(id);
  }

  createMotorcycleType(body: any): Promise<any> {
    return this.motorcycleRepository.createMotorcycleType(body);
  }

  updateMotorcycleType(body: any, id: number): Promise<any> {
    return this.motorcycleRepository.updateMotorcycleType(body, id);
  }

  deleteMotorcycleType(id: number): Promise<any> {
    return this.motorcycleRepository.deleteMotorcycleType(id);
  }

  getMediaFile(fileName: string): string {
    return this.motorcycleRepository.getMediaFile(fileName)
  }

  getProductMotorcycle(): Promise<any> {
    return this.motorcycleRepository.getProductMotorcycle()
  }

  createProductMotorcycle(body: FormData): Promise<any> {
    return this.motorcycleRepository.createProductMotorcycle(body)
  }

 getProductMotorcycleById(id: number): Promise<any> {
    return this.motorcycleRepository.getProductMotorcycleById(id);
  }

  getFileProduct(fileName: string): string {
    return this.motorcycleRepository.getFileProduct(fileName)
  }

  getProductMotorcycleType(): Promise<any> {
    return this.motorcycleRepository.getProductMotorcycleType()
  }
}
