// use local storage to manage cart data
const addToDb = id => {
    let Appliedjob = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Applied-job')
    if (storedCart) {
      Appliedjob = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = Appliedjob[id]
    if (quantity) {
      
    } else {
      Appliedjob[id] = 1
    }
    localStorage.setItem('Applied-job', JSON.stringify(Appliedjob))
  }
  
  const getStoredCart = () => {
    let Appliedjob = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Applied-job')
    if (storedCart) {
      Appliedjob = JSON.parse(storedCart)
    }
    return Appliedjob
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('Applied-job')
    if (storedCart) {
      const Appliedjob = JSON.parse(storedCart)
      if (id in Appliedjob) {
        delete Appliedjob[id]
        localStorage.setItem('Applied-Job', JSON.stringify(Appliedjob))
      }
    }
  }
  
  const deleteAppliedjob = () => {
    localStorage.removeItem('Applied-job')
  }
  
  export { addToDb, getStoredCart, removeFromDb, deleteAppliedjob }