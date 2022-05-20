import { t } from "testcafe";
import FormPage from "../Pages/formPage";
import LogUtils from "../utils/logUtils";
import { PageActionsNames } from "./pageActionsNames";

const formPage = new FormPage();

export default class PageActions {
    public async addUserDetails() {
        await t.typeText(formPage.fName, PageActionsNames.fname);
        await t.typeText(formPage.lName, PageActionsNames.lname);

        LogUtils.logAddedUserDetails(PageActionsNames.fname, PageActionsNames.lname);

    }
}