describe("Optional Parameter", function () {
    it("should support null and undifined", function () {
        // * Optional parameter name? menghasilkan nilai string nya atau undefined, tetapi tidak menerima null

        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info(`Hello`);
            }
        }

        sayHello("Aris");

        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});
