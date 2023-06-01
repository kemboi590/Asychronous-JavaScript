
// 9. Async/await
/* Async/await is a new way to write asynchronous code. It is built on top of promises,
it is non blocking, and it makes asynchronous code appear and behave a 
little more like synchronous code.*/

const fetchCatFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact')
    if (!response.ok) {
      throw new Error('Failed to fetch cat fact')
    }
    // console.log(response)

    const data = await response.json()
    console.log(data.fact)

  } catch (error) {
    console.log(error.message)
    
   }
}
 
fetchCatFact()
  