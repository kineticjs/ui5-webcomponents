commit 8f5b67901a429196252f52980c10a04f7d43fe0b
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Mon Jun 10 12:32:03 2024 +0300

    refactor(ui5-li, ui5-li-custom): rename classes (#9158)
    
    Rename classes for better consistency - `StandardListItem` has been renamed to `ListItemStandard`, and `CustomListItem` has been renamed to `ListItemCustom.
    
    BREAKING CHANGE: `StandardListItem` has been renamed to `ListItemStandard`, and `CustomListItem` has been renamed to `ListItemCustom`.
    If you previously imported the classes as follows:
    ```ts
    import StandardListItem from "@ui5/webcomponents/StandardListItem.js";
    import CustomListItem from "@ui5/webcomponents/CustomListItem.js";
    ```
    now you must change imports to:
    ```ts
    import ListItemStandard from "@ui5/webcomponents/ListItemStandard.js";
    import ListItemCustom from "@ui5/webcomponents/ListItemCustom.js";
    ```
    
    Related to: https://github.com/SAP/ui5-webcomponents/issues/8461
