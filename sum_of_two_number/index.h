
#include <vector>
#include <unordered_map>

using std::vector;
using std::unordered_multimap;

class Solution {
public:
	vector<int> twoSum(vector<int>& nums, int target) {
		const int size = nums.size();

		unordered_multimap<int, int> h;

		for (int i = 0; i < size; ++i) {
			h.insert({ nums[i], i });
		}

		for (int i = 0; i < size; ++i) {
			const int a = nums[i];
			const int b = target - a;

			if (2 * a == target) {
				if (h.count(a) > 1) {
					for (int j = i + 1; j < size; ++j) {
						if (nums[j] == a) {
							return { i,j };
						}
					}
				}
				else {
					continue;
				}
			}

			auto it = h.find(b);
			if (it != h.end()) {
				return { i, it->second };
			}
		}
		return { -1, -1 };
	}
};
