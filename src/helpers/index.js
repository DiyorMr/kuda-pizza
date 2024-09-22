export const totalPrice = (cardData) => {
  var qualityPrice = cardData.quality === 'Traditional' ? 5000 : 10000
  var mozarellaPrice = cardData.isMonzarella ? 5000 : 0
  var shampionPrice = cardData.isChampignons ? 4000 : 0
  var peretsPrice = cardData.isSweet ? 3000 : 0
  var onionPrice = cardData.isOnion ? 6000 : 0
  var total = 0
  total = cardData.size * 2000 + qualityPrice + mozarellaPrice + shampionPrice + peretsPrice + onionPrice
  return total * cardData.count
}

export const bugTotalPrice = () => {
  var productList = localStorage.getItem('products')
  var storageData = JSON.parse(productList);
  var total = 0

  storageData?.map(item => total += totalPrice(item))
  return total
}

export const increment = (item, products) => {
  var filterData = products.filter(child => child.id !== item.id)
  localStorage.setItem('products', JSON.stringify([...filterData, { ...item, count: item.count + 1 }]))
}
export const decrement = (item, products) => {
  var filterData = products.filter(child => child.id !== item.id)
  if (item.count > 1) {
    localStorage.setItem('products', JSON.stringify([...filterData, { ...item, count: item.count - 1 }]))
  }else{
    localStorage.setItem('products', JSON.stringify(filterData))
  }
}

export const patternFormat=(price)=>price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")