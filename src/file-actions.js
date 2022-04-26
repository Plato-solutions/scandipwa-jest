import fs from 'fs';
import { join } from 'path';


export function readFiles(dirname, writePath, onFileContent, onError) {
	fs.readdir(dirname, function (err, filenames) {
		if (err) {
			onError(err);
			return;
		}
		filenames.forEach(function (filename) {
			fs.readFile(dirname + filename, 'utf-8', function (err, content) {
				if (err) {
					onError(err);
					return;
				}
				onFileContent(writePath, filename, content);
			});
		});
	});
}

export function writeFile(writePath, filename, content) {
    const fileFullPath = join(writePath, filename);

    try {
        fs.writeFileSync(fileFullPath, content)
    } catch (err) {
        console.error(err)
    }
}

export function createMocksDir() {
    const mocks_dir = '/tests/__mocks__';
    const mocksPath = join(process.cwd(), mocks_dir);

    fs.mkdirSync(mocksPath, { recursive: true })

    return mocks_dir;
}