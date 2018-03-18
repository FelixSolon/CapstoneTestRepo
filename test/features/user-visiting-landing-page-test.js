const {assert} = require('chai');

describe ('The user visits the landing page', () => {
    describe ('and the display', () => {
        it('shows no videos', () => {
            browser.url('/');
            assert.equal(browser.getText("#videos-container"), "");
        });
    });

    describe ('and can navigate', () => {
        it('to /create.html', () => {
            browser.url('/');

            browser.click("a[href='./videos/create.html']");
            assert.include(browser.getText("body"), "Save a video");
        })
    })
});