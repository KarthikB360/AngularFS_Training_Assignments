import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductTestComponent } from './product-test.component';

describe('ProductTestComponent', () => {
  let component: ProductTestComponent;
  let fixture: ComponentFixture<ProductTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check for default quantity to be 1', () => {
    let quantity: number = component.quantity;
    expect(quantity).toBe(1);
  });

  it('check for result message total amount to be empty', () => {
    let resultMsg = fixture.nativeElement.querySelector('p');
    expect(resultMsg.textContent).toBe('');
  });

  it('check for result message by setting values', () => {
    component.unitPrice = 20;
    component.quantity = 3;
    component.getTotalAmount();
    let result: string = component.totalAmount;
    expect(result).toBe('60');
  });

  it('check for result message by setting values NaN ', () => {
    component.unitPrice = 10;
    component.quantity = 'x';
    component.getTotalAmount();
    const result: string = component.totalAmount;
    expect(result).toBe('NaN');
  });

  it('check for unit price by setting value', () => {
    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[1].value = 5;
    inputArray[1].dispatchEvent(new Event('input'));
    expect(component.unitPrice).toBe(5);
  });

  it('check for quantity by setting value', () => {
    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[2].value = 10;
    inputArray[2].dispatchEvent(new Event('input'));
    expect(component.quantity).toBe(10);
  });

  it('check with button click event', () => {
    const inputArray = fixture.nativeElement.querySelectorAll('input');

    inputArray[0].value = 'product x';
    inputArray[0].dispatchEvent(new Event('input'));

    inputArray[1].value = 5;
    inputArray[1].dispatchEvent(new Event('input'));

    inputArray[2].value = 5;
    inputArray[2].dispatchEvent(new Event('input'));

    let inputObj = fixture.nativeElement.querySelector('button');
    inputObj.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    let parObj = fixture.nativeElement.querySelector('p');
    expect(parObj.textContent).toBe('25');
  });
});
