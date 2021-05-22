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

struct Solution {}

impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return head;
        }

        let mut h = head;
        let mut cur = &mut h;
        let mut value = cur.as_ref().unwrap().val;

        loop {
            let next = &mut cur.as_mut().unwrap().next;
            if next.is_none() {
                break;
            }
            if value == next.as_mut().unwrap().val {
                cur.as_mut().unwrap().next = next.as_mut().unwrap().next.take();
            } else {
                cur = &mut cur.as_mut().unwrap().next;
                value = cur.as_ref().unwrap().val
            }
        }

        h
    }
}
