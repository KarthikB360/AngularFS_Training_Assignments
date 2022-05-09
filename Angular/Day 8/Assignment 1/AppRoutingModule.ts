import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path : "", component: HomeComponent  },
  { path : "Categories", component: CategoriesComponent},
  { path : "AboutUs", component: AboutUsComponent  },
  { path : "Contact", component: ContactComponent },
  { path : "Login", component: LoginComponent },
  { path : "Categories/:category", component: ProductListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }