import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.showToast('contactSuccessToast');
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    } else {
      this.contactForm.markAllAsTouched();
      this.showToast('contactErrorToast');
    }
  }

  async showToast(toastId: string): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const toastEl = this.elRef.nativeElement.querySelector(`#${toastId}`);
      if (toastEl) {
        const { Toast } = await import('bootstrap');
        const toast = new Toast(toastEl);
        toast.show();
      }
    }
  }

  resetForm(): void {
    this.contactForm.reset();
  }
}
