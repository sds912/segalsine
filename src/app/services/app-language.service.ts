import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  lang!: string

    langChange: Subject<string> = new Subject<string>();

    constructor()  {
      let l =  localStorage.getItem('selgalsineLang');

      console.log(l)

      if(l != undefined){
        this.lang = l;
      }else{
        localStorage.setItem('selgalsineLang', "FR");
        this.lang = "FR"
      }

        this.langChange.subscribe((value) => {
            this.lang = value
        });
    }

    toggleLang(value: string) {
      localStorage.setItem('selgalsineLang', value);
        this.langChange.next(value);
        window.location.reload();
    }
}

