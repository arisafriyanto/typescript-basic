describe("Data type Array", function () {
    it("should same with javascript", function () {
        let names: string[] = ["Aris", "Jasmine", "Jane"];
        let values: number[] = [1, 2, 3];

        // let names: Array<string> = ["Aris", "Jasmine", "Jane"];
        // let values: Array<number> = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it("should support readonly array", function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.log(hobbies);

        // hobbies[0] = "Game"; // error
    });

    it("should support tuple, length is define", function () {
        const person: readonly [string, string, number] = ["Aris", "Apriyanto", 22];
        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);

        // person[0] = "Jane"; // error, because readonly
    });
});
