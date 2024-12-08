import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cvdto } from '../../Modal/cvdto';
import { ActivatedRoute, Router } from '@angular/router';
import { CVServiceService } from '../../Services/cvservice.service';

@Component({
  selector: 'app-create-cv',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-cv.component.html',
  styleUrl: './create-cv.component.css',
})
export class CreateCvComponent implements OnInit {
  form!: FormGroup;
  id: number = 0;
  dto!: Cvdto;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: CVServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.initForm();
    if (this.id && this.id > 0) {
      this.loadData(this.id);
    }
  }
  private initForm(): void {
    this.form = this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      companyField: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      cityName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
    });
  }
  private loadData(id: number): void {
    // Use your service to fetch the data
    this.service.get(id).subscribe(
      (data) => {
        // Populate the form with the fetched data
        this.dto = data;
        this.form.patchValue({
          id: data.id,
          name: data.name,
          companyName: data.companyName,
          city: data.city,
          companyField: data.companyField,
          fullName: data.fullName,
          cityName: data.cityName,
          email: data.email,
          mobileNumber: data.mobileNumber,
        });
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formValue: Cvdto = this.form.value;
      if (this.id && this.id > 0) {
        this.service.put(formValue).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.service.post(formValue).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
