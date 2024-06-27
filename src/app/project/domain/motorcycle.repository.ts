import {Motorcycle} from "./model/motorcycle";
import {Brandcycle} from "./model/brandcycle";

export abstract class MotorcycleRepository {

  abstract getMotorcycle(): Promise<Motorcycle>

  abstract createMotorcycle(body: Motorcycle): Promise<any>

  abstract updateMotorcycle(id: number, body: any): Promise<any>

  abstract getMotorcycleById(id:number): Promise<any>

  abstract getBrandMotorcycle(): Promise<any>

  abstract getBrandMotorcycleById(id: number): Promise<any>

  abstract createBrandMotorcycle(body: Brandcycle): Promise<any>

  abstract updateBrandMotorcycle(id: number, body: Brandcycle): Promise<any>


  abstract getMotorcycleType(): Promise<any>

  abstract getMotorcycleTypeById(id: number): Promise<any>

  abstract createMotorcycleType(body: any): Promise<any>

  abstract updateMotorcycleType(id: number, body: any): Promise<any>

  abstract deleteMotorcycleType(id: number): Promise<any>

  abstract getMediaFile(fileName:string): Promise<any>

}
