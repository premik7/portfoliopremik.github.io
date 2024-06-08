import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  sendEmail() {
    const templateParams = {
      name: this.contact.name,
      email: this.contact.email,
      message: this.contact.message
    };

    emailjs.send('service_vy233am', 'template_n5ky8ps', templateParams ,'jh1lj5xgkV4pAdGE3')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        this.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again.');
      });
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
