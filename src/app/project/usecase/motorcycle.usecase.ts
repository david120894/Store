import {MotorcycleUseCase} from "../domain/motorcycle.usecase";
import {Injectable} from "@angular/core";
import {MotorcycleRepository} from "../domain/motorcycle.repository";

@Injectable({
  providedIn : 'root'
})
export class MotorcycleUcase implements MotorcycleUseCase {
  constructor(private readonly motorcycleRepository: MotorcycleRepository) {
  }

  getMotorcycle(): Promise<any> {
    return this.motorcycleRepository.getMotorcycle()
  }

  createMotorcycle(body: any): Promise<any> {
    return this.motorcycleRepository.createMotorcycle(body);
  }

  getMotorcycleType() : Promise<any> {
    return this.motorcycleRepository.getMotorcycleType()
  }

  getMotorcycleTypeById(id: number): Promise<any> {
    return this.motorcycleRepository.getMotorcycleTypeById(id);
  }

  createMotorcycleType(body: any): Promise<any> {
    return this.motorcycleRepository.createMotorcycleType(body);
  }

  updateMotorcycleType(body: any, id : number): Promise<any> {
    return this.motorcycleRepository.updateMotorcycleType(body, id);
  }

  deleteMotorcycleType(id: number): Promise<any> {
    return this.motorcycleRepository.deleteMotorcycleType(id);
  }
}
