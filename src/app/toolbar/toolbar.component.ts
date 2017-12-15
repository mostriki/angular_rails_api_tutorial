import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {Angular2TokenService} from "angular2-token";

declare var $:any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit() {

  }

  openSideNav(){
  console.log("fired")
  $( document ).ready(function(){
    $(".button-collapse").sideNav();
  })
}

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

}
