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
}
