// NOTE: These definitions support NodeJS and TypeScript 3.2 - 3.4.
// This is required to enable globalThis support for global in ts3.5 without causing errors
// This is required to enable typing assert in ts3.7 without causing errors
// Typically type modifiations should be made in base.d.ts instead of here

/// <reference path="base.d.ts" />

// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.1/assert.d.ts" />

// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.1/globals.global.d.ts" />
