import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check for child component elements -- product-details', () => {
    const childComponent = fixture.debugElement.query(
      By.css('app-product-detail')
    );
    expect(childComponent).toBeTruthy();
  });

  it('Get child components and verify count', () => {
    const childComponents = fixture.debugElement.queryAll(
      By.css('app-product-detail')
    );
    console.log(childComponents);
    expect(childComponents.length).toBe(component.products.length);
  });

  it('Access child class properties', () => {
    const childComponent = fixture.debugElement.query(
      By.css('app-product-detail')
    );
    console.log(childComponent.properties['productList'][0]);
    expect(childComponent.properties['productList'][0]).toEqual(
      component.products[0]
    );
  });

  it('Check for triggering child class events', () => {
    const childComponent = fixture.debugElement.query(
      By.css('app-product-detail')
    );
    const pid = childComponent.properties['productList'][0].pid;
    childComponent.triggerEventHandler('removeProduct', pid);
    let index = component.products.findIndex((item: any) => item.pid == pid);
    expect(index).toBe(0);
  });
});
