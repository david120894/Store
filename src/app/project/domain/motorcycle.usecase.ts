
export abstract class MotorcycleUseCase {

  abstract getMotorcycle():Promise<any>

  abstract createMotorcycle(body: any):Promise<any>

  abstract getMotorcycleType() : Promise<any>
}
