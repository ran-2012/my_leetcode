const jump = function (nums: number[]) {
    const steps = new Array<number>(nums.length);
    steps.fill(nums.length);
    steps[0] = 0;

    function updateSteps(index: number, step: number) {
        steps[index] = steps[index] > step ? step : steps[index];
    }

    let lastReach = 0;
    for (let firstIndex = lastReach; firstIndex < nums.length; ++firstIndex) {
        const value = nums[firstIndex];
        for (let secondIndex = lastReach + 1; secondIndex <= firstIndex + value; ++secondIndex) {
            if (secondIndex < nums.length) {
                lastReach = secondIndex;
                updateSteps(secondIndex, steps[firstIndex] + 1);
            } else {
                break;
            }
        }
        if (steps[nums.length - 1] === steps[firstIndex] + 1) {
            return steps[nums.length - 1];
        }
    }
    return steps[nums.length - 1];
};

{
    const nums = [2, 3, 1, 1, 4];
    console.log(jump(nums));
}

