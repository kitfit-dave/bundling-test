// "import from perf_hooks" should be require
import { performance } from 'perf_hooks'
// "import ./something" should be _interopRequireDefault
import something from './something'

// "foo" should remain fat arrow function, calling "n ** 2"
const foo = (n) => n**2

const a = performance.now()

var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
for (var i = 0; i < arr.length; i++) {
	console.log(something(foo(arr[i])))
}

const b = performance.now()

for (let x of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]) {
	// this should remain a "for of" loop
	console.log(something(foo(x)))
}

const c = performance.now()

console.log('performance delta, smaller is better')
console.log('for loop', b-a)
console.log('for of', c-b)
