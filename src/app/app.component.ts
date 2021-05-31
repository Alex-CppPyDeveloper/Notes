import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  notes: any = [];

  name: string = '';
  text: string = '';

  ngOnInit(): void {
   this.notes = [{id: 1, name: 'Тестовая заметка №1', text: 'Как похорошел политех при Собянине', date: 'Mon May 31 2021 00:08:22 GMT+0300 (Москва, стандартное время)'},
                 {id: 2, name: 'Тестовая заметка №2', text: 'Как похорошел политех при Собянине', date: 'Mon May 31 2021 00:08:22 GMT+0300 (Москва, стандартное время)'},
                 {id: 3 ,name: 'Тестовая заметка №3', text: 'Как похорошел политех при Собянине', date: 'Mon May 31 2021 00:08:22 GMT+0300 (Москва, стандартное время)'},
                 {id: 4,name: 'Тестовая заметка №4', text: 'Как похорошел политех при Собянине', date: 'Mon May 31 2021 00:08:22 GMT+0300 (Москва, стандартное время)'}];
  }


  removeNotes(id:any) {
    const foundIdx = this.notes.findIndex((el:any) => el.id === id);
    if (foundIdx !== undefined) { this.notes.splice(foundIdx, 1); }
  }

  getDay(){
    let date = new Date;

    return date;
  }

  addNotes(name: any,text: any) {

    if (name == '' || text == '')
    {
      alert('Что-то не заполнено!')
    } else {

      if (this.notes.length == 0) {
        this.notes.push({
          id: 0,
          name: name,
          text: text,
          date: this.getDay()
        })
      } else {
        this.notes.push({
          id: this.notes[this.notes.length -1].id + 1,
          name: name,
          text: text,
          date: this.getDay()
        })
      }

    }

  }
  resetNote() {
    this.name = '';
    this.text = '';
  }
}
