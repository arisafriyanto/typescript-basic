describe("Object Type", function () {
    it("should support object type", function () {
        const person: {
            id: string;
            name: string;
            hobbies?: string[];
        } = {
            id: "1",
            name: "Aris",
        };

        console.info(person);

        person.id = "2";
        person.name = "Apriyanto";
        person.hobbies = ["Game", "Reading"];

        console.info(person);
    });
});
