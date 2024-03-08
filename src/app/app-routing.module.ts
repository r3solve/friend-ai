import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './chat-ui/chat-home/chat-home.component';
import { LoginComponent } from './auth/login/login.component'
const routes: Routes = [
   {path:"c", component: ChatHomeComponent },
   {path:"u", loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
   {path:"", redirectTo: "c", pathMatch:"full"}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
