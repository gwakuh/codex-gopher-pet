#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
const petDir = path.join(codexHome, 'pets', 'gopher');

fs.mkdirSync(petDir, { recursive: true });
for (const file of ['pet.json', 'spritesheet.webp']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(petDir, file));
}

console.log(`Installed Gopher in ${petDir}`);
