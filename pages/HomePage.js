define(['locators/locators.json', 'AbstractPage.js'],

    function ($$, AbstractPage) {

    function HomePage() {
        this.firstOne = $$.homePage.first;
        this.secondOne = $$.homePage.second;
    }

    var homePage = Object.create(AbstractPage);
    homePage.prototype.constructor = HomePage;

        homePage.prototype.printItemsFromHomePage = function () {
            return this.firstOne;
        }

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
}*/
