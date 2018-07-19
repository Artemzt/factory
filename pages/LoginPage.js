define(['../pages/locators/Locators.js', '../pages/AbstractPage.js'],

    function ($$, AbstractPage) {

        function LoginPage() {
            this.thirdOne = $$.loginPage.third;
            this.fourthOne = $$.loginPage.fourth;
        }

        LoginPage.prototype = Object.create(AbstractPage)
        LoginPage.prototype.constructor = LoginPage;

        LoginPage.prototype.printItemsFromLoginPage = function () {
            return this.fourthOne;
        }
        return LoginPage;
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
}
*/
