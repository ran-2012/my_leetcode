
#include <vector>
#include <iostream>

using std::vector;
using std::cout;
using std::endl;

class Solution {
public:
	int jump(vector<int>& nums) {
		const auto length = nums.size();
		vector<int> steps(length, length);
		steps[0] = 0;

		const auto updateSteps = [&steps](auto index, auto step) {
			steps[index] = steps[index] > step ? step : steps[index];
		};

		auto lastReach = 0;
		for (auto i = 0; i < length; ++i) 
		{
			const auto value = nums[i];
			for (auto j = lastReach + 1; j <= i + value; ++j) 
			{
				if (j < length) 
				{
					lastReach = j;
					updateSteps(j, steps[i] + 1);
				}
				else 
				{
					break;
				}
			}
			if (steps[length - 1] == steps [i] + 1) 
			{
				break;
			}
		}
		return steps[length - 1];
	}
};

int main() {
	Solution s;
	vector<int> num({ 2,3,1,1,4 });

	cout << s.jump(num) << endl;

	return 0;
}