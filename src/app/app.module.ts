import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoursedescComponent } from './coursedesc/coursedesc.component';
import { MycartComponent } from './mycart/mycart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarInsideComponent } from './navbar-inside/navbar-inside.component';
import { CppComponent } from './cpp/cpp.component';
import { CComponent } from './c/c.component';
import { DsComponent } from './ds/ds.component';
import { MeanComponent } from './mean/mean.component';
import { AwpComponent } from './awp/awp.component';
import { PythonComponent } from './python/python.component';
import { DbtComponent } from './dbt/dbt.component';
import { CsharpComponent } from './csharp/csharp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ForgotpasswordComponent,
    CoursesComponent,
    NavbarComponent,
    FooterComponent,
    CoursedescComponent,
    MycartComponent,
    PagenotfoundComponent,
    ProfileComponent,
    NavbarInsideComponent,
    CppComponent,
    CComponent,
    DsComponent,
    MeanComponent,
    AwpComponent,
    PythonComponent,
    DbtComponent,
    CsharpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
