import { Injectable, Injector, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient, private injector:Injector) { }
  getTodos(){
    return toSignal(this.http.get(this.url+'todos'),{initialValue:[],injector:this.injector});
  }
}
