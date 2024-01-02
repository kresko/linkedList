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
        //nadi ga sa nextNode.nextNode!!!
        let tmp = this.listHead;
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
console.log(li.toString());
console.log(li.size());
console.log(li.tail());
console.log(li.head());
console.log(li.at(1));

