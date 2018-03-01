import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

//Material imports
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: 'staff',
    component: SearchComponent,
    data: { title: 'Directory' }
  },
  { path: '',
    redirectTo: '/staff',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: true } // <-- debugging purposes only
  	),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
