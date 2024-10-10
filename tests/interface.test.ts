import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
    it("should support interface in typescript", function () {
        const seller: Seller = {
            id: 1,
            name: "Mochi",
            address: "Indonesia",
            nib: "29834",
            npwp: "9283749203",
        };

        seller.name = "Budi";

        // * error, because property npwp readonly
        // seller.npwp = "923864932";

        console.info(seller);
    });

    it("should support function interface", function () {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        console.info(add(10, 12));
        expect(add(10, 12)).toBe(22);
    });

    it("should support indexable interface for number index", function () {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Aris", "Apri", "Yanto"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);

        expect(names[0]).toBe("Aris");
        expect(names[1]).toBe("Apri");
        expect(names[2]).toBe("Yanto");
    });

    it("should support indexable interface for non number index", function () {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: "Aris",
            address: "Brebes",
        };

        console.info(dictionary["name"]);
        console.info(dictionary["address"]);

        expect(dictionary["name"]).toBe("Aris");
        expect(dictionary["address"]).toBe("Brebes");
    });

    it("should support interface extends", function () {
        const employee: Employee = {
            id: "1",
            name: "Aris",
            division: "IT",
        };

        const manager: Manager = {
            id: "2",
            name: "Apriyanto",
            division: "IT",
            numberOfEmployees: 10,
        };

        console.info(employee);
        console.info(manager);
    });

    it("should support function in interface", function () {
        const person: Person = {
            name: "Aris",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };

        console.info(person.name);
        console.info(person.sayHello("Budi"));
    });

    it("should support intersection types", function () {
        interface HasId {
            id: string;
        }

        interface HasName {
            name: string;
        }

        type Person = HasId & HasName;

        // * Kita bisa saja gunakan extends jika kita bisa menjangkau interface nya
        // interface Person extends HasId, HasName {}

        const person: Person = {
            id: "1",
            name: "Aris",
        };

        console.info(person);
    });

    it("should support type assertions", function () {
        const person: any = {
            name: "Aris",
            age: 30,
        };

        // * Mengubah tipe data dari any ke Person, jika typescript tidak tau return value dari data nya
        // * tapi hati-hati datanya harus sesuai dengan interfacenya

        const person2: Person = person as Person;
        // person2.sayHello("Budi");
        console.info(person2);
    });
});
