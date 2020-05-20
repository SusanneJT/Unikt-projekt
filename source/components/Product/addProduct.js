export async function AddProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    fetch('http://localhost:3000/products', requestOptions)
        .then(response => response.json())
        .catch(error => console.error(error));     
}