import { Selector } from "testcafe";

export default class FormPage {
    fName: Selector;
    lName: Selector;

    constructor() {
        this.fName = Selector('#firstName');
        this.lName = Selector('#lastName');
    }
}