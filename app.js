class LinkedList {
    constructor(listHead = null) {
        this.listHead = null;
    }

    prepend(value) {
        let tmp = null;
        if(this.listHead != null) {
            tmp = this.listHead;
        }

        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    append(value) {
        if(this.listHead == null) { 
            this.prepend(value);
        } else {
            let tmp = this.listHead;
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    size() {
        let numberOfNodes = 1;
        let tmp = this.listHead;

        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
            numberOfNodes++;
        }
        
        return numberOfNodes;
    }

    head() {
        let tmp = null;

        if(this.listHead != null) {
            tmp = this.listHead;
        }

        let formattedNode = `(${tmp.value})`;

        return formattedNode;
    }

    tail() {
        let tmp = this.listHead;

        while(tmp != null) {
            if(tmp.nextNode === null) {
                break;
            }

            tmp = tmp.nextNode;
        }

        let formattedNode = `(${tmp.value})`;

        return formattedNode;
    }

    at(index) {
        let tmp = this.listHead;
        let currentIndex = 0;

        while(tmp != null) {
            if(currentIndex === index) {
                break;
            }

            tmp = tmp.nextNode;
            currentIndex++;
        }

        let formatedNode = `(${tmp.value})`;
        
        return formatedNode;
    }

    pop() {
        let current = this.listHead;
        let prev = null;

        while(current.nextNode != null) {
            prev = current;
            current = current.nextNode;
        }

        prev.nextNode = current.nextNode;
    }

    contains(value) {
        let tmp = this.listHead;
        
        while(tmp != null) {
            if(tmp.value == value) {
                return true;
            }

            tmp = tmp.nextNode;
        }
        return false;
    }
    
    find(value) {
        let tmp = this.listHead;
        let currentIndex = 0;

        while(tmp != null) {
            if(tmp.value === value) {
                return currentIndex;
            }
 
            tmp = tmp.nextNode;
            currentIndex++;
        }

        return null;
    }

    insertAt(value, index) {
        let current = this.listHead;
        let prev = null;

        for(let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;

            if(current === null) { break; }
        }

        const tmp = new Node(value);
        prev.nextNode = tmp;
        tmp.nextNode = current;
    }

    removeAt(index) {
        let tmp = this.listHead;
        let prev = null;

        for(let i = 0; i < index; i++) {
            prev = tmp;
            tmp = tmp.nextNode;
        }

        prev.nextNode = tmp.nextNode;
    }

    toString() {
        let tmp = this.listHead;
        let stringList = "";
        while(tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }

        return (stringList += "null");
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

let li = new LinkedList();
li.prepend("test1");
li.prepend("test2");
li.append("test3");
li.append("test4");
console.log(li.toString());
console.log(li.size());
console.log(li.tail());
console.log(li.head());
console.log(li.at(0));
li.pop();
console.log(li.contains("test4"));
console.log(li.find("test4"));
li.insertAt("test2.1", 2);
console.log(li.toString());
li.removeAt(2);
console.log(li.toString());