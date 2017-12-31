
// Empty global object minheaper
minheaper = {}; 

// This function helps in heapifying the array in a top down approach.
// It is analogous to a representation of minheapify function in the reference.
// Reference: http://www.comp.nus.edu.sg/~sma5503/recitations/03-heap.pdf
function bubble_down(heap,pos) {
    var heap_size = heap.length;
    var left_child = 2*pos + 1;
    var right_child = 2*pos + 2;
    var smallest;

    if(left_child< heap_size && heap[left_child] < heap[pos])
        smallest = left_child;
    else
        smallest = pos;

    if(right_child< heap_size && heap[right_child] < heap[smallest])
        smallest = right_child;

    if(smallest!=pos){
        var temp = heap[pos];
        heap[pos] = heap[smallest];
        heap[smallest] = temp;
        bubble_down(heap, smallest);
    }
}


// The bubbleup function is a helper function which maintains the heap property
// without making the insertion complex. The pseudo-code is inspired by the 
// referenced Data Sructures Lecture.
// Reference: https://www.youtube.com/watch?v=B7hVxCmfPtM
function bubble_up(heap,pos){
    var parent;
    if(pos%2==0)
        parent = (pos/2)-1;
    else
        parent = (pos-1)/2;

    if (parent>=0 && heap[parent]>heap[pos]){
        var temp = heap[pos];
        heap[pos] = heap[parent];
        heap[parent] = temp;
        bubble_up(heap,parent);
    }
}

// Function to insert new element into the min heap
function minheap_insert(heap, new_element) {
    heap[heap.length] = new_element;
    bubble_up(heap,heap.length-1);
}

// Function to extract the smallest element from the min heap
function minheap_extract(heap) {
    var min = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.splice(heap.length - 1,1);
    bubble_down(heap,0);
    return min;
}


// creating instances for the object minheaper
minheaper.insert = minheap_insert;
minheaper.extract = minheap_extract;