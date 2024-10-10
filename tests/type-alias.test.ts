import { Category, Product } from "../src/type-alias";

describe("Type alias", function () {
    it("should support type alias", function () {
        const category: Category = {
            id: 1,
            name: "Handphone Terbaru",
            description: "Samsung",
        };

        const product: Product = {
            id: "1",
            name: "Samsung S24",
            price: 24000000,
            category: category,
            description: "New Flagship",
        };

        console.info(category);
        console.info(product);
    });
});
