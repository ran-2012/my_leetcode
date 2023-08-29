struct Solution;

impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        } else if x == 0 {
            return true;
        } else {
            let mut vec = Vec::new();
            let mut x0 = x;
            while x0 > 0 {
                vec.push(x0 % 10);
                x0 /= 10;
            }
            let mut s = vec.len() - 1;
            let mut i = 0;
            while i < s {
                if vec[s] != vec[i] {
                    return false;
                }
                i += 1;
                s -= 1;
            }
        }
        return true;
    }
}

fn main() {
    println!("Hello, world!");

    println!("{}", Solution::is_palindrome(124321))
}
