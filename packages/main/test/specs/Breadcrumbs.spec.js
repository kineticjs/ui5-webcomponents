const assert = require("chai").assert;
const PORT = require("./_port.js");

describe("Breadcrumbs general interaction", () => {
	before(() => {
		browser.url(`http://localhost:${PORT}/test-resources/pages/Breadcrumbs.html`);
	});

	it("fires link-click event", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			link = breadcrumbs.$$("ui5-link")[6];

		// Act
		link.click();

		// Check
		const eventResult = browser.$("#result");
		assert.strictEqual(eventResult.innerText, link.innerText, "label for pressed link is correct");
	});

	it("fires link-click event when link in overflow", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			overflowArrowLink = breadcrumbs.shadow$$("ui5-link")[0];
			link = breadcrumbs.$$("ui5-link")[5];


		// Act
		overflowArrowLink.click(); // open the overflow
		const staticAreaItemClassName = browser.getStaticAreaItemClassName("#breadcrumbs1");
		const firstItem = browser.$(`.${staticAreaItemClassName}`).shadow$$("ui5-li")[0];

		firstItem.click();

		// Check
		const eventResult = browser.$("#result");
		assert.strictEqual(eventResult.innerText, link.innerText, "label for pressed link is correct");
	});

	it("updates layout on container resize", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			shrinkSizeBtn = $("#shrinkSizeBtn");

		// Check initial state
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 5, "correct initial count of items inside overflow");

		// Act: shrink the breadcrumbs container
		// to cause one more item to overflow
		shrinkSizeBtn.click();

		// Check links inside overflow
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 6, "one link is added to the overflow");
	});

	it("updates layout on resize of content outside overflow", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			extendLinkTextBtn = $("#extendLinkTextBtn");

		// Check initial state
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 6, "correct count of items inside overflow");

		// Act:
		// extend the length of the last link,
		// so that it becomes too big to be rendered outside the overflow
		extendLinkTextBtn.click();

		// Check
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 7, "the link is added to the overflow");
	});

	it("updates layout on resize of content inside overflow", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			shortenLinkTextBtn = $("#shortenLinkTextBtn");

		// Check initial state
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 7, "correct count of items inside overflow");

		// Act: 
		// shrink the length of the last link from the overflow,
		// to make it small enough => eligible to be moved outside the overflow
		shortenLinkTextBtn.click();

		// Check
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), 6, "the link is taken out of the overflow");
	});

	it("updates layout when link content removed", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			shortenLinkTextBtn = $("#shortenLinkTextBtn"),
			link = breadcrumbs.$$("ui5-link")[6];

		// Check initial state
		assert.ok(link.getText().length, "the link has text");

		// Act: 
		// shrink the length of the last link to make it empty
		shortenLinkTextBtn.click();

		// verity result => the link is now empty
		assert.strictEqual(link.getText(), "", "the link is empty");

		// Check
		assert.strictEqual(breadcrumbs.$("ui5-link.ui5-breadcrumbs-empty-link").id, link.id, "the link is marked as empty");
	});

	it("updates layout when content added to empty link", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			extendLinkTextBtn = $("#extendLinkTextBtn"),
			link = breadcrumbs.$$("ui5-link")[6];

		// Check initial state
		assert.strictEqual(link.getText(), "", "the link is empty");

		// Act: 
		// add content to the empty link
		extendLinkTextBtn.click();

		// verity result => the link is now empty
		assert.ok(link.getText().length, "the link has text");

		// Check
		assert.strictEqual(breadcrumbs.$$("ui5-link.ui5-breadcrumbs-empty-link").length, 0, "the link is no longer marked as empty");
	});

	it("updates layout when link is hidden", () => {
		const breadcrumbs = $("#breadcrumbs1"),
			link = breadcrumbs.$$("ui5-link")[0],
			initCountLinksInOverflow = breadcrumbs.getProperty("_countLinksInOverflow");

		// Check initial state
		assert.strictEqual(link.getProperty("hidden"), false, "the link is visible");

		// Act: 
		// hide the first link
		browser.execute(() => {
			document.querySelector("#breadcrumbs1 ui5-link:nth-child(1)").hidden = true;
		});

		// verity result => the link is now hidden
		assert.strictEqual(link.getProperty("hidden"), true, "the link is visible");

		// Check
		assert.strictEqual(breadcrumbs.getProperty("_countLinksInOverflow"), initCountLinksInOverflow - 1, "the link-item is taken out of the overflow");
	});

	it("opens upon space", () => {
		browser.url(`http://localhost:${PORT}/test-resources/pages/Breadcrumbs.html`);

		const externalElement = $("#breadcrumbs3").$$("ui5-link")[2];
		const staticAreaItemClassName = browser.getStaticAreaItemClassName("#breadcrumbs1");
		const popover = browser.$(`.${staticAreaItemClassName}`).shadow$("ui5-responsive-popover");

		externalElement.click();
		externalElement.keys("Tab");

		browser.keys("Space");
		assert.ok(popover.getProperty("opened"), "Dropdown is opened.");
	});

	it("toggles upon F4", () => {
		browser.url(`http://localhost:${PORT}/test-resources/pages/Breadcrumbs.html`);

		const externalElement = $("#breadcrumbs3").$$("ui5-link")[2];
		const staticAreaItemClassName = browser.getStaticAreaItemClassName("#breadcrumbs1");
		const popover = browser.$(`.${staticAreaItemClassName}`).shadow$("ui5-responsive-popover");

		externalElement.click();
		externalElement.keys("Tab");

		browser.keys("F4");
		assert.ok(popover.getProperty("opened"), "Dropdown is opened.");

		browser.keys("F4");
		assert.ok(!popover.getProperty("opened"), "Dropdown is closed.");
	});

	it("toggles upon ALT + DOWN", () => {
		browser.url(`http://localhost:${PORT}/test-resources/pages/Breadcrumbs.html`);

		const externalElement = $("#breadcrumbs3").$$("ui5-link")[2];
		const staticAreaItemClassName = browser.getStaticAreaItemClassName("#breadcrumbs1");
		const popover = browser.$(`.${staticAreaItemClassName}`).shadow$("ui5-responsive-popover");

		externalElement.click();
		externalElement.keys("Tab");

		browser.keys(["Alt", "ArrowDown", "NULL"]);
		assert.ok(popover.getProperty("opened"), "Dropdown is opened.");

		browser.keys(["Alt", "ArrowDown", "NULL"]);
		assert.ok(!popover.getProperty("opened"), "Dropdown is closed.");
	});
});
