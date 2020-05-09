
#include <vector>
#include <iostream>

using std::vector;
using std::cout;
using std::endl;

class Solution {
public:
	int maximalSquare(vector<vector<char>>& matrix) {
		const auto a = matrix.size();
		if (a == 0)
		{
			return 0;
		}
		const auto b = matrix[0].size();

		int *data = new int[a*b];

		int zero = 0;
		auto get = [&](int x, int y)->int&
		{
			if (x < 0 || y < 0)
			{
				return zero;
			}
			return (data[x * b + y]);
		};

		auto isSquare = [&](int top, int left, int n)
		{
			return (get(top + n - 1, left + n - 1)
				- get(top - 1, left + n - 1)
				- get(top + n - 1, left - 1)
				+ get(top - 1, left - 1) == n * n);
		};

		auto maxLength = [&](int top, int left)
		{
			return a - top < b - left ? a - top : b - left;
		};

		for (int i = 0; i < a; ++i)
		{
			for (int j = 0; j < b; ++j)
			{
				get(i, j) = (matrix[i][j] - '0') +(get(i - 1, j) + get(i, j - 1) - get(i - 1, j - 1));
			}
		}

		int max = 0;
		for (int i = 0; i < a; ++i)
		{
			for (int j = 0; j < b; ++j)
			{
				if (matrix[i][j]=='1')
				{
					int s = 1;
					int e = maxLength(i, j);
					while (e >= s)
					{
						auto n = (e + s) / 2;
						if (isSquare(i, j, n))
						{
							if (n > max)
							{
								max = n;
							}
							s = n + 1;
						}
						else
						{
							e = n - 1;
						}
					}

				}
			}
		}

		delete[]data;
		return max * max;
	}
};

int main() {
	Solution s;

	vector<char> ar0 = { '1', '0', '1', '0', '0' };
	vector<char> ar1 = { '1', '0', '1', '1', '1' };
	vector<char> ar2 = { '1', '1', '1', '1', '1' };
	vector<char> ar3 = { '1', '0', '0', '1', '0' };

	vector<vector<char>> matrix = { ar0, ar1, ar2,ar3 };

	cout << s.maximalSquare(matrix) << endl;

	return 0;
}