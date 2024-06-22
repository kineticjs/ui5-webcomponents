commit eef0cc9b663fda6268b98e516ed46439435fa2b0
Author: Peter Skelin <petar.skelin@sap.com>
Date:   Fri Jun 21 10:19:12 2024 +0300

    feat: add property initializers (#8846)
    
    Initial values are only set by property initializers and there are no longer any defaults per type from the framework
    Remove the defaultValue and related fields from the @property decorator
    Remove all runtime checks and validations
    
    BREAKING CHANGE: @property decorator must be adapted according to new type parameter
