class Node {
    constructor(val) {
        this.val = val ; 
        this.next = null ; 
        this.prev = null ; 
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null ; 
        this.tail = null ; 
        this.length = 0 ; 
    }

    push(val) {
        let newNode = new Node(val) ; 
        if(!this.head) {
            this.head = newNode ; 
            this.tail = this.head ; 
        }else{
            let lastTail = this.tail ; 
            this.tail.next = newNode ; 
            newNode.prev = lastTail
            this.tail = newNode ; 
        }
        this.length++ ; 
        return this ; 
    }

    pop(){
        if(!this.head) return 'List is empty.!' ; 
        if(this.length == 1){
            this.head = null ; 
            this.tail = null ; 
            this.length = 0 ; 
            return this ; 
        }
        let newTail = this.tail.prev ; 
        newTail.next = null ; 
        this.tail = newTail
        this.length-- ;
        return this ; 

    }

    shift(val){
        let newNode = new Node(val) ; 
        if(!this.head){
            this.head = newNode ; 
            this.tail = this.tail ;
            this.length++
            return this ; 
        }else{
            let currentHead = this.head ; 
            currentHead.prev = newNode ; 
            newNode.next = currentHead  ; 
        }
        this.length++ ; 
        return this ; 
    }

    unshift () {
        if(!this.head) return 'Empty.!' ; 
        if(this.length == 1 ){
            this.head = null ; 
            this.tail = null ; 
            this.length = 0 ;
            return this ; 
        }
        this.head = this.head.next ;
        this.head.prev = null ; 
        this.length-- ; 
        return this ; 

    }


    get(index) {
        if(index < 0 || index >= this.length) return 'invalid index' ; 
        if(index <= this.length/2){
            let current = this.head ;
            let count = 0 ; 
            while(index != count) current = current.next ;
            return current ;
        }
        if(index > this.length/2){
            let current = this.tail ;
            let count = this.length-1 ; 
            while(index != count) current = current.prev ;
            return current ;
        }
    }

    set(index,value){
        let setNode = this.get(index) ; 
        setNode.val = value ; 
        return this ;  
    }

    insert(index , value){
        if(index<0 || index > this.length) return 'invalid index' ; 
        if(index == 0) return this.shift(value) ; 
        if(index == this.length) return this.push(value) ; 

        let insertedNode = new Node(value) ; 
        let nodeBefore = this.get(index-1) ;
        let nodeAfter = nodeBefore.next ;
        nodeBefore.next = insertedNode ; 
        insertedNode.prev = nodeBefore ; 
        insertedNode.next = nodeAfter ; 
        nodeAfter.prev = insertedNode ; 
        return this ; 

    }

    remove (index) {
        if(index<0 || index > this.length) return 'invalid index' ; 
        if(index == 0) return this.unshift() ; 
        if(index == this.length) return this.pop() ;

        let nodeBefore = this.get(index-1) ; 
        let nodeAfter = nodeBefore.next.next ; 
        nodeBefore.next = nodeAfter ; 
        nodeAfter.prev = nodeBefore
        this.length--
        return this ; 
    } 

    reverse(){
        let node = this.head 
        this.head = this.tail ;
        this.tail = node ;
        let next = null ; 
        while(node){
            node.prev = node.next ; 
            node.next = next ;
            next = node ;
            node = node.prev ;
        }
        return this ;
    }

}