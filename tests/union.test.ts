describe("Data type union", function () {
    it("should union data type", function () {
        let sample: number | string | boolean = "Aris";
        sample = 100;
        sample = true;

        console.info(sample);
    });

    it("should using union type and check typeof", function () {
        function process(value: string | number | Boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Aris")).toBe("ARIS");
        expect(process(10)).toBe(12);
        expect(process(false)).toBe(true);
    });
});
