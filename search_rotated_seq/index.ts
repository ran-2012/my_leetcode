const search = function (nums: number[], target: number) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    let ordered = get(start) < get(end);
    let pos = -1;

    function get(index: number) {
        return nums[index];
    }

    function inStartEnd() {
        return (target > get(start) && target < get(end));
    }

    function inEndStart() {
        return (target > get(end) && target < get(start));
    }

    function inStartMid() {
        return (target > get(start) && target < get(mid));
    }

    function inMidEnd() {
        return (target > get(mid) && target < get(end));
    }

    function nextMid() {
        return Math.floor((start + end) / 2);
    }

    while (start < end) {
        if (get(start) === target) {
            pos = start;
            break;
        }
        if (get(end) === target) {
            pos = end;
            break;
        }
        mid = nextMid();
        if (!ordered) {
            if (inEndStart())
                break;
            if (get(mid) > get(start)) {
                if (inStartMid()) {
                    end = mid;
                    ordered = true;
                } else {
                    start = mid;
                }
            } else {
                if (inMidEnd()) {
                    start = mid;
                    ordered = true;
                } else {
                    end = mid;
                }
            }
        } else {
            if (!inStartEnd())
                break;
            if (get(mid) > target) {
                end = mid - 1;
            } else if (get(mid) < target) {
                start = mid + 1;
            } else {
                pos = mid;
                break;
            }
        }
    }
    if (get(start) === target) {
        pos = start;
    }
    return pos;
};

{
    const nums = [3, 1];
    // console.log(search(nums, 3));
    console.log(search(nums, 0));
}
