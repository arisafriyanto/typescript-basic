import { Customer, CustomerType } from "../src/enum";

describe("Enum Data Type", function () {
    it("should support enum data type", function () {
        const customer: Customer = {
            id: "1",
            name: "Aris",
            type: CustomerType.GOLD,
        };

        console.info(customer);
    });
});
