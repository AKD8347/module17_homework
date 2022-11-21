import { definePrime } from './definePrime.js';

describe('for definePrime', ()=>{
    it('is prime number', ()=>{
        expect(definePrime(17)).toBe('Число 17 - простое число')
    });
    it('is complex number', ()=>{
        expect(definePrime(18)).toBe('Число 18 - составное число')
    });
    it('is valid', ()=>{
        expect(definePrime(1005)).toBe('Данные неверны')
    })
});
