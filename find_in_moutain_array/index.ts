class MountainArray {
    array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    get(index: number): number {
        return this.array[index];
    }

    length(): number {
        return this.array.length;
    }
}

const findInMountainArray = function (target: number, mountainArr: MountainArray) {
    const length = mountainArr.length();
    const cache = new Map<number, number>();

    let start = 0;
    let end = length - 1;
    let peek = -1;

    function get(index: number): number {
        let result = cache.get(index);
        if (result === undefined) {
            result = mountainArr.get(index);
            cache.set(index, result);
        }
        return result;
    }

    function nextMid() {
        return Math.floor((start + end) / 2);
    }

    function isAscend(index: number): boolean {
        return get(index - 1) < get(index);
    }

    function isPeek(index: number): boolean {
        return get(index - 1) < get(index) && get(index) > get(index + 1);
    }

    while (start < end) {
        const mid = nextMid();
        if (isPeek(mid)) {
            peek = mid;
            break;
        }
        if (isAscend(mid)) {
            start = mid;
        } else {
            end = mid;
        }
    }
    start = 0;
    end = peek;
    while (start < end - 1) {
        const mid = nextMid();
        if (get(mid) > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (get(start) === target) {
        return start;
    }
    if (get(end) === target) {
        return end;
    }
    start = peek;
    end = length - 1;
    while (start < end - 1) {
        const mid = nextMid();
        if (get(mid) < target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (get(start) === target) {
        return start;
    }
    if (get(end) === target) {
        return end;
    }

    return -1;
};

{
    const array = new MountainArray([3, 5, 3, 2, 0]);
    console.log(findInMountainArray(3, array));
}
