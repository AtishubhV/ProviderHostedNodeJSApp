"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = {
    testing: {
        enableWebTests: true,
        sp: {
            id: "e3eaf46c-417d-4a08-a320-18ebf62e5f09",
            secret: "fRbO5eb18LUv+4T4zqKJKuSyWImiHuNW4pLV8MYbE8k=",
            url: "https://chinhaar.sharepoint.com/sites/developer",
            notificationUrl: "",
        },
        graph: {
            tenant: "{tenant.onmicrosoft.com}",
            id: "{your app id}",
            secret: "{your secret}"
        },
    }
};
{ /* <AppPermissionRequests AllowAppOnlyPolicy="true">
<AppPermissionRequest Scope="http://sharepoint/content/sitecollection"
Right="FullControl" />
</AppPermissionRequests> */
}
exports.default = settings;
//# sourceMappingURL=settings.js.map