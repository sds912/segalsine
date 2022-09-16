import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  lang: string = "FR";

    langChange: Subject<string> = new Subject<string>();

    constructor()  {
        this.langChange.subscribe((value) => {
            this.lang = value
        });
    }

    toggleLang(value: string) {
        this.langChange.next(value);
    }
}

