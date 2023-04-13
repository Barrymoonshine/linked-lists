const LinkedList = (head = null, size = 0) => ({ head, size });

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
  myList.size += 1;
};

const getLastNode = () => {
  let node = myList.head;
  while (node) {
    if (!node.nextNode) {
      return node;
    }
    node = node.nextNode;
  }
};

const append = (value) => {
  const newNode = NodeFactory(value);
  // List empty
  if (myList.head === null) {
    myList.head = newNode;
    // List not empty
  } else if (myList.head !== null) {
    const lastNode = getLastNode();
    console.log('last node:', lastNode);
    lastNode.nextNode = newNode;
  }
  myList.size += 1;
};

const node2 = prepend(2);
const node1 = prepend(1);
const node3 = append(3);

console.log(myList);

console.log(myList.size);
