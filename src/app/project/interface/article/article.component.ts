import {Component, Input, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {SafeUrl} from "@angular/platform-browser";
import {Motorcycle} from "../../domain/model/motorcycle";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgSelectModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  dataMotorcycle: Motorcycle [] = []
  motorcycleBrand: any
  dataMotorcycleType: any
  @Input() refreshView = ''

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              private readonly activateRoute: ActivatedRoute) {
  }

  formGroupFilter: FormGroup = new FormGroup({
    motorcycleType : new FormControl(null)
  })

  get form() {
    return this.formGroupFilter.controls
  }

  async ngOnInit() {
    await this.getMotorcycle()
    // await this.getMotorcycleType()
    await this.getParams()
  }

  async getParams() {
    this.activateRoute.queryParams.subscribe(async params => {
      this.motorcycleBrand = params['name']
      console.log(this.motorcycleBrand)
      this.getMotorcycleBrand(this.motorcycleBrand)
    })
  }

  async getMotorcycleBrand(name: string) {
    const data = await this.motorcycleUseCase.getBrandMotorcycle()
    console.log(data)
     data.find(async (item: any) => {
       if (item.brandcycle === name) {
         console.log(item)
         this.dataMotorcycle = []
         this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycleByMotorcycleBrand(item.id)
       }

     })
  }
  async getFilterMotorcycleType(){
    const id = this.form['motorcycleType'].value
    if(id){
      this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycleByMotorcycleType(id)
    } else {
      await this.getMotorcycle()
    }
  }
  async getMotorcycleType() {
    this.dataMotorcycleType= await this.motorcycleUseCase.getMotorcycleType()
  }
  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle();
  }

  getImage(fileName?: string) {
    if (fileName) {
      return this.motorcycleUseCase.getMediaFile(fileName)
    }
    return null
  }
}
