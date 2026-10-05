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
};

export const appleScreenshotSpecifications = {
  schemaVersion: 1,
  verifiedAt: "2026-09-06",
  sourceUrl: "https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/",
  uploadGuidanceUrl: "https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/",
  fileRules: {
    minimumScreenshots: 1,
    maximumScreenshots: 10,
    formats: ["jpeg", "jpg", "png"],
    alphaChannelsAllowed: false,
    transparencyAllowed: false,
  },
  slots: [
    {
      id: "iphone-6-9",
      platform: "iPhone",
      display: "6.9-inch display",
      requirement: null,
      fallback: null,
      validatorTargetId: "apple-iphone-69",
      sizes: [
        { width: 1260, height: 2736, orientation: "portrait" },
        { width: 2736, height: 1260, orientation: "landscape" },
        { width: 1290, height: 2796, orientation: "portrait" },
        { width: 2796, height: 1290, orientation: "landscape" },
        { width: 1320, height: 2868, orientation: "portrait" },
        { width: 2868, height: 1320, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-6-5",
      platform: "iPhone",
      display: "6.5-inch display",
      requirement: "Required for iPhone apps when 6.9-inch screenshots are not provided.",
      fallback: "App Store Connect uses scaled 6.9-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-65",
      sizes: [
        { width: 1284, height: 2778, orientation: "portrait" },
        { width: 2778, height: 1284, orientation: "landscape" },
        { width: 1242, height: 2688, orientation: "portrait" },
        { width: 2688, height: 1242, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-6-3",
      platform: "iPhone",
      display: "6.3-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 6.5-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-63",
      sizes: [
        { width: 1179, height: 2556, orientation: "portrait" },
        { width: 2556, height: 1179, orientation: "landscape" },
        { width: 1206, height: 2622, orientation: "portrait" },
        { width: 2622, height: 1206, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-6-1",
      platform: "iPhone",
      display: "6.1-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 6.5-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-61",
      sizes: [
        { width: 1170, height: 2532, orientation: "portrait" },
        { width: 2532, height: 1170, orientation: "landscape" },
        { width: 1125, height: 2436, orientation: "portrait" },
        { width: 2436, height: 1125, orientation: "landscape" },
        { width: 1080, height: 2340, orientation: "portrait" },
        { width: 2340, height: 1080, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-5-5",
      platform: "iPhone",
      display: "5.5-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 6.1-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-55",
      sizes: [
        { width: 1242, height: 2208, orientation: "portrait" },
        { width: 2208, height: 1242, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-4-7",
      platform: "iPhone",
      display: "4.7-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 5.5-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-47",
      sizes: [
        { width: 750, height: 1334, orientation: "portrait" },
        { width: 1334, height: 750, orientation: "landscape" },
      ],
    },
    {
      id: "iphone-4",
      platform: "iPhone",
      display: "4-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 4.7-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-4",
      sizes: [
        { width: 640, height: 1096, orientation: "portrait", note: "without status bar" },
        { width: 640, height: 1136, orientation: "portrait", note: "with status bar" },
        { width: 1136, height: 600, orientation: "landscape", note: "without status bar" },
        { width: 1136, height: 640, orientation: "landscape", note: "with status bar" },
      ],
    },
    {
      id: "iphone-3-5",
      platform: "iPhone",
      display: "3.5-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 4-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-iphone-35",
      sizes: [
        { width: 640, height: 920, orientation: "portrait", note: "without status bar" },
        { width: 640, height: 960, orientation: "portrait", note: "with status bar" },
        { width: 960, height: 600, orientation: "landscape", note: "without status bar" },
        { width: 960, height: 640, orientation: "landscape", note: "with status bar" },
      ],
    },
    {
      id: "ipad-13",
      platform: "iPad",
      display: "13-inch display",
      requirement: "Required when the app runs on iPad.",
      fallback: null,
      validatorTargetId: "apple-ipad-13",
      sizes: [
        { width: 2064, height: 2752, orientation: "portrait" },
        { width: 2752, height: 2064, orientation: "landscape" },
        { width: 2048, height: 2732, orientation: "portrait" },
        { width: 2732, height: 2048, orientation: "landscape" },
      ],
    },
    {
      id: "ipad-12-9",
      platform: "iPad",
      display: "12.9-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 13-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-ipad-129",
      sizes: [
        { width: 2048, height: 2732, orientation: "portrait" },
        { width: 2732, height: 2048, orientation: "landscape" },
      ],
    },
    {
      id: "ipad-11",
      platform: "iPad",
      display: "11-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 13-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-ipad-11",
      sizes: [
        { width: 1488, height: 2266, orientation: "portrait" },
        { width: 2266, height: 1488, orientation: "landscape" },
        { width: 1668, height: 2420, orientation: "portrait" },
        { width: 2420, height: 1668, orientation: "landscape" },
        { width: 1668, height: 2388, orientation: "portrait" },
        { width: 2388, height: 1668, orientation: "landscape" },
        { width: 1640, height: 2360, orientation: "portrait" },
        { width: 2360, height: 1640, orientation: "landscape" },
      ],
    },
    {
      id: "ipad-10-5",
      platform: "iPad",
      display: "10.5-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 12.9-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-ipad-105",
      sizes: [
        { width: 1668, height: 2224, orientation: "portrait" },
        { width: 2224, height: 1668, orientation: "landscape" },
      ],
    },
    {
      id: "ipad-9-7",
      platform: "iPad",
      display: "9.7-inch display",
      requirement: null,
      fallback: "App Store Connect uses scaled 10.5-inch screenshots when this slot is omitted.",
      validatorTargetId: "apple-ipad-97",
      sizes: [
        { width: 1536, height: 2008, orientation: "portrait", note: "without status bar" },
        { width: 1536, height: 2048, orientation: "portrait", note: "with status bar" },
        { width: 2048, height: 1496, orientation: "landscape", note: "without status bar" },
        { width: 2048, height: 1536, orientation: "landscape", note: "with status bar" },
        { width: 768, height: 1004, orientation: "portrait", note: "without status bar" },
        { width: 768, height: 1024, orientation: "portrait", note: "with status bar" },
        { width: 1024, height: 748, orientation: "landscape", note: "without status bar" },
        { width: 1024, height: 768, orientation: "landscape", note: "with status bar" },
      ],
    },
    {
      id: "mac",
      platform: "Mac",
      display: "Mac",
      requirement: "Required for Mac apps.",
      fallback: null,
      validatorTargetId: "apple-mac",
      sizes: [
        { width: 1280, height: 800, orientation: "landscape" },
        { width: 1440, height: 900, orientation: "landscape" },
        { width: 2560, height: 1600, orientation: "landscape" },
        { width: 2880, height: 1800, orientation: "landscape" },
      ],
    },
    {
      id: "apple-tv",
      platform: "Apple TV",
      display: "Apple TV",
      requirement: "Required for Apple TV apps.",
      fallback: null,
      sizes: [
        { width: 1920, height: 1080, orientation: "landscape" },
        { width: 3840, height: 2160, orientation: "landscape" },
      ],
    },
    {
      id: "apple-vision-pro",
      platform: "Apple Vision Pro",
      display: "Apple Vision Pro",
      requirement: "Required for Apple Vision Pro apps.",
      fallback: null,
      sizes: [{ width: 3840, height: 2160, orientation: "landscape" }],
    },
    {
      id: "apple-watch",
      platform: "Apple Watch",
      display: "Apple Watch",
      requirement: "Required for Apple Watch apps. Use the same size across every localization.",
      fallback: null,
      sizes: [
        { width: 422, height: 514, orientation: "portrait", note: "Ultra 3" },
        { width: 410, height: 502, orientation: "portrait", note: "Ultra 2 and Ultra" },
        { width: 416, height: 496, orientation: "portrait", note: "Series 11 and Series 10" },
        { width: 396, height: 484, orientation: "portrait", note: "Series 9, Series 8, and Series 7" },
        { width: 368, height: 448, orientation: "portrait", note: "Series 6, Series 5, Series 4, SE 3, SE 2, and SE" },
        { width: 312, height: 390, orientation: "portrait", note: "Series 3, Series 2, and Series 1" },
      ],
    },
  ] satisfies readonly AppleScreenshotSlot[],
} as const;

export function appleScreenshotSizeStrings(slot: AppleScreenshotSlot) {
  return slot.sizes.map((size) => `${size.width}x${size.height}`);
}

export function getAppleScreenshotSlotByValidatorTarget(targetId: string) {
  return appleScreenshotSpecifications.slots.find((slot) => slot.validatorTargetId === targetId);
}
