import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-crete-motorcycletype',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modal-crete-motorcycletype.component.html',
  styleUrl: './modal-crete-motorcycletype.component.css'
})
export class ModalCreteMotorcycletypeComponent implements OnInit{

  constructor(public activeModal: NgbActiveModal) {
  }
  formMotorcycleType: FormGroup = new FormGroup({
    nameMotorcycleType: new FormControl(null),
  })

  ngOnInit(): void {
  }

  get form() {
    return this.formMotorcycleType.controls
  }

  saveMotorcycleType() {

  }

  updateMotorcycleType() {}

  deleteMotorcycleType() {}
}
