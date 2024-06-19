export abstract class MotorcycleRepository {

  abstract getMotorcycle(): Promise<any>

  abstract createMotorcycle(body: any): Promise<any>

  // abstract updateMotorcycle(body: any): Promise<any>
  //
  // abstract deleteMotorcycle(body: any): Promise<any>

  abstract getMotorcycleType(): Promise<any>

  abstract getMotorcycleTypeById(id: number): Promise<any>

  abstract createMotorcycleType(body: any): Promise<any>

  abstract updateMotorcycleType(id: number, body: any): Promise<any>

  abstract deleteMotorcycleType(id: number): Promise<any>
}
