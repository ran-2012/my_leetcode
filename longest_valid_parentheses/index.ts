/**
 * @see https://leetcode-cn.com/problems/longest-valid-parentheses/
 */
const longestValidParentheses = function (s: string) {
    const len = s.length;

    if (len === 0) {
        return 0;
    }

    if (len === 1) {
        return 0;
    }

    const charMap = {
        '(': -1,
        ')': 1,
    };

    // ( ( ( ( ) ( ) ) ) ) ) ) ) ( ( )

    //-1-1-1-1 1-1 1 1 1 1-1 1 1-1-1 1
    const arrRaw = new Array<number>(len);
    //-1-2-3-4-3-4-3-2-1 0 0 0 0-1-2-1
    const arrFor = new Array<number>(len);
    // 1 2 3 4 6 5 6 5 4 3 2 1 0 0 0 1
    const arrRev = new Array<number>(len);
    // 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0
    const validFor = new Array<number>(len);
    // 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1
    const validRev = new Array<number>(len);

    arrRaw.fill(0);
    arrFor.fill(0);
    arrRev.fill(0);
    validFor.fill(0);
    validRev.fill(0);

    for (let i = 0; i < len; ++i) {
        arrRaw[i] = charMap[s.charAt(i)];
    }

    function init(arr: any[], arrRaw: any[], len: number) {
        arr[0] = arrRaw[0] > 0 ? 0 : -1;
        for (let i = 1; i < len; ++i) {
            arr[i] = arr[i - 1] + arrRaw[i];
            if (arr[i] > 0) {
                arr[i] = 0;
            }
        }
    }

    init(arrFor, arrRaw, len);
    arrRaw.reverse();
    arrRaw.map((v, i) => {
        arrRaw[i] = -v;
    });
    init(arrRev, arrRaw, len);

    let max = 0;

    function fill(arr: number[], arrFill: number[]){
        let last = -1;
        for (let i = 0; i < len; ++i) {
            if (arr[i] === 0) {
                if (i - last > 1) {
                    arrFill.fill(1, last + 1, i + 1);
                }
                last = i;
            }
        }
    }
    fill(arrFor, validFor);
    fill(arrRev, validRev);

    function findMax(arr:number[]){
        for (let i = 1; i < len; ++i) {
            if (arr[i] === 1) {
                arr[i] = arr[i - 1] + arr[i];
                if (arr[i] > max) {
                    max = arr[i];
                }
            } else {
                validFor[i] = 0;
            }
        }
    }

    findMax(validFor);
    findMax(validRev);

    return max;
};

{
    const testData = ')()())';
    console.log(longestValidParentheses(testData));
}
