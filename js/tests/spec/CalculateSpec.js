require(['utils'], function(util){
    describe('Calculate', function() {
        it('Should be able to get correct value in pence', function() {
            var data = new Array(
                new Array("4", 4),
                new Array("85", 85),
                new Array("197p", 197),
                new Array("2p", 2),
                new Array("1.87", 187),
                new Array("£1.23", 123),
                new Array("£2",200),
                new Array("£10",1000),
                new Array("£1.87p",187),
                new Array("£1p", 100),
                new Array("£1.p",100),
                new Array("001.41p",141),
                new Array("4.235p", 424),
                new Array("£1.257422457p",126));
            for(var count = 0;count<data.length;count++) {
                expect(util.convertStringToPence(data[count][0])).toBe(data[count][1]);
            }
        });
        it('Should be able to get the correct coin values', function() {
            var data = new Array(
                new Array(
                    1,
                    new Array("two-pound", 0),
                    new Array("one-pound", 0),
                    new Array("fifty-pence", 0),
                    new Array("twenty-pence", 0),
                    new Array("two-pence", 0),
                    new Array("one-pence", 1)),
                new Array(
                    2,
                    new Array("two-pound", 0),
                    new Array("one-pound", 0),
                    new Array("fifty-pence", 0),
                    new Array("twenty-pence", 0),
                    new Array("two-pence", 1),
                    new Array("one-pence", 0)),
                new Array(
                    10,
                    new Array("two-pound", 0),
                    new Array("one-pound", 0),
                    new Array("fifty-pence", 0),
                    new Array("twenty-pence", 0),
                    new Array("two-pence", 5),
                    new Array("one-pence", 0)));
            //...expand as required
            for(var count = 0;count<data.length;count++) {
                var coins = util.getCoins(data[count][0]);
                expect(data[count][1][1]).toBe(coins[0][2]);
                expect(data[count][2][1]).toBe(coins[1][2]);
                expect(data[count][3][1]).toBe(coins[2][2]);
                expect(data[count][4][1]).toBe(coins[3][2]);
                expect(data[count][5][1]).toBe(coins[4][2]);
                expect(data[count][6][1]).toBe(coins[5][2]);
            }

        });
    });
});
