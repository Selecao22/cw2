import { translate } from "./components/Translater";
var assert = require("assert");

describe("test translate", () => {
    it("should be \"test\"", () => {
        assert.equal(translate("test"), "yes");
    });
    it("should be \"unknown\"", () => {
        assert.equal(translate(""), "unknown");
    });
    it("should be \"Идет снег\"", () => {
        assert.equal(translate("snow"), "Идет снег")
    });
});