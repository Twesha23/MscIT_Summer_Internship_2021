console.log("Promises");
//  Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});
promise1.then(resp => console.log(resp))

// Catch this error 
Promise.reject('failed')
   .catch(console.log('Ooops something went wrong'))

//  Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));

