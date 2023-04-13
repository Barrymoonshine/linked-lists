const LinkedList = (head = null) => ({ head });

const NodeFactory = (value, nextNode = null) => ({ value, nextNode });

const myList = LinkedList();

console.log(myList);

const prepend = (value) => {
  const newNode = NodeFactory(value);
  // List empty
  if (myList.head === null) {
    myList.head = newNode;
    // List not empty
  } else if (myList.head !== null) {
    newNode.nextNode = myList.head;
    myList.head = newNode;
  }
};

const node1 = prepend(1);
const node2 = prepend(2);

// console.log(node1);
// console.log(node2);
console.log(myList);
