const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const countTotalCartItems = (cart) => {
  let count = 0;
  for (let i=0; i<cart.length; i++) {
    count = count + parseInt(cart[i].count);
  }
  return count;
}

export { currencyFormatter, countTotalCartItems }; 