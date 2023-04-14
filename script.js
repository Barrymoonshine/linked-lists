const LinkedList = (head = null, size = 0) => ({ head, size });

const NodeFactory = (value, nextNode = null) => ({ value, nextNode });

const myList = LinkedList();

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
  // Loops through linked list until there is no nextNode
  while (node !== null) {
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
    lastNode.nextNode = newNode;
  }
  myList.size += 1;
};

const head = () => myList.head;
const tail = () => {
  const lastNode = getLastNode();
  return lastNode;
};

const getIndexValue = (index) => {
  const myListArray = [];
  let node = myList.head;
  // Gets value of each node starting from the head, until null
  // Pushes value into an array
  while (node !== null) {
    myListArray.push(node.value);
    node = node.nextNode;
  }
  const indexValue = myListArray[index];
  return indexValue;
};

const getNodeAtIndex = (index) => {
  const valueAtIndex = getIndexValue(index);
  let node = myList.head;
  // Loops through linked list until value found or null
  while (node !== null) {
    if (node.value === valueAtIndex) {
      return node;
    }
    node = node.nextNode;
  }
};

const pop = () => {
  // First empties the last node
  const lastNode = getLastNode();
  delete lastNode.value;
  delete lastNode.nextNode;

  console.log(lastNode);
  let node = myList.head;
  // Then loops through the list until finds the empty node, and sets next to null
  while (node !== null) {
    if (Object.keys(node.nextNode).length === 0) {
      console.log(node);
      node.nextNode = null;
    }
    if (node !== null) {
      node = node.nextNode;
    }
  }
  myList.size -= 1;
};

const node2 = prepend(2);
const node1 = prepend(1);
const node3 = append(3);

pop();

console.log(myList);
