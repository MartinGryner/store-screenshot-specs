# Store screenshot specifications

Versioned requirements and pure validation functions for store screenshot tooling.
This package has no runtime dependencies and does not read files or make network requests.

Install a pinned release:

```sh
npm install @grunersoftware/store-screenshot-specs@0.1.0
```

```js
import { validateSet, storeTargets } from '@grunersoftware/store-screenshot-specs';
const result = validateSet([{
  name: '01.png', width: 1260, height: 2736, size: 1800000,
  mime: 'image/png', hasAlpha: false, pngBitDepth: 8, pngColorType: 2,
}], 'apple-iphone-69');
console.log(result.failures, result.reviews, storeTargets['apple-iphone-69'].source);
```

Metadata must come from inspecting the image, not its extension. `hasAlpha: null`
means unknown and produces a review warning when the target disallows alpha.
`validateScreenshot` checks one image; `validateSet` also checks count. Invalid target
IDs throw. Results carry `pass`, `fail`, or `review` checks with human-readable details.
TypeScript declarations are included. The machine-readable data is exported as
`@grunersoftware/store-screenshot-specs/specs.json` (schema version 1).

## Supported targets

| IDs | Checks |
| --- | --- |
| `apple-iphone-duo`, `apple-iphone-69`, `-65`, `-63`, `-61`, `-55`, `-47`, `-4`, `-35` (each with the `apple-iphone` prefix) | Exact dimensions, JPEG/PNG, alpha, 1–10 images |
| `apple-ipad-13`, `apple-ipad-129`, `apple-ipad-11`, `apple-ipad-105`, `apple-ipad-97` | Exact dimensions, JPEG/PNG, alpha, 1–10 images |
| `apple-mac` | Four exact landscape sizes, JPEG/PNG, alpha, 1–10 images |
| `google-phone` | Edge/ratio bounds, JPEG or 24-bit PNG, alpha, at most 8 images; fewer than 2 prompts review because the minimum applies across the listing |
| `microsoft-desktop` | PNG, desktop dimension minimum in either orientation, 50 MiB implementation threshold, 1–10 images |

Apple TV, Watch, Vision Pro, foldable-device uploads, other Google device families,
and Microsoft Xbox are not validation targets. Optional Apple reference data in the
source is not a claim of validation support. Call once for each locale/device set.

The rules were reviewed against [Apple](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/),
[Google](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en),
and [Microsoft](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/screenshots-and-images)
for this release. Each target retains its original data-verification date and source URL;
the JSON also carries this release's review date. Microsoft describes its limit as
50 MB without specifying a byte convention; this release preserves the browser tool's
50 × 1024 × 1024 interpretation. Files near that threshold need a store upload check.

No Apple or Google file-size limit is invented. A null JSON limit means this package
does not enforce that constraint. Google promotional size guidance is advisory;
the validator does not establish full promotional eligibility, including content or
the required number of promotional screenshots. Review store guidance before upload.
This package cannot assess text clipping, localization quality, truthful app content,
store-review acceptance, device-family coverage, or current account upload availability.

## Development and versioning

Run `npm ci`, `npm run build`, then `npm test`. Generated `dist/specs.json` is produced
from the same source as the runtime. In the website workspace, the browser validator
imports this source directly, and regression fixtures compare its results with the
built package. Do not edit generated output.

Pin an exact version for reproducible checks. Within 0.x, changed validation outcomes
or schema changes require a minor release; documentation-only fixes may use a patch.
After 1.0, incompatible schema/API changes require a major release. Every rule change
must cite an official source and add boundary fixtures.

## Release

The included manual release workflow builds and tests before `npm publish --provenance`.
For a first publication, configure a narrowly scoped `NPM_TOKEN` secret and approve the
release environment. Once the package exists, configure npm trusted publishing for
the public repository and this workflow, then remove the bootstrap token.
The version must be unpublished. Publishing is a separate, explicit owner-approved step.

MIT licensed. The [free browser validator](https://martingruner.com/tools/store-screenshot-validator)
uses the same validation source. [Screen Studio Kit](https://martingruner.com/projects/screenshot-studio)
is a separate, optional screenshot design app; it is not required to use this package.
