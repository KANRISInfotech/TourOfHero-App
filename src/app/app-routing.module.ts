import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent ,data:{title:'Login'}},
  { path: 'register', component: RegisterComponent ,data:{title:'Register'}},
  { path: 'update',component:UpdateComponent ,data:{title:'Update'}},
  { path: 'upload',component:UploadPageComponent ,data:{title:'Upload Files'}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
