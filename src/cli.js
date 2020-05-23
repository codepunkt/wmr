#!/usr/bin/env node

import sade from 'sade';
import { start } from './index.js';

const prog = sade('wmr');

prog
	.command('start', 'Start a development server', { default: true })
	.option('--port, -p', 'HTTP port to listen on (default: $PORT or 8080)')
	.option('--host, -h', 'HTTP host to listen on (default: localhost)')
	.option('--compress', 'Enable compression (default: enabled)')
	.option('--sourcemap', 'Enable Source Maps')
	.option('--cwd', 'Your web app root directory (default: ./public')
	.option('--out', 'Where to store generated files (default: ./.dist')
	.action(opts => {
		if (/true|false/.test(opts.compress)) opts.compress = opts.compress !== 'false';
		start(opts);
	});

prog.parse(process.argv);
