import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { CppComponent } from './cpp/cpp.component';
import { CComponent } from './c/c.component';
import { DsComponent } from './ds/ds.component';
import { MeanComponent } from './mean/mean.component';
import { AwpComponent } from './awp/awp.component';
import { PythonComponent } from './python/python.component';
import { DbtComponent } from './dbt/dbt.component';
import { CsharpComponent } from './csharp/csharp.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Signin', component: SigninComponent },
  { path: 'Forgotpassword', component: ForgotpasswordComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'CourseDesc', component: CoursedescComponent },
  { path: 'Cpp', component: CppComponent },
  { path: 'C', component: CComponent },
  { path: 'Ds', component: DsComponent },
  { path: 'Mean', component: MeanComponent },
  { path: 'Awp', component: AwpComponent },
  { path: 'Python', component: PythonComponent },
  { path: 'Dbt', component: DbtComponent },
  { path: 'Csharp', component: CsharpComponent },
  { path: 'Cart', component: MycartComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

