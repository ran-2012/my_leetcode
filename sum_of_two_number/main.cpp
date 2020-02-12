
#include "index.h"
#include <iostream>

int main() {
	Solution s;
	vector<int> nums = { 3,2,4};
    auto res = s.twoSum(nums, 6);
	
	std::cout << res[0] << ' ' << res[1] << std::endl;

	return 0;
}