import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { FriendComponent } from './friend/friend.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SortEmpComponent } from './sort-emp/sort-emp.component';
import { UserComponent } from './user/user.component';
import { GradePipePipe } from './grade-pipe.pipe';
import { FilterpipePipe } from './filterpipe.pipe';
import { ProductSecondListComponent } from './product-second-list/product-second-list.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EmpListComponent } from './emp-list/emp-list.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { ModelFormsComponent } from './model-forms/model-forms.component';
import { ShadowDirective } from './shadow.directive';
import { AdminPanelDirective } from './admin-panel.directive';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './AppRoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    FriendComponent,
    ProductListComponent,
    SortEmpComponent,
    UserComponent,
    GradePipePipe,
    FilterpipePipe,
    ProductSecondListComponent,
    FancyCardComponent,
    TodoListComponent,
    TodoInputComponent,
    EmpListComponent,
    ModelFormsComponent,
    ShadowDirective,
    AdminPanelDirective,
    HomeComponent,
    CategoriesComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
