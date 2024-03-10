const { browser } = require('@wdio/globals')
const accountData = require('../../data/account.json')
describe('My Login application', () => {
    beforeEach(async () => {
        await browser.load_page()
    })
    accountData.data.forEach((element) => {
        var username = element.username
        var password = element.password
        var result = element.result
        it(`should login with ${username} and ${password}`, async () => {
            await browser.type_username(username)
            await browser.type_password(password)
            await browser.click_on_login_button()
            await browser.check_login_result(result)
        })
    });
})

