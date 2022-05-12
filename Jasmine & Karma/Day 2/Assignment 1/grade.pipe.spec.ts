import { GradePipe } from './grade.pipe';

let gradePipe: GradePipe;
beforeEach(() => {
  gradePipe = new GradePipe();
});

describe('GradePipe', () => {
  it('create an instance', () => {
    expect(gradePipe).toBeTruthy();
  });

  it('Check for "Outstanding" when input is 1', () => {
    let result = gradePipe.transform(1);
    expect(result).toBe('Outstanding');
  });

  it('Check for "Excellent" when input is 2', () => {
    let result = gradePipe.transform(2);
    expect(result).toBe('Excellent');
  });

  it('Check for "Good" when input is 3', () => {
    let result = gradePipe.transform(3);
    expect(result).toBe('Good');
  });

  it('Check for "Average" when input is 4', () => {
    let result = gradePipe.transform(4);
    expect(result).toBe('Average');
  });

  it('Check for "Poor" when input is 5', () => {
    let result = gradePipe.transform(5);
    expect(result).toBe('Poor');
  });
});
