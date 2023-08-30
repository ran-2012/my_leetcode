struct Solution;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let m_ = m as usize;
        let n_ = n as usize;
        let mut m0 = m_;
        let mut n0 = n_;
        let mut i = m_ + n_;
        while m0 > 0 && n0 > 0 {
            i -= 1;
            if nums1[m0 - 1] > nums2[n0 - 1] {
                nums1[i] = nums1[m0 - 1];
                m0 -= 1;
            } else {
                nums1[i] = nums2[n0 - 1];
                n0 -= 1;
            }
        }
        if n0 > 0 {
            while i > 0 {
                i -= 1;
                nums1[i] = nums2[i];
            }
        }
    }
}

fn main() {
    println!("Hello, world!");
    let mut s1 = Vec::from([2, 0]);
    let mut s2 = Vec::from([1]);
    Solution::merge(&mut s1, 1, &mut s2, 1);
    println!("{:?}", s1);
}
