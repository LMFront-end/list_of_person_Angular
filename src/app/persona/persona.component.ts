import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //De un componente padre a un componente hijo
  @Input() persona: Persona;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
