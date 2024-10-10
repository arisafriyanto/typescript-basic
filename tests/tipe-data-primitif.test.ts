describe("Data type", function () {
    it("should must declare", function () {
        let name: string = "Aris Apriyanto";
        let balance: number = 1000000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = 1; // error
        // balance = "1000000"; // error
        // isVip = 1; // error
    });
});
