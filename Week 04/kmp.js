function kmp(source, pattern) {
    // 计算table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1, j = 0;
        while (i < pattern.length) {
            // 表示已经匹配
            if (pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;

            } else {
                // 不匹配时j为0
                if (j > 0)
                    j = table[j];
                else
                    ++i;
            }
        }
    }
    // 匹配
    {
        let i = 1, j = 0;
        while (i < source.length) {
            if (pattern[j] === source[i]) {
                ++i, ++j;
            } else {
                // 不匹配时j为0
                if (j > 0)
                    j = table[j];
                else
                    ++i;
            }
            if (j === pattern.length) return true;

        }
        return false;
    }
}

kmp('abfcwqwre','fcw')