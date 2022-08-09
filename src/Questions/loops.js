let a = [1, 2, 3]

// Loop 1

for (let x of a) {
  // for of is loop which is used for iterable objects
  console.log(x) // x - is value of object, not index
  if (x === 2) a.push(4) // check if value equals 2, push 4 to the end of array
}
// output 1,2,3,4
// while
let i = 0

while (i < a.length) {
  // loop while i (index) less then length of array
  console.log(a[i]) // i - index of array, a[i] - value
  if (a[i] === 2) a.push(4)
  i++ // increment i with 1
}

// Loop 2

for (let i = 0; i < a.length; i++) {
  // very common loop. first param - where to began, second - where to stop, third - increment
  x = a[i] // here we assign value to x
  console.log(x)
  if (x === 2) a.push(4)
}

// output 1,2,3,4

while (i < a.length) {
  // loop while i (index) less then length of array
  x = a[i]
  console.log(a[i]) // i - index of array, a[i] - value
  if (x === 2) a.push(4)
  i++ // increment i with 1
}

// Loop 3
// here in 1 statement we define not one, but two vars
// second var is array length
// and then we loop while i (index) less ic (arr length)
// also the output will be different - 1,2,3, because we define ic at the start and it wont change
// and if we write i < a.length output would be 1,2,3,4 cause length now changes

for (let i = 0, ic = a.length; i < ic; i++) {
  x = a[i]
  console.log(x)
  if (x === 2) a.push(4)
}

let index = 0
let length = a.length
while (index < length) {
  x = a[index]
  console.log(x)
  if (x === 2) a.push(4)
  i++
}

// Loop 4
// Here we use forEach. It has 3 parameters, 1 - item, 2 - index, 3 - array
// with forEach as with for..of we can acess item directly but not with a[i]
// current code will output 1,2(2 - twice)
// at the begining forEach knows that length of array = 3
// but we unshift one item (insert into begining of array) and all our indexes change
// so on the second iteration our indexes change and 2 has index = 1 again, so it outputs again
// and here loop stops because it iterates through 3 items but not 4

a.forEach((x, i, all) => {
  console.log(x)
  if (x === 2) a.unshift(4)
})

let lengthW = a.length
let index4 = 0

while (index4 < length) {
  x = a[index4]
  console.log(x)
  if (x === 2) a.unshift(4)
  i++
}

// Loop 5
// infinite loop because cursor will always be on 2 and always will be adding 4 at the begining
for (let x of a) {
  console.log(x)
  if (x === 2) a.unshift(4)
}

let index5 = 0

while (index5 < a.length) {
  x = a[index5]
  console.log(x)
  if (x === 2) a.unshift(4)
  i++
}

/*Explain how different implementations of an iteration
over the same loop can produce significantly different results in cases where you iterate over a large number of records. 
*/

// We can not only increment by adding 1. We can allo multiply, substruct, devide etc
