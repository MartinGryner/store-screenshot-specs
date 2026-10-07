export type AppleScreenshotOrientation = "portrait" | "landscape";
export type AppleScreenshotSize = {
    width: number;
    height: number;
    orientation: AppleScreenshotOrientation;
    note?: string;
};
export type AppleScreenshotSlot = {
    id: string;
    platform: "iPhone" | "iPad" | "Mac" | "Apple TV" | "Apple Vision Pro" | "Apple Watch";
    display: string;
    requirement: string | null;
    fallback: string | null;
    sizes: readonly AppleScreenshotSize[];
    validatorTargetId?: string;
    formerLabel?: string;
};
export declare const appleScreenshotSpecifications: {
    readonly schemaVersion: 1;
    readonly verifiedAt: "2026-10-07";
    readonly sourceUrl: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
    readonly uploadGuidanceUrl: "https://developer.apple.com/help/app-store-connect/manage-app-information/manage-your-app-store-assets/";
    readonly fileRules: {
        readonly minimumScreenshots: 1;
        readonly maximumScreenshots: 10;
        readonly formats: readonly ["jpeg", "jpg", "png"];
        readonly alphaChannelsAllowed: false;
        readonly transparencyAllowed: false;
    };
    readonly slots: ({
        id: string;
        platform: "iPhone";
        display: string;
        requirement: null;
        fallback: null;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
            note: string;
        } | {
            width: number;
            height: number;
            orientation: "landscape";
            note: string;
        })[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "iPhone";
        display: string;
        formerLabel: string;
        requirement: null;
        fallback: string;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
        } | {
            width: number;
            height: number;
            orientation: "landscape";
        })[];
    } | {
        id: string;
        platform: "iPhone";
        display: string;
        formerLabel: string;
        requirement: string;
        fallback: string;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
        } | {
            width: number;
            height: number;
            orientation: "landscape";
        })[];
    } | {
        id: string;
        platform: "iPhone";
        display: string;
        requirement: null;
        fallback: string;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
            note: string;
        } | {
            width: number;
            height: number;
            orientation: "landscape";
            note: string;
        })[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "iPad";
        display: string;
        requirement: string;
        fallback: null;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
        } | {
            width: number;
            height: number;
            orientation: "landscape";
        })[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "iPad";
        display: string;
        requirement: null;
        fallback: string;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
        } | {
            width: number;
            height: number;
            orientation: "landscape";
        })[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "iPad";
        display: string;
        requirement: null;
        fallback: string;
        validatorTargetId: string;
        sizes: ({
            width: number;
            height: number;
            orientation: "portrait";
            note: string;
        } | {
            width: number;
            height: number;
            orientation: "landscape";
            note: string;
        })[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "Mac";
        display: string;
        requirement: string;
        fallback: null;
        validatorTargetId: string;
        sizes: {
            width: number;
            height: number;
            orientation: "landscape";
        }[];
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "Apple TV";
        display: string;
        requirement: string;
        fallback: null;
        sizes: {
            width: number;
            height: number;
            orientation: "landscape";
        }[];
        validatorTargetId?: undefined;
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "Apple Vision Pro";
        display: string;
        requirement: string;
        fallback: null;
        sizes: {
            width: number;
            height: number;
            orientation: "landscape";
        }[];
        validatorTargetId?: undefined;
        formerLabel?: undefined;
    } | {
        id: string;
        platform: "Apple Watch";
        display: string;
        requirement: string;
        fallback: null;
        sizes: {
            width: number;
            height: number;
            orientation: "portrait";
            note: string;
        }[];
        validatorTargetId?: undefined;
        formerLabel?: undefined;
    })[];
};
export declare function appleScreenshotSizeStrings(slot: AppleScreenshotSlot): string[];
export declare function getAppleScreenshotSlotByValidatorTarget(targetId: string): {
    id: string;
    platform: "iPhone";
    display: string;
    requirement: null;
    fallback: null;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
        note: string;
    } | {
        width: number;
        height: number;
        orientation: "landscape";
        note: string;
    })[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "iPhone";
    display: string;
    formerLabel: string;
    requirement: null;
    fallback: string;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
    } | {
        width: number;
        height: number;
        orientation: "landscape";
    })[];
} | {
    id: string;
    platform: "iPhone";
    display: string;
    formerLabel: string;
    requirement: string;
    fallback: string;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
    } | {
        width: number;
        height: number;
        orientation: "landscape";
    })[];
} | {
    id: string;
    platform: "iPhone";
    display: string;
    requirement: null;
    fallback: string;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
        note: string;
    } | {
        width: number;
        height: number;
        orientation: "landscape";
        note: string;
    })[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "iPad";
    display: string;
    requirement: string;
    fallback: null;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
    } | {
        width: number;
        height: number;
        orientation: "landscape";
    })[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "iPad";
    display: string;
    requirement: null;
    fallback: string;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
    } | {
        width: number;
        height: number;
        orientation: "landscape";
    })[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "iPad";
    display: string;
    requirement: null;
    fallback: string;
    validatorTargetId: string;
    sizes: ({
        width: number;
        height: number;
        orientation: "portrait";
        note: string;
    } | {
        width: number;
        height: number;
        orientation: "landscape";
        note: string;
    })[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "Mac";
    display: string;
    requirement: string;
    fallback: null;
    validatorTargetId: string;
    sizes: {
        width: number;
        height: number;
        orientation: "landscape";
    }[];
    formerLabel?: undefined;
} | {
    id: string;
    platform: "Apple TV";
    display: string;
    requirement: string;
    fallback: null;
    sizes: {
        width: number;
        height: number;
        orientation: "landscape";
    }[];
    validatorTargetId?: undefined;
    formerLabel?: undefined;
} | {
    id: string;
    platform: "Apple Vision Pro";
    display: string;
    requirement: string;
    fallback: null;
    sizes: {
        width: number;
        height: number;
        orientation: "landscape";
    }[];
    validatorTargetId?: undefined;
    formerLabel?: undefined;
} | {
    id: string;
    platform: "Apple Watch";
    display: string;
    requirement: string;
    fallback: null;
    sizes: {
        width: number;
        height: number;
        orientation: "portrait";
        note: string;
    }[];
    validatorTargetId?: undefined;
    formerLabel?: undefined;
} | undefined;
