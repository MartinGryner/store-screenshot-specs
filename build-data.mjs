import {writeFile} from 'node:fs/promises';
import {storeTargets, appleTargetIds} from './dist/index.js';
const targets = Object.fromEntries(Object.entries(storeTargets).map(([id,t]) => [id, {...t,
  formats: id === 'microsoft-desktop' ? ['image/png'] : ['image/jpeg','image/png'],
  alphaAllowed: id === 'microsoft-desktop' ? null : false,
  count: { min: id === 'google-phone' ? 2 : 1, max: id === 'google-phone' ? 8 : 10, minimumScope: id === 'google-phone' ? 'listing-across-device-types' : 'set' },
  dimensions: appleTargetIds.includes(id) ? {exact:t.acceptedSizes} : id === 'google-phone' ? {minimumEdge:320,maximumEdge:3840,maximumAspectRatio:2} : {minimumLongEdge:1366,minimumShortEdge:768},
  maxBytes: id === 'microsoft-desktop' ? 50*1024*1024 : null,
  png: id === 'google-phone' ? {bitDepth:8,colorType:2} : null,
}]));
await writeFile(new URL('./dist/specs.json',import.meta.url), JSON.stringify({schemaVersion:1,packageVersion:'0.1.0',rulesReviewedAt:'2026-10-07',targets},null,2)+'\n');
