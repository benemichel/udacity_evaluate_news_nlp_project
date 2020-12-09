import { validateUrl } from "../src/client/js/validateSubmit"

describe("Testing the form validation functionality", () => {
    test("Testing validateUrl() with valid Url", () => {
        const urlSuccess = 'https://www.bbc.com/news/uk-politics-55208218'
        expect(validateUrl(urlSuccess)).toEqual(true);
    })

    test("Testing validateUrl() with invalid Url", () => {
        const urlFail = 'https//foo/some/bar'
        expect(validateUrl(urlFail)).toEqual(false);
    })

    test("Testing validateUrl() with empty Url", () => {
        const urlEmpty = 'https://foo/some/bar'
        expect(validateUrl(urlEmpty)).toEqual(false);
    })

    test("Testing validateUrl() without domain Url", () => {
        const urlWoDomain = 'https://foo/some/bar'
        expect(validateUrl(urlWoDomain)).toEqual(false);
    })

});
