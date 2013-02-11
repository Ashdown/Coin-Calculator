/* calculate.js */
require(["jquery"], function($) {
    $(function() {
        $('body').delegate(".coin-calculator", "submit", calculate);
    });

    function calculate(e) {
        var pence = 0,
            coins,
            i;
        e.preventDefault();
        //read the value out of the form
        if (e.target.elements.money.value) {
            //convert this to pence
            pence = convertStringToPence(e.target.elements.money.value);
        }

        //calculate the coins you need

        coins = getCoins(pence);

        //display this back onto the page

        for (i = 0; i<coins.length; i++) {
            $('.coin-denomination-'+coins[i][0]).html(coins[i][2]);
        }

    }

    /**
     * converts a string to a value in pence
     *
     * @param {String} money    A monetary value.  Can be in pounds or pence
     * @return {Number}         A value in pence Sterling
     */

    //TODO:  you need to test this

    function convertStringToPence(money) {

        return parseInt(money);
    }

    /**
     * Calculate the coins you will need to make up a value
     *
     * @param {Number} moneyInPence    A value in pence sterling
     * @return {Array}                 An array of coins with their descriptions, values in pence, and count
     */

    //TODO:  you need to test this as well

    function getCoins(moneyInPence) {

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
            //check to make sure we have not reached the end of the array for some reason
            //TODO: remove this check when we are bit more confident in the code.
            if (count == coins.length) {
                break;
            } else {
                count++;
            }
        }

        return coins;
    }
});
