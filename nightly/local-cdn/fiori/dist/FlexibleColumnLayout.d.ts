import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type AriaLandmarkRole from "@ui5/webcomponents-base/dist/types/AriaLandmarkRole.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-left.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";
import FCLLayout from "./types/FCLLayout.js";
import type { LayoutConfiguration } from "./fcl-utils/FCLLayout.js";
declare enum MEDIA {
    PHONE = "phone",
    TABLET = "tablet",
    DESKTOP = "desktop"
}
type FlexibleColumnLayoutColumnLayout = Array<string | number>;
type FlexibleColumnLayoutLayoutChangeEventDetail = {
    layout: `${FCLLayout}`;
    columnLayout: FlexibleColumnLayoutColumnLayout;
    startColumnVisible: boolean;
    midColumnVisible: boolean;
    endColumnVisible: boolean;
    arrowUsed: boolean;
    arrowsUsed: boolean;
    resize: boolean;
};
type FCLAccessibilityRoles = Extract<Lowercase<AriaLandmarkRole>, "none" | "complementary" | "contentinfo" | "main" | "region">;
type FCLAccessibilityAttributes = {
    startColumn?: {
        role: FCLAccessibilityRoles;
        name: string;
    };
    midColumn?: {
        role: FCLAccessibilityRoles;
        name: string;
    };
    endColumn?: {
        role: FCLAccessibilityRoles;
        name: string;
    };
    startArrowContainer?: {
        role: FCLAccessibilityRoles;
        name: string;
    };
    endArrowContainer?: {
        role: FCLAccessibilityRoles;
        name: string;
    };
    startArrowLeft?: {
        name: string;
    };
    startArrowRight?: {
        name: string;
    };
    endArrowLeft?: {
        name: string;
    };
    endArrowRight?: {
        name: string;
    };
};
/**
 * @class
 *
 * ### Overview
 *
 * The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
 * There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.
 *
 * ### Usage
 *
 * Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
 * The Component is flexible in a sense that the application can focus the user's attention on one particular column.
 *
 * ### Responsive Behavior
 *
 * The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout` property and the window size.
 * The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
 * and 3 columns for sizes bigger than 1023px.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 *
 * - [Space] / [Enter] or [Return] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).
 * - This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.8
 */
