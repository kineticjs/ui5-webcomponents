commit 52106ccffba64d13949764339a71225b33dac3a3
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Fri Jun 21 16:42:05 2024 +0300

    refactor(ui5-view-settings-dialog): change opening api to open property (#9249)
    
    Add `open` property to replace the `show` and `close` methods in the `ui5-view-settings-dialog` component.
    
    BREAKING CHANGE: Removed `show` and `close` methods.
    
    Before, the ui5-view-settings-dialog could be opened and closed by calling `show()` and `close()`:
    ```ts
    const viewSettingsDialog = document.getElementById("exampleID");
    viewSettingsDialog.show();
    viewSettingsDialog.close();
    ```
    Now, the dialog is opened and closed by setting the open property to true or false:
    ```ts
    const viewSettingsDialog = document.getElementById("exampleID");
    viewSettingsDialog.open = true;
    viewSettingsDialog.open = false;
    ```
    fixes: https://github.com/SAP/ui5-webcomponents/issues/9240
