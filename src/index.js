import { performance } from 'perf_hooks'
import something from './something'

const foo = (n) => n**2

const a = performance.now()

var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
for (var i = 0; i < arr.length; i++) {
	console.log(something(foo(arr[i])))
}

const b = performance.now()

for (let x of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]) {
	console.log(something(foo(x)))
}

const c = performance.now()

console.log('performance delta, smaller is better')
console.log('for loop', b-a)
console.log('for of', c-b)
