import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
    it("should return Hello Aris", function () {
        expect(sayHello("Aris")).toBe("Hello Aris");
    });
});
