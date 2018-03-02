import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

// Material imports
import { MaterialModule } from './material.module';

// Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

// Services
import { EmployeeService } from './services/employee.service';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'view/staff',
    pathMatch: 'full'
  },
  {
    path: 'view/staff',
    component: SearchComponent,
    data: { title: 'Directory' }
  },
  { path: 'view/staff/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Detail' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmployeeDetailComponent
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
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
