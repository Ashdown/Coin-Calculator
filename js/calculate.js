/* calculate.js */
require(["jquery", "utils"], function($, util) {
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
            pence = util.convertStringToPence(e.target.elements.money.value);
        }

        //display the pence value

        $('.coin-denomination-amount').html(pence);

        //calculate the coins you need

        coins = util.getCoins(pence);

        //display this back onto the page

        for (i = 0; i<coins.length; i++) {
            $('.coin-denomination-'+coins[i][0]).html(coins[i][2]);
        }

    }
});

