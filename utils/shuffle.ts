const shuffle = (elements: any[]): any[] => {
  return elements
    .map(value => ({ value, random: Math.random() }))
    .sort((firstObj, secondObj) => firstObj.random - secondObj.random)
    .map(obj => obj.value);
}

export default shuffle;