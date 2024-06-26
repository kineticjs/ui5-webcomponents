import { assert } from "chai";

describe("Mobile: TabContainer general interaction", () => {
	before(async () => {
		await browser.url("test/pages/TabContainer.html");
		await browser.emulateDevice("iPhone X");
	});

	it("should close the overflow popover when pressing the cancel button", async () => {
		const tc = await browser.$("#tabContainerNestedTabs");
		const moreButton = await tc.shadow$(`[data-ui5-stable="overflow-end"]`);
		await moreButton.click();

		let overflow = await tc.shadow$("ui5-responsive-popover");
		const closeButton = await overflow.$("ui5-button");

		assert.ok(await overflow.getProperty("open"), "Overflow is opened");

		await closeButton.click();

		assert.notOk(await overflow.getProperty("open"), "Overflow is closed");
	});
});