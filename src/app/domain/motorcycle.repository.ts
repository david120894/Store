
export abstract class MotorcycleRepository {

  abstract getMotorcycle():Promise<any>

  abstract createMotorcycle(body: any):Promise<any>

  abstract getMotorcycleType() : Promise<any>
}
