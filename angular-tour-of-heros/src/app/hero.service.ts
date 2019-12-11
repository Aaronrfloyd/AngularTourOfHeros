import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { Heros } from './mock-hero';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) {}

    getHeros(): Observable<Hero[]> {
      //TODO: send the message_AFTER_FETCHING THE HEROS
      this.messageService.add('HeroService: fetched heros');
  
      return of(Heros);
    }
    
   
}
