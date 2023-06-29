// Создайте класс Product, который содержит свойства name (название продукта) и
// price (цена продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите
// метод displayProductInfo().
class Product {
    product = [
        { name: "tv", price: 10 },
        { name: "phone", price: 25 },
    ];
    displayProductInfo() {
        const filtered = this.product.filter((el) => el.price > 20);
        return filtered;
    }
}
const product = new Product();
console.log(product.displayProductInfo());
