import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private employees: Employee[] = [
    {
      empNumber: 1,
      empName: 'Drake',
      empJob: 'Manager',
      empSalary: 50000,
      empDeptNo: 10,
      empGrade: 1,
    },
    {
      empNumber: 2,
      empName: 'Adam',
      empJob: 'Manager',
      empSalary: 60000,
      empDeptNo: 11,
      empGrade: 2,
    },
    {
      empNumber: 3,
      empName: 'John',
      empJob: 'Engineer',
      empSalary: 40000,
      empDeptNo: 12,
      empGrade: 3,
    },
    {
      empNumber: 4,
      empName: 'Mike',
      empJob: 'QA',
      empSalary: 40000,
      empDeptNo: 13,
      empGrade: 4,
    },
    {
      empNumber: 5,
      empName: 'Smith',
      empJob: 'Engineer',
      empSalary: 45000,
      empDeptNo: 14,
      empGrade: 1,
    },
    {
      empNumber: 6,
      empName: 'Blake',
      empJob: 'QA',
      empSalary: 45000,
      empDeptNo: 15,
      empGrade: 2,
    },
  ];

  getAllEmployee(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    alert("Added employee");
  }

  removeEmployee(employeeNumber: number) {
    let index = this.employees.findIndex(
      (emp) => emp.empNumber === employeeNumber
    );
    if (index !== -1) {
      this.employees.splice(index, 1);
      alert("Removed employee");
    }
  }

  products: Product[] = [
    { pid: 1, pname: 'Puma shoes', price: 5000, category: 'shoes', image: 'data:image/jpeg;base64,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' },
    { pid: 2, pname: 'Nike shoes', price: 10000, category: 'shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Uk7kcjY-Qj21VtsDTZZatpGvcIQdVfv4Mw&usqp=CAU' },
    {
      pid: 3,
      pname: 'Samsung S22 Ultra',
      price: 120000,
      category: 'mobile',
      image: 'https://d124ep1ou7ef1k.cloudfront.net/wp-content/uploads/2022/02/GalaxyS22Ultra_MA_Thumb_1440x960-960x640.jpg',
    },
    { pid: 4, pname: 'IPhone 13 pro', price: 90000, category: 'mobile', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-witb-202203_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1644965775223' },
    { pid: 5, pname: 'Realme GT', price: 50000, category: 'mobile', image: 'https://images.news18.com/ibnlive/uploads/2021/08/realme-gt-main1-16292761874x3.jpg' },
    { pid: 6, pname: 'One plus 10 pro', price: 70000, category: 'mobile', image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-111229/OnePlus-10-Pro_featured-image-packshot-review.jpg' },
    { pid: 7, pname: 'Acer Predator', price: 100000, category: 'laptop', image: 'https://s3b.cashify.in/gpro/uploads/2021/08/19111918/Acer-Predator-Helios-300-RTXE284A2-2060-144Hz-2-mi-bicubic.jpg' },
    { pid: 8, pname: 'Asus ROG', price: 125000, category: 'laptop', image: 'https://m.media-amazon.com/images/I/810twtbCYOL._AC_SL1500_.jpg' },
    { pid: 9, pname: 'Lenovo Legion', price: 140000, category: 'laptop', image: 'https://legion.lenovo.com/neo/management/uploads/product/gallery/1610468289-product_gallery.png' },

  ];

  getAllProducts(): Product[] {
    return this.products;
  }
}