declare class FlexibleColumnLayout extends UI5Element {
    /**
    * Defines the columns layout and their proportion.
    *
    * **Note:** The layout also depends on the screen size - one column for screens smaller than 599px,
    * two columns between 599px and 1023px and three columns for sizes bigger than 1023px.
    *
    * **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns
    * in 67%/33% proportion.
    * @default "OneColumn"
    * @public
    */
    layout: `${FCLLayout}`;
    /**
    * Defines the visibility of the arrows,
    * used for expanding and shrinking the columns.
    * @default false
    * @public
    * @since 1.0.0-rc.15
    */
    hideArrows: boolean;
    /**
    * Defines additional accessibility attributes on different areas of the component.
    *
    * The accessibilityAttributes object has the following fields,
    * where each field is an object supporting one or more accessibility attributes:
    *
    *  - **startColumn**: `startColumn.role` and `startColumn.name`.
    *  - **midColumn**: `midColumn.role` and `midColumn.name`.
    *  - **endColumn**: `endColumn.role` and `endColumn.name`.
    *  - **startArrowContainer**: `startArrowContainer.role` and `startArrowContainer.name`.
    *  - **endArrowContainer**: `endArrowContainerrole.role` and `endArrowContainer.name`.
    *  - **startArrowLeft**: `startArrowLeft.name`.
    *  - **startArrowRight**: `startArrowRight.name`.
    *  - **endArrowLeft**: `endArrowLeft.name`.
    *  - **endArrowRight**: `endArrowRight.name`.
    *
    * The accessibility attributes support the following values:
    *
    * - **role**: Defines the accessible ARIA landmark role of the area.
    * Accepts the following values: `none`, `complementary`, `contentinfo`, `main` or `region`.
    *
    * - **name**: Defines the accessible ARIA name of the area.
    * Accepts any string.
    *
    * @default {}
    * @public
    * @since 2.0.0
    */
    accessibilityAttributes: FCLAccessibilityAttributes;
    /**
    * Defines the component width in px.
    * @default 0
    * @private
    */
    _width: number;
    /**
    * Defines the effective columns layout,
    * based on both the `layout` property and the screen size.
    * Example: [67%, 33%, 0], [25%, 50%, 25%], etc.
    * @default undefined
    * @private
    */
    _columnLayout?: FlexibleColumnLayoutColumnLayout;
    /**
    * Defines the visible columns count - 1, 2 or 3.
    * @default 1
    * @private
    */
    _visibleColumns: number;
    /**
    * Allows the user to replace the whole layouts configuration
    * @private
    */
    _layoutsConfiguration?: LayoutConfiguration;
    /**
    * Defines the content in the start column.
    * @public
    */
    startColumn: Array<HTMLElement>;
    /**
    * Defines the content in the middle column.
    * @public
    */
    midColumn: Array<HTMLElement>;
    /**
    * Defines the content in the end column.
    * @public
    */
    endColumn: Array<HTMLElement>;
    initialRendering: boolean;
    _handleResize: () => void;
    static i18nBundle: I18nBundle;
    _prevLayout: `${FCLLayout}` | null;
    constructor();
    static onDefine(): Promise<void>;
    static get ANIMATION_DURATION(): 0 | 560;
    onEnterDOM(): void;
    onExitDOM(): void;
    onAfterRendering(): void;
    handleInitialRendering(): void;
    handleResize(): void;
    startArrowClick(): void;
    endArrowClick(): void;
    arrowClick(options: {
        start: boolean;
        end: boolean;
    }): void;
    updateLayout(): void;
    syncLayout(): void;
    toggleColumns(): void;
    toggleColumn(column: string): void;
    columnResizeHandler: (e: Event) => void;
    nextLayout(layout: `${FCLLayout}`, arrowsInfo: {
        start: boolean;
        end: boolean;
    }): undefined;
    nextColumnLayout(layout: `${FCLLayout}`): string[];
    calcVisibleColumns(colLayout: FlexibleColumnLayoutColumnLayout): number;
    fireLayoutChange(arrowUsed: boolean, resize: boolean): void;
    /**
     * Checks if a column is hidden based on its width.
     */
    private _isColumnHidden;
    /**
    * Returns the current column layout, based on both the `layout` property and the screen size.
    *
    * **For example:** ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc,
    * where the numbers represents the width of the start, middle and end columns.
    * @default undefined
    * @public
    */
    get columnLayout(): FlexibleColumnLayoutColumnLayout | undefined;
    /**
    * Returns if the `start` column is visible.
    * @default true
    * @public
    */
    get startColumnVisible(): boolean;
    /**
    * Returns if the `middle` column is visible.
    * @default false
    * @public
    */
    get midColumnVisible(): boolean;
    /**
    * Returns if the `end` column is visible.
    * @default false
    * @public
    */
    get endColumnVisible(): boolean;
    /**
    * Returns the number of currently visible columns.
    * @default 1
    * @public
    */
    get visibleColumns(): number;
    get classes(): {
        root: {
            "ui5-fcl-root": boolean;
        };
        columns: {
            start: {
                "ui5-fcl-column": boolean;
                "ui5-fcl-column-animation": boolean;
                "ui5-fcl-column--start": boolean;
            };
            middle: {
                "ui5-fcl-column": boolean;
                "ui5-fcl-column-animation": boolean;
                "ui5-fcl-column--middle": boolean;
            };
            end: {
                "ui5-fcl-column": boolean;
                "ui5-fcl-column-animation": boolean;
                "ui5-fcl-column--end": boolean;
            };
        };
    };
    get styles(): {
        arrowsContainer: {
            start: {
                display: string;
            };
            end: {
                display: string;
            };
        };
        arrows: {
            start: {
                display: string;
                transform: string;
            };
            end: {
                display: string;
                transform: string;
            };
        };
    };
    get startColumnWidth(): string | number;
    get midColumnWidth(): string | number;
    get endColumnWidth(): string | number;
    get showStartSeparator(): boolean;
    get showEndSeparator(): boolean;
    get showStartArrow(): boolean;
    get showEndArrow(): boolean;
    get startArrowVisibility(): boolean;
    get endArrowVisibility(): boolean;
    get startArrowDirection(): string | null;
    get endArrowDirection(): string | null;
    get effectiveArrowsInfo(): {
        visible: boolean;
        dir: string | null;
        separator?: boolean | undefined;
    }[];
    get media(): MEDIA;
    get widthDOM(): number;
    get startColumnDOM(): HTMLElement;
    get midColumnDOM(): HTMLElement;
    get endColumnDOM(): HTMLElement;
    get accStartColumnText(): string;
    get accMiddleColumnText(): string;
    get accEndColumnText(): string;
    get accStartArrowContainerText(): string | undefined;
    get accEndArrowContainerText(): string | undefined;
    get accStartColumnRole(): FCLAccessibilityRoles | undefined;
    get accMiddleColumnRole(): FCLAccessibilityRoles | undefined;
    get accEndColumnRole(): FCLAccessibilityRoles | undefined;
    get accStartArrowContainerRole(): FCLAccessibilityRoles | undefined;
    get accEndArrowContainerRole(): FCLAccessibilityRoles | undefined;
    get _effectiveLayoutsByMedia(): LayoutConfiguration;
    get _accAttributes(): {
        columns: {
            start: {
                role: FCLAccessibilityRoles | undefined;
                ariaHidden: true | undefined;
            };
            middle: {
                role: FCLAccessibilityRoles | undefined;
                ariaHidden: true | undefined;
            };
            end: {
                role: FCLAccessibilityRoles | undefined;
                ariaHidden: true | undefined;
            };
        };
    };
    get accStartArrowText(): string;
    get accEndArrowText(): string;
}
export default FlexibleColumnLayout;
export type { MEDIA, FlexibleColumnLayoutLayoutChangeEventDetail, FCLAccessibilityAttributes, FlexibleColumnLayoutColumnLayout, };
