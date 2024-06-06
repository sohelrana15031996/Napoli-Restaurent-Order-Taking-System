const inputText =()=>{
  const product = document.getElementById('ProductName');
  let productNameText = product.value;

  const price = document.getElementById('ProductValue');
  let priceText = price.value;
  printText(productNameText, priceText);

  product.value ='';
  priceText.value = '';

}


const printText = (productNameText, priceText) =>{
  localStorage.setItem(productNameText, priceText);
}