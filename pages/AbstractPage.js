define(['../pages/locators/Locators.js'],
    function ($$) {

        function AbstractPage() {
            this.fifthOne = $$.abstractPage.fifth;
            this.sixthOne = $$.abstractPage.sixth;
        }

        AbstractPage.prototype.printFromAbstractPage = function () {
            return this.fifthOne;
        }

        return AbstractPage;

    })
/*

import * as $$ from '/locators/Locators.js'

class AbstractPage {

    constructor() {
        this.fifthOne = $$.abstractPage.fifth;
        this.sixthOne = $$.abstractPage.sixth;
    }

    print() {
        return this.fifthOne + ' ' + this.sixthOne;
    }
}
*/
