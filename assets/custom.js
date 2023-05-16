window.onload = function() {
    alert ("product has been added")
  const productIdToAdd = 8283789623591; // ID of the product that triggers the free product addition
  
  // Check if the triggering product is in the cart
  const isTriggerProductInCart = {{ cart.items | map: 'product.id' | includes: productIdToAdd }};
  
  if (isTriggerProductInCart) {
    let formData = {
      'items': [
        {
          'id': productIdToAdd,
          'quantity': 1
        },
        {
          'id': 8281777439015, // ID of the free product to be added
          'quantity': 1
        }
      ]
    };
  
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      alert ("product added")
      return response.json();
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
