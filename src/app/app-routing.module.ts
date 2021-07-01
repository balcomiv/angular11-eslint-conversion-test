import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestParentComponent } from './components/test-parent/test-parent.component';

const routes: Routes = [
  {
    path: '',
    component: TestParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
