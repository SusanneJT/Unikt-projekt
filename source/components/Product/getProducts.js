export async function GetProducts(url) {
    const response = await fetch(`http://localhost:3000/products` + url);
    const json = await response.json();
    console.log(response.status);
    return json;
}