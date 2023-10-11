import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { InstructionPageComponent } from './Components/instruction-page/instruction-page.component';
import { GradingInterfaceComponent } from './Components/grading-interface/grading-interface.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: InstructionPageComponent},
  {path: 'glaucoma-grading', component: GradingInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
