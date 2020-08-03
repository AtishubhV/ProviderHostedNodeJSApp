import { SPFetchClient } from "@pnp/nodejs-commonjs";
import { sp } from "@pnp/sp-commonjs";
import settings from './settings';
sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new SPFetchClient(settings.testing.sp.url, settings.testing.sp.id, settings.testing.sp.secret);
        },
    },
});
export default sp;