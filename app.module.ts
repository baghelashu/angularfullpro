import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { materialmodule } from 'src/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{ToastrModule} from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { UserComponent } from './userlisting/user.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserlistingComponent } from './userlisting/userlisting.component'

@NgModule({
  declarations: [
    AppComponent,
    AfterloginComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
  
    UpdatepopupComponent,
    UserlistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialmodule,
    ReactiveFormsModule,
     HttpClientModule,
     ToastrModule.forRoot()
     

     


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
