/**
 * API para el chaco
 * apis para motocicletas
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Brandcycle } from './brandcycle';
import { MotorcycleType } from './motorcycleType';


export interface Motorcycle { 
    id?: number;
    model?: string;
    year?: number;
    color?: string;
    price?: string;
    image?: string;
    brandcycle?: Brandcycle;
    motorcycleType?: MotorcycleType;
}

