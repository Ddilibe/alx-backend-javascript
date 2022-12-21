#!/usr/bin/env node

/* Script that returns the promise that resolves first */

export default function loadBalancer(chinaDownload, usDownload) {
	return Promise
	.race([chinaDownload, USDownload])
	.then((value) => { value });
}