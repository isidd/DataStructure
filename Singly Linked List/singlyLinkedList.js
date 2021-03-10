class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val) ; 
        if(!this.head){
            this.head = newNode ; 
            this.tail = this.head ; 
        }else{
            this.tail.next = newNode ; 
            this.tail = newNode ; 
        }
        this.length++
        return this ; 
    }

    pop() {
        if(!this.head) return 'there is nothing to pop' ; 

        let current = this.head ;
        let needed = current ; 
        while(current.next){
            needed = current ; 
            current = current.next
        }
        this.tail = needed ; 
        this.tail.next = null ;
        this.length-- ; 
        return this ; 
        

    }

    shift () {
        if(!this.head) return 'list is empty' ; 
        let newNode = this.head.next ; 
        this.head = newNode
        this.length -- ;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode ;
            this.tail = this.head ; 
        }else{
            newNode.next = this.head ; 
            this.head = newNode ; 
        }
        this.length++ ; 
        return this ; 

    }

    get(num){
        if(!this.head) return 'this is an empty List ' ; 
        let current =this.head ;
        let counter = 0 ;  
        while(counter !=num){
            current = current.next
            counter++
        }
        return counter
    }

    set(num,val){
        let reqNode = this.get(num) ; 
        if(!reqNode) return 'No item on this index'
        reqNode.val = val ; 
        return this ; 
    }

    insert(index,val) {
        if(index<0 || index > this.length) return 'invalid index' ; 
        if(index == 0 ) return this.unshift(val) ; 
        if(index == this.length-1) return this.push(val) ; 
        let insertedNode = new Node(val) ; 
        let indexedNode = this.get(index-1) ; 
        let joinedNode = indexedNode.next ; 
        indexedNode.next = insertedNode ; 
        insertedNode.next = joinedNode ; 
        this.length++
        return this ; 
    }

    remove(index) {
        if(index<0 || index > this.length) return 'invalid index' ; 
        if(index == 0 ) return this.shift() ; 
        if(index == this.length-1) return this.pop() ; 
        let indexedNode = this.get(index-1) ;
         indexedNode.next = indexedNode.next.next ; 
        this.length--
        return this ; 
    }

    reverse(){
        if(!this.head) return 'Empty List' ; 
        let current = this.head ; 
        this.head = this.tail ;
        this.tail = current ; 
        let next ; 
        let prev = null ;
        for(i=0;i<this.length;length++){
            next = current.next ; 
            current.next = prev ; 
            prev = current ; 
            current = next ; 
        } 
    }

    traverse(){
        let current = this.head ;
        while(current){
            console.log(current.val)
            current = current.next
        }

    }

}






// let first = new Node(1) ; 
// first.next = new Node(2)
// first.next.next = new Node(3)
// first.next.next.next = new Node(4)
// first.next.next.next.next = new Node(5)

// console.log(first.next.next.next.next.next)