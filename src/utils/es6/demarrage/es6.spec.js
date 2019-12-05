import * as I from '../input';
import { func1, func2,transform ,moyenne,maxVal,mult} from './es6';

it('test de moyenne', () => {
	expect(moyenne(I.array)).toEqual(508.5);
});

it('test de max', () => {
	expect(maxVal(I.array)).toEqual(2018);
});
describe('ES6', () => {
	describe('Example', () => {
		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});
		describe('Transform', () => {
			it('Transform test', () => {
				expect(transform(I.array)).toEqual(["Nombre 1 : 0", "Nombre 2 : 27", "Nombre 3 : -11", "Nombre 4 : 2018"]);
			});
		});
	});
});
