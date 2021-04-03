function equivalentExchangeRandomize(array){
    let newArray = []
    // let copy = array.slice()
    let copy = [...array]
    for (let i = copy.length; 0 < copy.length; i--)
      newArray.push(copy.splice(Math.floor(Math.random()*copy.length),1))
    return newArray
  }

export default equivalentExchangeRandomize