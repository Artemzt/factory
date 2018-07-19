define(['../pages/PageFactory.js'],

    function (PageFactory) {

        

            console.log('tests');

            var pageFactory = new PageFactory();

            console.log(pageFactory.homePage.printItemsFromHomePage(), ' 123');
            console.log(pageFactory.loginPage.printItemsFromLoginPage(), ' 456')
        


    })


/*

import PageFactory from '../pages/PageFactory'







    const pageFactory = new PageFactory();


        console.log(this.pageFactory.printFromLoginPage());


*/

