struct Solution {}

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::<char>::new();

        fn is_push(c: char) -> bool {
            match c {
                '(' | '{' | '[' => true,
                _ => false
            }
        }

        fn get_paired_char(c: char) -> char {
            match c {
                '(' => ')',
                '{' => '}',
                '[' => ']',
                _ => panic!("Invalid parameter.")
            }
        }

        for c in s.chars() {
            if is_push(c) {
                stack.push(c);
            } else {
                let p = stack.pop();

                match p{
                    None=> return false,
                    Some(p)=>{
                        if get_paired_char(p) != c {
                            return false;
                        }
                    }
                }
            }
        }

        return stack.len() == 0;
    }
}

fn main() {
    println!("{}", Solution::is_valid("]".to_string()));
}
