const nextElementInList = (list, value) => {

  const currentValueIndex = list.indexOf(value)  
  const nextValueIndex = (currentValueIndex + 1) % list.length   
  const nextValue = list[nextValueIndex]
  return nextValue                                //  save it to the action variable
}

export default nextElementInList