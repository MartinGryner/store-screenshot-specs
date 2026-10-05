import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { storeTargets, screenshotExampleFor, validateSet, validateScreenshot } from '../dist/index.js';

test('all supported targets have passing examples, strict boundaries and sourced JSON',async()=>{
  const data=JSON.parse(await readFile(new URL('../dist/specs.json',import.meta.url),'utf8'));
  assert.equal(data.schemaVersion,1);
  assert.deepEqual(Object.keys(data.targets),Object.keys(storeTargets));
  for(const id of Object.keys(storeTargets)) {
    assert.equal(validateSet(screenshotExampleFor(id),id).failures,0);
    assert.equal(validateScreenshot({...screenshotExampleFor(id)[0],width:1},id).status,'fail');
    assert.equal(validateSet(Array.from({length:11},()=>screenshotExampleFor(id)[0]),id).countCheck.tone,'fail');
    assert.match(data.targets[id].source,/^https:\/\//);
  }
  assert.throws(()=>validateSet([],'constructor'),/Unsupported/);
  assert.equal(validateSet([],'google-phone').countCheck.tone,'review');
  assert.equal(validateScreenshot({...screenshotExampleFor('apple-mac')[0],hasAlpha:null},'apple-mac').status,'review');
});
