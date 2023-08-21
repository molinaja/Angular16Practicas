import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzServiceService } from '../../services/dbz.service.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor(public dbzService : DbzServiceService) {

  }

}
