// "foo" should be a function def, using "Math.pow"
const foo = (n) => n ** 2

for (let x of [1, 2, 3, 4, 5]) {
    // this should be a for loop
    console.log(foo(x))
}

const a = { a: 1, b: 2 }
const b = { ...b, c: 3 }
