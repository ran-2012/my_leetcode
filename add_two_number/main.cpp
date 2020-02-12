
#include "index.h"
#include <iostream>

int main() {
	Solution s;

	auto n1 = alloc(1);
	auto n2 = alloc(9);
	auto n2t = n2;
	n2t = alloc(9, n2t);
	n2t = alloc(9, n2t);

	auto r = s.addTwoNumbers(n1, n2);
	while (r) {
		std::cout << r->val;
		r = getNext(r);
	}
	std::cout << std::endl;

	return 0;
}
