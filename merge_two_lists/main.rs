struct Solution {}

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val,
        }
    }
}

impl Solution {
    pub fn merge_two_lists(mut l1: Option<Box<ListNode>>, mut l2: Option<Box<ListNode>>)
                           -> Option<Box<ListNode>> {
        type OpNode = Option<Box<ListNode>>;

        let mut root = ListNode::new(0);
        let mut tail = &mut root;

        while l1.is_some() && l2.is_some() {
            let mut next = OpNode::None;
            if l1.as_ref().unwrap().val <= l2.as_ref().unwrap().val {
                next = l1;
                l1 = next.as_mut().unwrap().next.take();
            } else {
                next = l2;
                l2 = next.as_mut().unwrap().next.take();
            }

            tail.next = next;
            tail = tail.next.as_mut().unwrap();
        }

        if l1.is_some() {
            tail.next = l1;
        } else if l2.is_some() {
            tail.next = l2;
        }

        root.next
    }
}

fn main() {}
