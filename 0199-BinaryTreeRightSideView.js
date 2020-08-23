const arr0 = [1,2,3,null,5,null,4];
// binaryTreeRightSideView( arr );
const arr1 = [1,2,3,null,5,null,4];


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function rightSideView(root){
    let result = [];
    
}