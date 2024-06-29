"use strict";import u from"./patchPatcher.js";import l from"./patchPopup.js";import{registerFeature as m}from"../FeaturesRegistry.js";import{setTheme as g}from"../config/Theme.js";class a{static isAtLeastVersion116(){if(!window.sap.ui.version)return!0;const e=window.sap.ui.version.split(".");return!e||e.length<2?!1:parseInt(e[0])>1||parseInt(e[1])>=116}static isOpenUI5Detected(){return typeof window.sap?.ui?.require=="function"}static init(){return a.isOpenUI5Detected()?new Promise(t=>{window.sap.ui.require(["sap/ui/core/Core"],async e=>{const i=()=>{let n=["sap/ui/core/Popup","sap/ui/core/Patcher","sap/ui/core/LocaleData"];a.isAtLeastVersion116()&&(n=[...n,"sap/base/i18n/Formatting","sap/base/i18n/Localization","sap/ui/core/ControlBehavior","sap/ui/core/Theming","sap/ui/core/date/CalendarUtils"]),window.sap.ui.require(n,(o,r)=>{u(r),l(o),t()})};a.isAtLeastVersion116()?(await e.ready(),i()):e.attachInit(i)})}):Promise.resolve()}static getConfigurationSettingsObject(){if(!a.isOpenUI5Detected())return{};if(a.isAtLeastVersion116()){const n=window.sap.ui.require("sap/ui/core/ControlBehavior"),o=window.sap.ui.require("sap/base/i18n/Localization"),r=window.sap.ui.require("sap/ui/core/Theming"),s=window.sap.ui.require("sap/base/i18n/Formatting"),c=window.sap.ui.require("sap/ui/core/date/CalendarUtils");return{animationMode:n.getAnimationMode(),language:o.getLanguage(),theme:r.getTheme(),themeRoot:r.getThemeRoot(),rtl:o.getRTL(),timezone:o.getTimezone(),calendarType:s.getCalendarType(),formatSettings:{firstDayOfWeek:c.getWeekConfigurationValues().firstDayOfWeek,legacyDateCalendarCustomizing:s.getCustomIslamicCalendarData?.()??s.getLegacyDateCalendarCustomizing?.()}}}const e=window.sap.ui.require("sap/ui/core/Core").getConfiguration(),i=window.sap.ui.require("sap/ui/core/LocaleData");return{animationMode:e.getAnimationMode(),language:e.getLanguage(),theme:e.getTheme(),themeRoot:e.getThemeRoot(),rtl:e.getRTL(),timezone:e.getTimezone(),calendarType:e.getCalendarType(),formatSettings:{firstDayOfWeek:i?i.getInstance(e.getLocale()).getFirstDayOfWeek():void 0,legacyDateCalendarCustomizing:e.getFormatSettings().getLegacyDateCalendarCustomizing()}}}static getLocaleDataObject(){if(!a.isOpenUI5Detected())return;const t=window.sap.ui.require("sap/ui/core/LocaleData");if(a.isAtLeastVersion116()){const n=window.sap.ui.require("sap/base/i18n/Localization");return t.getInstance(n.getLanguageTag())._get()}const i=window.sap.ui.require("sap/ui/core/Core").getConfiguration();return t.getInstance(i.getLocale())._get()}static _listenForThemeChange(){if(a.isAtLeastVersion116()){const t=window.sap.ui.require("sap/ui/core/Theming");t.attachApplied(()=>{g(t.getTheme())})}else{const t=window.sap.ui.require("sap/ui/core/Core"),e=t.getConfiguration();t.attachThemeChanged(()=>{g(e.getTheme())})}}static attachListeners(){a.isOpenUI5Detected()&&a._listenForThemeChange()}static cssVariablesLoaded(){if(!a.isOpenUI5Detected())return;const t=[...document.head.children].find(e=>e.id==="sap-ui-theme-sap.ui.core");return t?!!t.href.match(/\/css(-|_)variables\.css/):!1}}m("OpenUI5Support",a);export default a;
//# sourceMappingURL=OpenUI5Support.js.map