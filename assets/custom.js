  window.onload = function() {
    if({{ cart.total_price }}>100000){
      let formData = {
        'items': [{
          'id': 8283789623591,
          'quantity': 1
        }]
      };
      fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
         return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }