import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../services/chat.service'; // ajusta el path si es necesario


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
 
  formData = {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: '',
    campo6: '',
    campo7: '',
    campo8: ''
  };

  formDataList: any[] = [];

  constructor(private chatService: ChatService) {}


  ngOnInit() {

  }

  submitForm() {
  if (this.formValid()) {
    this.chatService.saveFormData({ ...this.formData });
    this.formDataList.push({ ...this.formData });
    this.resetForm();
  }
}


  resetForm() {
    this.formData = {
      campo1: '',
      campo2: '',
      campo3: '',
      campo4: '',
      campo5: '',
      campo6: '',
      campo7: '',
      campo8: ''
    };
  }

  formValid() {
    return Object.values(this.formData).every(value => value.trim() !== '');
  }
}
