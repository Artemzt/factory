
define(['/locators/locators.json'],
    function ($$) {

    function AbstractPage() {
        this.fifthOne = $$.abstractPage.fifth;
        this.sixthOne = $$.abstractPage.sixth;
    }
    var abstractPage = new AbstractPage();

    abstractPage.prototype.prinFromAbstractPage = function () {
        return this.fifthOne;
    }

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
}*/
