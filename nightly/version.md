commit 77696d76d0e8788bee065c8b48ba9e2ebec1ad76
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Sun Jun 9 11:36:10 2024 +0300

    chore(tools): add more validation in cem generation (#9145)
    
    Add validation that checks correct usage of `@extends` and `@implements` JSDoc tags. Validations also check whether the tag has same value in heritage clause.
    
    Example:
    ```
     | === ERROR: Problem found in file: src/SuggestionItem.ts:
     |      - @interface { IInputSuggestionItem } tag is used, but the class doesn't implement the corresponding interface
     | === ERROR: Problem found in file: src/Tokenizer.ts:
     |      - @extends sap.ui.webc.base.UI5Element is used, but the class doesn't extend the corresponding superclass
    ```
