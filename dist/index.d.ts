export type CheckTone = "pass" | "fail" | "review";
export type ScreenshotInput = {
    name: string;
    width: number;
    height: number;
    size: number;
    mime: string;
    hasAlpha: boolean | null;
    pngBitDepth?: number | null;
    pngColorType?: number | null;
    preview?: string;
};
export type ScreenshotCheck = {
    tone: CheckTone;
    label: string;
    detail: string;
};
export type ScreenshotResult = ScreenshotInput & {
    checks: ScreenshotCheck[];
    status: CheckTone;
};
export declare const storeTargets: {
    readonly "apple-iphone-duo": {
        readonly name: "App Store Connect · iPhone Duo";
        readonly shortName: "iPhone Duo";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact iPhone Duo outer- or inner-display size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-69": {
        readonly name: "App Store Connect · iPhone Dynamic Island, large (6.9-inch)";
        readonly shortName: "iPhone Dynamic Island, large (6.9-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact current Dynamic Island (large display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-65": {
        readonly name: "App Store Connect · iPhone Face ID, large (6.5-inch)";
        readonly shortName: "iPhone Face ID, large (6.5-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Face ID (large display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-63": {
        readonly name: "App Store Connect · iPhone Dynamic Island, medium (6.3-inch)";
        readonly shortName: "iPhone Dynamic Island, medium (6.3-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Dynamic Island (medium display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-61": {
        readonly name: "App Store Connect · iPhone Face ID, medium (6.1-inch)";
        readonly shortName: "iPhone Face ID, medium (6.1-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Face ID (medium display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-55": {
        readonly name: "App Store Connect · iPhone Home Button, large (5.5-inch)";
        readonly shortName: "iPhone Home Button, large (5.5-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using the exact Home Button (large display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-47": {
        readonly name: "App Store Connect · iPhone Home Button, medium (4.7-inch)";
        readonly shortName: "iPhone Home Button, medium (4.7-inch)";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using the exact Home Button (medium display) size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-4": {
        readonly name: "App Store Connect · iPhone Home Button, 4-inch";
        readonly shortName: "iPhone Home Button, 4-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 4-inch Home Button size with or without the status bar.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-iphone-35": {
        readonly name: "App Store Connect · iPhone Home Button, 3.5-inch";
        readonly shortName: "iPhone Home Button, 3.5-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 3.5-inch Home Button size with or without the status bar.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-ipad-13": {
        readonly name: "App Store Connect · iPad 13-inch";
        readonly shortName: "iPad 13-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact current 13-inch iPad size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-ipad-129": {
        readonly name: "App Store Connect · iPad 12.9-inch";
        readonly shortName: "iPad 12.9-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using the exact 12.9-inch iPad size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-ipad-11": {
        readonly name: "App Store Connect · iPad 11-inch";
        readonly shortName: "iPad 11-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 11-inch iPad size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-ipad-105": {
        readonly name: "App Store Connect · iPad 10.5-inch";
        readonly shortName: "iPad 10.5-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using the exact 10.5-inch iPad size.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-ipad-97": {
        readonly name: "App Store Connect · iPad 9.7-inch";
        readonly shortName: "iPad 9.7-inch";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 9.7-inch iPad size with or without the status bar.";
        readonly acceptedSizes: string[];
    };
    readonly "apple-mac": {
        readonly name: "App Store Connect · Mac";
        readonly shortName: "Apple · Mac";
        readonly source: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/";
        readonly sourceLabel: "Apple screenshot specifications";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 JPEG or PNG screenshots, no transparency, using one of Apple’s four exact 16:10 Mac sizes.";
        readonly acceptedSizes: string[];
    };
    readonly "google-phone": {
        readonly name: "Google Play · Phone";
        readonly shortName: "Google Play";
        readonly source: "https://support.google.com/googleplay/android-developer/answer/9866151?hl=en";
        readonly sourceLabel: "Google Play preview asset guidance";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "JPEG or 24-bit PNG without alpha, 320–3840 px, with the long edge no more than twice the short edge.";
    };
    readonly "microsoft-desktop": {
        readonly name: "Microsoft Store · Desktop";
        readonly shortName: "Microsoft · Desktop";
        readonly source: "https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/screenshots-and-images";
        readonly sourceLabel: "Microsoft Store screenshot guidance";
        readonly verifiedAt: "2026-10-07";
        readonly summary: "1–10 PNG screenshots, at least 1366 × 768 in landscape (or the portrait equivalent), up to 50 MB each.";
    };
};
export type StoreTarget = keyof typeof storeTargets;
export declare const appleTargetIds: readonly ["apple-iphone-duo", "apple-iphone-69", "apple-iphone-65", "apple-iphone-63", "apple-iphone-61", "apple-iphone-55", "apple-iphone-47", "apple-iphone-4", "apple-iphone-35", "apple-ipad-13", "apple-ipad-129", "apple-ipad-11", "apple-ipad-105", "apple-ipad-97", "apple-mac"];
export type AppleTarget = (typeof appleTargetIds)[number];
export declare const appleTargetGroups: {
    label: string;
    targets: AppleTarget[];
}[];
export declare function isAppleTarget(target: StoreTarget): target is AppleTarget;
export declare function validateScreenshot(input: ScreenshotInput, target: StoreTarget): ScreenshotResult;
export declare function validateSet(inputs: ScreenshotInput[], target: StoreTarget): {
    results: ScreenshotResult[];
    countCheck: ScreenshotCheck;
    failures: number;
    reviews: number;
    passes: number;
};
export declare function formatBytes(bytes: number): string;
export declare function screenshotExampleFor(target: StoreTarget): ScreenshotInput[];
export declare const screenshotExample: ScreenshotInput[];
