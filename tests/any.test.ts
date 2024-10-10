describe("Data type any", function () {
    it("should any data type", function () {
        const person: any = {
            id: 1,
            name: "Aris Apriyanto",
            age: 22,
        };

        person.age = 23;
        person.address = "Indonesia";
        console.info(person);
    });
});
