const tree = {};

function preorder(node){
    if (node === ".") return "";
    return node + preorder(tree[node][0]) + preorder(tree[node][1]);
}

function inorder(node){
    if (node === ".") return "";
    return inorder(tree[node][0]) + node + inorder(tree[node][1]);
}

function postorder(node){
    if (node === ".") return "";
    return postorder(tree[node][0]) + postorder(tree[node][1]) + node;
}

const fs = require('fs');

const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((row) => {
    const [node, left, right] = row.split(" ");
    tree[node] = [left, right];
})

console.log(preorder("A"));
console.log(inorder("A"));
console.log(postorder("A"));