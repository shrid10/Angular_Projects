import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path : 'technologies', component : TechnologiesComponent},
  {path : 'books', component : BooksComponent},
  {path : '', component : TechnologiesComponent},
  {path : '**', component : InvalidPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
