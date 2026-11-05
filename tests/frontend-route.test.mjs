import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = readFileSync(new URL('../app/api/anfrage/route.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const exports = {};
const require = createRequire(import.meta.url);
// next/server is adapted to the standard Response implementation only for this isolated route test.
const testRequire = name => name === 'next/server' ? { NextResponse: { json: Response.json.bind(Response) } } : require(name);
const forbidden = new Proxy({}, { get() { throw new Error('The starter must not inspect request data, log customer data, or call external services'); } });
new Function('exports', 'require', 'process', 'console', 'fetch', compiled)(exports, testRequire, { env: {} }, forbidden, () => { throw new Error('No external service allowed'); });
test('frontend exercise returns 503 without reading, logging or saving customer data', async () => {
 const result = await exports.POST(forbidden);
 assert.equal(result.status, 503);
 const data = await result.json();
 assert.equal(data.ok, false);
 assert.match(data.fehler, /Datenspeicherung.*gemeinsam/);
 assert.equal(result.headers.get('cache-control'), 'no-store');
});
