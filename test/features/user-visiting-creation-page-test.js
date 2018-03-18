const {assert} = require('chai');

describe ('The user visits the create page', () => {
    describe ('The user fills out a form', () => {
        it('requires a title and description', () => {
            browser.url('/videos/create.html');

            browser.setValue('#titleField', "A test video title");
            browser.setValue('#descriptionField', "A test video ");
            browser.submitForm('#videoForm');
            assert.include(browser.getText('body'), 'A test video title');
            assert.include(browser.getText('body'), 'A test video description');
            
        })
    })
})
