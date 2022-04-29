import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import { createMocksDir, createFiles } from './file-actions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createConfigFiles() {
    const configFilesPath = join(__dirname, "../configuration-files/");
    const writePath = process.cwd();
    createFiles(configFilesPath, writePath)
}

function createMockFiles() {
    const mocks_dir = createMocksDir();

    const configFilesPath = join(__dirname, "../mock-files/");
    const writePath = join(process.cwd(), mocks_dir);

    createFiles(configFilesPath, writePath)
}

export function writeFiles() {
    createConfigFiles();
    createMockFiles();
}