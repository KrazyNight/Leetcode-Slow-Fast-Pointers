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
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      break; //break b/c this states there is a cycle, 
    }
  }

  //if there is no cycle, return null
  if (!fast || !fast.next) return null;

  //it is now proven there is a cycle
  // now identify the beg. of the cycle
  //don't touch 'slow', slow is where the cycle beg. identify, slow
  //... do so by using 'fast', which beg. at head

  fast = head;

  //if .... is met, return slow

  while (fast !== slow) {
    // move 'fast' ex. fast++
    fast = fast.next
    slow = slow.next //why do we move slow?
  } 
  return slow;
  


    
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
    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        //while (fast && fast.next): Ensures the fast pointer 
        //...does not encounter a None value (end of the list). 
        //...If it does, the list has no cycle.
        //
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) break;
        //Checks if the slow and fast pointers meet. 
        //If they do, a cycle is detected.

    }
    
    if (!fast || !fast.next) return null;
    //above
    //Handle Case with No Cycle
    //indicating no cycle exists in the linked list.

    //Might be Wrong
    //we have confirm there is a cycle, so we begin 'fast' 
    // when 'fast' and 'slow' meet is the beg. of cycle
    // only 'fast' is re-assigned to beg, head,
    //'slow' hasn't changed


    fast = head;
    // Reset Fast Pointer
    // if a cycle is detected, the fast pointer is reset to the head of the linked list
    //This sets up the next phase of the algorithm to determine the start of the cycle.


    //Find the Start of the Cycle, 
    //...find the node where the cycle begins.
    while (fast !== slow) {
        //Both fast and slow pointers now move one step at a time.
        fast = fast.next;
        slow = slow.next;
        //They will eventually meet at the start of the cycle because:
        //The distance from the head to the start of the cycle equals the distance the slow pointer has left to traverse after detection.

    }

    //Return the Start of the Cycle
    return slow; 
    //At this point, fast and slow meet at the node where the cycle begins.   
};
 */

//Better Explaiation Leetcode: 142. Linked List Cycle II
/**
var detectCycle = function(head) {
    let slow = head;  // Initialize the slow pointer to the head of the list
    let fast = head;  // Initialize the fast pointer to the head of the list

    // Phase 1: Cycle Detection
    while (fast && fast.next) { 
        slow = slow.next;         // Slow pointer moves one step
        fast = fast.next.next;    // Fast pointer moves two steps

        if (slow === fast) break; // If they meet, a cycle is detected
        //This line checks for the meeting condition and breaks out of the loop if the pointers meet.
    }

    // If no cycle is found (fast pointer reached the end of the list)
    if (!fast || !fast.next) return null; 

    // Phase 2: Finding the starting node of the cycle

    //Both fast and slow pointers now move one step at a time (fast = fast.next; slow = slow.next;).
// The point where they meet this time will be the 
// starting node of the cycle. 
// This is a mathematical property of 
// Floyd's Cycle-Finding Algorithm

    fast = head;            // Reset the fast pointer to the head
    while (fast !== slow) { // Move both pointers one step at a time
        fast = fast.next;
        slow = slow.next;
    }

    return slow; // The point where they meet is the start of the cycle
};

// Finding the Cycle Start: The mathematical proof for why resetting
// one pointer to the head and moving both at the same speed finds 
// the cycle start is a bit more involved but essentially relies on 
// the relationship between the distance from the head to the cycle start, 
// the length of the cycle, and the meeting point within the cycle
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









//LEETCODE 876.Middle of the Linked List

/**Original Question
876. Middle of the Linked List

Given the head of a singly linked list,
return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4,
 we return the second one.
 */
/**Q: Template 

var middleNode = function(head) {
    
};
*/






//Solo 1: 876.Middle of the Linked List
/**Original Question 
876. Middle of the Linked List

Given the head of a singly linked list,
return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4,
 we return the second one.
*/
/**Q: Template 
var middleNode = function(head) {
    
};
*/





//Explaintion 876.Middle of the Linked List
/**Original Question 
876. Middle of the Linked List

Given the head of a singly linked list,
return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4,
 we return the second one.
*/
/**Q: Template 
var middleNode = function(head) {
    
};
*/











//LEETCODE 202. Happy Number
/**Original Question
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

-Starting with any positive integer, replace the number by the sum
of the squares of its digits.
-Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.
-Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

 */
/**Q: Template 
var isHappy = function(n) {
    
};
*/





//Solo 1: 202. Happy Number
/**Original Question 
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

-Starting with any positive integer, replace the number by the sum
of the squares of its digits.
-Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.
-Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
*/
/**Q: Template 
var isHappy = function(n) {
    
};
*/





//Explaintion 202. Happy Number
/**Original Question 
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

-Starting with any positive integer, replace the number by the sum
of the squares of its digits.
-Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.
-Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
*/
/**Q: Template 
var isHappy = function(n) {
    
};
*/

