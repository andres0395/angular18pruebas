import { Component, computed, effect, Injector, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { OtherComponentComponent } from './other-component/other-component.component';
import { ServidorService } from './servidor.service';
// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,OtherComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  formulario = this.formBuilder.nonNullable.group({
    hola:[''],
    hola2:['23'],
    hola3:['']
  });
  getTodos = signal<any[]>([]);
  otherCom = signal(false);
  constructor(private formBuilder:FormBuilder, private servidor:ServidorService,private injector:Injector){}
  async ngOnInit() {
    this.formulario.get('hola')?.events.subscribe(event => {
      console.log(event);
    });
    const getTodos:any =(this.servidor.getTodos());
    effect(()=>{
      if(!!getTodos().length){

        getTodos().forEach((element:any) => {
          this.getTodos().push(element)
        });
      }
    },{injector:this.injector})
  }
  limpiar(){
    this.formulario.reset();
  }
}
