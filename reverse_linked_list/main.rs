
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
    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if (head.is_none()) {
            return head;
        }

        let mut vec: Vec<Box<ListNode>> = Vec::new();
        vec.reserve(1000);

        let mut p = head;
        while p.as_ref().unwrap().next.is_some() {
            let mut p1 = p.unwrap();
            p = p1.next.take();
            vec.push(p1);
        }
        vec.push(p.unwrap());

        let mut root = ListNode::new(0);
        root.next = vec.pop();
        let mut p1 = &mut root.next;
        while vec.len() > 0 {
            p1.as_mut().unwrap().next = vec.pop();
            p1 = &mut p1.as_mut().unwrap().next;
        }

        root.next
    }
}
