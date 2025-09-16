import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  isSending = false;
  isSent = false;
  isError = false;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.isSending = true;
    this.isError = false;
    this.isSent = false;

    try {
      await emailjs.send(
        'service_bmcoga5', 
        'template_tt4qthg', 
        this.contactForm.value, 
        'gvEcJXZE1q8ebraiJ'
      );
      
      this.isSent = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.isSent = false;
      }, 5000);
      
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      this.isError = true;
      
      setTimeout(() => {
        this.isError = false;
      }, 5000);
    } finally {
      this.isSending = false;
    }
  }
}