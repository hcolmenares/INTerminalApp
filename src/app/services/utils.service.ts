import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(
    private router : Router
  ) { }

  gotTo(url: string):void {
    this.router.navigateByUrl(url);
  }
}
