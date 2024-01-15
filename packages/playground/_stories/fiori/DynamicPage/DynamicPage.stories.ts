import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { Meta } from "@storybook/web-components";
import type { PartialStoryFn } from "@storybook/types";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { UI5StoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs.js";

import type DynamicPage from "@ui5/webcomponents-fiori/dist/DynamicPage.js";

const component = "ui5-dynamic-page";

const stylesDecorator = (storyFn: PartialStoryFn) => html`
    <style>
        #root-inner,
        #storybook-root,
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
    ${storyFn()}
`;

export default {
  title: "Fiori/Dynamic Page",
  component: "DynamicPage",
  parameters: {
    docs: {
      page: DocsPage({ ...componentInfo, component })
    },
  },
  decorators: [stylesDecorator],
  argTypes,
} as Meta<DynamicPage>;

const Template: UI5StoryArgs<DynamicPage, StoryArgsSlots> = (args) => {
  return html`
    <ui5-dynamic-page id="page"
    headerSnapped = ${ifDefined(args.headerSnapped)}
    headerPinned = ${ifDefined(args.headerPinned)}
    showFooter = ${ifDefined(args.showFooter)}
    >
      ${unsafeHTML(args.headerArea)}
      ${unsafeHTML(args.titleArea)}
      ${unsafeHTML(args.content)}
      ${unsafeHTML(args.footer)}
    </ui5-dynamic-page>
`;
};

export const Basic = Template.bind({});
Basic.args = {
  titleArea: `
    <ui5-dynamic-page-title slot="titleArea">
        <ui5-breadcrumbs slot="breadcrumbs">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Link1
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item
                href="https://www.sap.com"
                target="_blank"
                >Link2</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item href="#">Link3</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link4</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link5</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link6</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link7</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item>Location</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>

        <ui5-title slot="expandedHeading">Expanded Heading</ui5-title>

        <ui5-title slot="snappedHeading">Snapped Heading</ui5-title>

        <div slot="expandedContent">
            <ui5-title level="H6"
                >This is an expanded subheading</ui5-title
            >
        </div>

        <div slot="snappedContent">
            <ui5-title level="H6"
                >This is a snapped subheading</ui5-title
            >
        </div>

        <ui5-toolbar style="border: none" align-content="Start">
            <ui5-toolbar-button overflow-priority="NeverOverflow"
                text="KPI Generic tag"
            ></ui5-toolbar-button>
        </ui5-toolbar>

        <ui5-toolbar slot="actions">
            <ui5-toolbar-button id="toggleFooterBtn" text="Toggle Footer"></ui5-toolbar-button>
            <ui5-toolbar-button text="Edit" overflow-priority="NeverOverflow"></ui5-toolbar-button>
            <ui5-toolbar-button icon="delete"></ui5-toolbar-button>
            <ui5-toolbar-button icon="copy"></ui5-toolbar-button>
            <ui5-toolbar-button icon="share"></ui5-toolbar-button>
        </ui5-toolbar>

        <ui5-toolbar slot="navigationActions">
            <ui5-toolbar-button icon="full-screen"></ui5-toolbar-button>
            <ui5-toolbar-button icon="decline"></ui5-toolbar-button>
        </ui5-toolbar>
    </ui5-dynamic-page-title>`,
    headerArea: `
    <ui5-dynamic-page-header slot="headerArea">
    <div
        style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        "
    >
        <div
            style="
                display: flex;
                flex-direction: row;
                align-items: center;
            "
        >
            <ui5-avatar
                id="avatar"
                icon="laptop"
                color-scheme="Accent5"
                size="XL"
                style="margin: 0 1rem; min-width: 7rem"
            >
            </ui5-avatar>
            <div>
                <div class="productInfo">
                    <ui5-title level="H5">Product:</ui5-title>
                    <ui5-title level="H5" id="lblName"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                    <ui5-title level="H5">Description:</ui5-title>
                    <ui5-title level="H5" id="lblDesc"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                    <ui5-title level="H5">Supplier:</ui5-title>
                    <ui5-title level="H5" id="lblSupplier"
                        ><b>Titanium</b></ui5-title>
                    <ui5-button id="scrollBtn">Scroll to bottom</ui5-button>
                </div>
            </div>
        </div>
        <div class="productInfo" style="align-self: start">
            <ui5-title level="H5">Progress:</ui5-title>
            <ui5-progress-indicator
                id="progress"
                accessible-name="Hello World"
                value="40"
                style="width: 9rem"
            ></ui5-rating-indicator>
        </div>
        <span></span>
    </div>
    </ui5-dynamic-page-header>`,
    content: `
    <ui5-list
    id="col1list"
    header-text="Products (13)"
    mode="SingleSelect"
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-1001"
        icon="slim-arrow-right"
        icon-end
        additional-text="87.90 EUR"
        >Gladiator MX</ui5-li
    >
    </ui5-list>`,
    footer: `<ui5-bar id="footer" slot="footer" design="FloatingFooter">
    <ui5-button slot="endContent">Edit</ui5-button>
    <ui5-button slot="endContent">Close</ui5-button>
    </ui5-bar>`,

};
Basic.parameters = {
  docs: {
    story: {
      // Opt-out of inline rendering
      inline: false,
      iframeHeight: 600,
    }
  },
};