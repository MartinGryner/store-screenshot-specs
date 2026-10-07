import { appleScreenshotSpecifications, getAppleScreenshotSlotByValidatorTarget } from "./apple.js";
const appleSource = appleScreenshotSpecifications.sourceUrl;
const appleVerifiedAt = appleScreenshotSpecifications.verifiedAt;
function acceptedAppleSizes(targetId) {
    const slot = getAppleScreenshotSlotByValidatorTarget(targetId);
    if (!slot)
        throw new Error(`Missing Apple screenshot specification for validator target ${targetId}`);
    return slot.sizes.map((size) => `${size.width}x${size.height}`);
}
export const storeTargets = {
    "apple-iphone-duo": {
        name: "App Store Connect · iPhone Duo",
        shortName: "iPhone Duo",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact iPhone Duo outer- or inner-display size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-duo"),
    },
    "apple-iphone-69": {
        name: "App Store Connect · iPhone Dynamic Island, large (6.9-inch)",
        shortName: "iPhone Dynamic Island, large (6.9-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact current Dynamic Island (large display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-69"),
    },
    "apple-iphone-65": {
        name: "App Store Connect · iPhone Face ID, large (6.5-inch)",
        shortName: "iPhone Face ID, large (6.5-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Face ID (large display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-65"),
    },
    "apple-iphone-63": {
        name: "App Store Connect · iPhone Dynamic Island, medium (6.3-inch)",
        shortName: "iPhone Dynamic Island, medium (6.3-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Dynamic Island (medium display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-63"),
    },
    "apple-iphone-61": {
        name: "App Store Connect · iPhone Face ID, medium (6.1-inch)",
        shortName: "iPhone Face ID, medium (6.1-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact Face ID (medium display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-61"),
    },
    "apple-iphone-55": {
        name: "App Store Connect · iPhone Home Button, large (5.5-inch)",
        shortName: "iPhone Home Button, large (5.5-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using the exact Home Button (large display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-55"),
    },
    "apple-iphone-47": {
        name: "App Store Connect · iPhone Home Button, medium (4.7-inch)",
        shortName: "iPhone Home Button, medium (4.7-inch)",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using the exact Home Button (medium display) size.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-47"),
    },
    "apple-iphone-4": {
        name: "App Store Connect · iPhone Home Button, 4-inch",
        shortName: "iPhone Home Button, 4-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 4-inch Home Button size with or without the status bar.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-4"),
    },
    "apple-iphone-35": {
        name: "App Store Connect · iPhone Home Button, 3.5-inch",
        shortName: "iPhone Home Button, 3.5-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 3.5-inch Home Button size with or without the status bar.",
        acceptedSizes: acceptedAppleSizes("apple-iphone-35"),
    },
    "apple-ipad-13": {
        name: "App Store Connect · iPad 13-inch",
        shortName: "iPad 13-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact current 13-inch iPad size.",
        acceptedSizes: acceptedAppleSizes("apple-ipad-13"),
    },
    "apple-ipad-129": {
        name: "App Store Connect · iPad 12.9-inch",
        shortName: "iPad 12.9-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using the exact 12.9-inch iPad size.",
        acceptedSizes: acceptedAppleSizes("apple-ipad-129"),
    },
    "apple-ipad-11": {
        name: "App Store Connect · iPad 11-inch",
        shortName: "iPad 11-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 11-inch iPad size.",
        acceptedSizes: acceptedAppleSizes("apple-ipad-11"),
    },
    "apple-ipad-105": {
        name: "App Store Connect · iPad 10.5-inch",
        shortName: "iPad 10.5-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using the exact 10.5-inch iPad size.",
        acceptedSizes: acceptedAppleSizes("apple-ipad-105"),
    },
    "apple-ipad-97": {
        name: "App Store Connect · iPad 9.7-inch",
        shortName: "iPad 9.7-inch",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots without transparency, using an exact 9.7-inch iPad size with or without the status bar.",
        acceptedSizes: acceptedAppleSizes("apple-ipad-97"),
    },
    "apple-mac": {
        name: "App Store Connect · Mac",
        shortName: "Apple · Mac",
        source: appleSource,
        sourceLabel: "Apple screenshot specifications",
        verifiedAt: appleVerifiedAt,
        summary: "1–10 JPEG or PNG screenshots, no transparency, using one of Apple’s four exact 16:10 Mac sizes.",
        acceptedSizes: acceptedAppleSizes("apple-mac"),
    },
    "google-phone": {
        name: "Google Play · Phone",
        shortName: "Google Play",
        source: "https://support.google.com/googleplay/android-developer/answer/9866151?hl=en",
        sourceLabel: "Google Play preview asset guidance",
        verifiedAt: "2026-10-07",
        summary: "JPEG or 24-bit PNG without alpha, 320–3840 px, with the long edge no more than twice the short edge.",
    },
    "microsoft-desktop": {
        name: "Microsoft Store · Desktop",
        shortName: "Microsoft · Desktop",
        source: "https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/screenshots-and-images",
        sourceLabel: "Microsoft Store screenshot guidance",
        verifiedAt: "2026-10-07",
        summary: "1–10 PNG screenshots, at least 1366 × 768 in landscape (or the portrait equivalent), up to 50 MB each.",
    },
};
export const appleTargetIds = ["apple-iphone-duo", "apple-iphone-69", "apple-iphone-65", "apple-iphone-63", "apple-iphone-61", "apple-iphone-55", "apple-iphone-47", "apple-iphone-4", "apple-iphone-35", "apple-ipad-13", "apple-ipad-129", "apple-ipad-11", "apple-ipad-105", "apple-ipad-97", "apple-mac"];
export const appleTargetGroups = [
    { label: "iPhone", targets: ["apple-iphone-duo", "apple-iphone-69", "apple-iphone-65", "apple-iphone-63", "apple-iphone-61", "apple-iphone-55", "apple-iphone-47", "apple-iphone-4", "apple-iphone-35"] },
    { label: "iPad", targets: ["apple-ipad-13", "apple-ipad-129", "apple-ipad-11", "apple-ipad-105", "apple-ipad-97"] },
    { label: "macOS", targets: ["apple-mac"] },
];
export function isAppleTarget(target) {
    return appleTargetIds.includes(target);
}
function resultStatus(checks) {
    if (checks.some((check) => check.tone === "fail"))
        return "fail";
    if (checks.some((check) => check.tone === "review"))
        return "review";
    return "pass";
}
function formatCheck(input, allowed) {
    const normalized = input.mime.toLowerCase();
    const pass = allowed.includes(normalized);
    return { tone: pass ? "pass" : "fail", label: "File format", detail: pass ? normalized.replace("image/", "").toUpperCase() : `Use ${allowed.map((type) => type.replace("image/", "").toUpperCase()).join(" or ")}.` };
}
function alphaCheck(input) {
    if (input.hasAlpha === null)
        return { tone: "review", label: "Transparency", detail: "Could not inspect the alpha channel." };
    return input.hasAlpha
        ? { tone: "fail", label: "Transparency", detail: "An alpha channel or transparency marker was found." }
        : { tone: "pass", label: "Transparency", detail: "No alpha channel detected." };
}
export function validateScreenshot(input, target) {
    if (!Object.hasOwn(storeTargets, target))
        throw new Error(`Unsupported screenshot target: ${target}`);
    const checks = [];
    if (isAppleTarget(target)) {
        checks.push(formatCheck(input, ["image/jpeg", "image/png"]), alphaCheck(input));
        const acceptedSizes = storeTargets[target].acceptedSizes;
        const exact = acceptedSizes.includes(`${input.width}x${input.height}`);
        const expected = acceptedSizes.map((size) => size.replace("x", " × ")).join(", ");
        checks.push({ tone: exact ? "pass" : "fail", label: "Dimensions", detail: exact ? `${input.width} × ${input.height} is accepted for ${storeTargets[target].shortName}.` : `Accepted sizes: ${expected}.` });
    }
    if (target === "google-phone") {
        const format = formatCheck(input, ["image/jpeg", "image/png"]);
        if (input.mime.toLowerCase() === "image/png") {
            const known = input.pngBitDepth != null && input.pngColorType != null;
            const is24Bit = input.pngBitDepth === 8 && input.pngColorType === 2;
            format.tone = known ? (is24Bit ? "pass" : "fail") : "review";
            format.detail = known ? (is24Bit ? "24-bit PNG." : "Google Play requires a 24-bit PNG without alpha.") : "PNG color depth could not be confirmed.";
        }
        checks.push(format, alphaCheck(input));
        const min = Math.min(input.width, input.height);
        const max = Math.max(input.width, input.height);
        const withinBounds = min >= 320 && max <= 3840 && max <= min * 2;
        checks.push({ tone: withinBounds ? "pass" : "fail", label: "Dimensions", detail: withinBounds ? `${input.width} × ${input.height} is within Google Play’s required bounds.` : "Each edge must be 320–3840 px and the long edge cannot exceed twice the short edge." });
        const recommendedRatio = Math.abs(max / min - 16 / 9) < 0.015;
        const recommendedSize = min >= 1080;
        checks.push({ tone: recommendedRatio && recommendedSize ? "pass" : "review", label: "Promotional eligibility", detail: recommendedRatio && recommendedSize ? "Meets Google’s recommended 9:16 / 16:9 size threshold." : "For app recommendation formats, Google asks for at least four 9:16 or 16:9 screenshots at 1080 px or more on the short edge." });
    }
    if (target === "microsoft-desktop") {
        checks.push(formatCheck(input, ["image/png"]));
        const landscape = input.width >= input.height;
        const dimensionsPass = landscape ? input.width >= 1366 && input.height >= 768 : input.height >= 1366 && input.width >= 768;
        checks.push({ tone: dimensionsPass ? "pass" : "fail", label: "Dimensions", detail: dimensionsPass ? `${input.width} × ${input.height} meets the desktop minimum.` : "Use at least 1366 × 768 in landscape, or 768 × 1366 in portrait." });
        const sizePass = input.size <= 50 * 1024 * 1024;
        checks.push({ tone: sizePass ? "pass" : "fail", label: "File size", detail: sizePass ? `${formatBytes(input.size)} is within the 50 MB limit.` : "Microsoft limits each screenshot to 50 MB." });
    }
    return { ...input, checks, status: resultStatus(checks) };
}
export function validateSet(inputs, target) {
    if (!Object.hasOwn(storeTargets, target))
        throw new Error(`Unsupported screenshot target: ${target}`);
    const results = inputs.map((input) => validateScreenshot(input, target));
    const min = target === "google-phone" ? 2 : 1;
    const max = target === "google-phone" ? 8 : 10;
    let countCheck;
    if (inputs.length > max || (target !== "google-phone" && inputs.length < min)) {
        countCheck = { tone: "fail", label: "Screenshot count", detail: `${storeTargets[target].shortName} expects ${min}–${max} screenshots for this set.` };
    }
    else if (target === "google-phone" && inputs.length < min) {
        countCheck = { tone: "review", label: "Screenshot count", detail: "Google requires at least two screenshots across the listing; add or confirm another supported device type." };
    }
    else {
        countCheck = { tone: "pass", label: "Screenshot count", detail: `${inputs.length} of ${max} allowed screenshots selected.` };
    }
    const failures = results.filter((result) => result.status === "fail").length + (countCheck.tone === "fail" ? 1 : 0);
    const reviews = results.filter((result) => result.status === "review").length + (countCheck.tone === "review" ? 1 : 0);
    return { results, countCheck, failures, reviews, passes: results.filter((result) => result.status === "pass").length };
}
export function formatBytes(bytes) {
    if (bytes < 1024 * 1024)
        return `${(bytes / 1024).toFixed(bytes < 10240 ? 1 : 0)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
export function screenshotExampleFor(target) {
    if (isAppleTarget(target)) {
        const [width, height] = storeTargets[target].acceptedSizes[0].split("x").map(Number);
        return [1, 2, 3].map((index) => ({ name: `${String(index).padStart(2, "0")}-app-screen.png`, width, height, size: 2_500_000 + index * 410_000, mime: "image/png", hasAlpha: false, pngBitDepth: 8, pngColorType: 2 }));
    }
    if (target === "google-phone") {
        return [1, 2, 3, 4].map((index) => ({ name: `${String(index).padStart(2, "0")}-phone.png`, width: 1080, height: 1920, size: 1_800_000 + index * 250_000, mime: "image/png", hasAlpha: false, pngBitDepth: 8, pngColorType: 2 }));
    }
    return [1, 2, 3].map((index) => ({ name: `${String(index).padStart(2, "0")}-desktop.png`, width: 1920, height: 1080, size: 2_100_000 + index * 300_000, mime: "image/png", hasAlpha: false, pngBitDepth: 8, pngColorType: 2 }));
}
export const screenshotExample = screenshotExampleFor("apple-iphone-69");
