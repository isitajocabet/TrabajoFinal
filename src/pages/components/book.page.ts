import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class Book extends BasePage {
    
    private formButton: string = '//li[@class="btn btn-light active"]'
    private bookTitle: string = '//a[normalize-space()="Git Pocket Guide"]'
    private login: string = '//*[@id="login"]';
    private user: string = '//*[@id="userName"]';
    private password: string = '//*[@id="password"]';
    private login1: string = '//*[@id="login"]';
    private AddYourCollection: string = '//button[@id="addNewRecordButton" and text()="Add To Your Collection"]';  
    //private bookTitle: ElementFinder = 'h1[itemprop="name"]';

    constructor(){
        super();
    }

    async clickFormButton() {
        await sleep(500);
        await ElementActions.click(this.formButton);
        // await sleep(1500);
    }

    async clickbook(){
        await sleep(500);
        await ElementActions.click(this.bookTitle);
    }

    async clickLogin() {
        await ElementActions.click(this.login);
    }

    async setUser(text: string) {        
        await ElementActions.setText(this.user, text);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin1() {
        await ElementActions.click(this.login1);
    }

    async clickAddCollection() {
        await ElementActions.click(this.AddYourCollection);
    }

      /*public async getBookTitle(): Promise<string> {
    return await this.bookTitle.getText();
  }*/
}

export const book = new Book();