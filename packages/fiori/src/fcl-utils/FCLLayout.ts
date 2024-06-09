import type { MEDIA } from "../FlexibleColumnLayout.js";
import type FCLLayout from "../types/FCLLayout.js";

type LayoutConfiguration = {
	[device in MEDIA]: {
		[layoutName in FCLLayout]: {
			layout: Array<string>;
			arrows?: Array<{
				visible: boolean;
				dir: null | string;
				separator?: boolean;
			}>;
			separators: Array<{
				visible: boolean;
				gripVisible?: boolean;
			}>;
		};
	};
};

const getLayoutsByMedia = (): LayoutConfiguration => {
	return {
		desktop: {
			"OneColumn": {
				layout: ["100%", "0px", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"TwoColumnsStartExpanded": {
				layout: ["67%", "33%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"TwoColumnsMidExpanded": {
				layout: ["33%", "67%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpanded": {
				layout: ["25%", "50%", "25%"],
				separators:	[
					{ visible: true, gripVisible: true },
					{ visible: true, gripVisible: true },
				],
			},
			"ThreeColumnsEndExpanded": {
				layout: ["25%", "25%", "50%"],
				separators: [
					{ visible: true, gripVisible: false },
					{ visible: true, gripVisible: true },
				],
			},
			"ThreeColumnsStartExpandedEndHidden": {
				layout: ["67%", "33%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpandedEndHidden": {
				layout: ["33%", "67%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: true, gripVisible: true },
				],
			},
			"MidColumnFullScreen": {
				layout: ["0px", "100%", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"EndColumnFullScreen": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
		},
		tablet: {
			"OneColumn": {
				layout: ["100%", "0px", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"TwoColumnsStartExpanded": {
				layout: ["67%", "33%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"TwoColumnsMidExpanded": {
				layout: ["33%", "67%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpanded": {
				layout: ["0px", "67%", "33%"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: true, gripVisible: true },
				],
			},
			"ThreeColumnsEndExpanded": {
				layout: ["0px", "33%", "67%"],
				separators: [
					{ visible: false },
					{ visible: true, gripVisible: true },
				],
			},
			"ThreeColumnsStartExpandedEndHidden": {
				layout: ["67%", "33%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpandedEndHidden": {
				layout: ["33%", "67%", "0px"],
				separators: [
					{ visible: true, gripVisible: true },
					{ visible: true, gripVisible: true },
				],
			},
			"MidColumnFullScreen": {
				layout: ["0px", "100%", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"EndColumnFullScreen": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
		},
		phone: {
			"OneColumn": {
				layout: ["100%", "0px", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"TwoColumnsStartExpanded": {
				layout: ["0px", "100%", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"TwoColumnsMidExpanded": {
				layout: ["0px", "100%", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpanded": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"ThreeColumnsEndExpanded": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"ThreeColumnsStartExpandedEndHidden": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"ThreeColumnsMidExpandedEndHidden": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"MidColumnFullScreen": {
				layout: ["0px", "100%", "0px"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
			"EndColumnFullScreen": {
				layout: ["0px", "0px", "100%"],
				separators: [
					{ visible: false },
					{ visible: false },
				],
			},
		},
	};
};

export {
	getLayoutsByMedia,
};

export type {
	LayoutConfiguration,
	FCLLayout,
};
