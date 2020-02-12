
struct ListNode {
	int val;
	ListNode* next;
	ListNode(int x) : val(x), next(nullptr) {}
};

auto getDig(ListNode* n) {
	return n ? n->val : 0;
};

auto getNext(ListNode* n) {
	return n ? n->next : nullptr;
};

auto alloc(int val, ListNode* n = nullptr) {
	auto* newNode = new ListNode(val);
	if (n) {
		n->next = newNode;
	}
	return newNode;
};


class Solution {
public:
	ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
		auto res = alloc(0);
		auto last = res;
		auto r = res;
		auto n1 = l1, n2 = l2;
		int advance = 0;
		while (n1 || n2) {
			r->val += (getDig(n1) + getDig(n2));
			advance = 0;
			if (r->val >= 10) {
				advance = 1;
				r->val -= 10;
			}
			last = r;
			r = alloc(advance, r);

			n1 = getNext(n1);
			n2 = getNext(n2);
		}

		if (!(r->val)) {
			r = nullptr;
			delete last->next;
			last->next = nullptr;
		}
		return res;
	}
};