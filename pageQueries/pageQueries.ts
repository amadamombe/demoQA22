import FormPage from "../Pages/formPage";

export default class PageQueries {

    formPage = new FormPage();

    public getUsername(): Promise<string> {
        return this.formPage.fName.value;
    }
}