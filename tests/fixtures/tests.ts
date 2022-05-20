import { fixture } from "testcafe";
import PageActions from "../../pageActions/pageActions";
import PageQueries from "../../pageQueries/pageQueries";

const pageActions = new PageActions();
const pageQueries = new PageQueries();

fixture('My fuxture').
page('https://demoqa.com/automation-practice-form');

test('Add UserDetails test', async t => {
    await pageActions.addUserDetails();
    await t.expect(pageQueries.getUsername()).eql('Augustine');
})