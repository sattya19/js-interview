function longestSubstring(s) {
    let maxLength = 0;            // Variable to store the maximum length 
    let start = 0;                // Start pointer 
    let end = 0;                  // End pointer
    let longestSubstr = "";       // Variable to store the longest substring without repeating characters
    const chSet = new Set();    // Set to keep track of characters in the current substring

    while (end < s.length) {      // Iterate through the string
        if (!chSet.has(s[end])) {  // If the character is not in the current substring
            chSet.add(s[end]);     // Add the character to the set
            if (end - start + 1 > maxLength) {
                maxLength = end - start + 1;     // Update maxLength if a longer substring is found
                longestSubstr = s.substring(start, end + 1);  // Update longestSubstr
            }
            end++;  // Move the end pointer
        } else {
            chSet.delete(s[start]);  // If the character is already in the set, remove the character at the start of the substring
            start++;  // Move the start pointer 
        }
    }

    return [maxLength, longestSubstr];  // Return the maximum length and longest substring
}


