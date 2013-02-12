define({

    /**
     * converts a string to a value in pence
     *
     * @param {String} money    A monetary value.  Can be in pounds or pence
     * @return {Number}         A value in pence Sterling
     */

    convertStringToPence : function (money) {

        var isInPounds = (money.indexOf('£') > 0)? true : false,
            hasDecimalPlace = (money.indexOf('.') > 0)? true : false;

        //strip non numeric characters
        money = money.replace(/[^0-9, .]/g, '')

        //convert to a floating number
        money = parseFloat(money);

        //round to two decimal places
        if (hasDecimalPlace) {
            money = Math.round(money*100)/100;
        }

        if (isInPounds || hasDecimalPlace) {
            money = money * 100;
        }

        return money;
    },

    /**
     * Calculate the coins you will need to make up a value
     *
     * @param {Number} moneyInPence    A value in pence sterling
     * @return {Array}                 An array of coins with their descriptions, values in pence, and count
     */

    getCoins : function (moneyInPence) {

        //expand as necessary

        var coins = new Array(
            new Array("two-pound", 200, 0),
            new Array("one-pound", 100, 0),
            new Array("fifty-pence", 50, 0),
            new Array("twenty-pence", 20, 0),
            new Array("two-pence", 2, 0),
            new Array("one-pence", 1, 0)
        );

        var count = 0,
            remainder = 0;

        while (moneyInPence > 0) {
            if (moneyInPence >= coins[count][1]) {
                remainder = moneyInPence%coins[count][1];
                coins[count][2] = (moneyInPence - remainder) / coins[count][1];
                moneyInPence = remainder;
            }
            count++;
        }

        return coins;
    }
});
