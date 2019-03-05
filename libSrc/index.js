const foo = (n) => n ** 2

for (let x of [1, 2, 3, 4, 5]) {
    console.log(foo(x))
}

const a = { a: 1, b: 2 }
const b = { ...a, c: 3 }
