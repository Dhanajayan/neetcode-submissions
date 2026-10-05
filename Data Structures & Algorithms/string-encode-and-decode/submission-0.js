class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       const res = [];
        let i = 0;
        while (i < str.length) {
            const hash = str.indexOf('#', i);
            const len = Number(str.slice(i, hash));
            res.push(str.slice(hash + 1, hash + 1 + len));
            i = hash + 1 + len;
        }
        return res;
    }
}
