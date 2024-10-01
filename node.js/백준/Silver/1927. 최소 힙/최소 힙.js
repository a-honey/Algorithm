// 최소힙
class MinHeap {
    constructor(){
        this.heap = [];
    }
    
    getMin(){
        if (this.heap.length === 0) return;
        return this.heap[0];
    }
    
    insert(value){
        this.heap.push(value);
        this._bubbleUp();
    }
    
    remove(){
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return min;
    }
    
    _bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];
        
        while (index > 0){
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            
            if (current >= parent) break;
            
            this.heap[index] = parent;
            this.heap[parentIndex] = current;
            index = parentIndex;
        }
    }
    
    _bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const current = this.heap[index];
        
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length){
                leftChild = this.heap[leftChildIndex];
                if (leftChild < current) swap = leftChildIndex;
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < current) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            this.heap[swap] = current;
            index = swap;
        }
    }
}

const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const heap = new MinHeap();
const result = [];

input.forEach((x) => {
    if (x === 0) {
        result.push(heap.remove());
    } else {
        heap.insert(x);
    }
});

console.log(result.join('\n'));