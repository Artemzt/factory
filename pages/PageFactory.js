
define(['LoginPage', 'HomePage'],

    function (LoginPage, HomePage) {
    function PageFactory() {

    }

     PageFactory.prototype.initializePageObjects = function () {
        this.loginPage = new LoginPage();
        this.homePage = new HomePage();
    }


    })
/*

import * as LoginPage from 'LoginPage'
import * as HomePage from 'HomePage'


export default class PageFactory {

    initializePageObjects() {
         this.loginPage = new LoginPage();

        this.homePage = new HomePage();
    }

}*/
