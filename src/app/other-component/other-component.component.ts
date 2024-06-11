import { JsonPipe } from '@angular/common';
import { Component, effect, inject, Injector, model, OnInit, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
// @ts-ignore
@Component({
  selector: 'app-other-component',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './other-component.component.html',
  styleUrl: './other-component.component.css'
})
export class OtherComponentComponent implements OnInit {
  private injector = inject(Injector)
  data = signal('');
  checked = model.required<boolean>();
  bol = signal(true)
  todos = model<any[]>([]);
  ngOnInit(): void {
    effect(()=>{
      untracked(()=>{
        this.bol.set(false)
        console.log(this.data());
      })

    },{injector:this.injector})
  }
  toggle() {
    this.checked.set(!this.checked());
  }
}
