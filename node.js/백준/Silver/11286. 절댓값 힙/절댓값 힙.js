class AbsHeap {
	constructor() {
		this.heap = [];
	}

	push(value) {
		this.heap.push(value);
		this._heapUp();
	}

	pop() {
		if (this.heap.length === 0) return 0;
		if (this.heap.length === 1) return this.heap.pop();

		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this._heapDown();
		return min;
	}

	_heapUp() {
		let index = this.heap.length - 1;
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			if (this._compare(this.heap[parentIndex], this.heap[index]) <= 0) break;

			[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
			index = parentIndex;
		}
	}

	_heapDown() {
		let index = 0;
		const length = this.heap.length;
		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let smallestIndex = index;

			if (leftChildIndex < length && this._compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
				smallestIndex = leftChildIndex;
			}

			if (rightChildIndex < length && this._compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
				smallestIndex = rightChildIndex;
			}

			if (smallestIndex === index) break;

			[this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
			index = smallestIndex;
		}
	}

	_compare(a, b) {
		const abs_a = Math.abs(a);
		const abs_b = Math.abs(b);
		if (abs_a === abs_b) return a - b;
		return abs_a - abs_b;
	}
}

const [n, ...nodes] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const heap = new AbsHeap();
const result = [];

nodes.forEach((x) => {
	if (x === 0) {
		result.push(heap.pop());
	} else {
		heap.push(x);
	}
});

console.log(result.join('\n'));
