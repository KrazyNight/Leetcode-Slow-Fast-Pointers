//Leetcode: 141. Linked List Cycle 

/** Original Question
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote 
the index of the node that tail's next pointer is connected to. 

Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:
-- look at graph online

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:
-- look at graph online

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:
--look at graph online

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 */

/** Q: Template
var hasCycle = function(head) {
    
};
 */






//Solo 1 : Leetcode: 141. Linked List Cycle 

/** Original Question
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote 
the index of the node that tail's next pointer is connected to. 

Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:
-- look at graph online

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:
-- look at graph online

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:
--look at graph online

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 */

/** Q: Template
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow === slow.next;
    fast === fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false 
    
};
 */





// Explainations Leetcode: 141. Linked List Cycle 

/** Original Question
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote 
the index of the node that tail's next pointer is connected to. 

Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

 */

/** Q: Template
var hasCycle = function(head) {

    // this is stated to be a 'linked list', think 'nodes'

    let slow = head; //head = the head(node) of the linked list, 
    let fast = head;

    while (fast !== null && fast.next !== null) {

        //Perfect Explaination
        
        // while (fast !== null && fast.next !== null): 
        // The while loop continues as long as fast and fast.
        // next are not null. This condition ensures that the
        // fast pointer doesn't go beyond the end of the list
        // and that fast.next.next (used to move fast by two steps)
        // is a valid operation.
        

        slow = slow.next;          // Move slow pointer by one
        fast = fast.next.next;     // Move fast pointer by two

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle. 
    //If fast reaches the end (null), no cycle exists.
};
 */









//Leetcode: 142. Linked List Cycle II

/** Original Question
142. Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously
 following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer
  is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:
-- look at graph online

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
-- look at graph online

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
-- look at graph online

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 */

/** Q: Template
var detectCycle = function(head) {
    
};
 */





//Solo 1 : Leetcode: 142. Linked List Cycle II

/** Original Question
142. Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously
 following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer
  is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:
-- look at graph online

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
-- look at graph online

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
-- look at graph online

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 */

/** Q: Template
var detectCycle = function(head) {
    
};
 */







// Explainations Leetcode: 142. Linked List Cycle II

/** Original Question
142. Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously
 following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer
  is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.


 */

/** Q: Template
var detectCycle = function(head) {
    
};
 */










//Leetcode: 19. Remove Nth Node From End of List

/** Original Question
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:
--look at graph online

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

 */
/** Q: Template

var removeNthFromEnd = function(head, n) {
    
};
 */






//Solo 1: 19. Remove Nth Node From End of List

/** Original Question
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:
--look at graph online

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

 */
/** Q: Template

var removeNthFromEnd = function(head, n) {
    
};
 */







//Explaintion 19. Remove Nth Node From End of List

/** Original Question
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:
--look at graph online

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

 */
/** Q: Template

var removeNthFromEnd = function(head, n) {
    
};
 */