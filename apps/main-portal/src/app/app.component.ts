import { Component, CUSTOM_ELEMENTS_SCHEMA, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';


@Component({
  imports: [ RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {

  title = 'main-portal';

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  constructor() {
    this.loadButton()
  }



  async loadButton(){
    loadRemoteModule('login', './LoginButton').then(m => {
      this.viewContainer.createComponent(m.LoginButtonComponent);
    })
  }

}
