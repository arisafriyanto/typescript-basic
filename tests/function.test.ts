describe("Function", function () {
    it("should support function", function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        // console.info(sayHello("Aris"));
        expect(sayHello("Aris")).toBe("Hello Aris");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Aris");
    });

    it("should support function default value", function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Aris")).toBe("Hello Aris");
        expect(sayHello()).toBe("Hello Guest");
    });

    it("should support function rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it("should support function optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            return `Hello ${firstName}`;
        }

        expect(sayHello("Aris")).toBe("Hello Aris");
        expect(sayHello("Aris", "Apriyanto")).toBe("Hello Aris Apriyanto");
    });

    it("should support function overloading", function () {
        function callMe(value: number): number;
        function callMe(value: string): string;

        function callMe(value: any) {
            if (typeof value === "string") {
                return value;
            } else if (typeof value === "number") {
                return value;
            }
        }

        expect(callMe(100)).toBe(100);
        expect(callMe("Aris")).toBe("Aris");
    });

    it("should support function in function parameter", function () {
        function sayHello(name: string, upper: (name: string) => string) {
            return `Hello ${upper(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Aris", toUpper)).toBe("Hello ARIS");
    });

    it("should support function parameter and anonymous function", function () {
        function sayHello(name: string, upper: (name: string) => string) {
            return `Hello ${upper(name)}`;
        }

        expect(
            sayHello("Aris", function (name: string): string {
                return name.toUpperCase();
            }),
        ).toBe("Hello ARIS");
    });

    it("should support function parameter and arrow function", function () {
        function sayHello(name: string, upper: (name: string) => string) {
            return `Hello ${upper(name)}`;
        }

        expect(sayHello("Aris", (name: string): string => name.toUpperCase())).toBe("Hello ARIS");
    });
});
