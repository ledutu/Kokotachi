/**
 * Convert relative path to absolute path.
 * @see https://github.com/auth0/rel-to-abs
 */

import cheerio from 'react-native-cheerio';
import urlJoin from 'url-join';
import { isAbsoluteUrl } from './pureFunction'

function _convert(base_url, currentUrl) {
    if (isAbsoluteUrl(currentUrl)) {
        return currentUrl;
    }
    return urlJoin(base_url, currentUrl);
}

/**
 * Convert relative path to absolute path.
 * @param {string} html 
 * @param {string} base_url 
 */
export default function relToAbs(html, base_url) {
    var $ = cheerio.load(html);
    $('img, script').each(function (index, el) {
        if (!el.attribs['src']) return;
        el.attribs['src'] = _convert(base_url, el.attribs['src']);
    });

    $('a, link').each(function (index, el) {
        if (!el.attribs['href']) return;
        el.attribs['href'] = _convert(base_url, el.attribs['href']);
    });

    return $.html();
};