#!/usr/bin/env node

'use strict';

import { readFileSync } from 'fs';
const output = readFileSync('./bin/output', 'utf8');
console.log(output);
