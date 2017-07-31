/* this file provides a mocked api response so you can use in
* in your tests*/

import { readFileSync } from 'fs';
import { join } from 'path';

//__dirname means current directory
export const MOCK_500PX_PHOTOS_RESPONSE = readFileSync(join(__dirname,
    '500px_photos_response.json')).toString();
