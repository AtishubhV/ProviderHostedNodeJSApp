declare var settings: {
    testing: {
        enableWebTests: boolean;
        sp: {
            id: string;
            secret: string;
            url: string;
            notificationUrl: string;
        };
        graph: {
            tenant: string;
            id: string;
            secret: string;
        };
    };
};
export default settings;
