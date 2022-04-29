import fs from 'fs';
import { join } from 'path';


export function createFiles(dirname, writePath) {
	fs.readdir(dirname, function (err, filenames) {
		if (err) {
			console.error(err);
			return;
		}
		filenames.forEach(function (filename) {
			fs.readFile(dirname + filename, 'utf-8', function (err, content) {
				if (err) {
					console.error(err);
					return;
				}
				writeFile(writePath, filename, content);
			});
		});
	});
}

export function writeFile(writePath, filename, content) {
    try {
		const fileFullPath = join(writePath, filename);

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