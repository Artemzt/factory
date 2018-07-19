define(['../pages/LoginPage.js', '../pages/HomePage.js'],

    function (LoginPage, HomePage) {


        function PageFactory() {
            this.init();
        }
        


        PageFactory.prototype.init =  function () {
            this.loginPage = new LoginPage();
            this.homePage  = new HomePage();
        };


        
        return PageFactory;


    })

/*
import * as LoginPage from 'LoginPage'
import * as HomePage from 'HomePage'


export default class PageFactory {

    initializePageObjects() {
         this.loginPage = new LoginPage();

        this.homePage = new HomePage();
    }

}
*/
