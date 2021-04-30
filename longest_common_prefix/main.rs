
struct Solution {}

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.len() < 1 { return "".to_string(); }
        let str0 = &strs[0];
        for (i, char) in str0.bytes().enumerate() {
            for str in &strs {
                if str.len() <= i {
                    return str0[..i].to_owned();
                }

                if str.as_bytes()[i] != str0.as_bytes()[i] {
                    return str0[..i].to_owned();
                }
            }
        }
        str0.to_owned()
    }
}

fn main() {
    let v = vec!("1".to_string(), "12345".to_string(), "1234".to_string());

    println!("common prefix: {}", Solution::longest_common_prefix(v));
}

