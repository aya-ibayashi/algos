// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input: 
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: 
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.


var floodFill = function(image, sr, sc, newColor) {

    if( image[sr][sc] == undefined ){
        return
    }

    let originalColor = image[sr][sc]

    if( sr+1 < image.length && image[sr+1][sc] == originalColor){
        image[sr][sc] = newColor;
        floodFill(image, sr+1, sc, newColor)
    }
    if( sr-1 >= 0 && image[sr-1][sc] == originalColor){
        image[sr][sc] = newColor;
        floodFill(image, sr-1, sc, newColor)
    }
    if( sc+1 < image[0].length && image[sr][sc+1] == originalColor){
        image[sr][sc] = newColor;
        floodFill(image, sr, sc+1, newColor)
    }
    if( sc-1 >= 0 && image[sr][sc-1] == originalColor){
        image[sr][sc] = newColor;
        floodFill(image, sr, sc-1, newColor)
    }
    
    image[sr][sc] = newColor;
    return image;
};


const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
    // handle if the coordinate is out of bounds
	// or if it is already the new color
	// or if it's not from the original color we're trying to change
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
        return image; // return image as-is
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
	// return modified image
    return image;
};


let image = [[0,0,1],[0,0,1]]

console.log(floodFill(image,0,0,2))