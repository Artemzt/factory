
define(['/locators/locators.json', 'AbstractPage'],

    function ($$, AbstractPage) {

    function LoginPage() {
        this.thirdOne = $$.loginPage.third;
        this.fourthOne = $$.loginPage.fourth;
    }

        var loginPage = Object.create(AbstractPage);
        loginPage.prototype.constructor = LoginPage;

    loginPage.prototype.printItemsFromLoginPage = function () {
        return this.thirdOne;
    }

    })




/*
import * as $$ from '/locators/Locators.js'
import * as AbstractPage from 'AbstractPage'


export default class LoginPage extends AbstractPage{

    constructor() {
        super();
        this.thirdOne = $$.loginPage.third
        this.fourthOne = $$.loginPage.fourth;

    }

    printFromLoginPage() {
        return this.thirdOne + ' ' + this.fourthOne;
    }
}*/
