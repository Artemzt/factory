define(['../pages/locators/Locators.js', './AbstractPage.js'],

    function ($$, AbstractPage) {

        function HomePage() {
            this.firstOne = $$.homePage.first;
            this.secondOne = $$.homePage.second;
        }
        
        

        HomePage.prototype = Object.create(AbstractPage);
        HomePage.prototype.constructor = HomePage;

        HomePage.prototype.printItemsFromHomePage = function () {
            return this.firstOne;
        }
        return HomePage;

    })


/*

import * as $$ from '/locators/Locators.js'
import * as AbstractPage from 'AbstractPage'
define(['/locators/locators.json'])

export default class HomePage extends AbstractPage{

    constructor() {
        super();
        this.firstOne = $$.homePage.first;
        this.secondOne = $$.homePage.second;
    }

    printFromHomePage() {
        return this.firstOne + ' ' + this.secondOne;
    }
}
*/
