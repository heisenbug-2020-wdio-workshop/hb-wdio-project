
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Ducks Store | Online Store');
    })
})