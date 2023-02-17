import { html } from "lit-html";
import type { Meta, StoryFn } from "@storybook/web-components";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { UI5StoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs";

// @ts-ignore
import type Panel from "@ui5/webcomponents/dist/Panel.js";

const component = "ui5-panel";

export default {
    title: "Main/Panel",
    component,
    parameters: {
        docs: {
          page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
} as Meta<Panel>;

const Template: UI5StoryArgs<Panel, StoryArgsSlots> = (args) => html`<div></div>`;


export const Template0: StoryFn = () => html`
<h3>Basic Panel</h3>
	<div class="snippet">
		<ui5-panel width="100%" accessible-role="Complementary" header-text="Both expandable and expanded" class="full-width">
			<h1 class="content-color">I am a native heading!</h1>
			<ui5-label wrapping-type="Normal">Short text.</ui5-label>
			<br/>
			<ui5-label wrapping-type="Normal">Another text.</ui5-label>
			<p class="content-color">
				Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.
			</p>
		</ui5-panel>
	</div>
`;


export const Template1: StoryFn = () => html`
<h3>Panel with List</h3>
	<div class="snippet">
		<ui5-panel accessible-role="Complementary" header-text="Select your country" class="full-width">
			<ui5-list id="myList1" mode="MultiSelect">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
				<ui5-li key="country4">Germany</ui5-li>
				<ui5-li key="country5">Hungary</ui5-li>
				<ui5-li key="country6">England</ui5-li>
				<ui5-li key="country7">USA</ui5-li>
				<ui5-li key="country8">Canada</ui5-li>
			</ui5-list>
		</ui5-panel>
	</div>
`;


export const Template2: StoryFn = () => html`
<h3>Fixed Panel (Can't be Collapsed/Expanded)</h3>
	<div class="snippet panel-snippet">
		<ui5-panel class="full-width" fixed="" accessible-role="Complementary" header-text="Country Of Birth">
			<ui5-list id="myList2" mode="SingleSelectBegin">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
				<ui5-li key="country4">Germany</ui5-li>
			</ui5-list>
		</ui5-panel>
	</div>
`;


export const Template3: StoryFn = () => html`
<h3>Panel with Custom Header</h3>
	<div class="snippet">
		<ui5-panel accessible-role="Complementary" class="full-width">
			<!-- Panel header -->
			<div slot="header" class="header">
				<ui5-title>Countries</ui5-title>
				<div>
					<ui5-button>Edit</ui5-button>
					<ui5-button design="Emphasized">Add</ui5-button>
					<ui5-button design="Negative">Remove</ui5-button>
				</div>
			</div>
			<ui5-list id="myList1" mode="MultiSelect">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
			</ui5-list>
		</ui5-panel>
	</div>
`;
