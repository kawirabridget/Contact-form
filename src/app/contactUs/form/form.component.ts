import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckbox,
    MatRadioButton,
    MatButtonModule,
    MatRadioGroup
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {

  contactForm!: FormGroup;
  queryTypes: string = '';

  constructor (private fb: FormBuilder) {
    this.contactForm =this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
     queryType: ['', Validators.required],
     message: ['', Validators.required],
     consent: ['', Validators.required],
    });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('form data:', this.contactForm.value);
    }
    else {
      this.contactForm.markAllAsTouched(); 
    }
  }

  formSuccess() {
    return this.contactForm.valid && this.contactForm.dirty;
  }

}
