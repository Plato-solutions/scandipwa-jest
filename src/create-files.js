import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import { createMocksDir, readFiles, writeFile } from './file-actions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function onWriteError(err) {
    console.error(err);
}

function createConfigFiles() {
    const configFilesPath = join(__dirname, "../configuration-files/");
    const writePath = process.cwd();
    readFiles(configFilesPath, writePath, writeFile, onWriteError)
}

function createMockFiles() {
    const mocks_dir = createMocksDir();

    const configFilesPath = join(__dirname, "../mock-files/");
    const writePath = join(process.cwd(), mocks_dir);

    readFiles(configFilesPath, writePath, writeFile, onWriteError)
}

export function writeFiles() {
    createConfigFiles();
    createMockFiles();
}