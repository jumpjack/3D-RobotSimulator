#############################
Student - Sahib Singh Dhanjal
Gitlab Repo - https://gitlab.com/sahibdhanjal/kineval-stencil-fall16
MS in Robotics, Class of 2019
#############################




#############################
Path Planners Implemented :

1. A-Star - iterateGraphSearch() // lines 487 - 526
2. Depth First Search - DFS() // lines 368 - 402
3. Breadth First Search - BFS() // lines 330 - 365
4. Greedy Best First Search - Greedy() // lines 446 - 485
5. Dijkstra - Dijkstra() // lines 404 - 443
##############################





##############################
Helper Functions Implemented :


1. PriorityQueue() - lines 824 - 854
	Implementation of Priority Queue to facilitate Dijkstra / A-Star
	and Greedy Best First Search algorithms

2. define_obstacle() - lines 860 - 870
	A parameter .obstacle has been added to every node of the graph.
	The function loops through the graph G and sets the parameter true
	if it is in collision using the testCollision() function

3. getCoord(node) - lines 871 - 877
	Converts the graph coordinates (eg. -2,7) to world coordinates (eg. 0,90)

4. getWorld(node) - lines 879 - 883
	Converts the world coordinates to graph coordinates

5. get4nbhd(node) - lines 886 - 903
	Function calculates and returns the list of neighbours (which are
	not visited/ obstacles) in the 4 cardinal directions (N,E,W,S) of
	the node.

6. get8nbhd(node) - lines 904 - 921
	Function calculates and returns the list of neighbours (which are
	not visited/ obstacles) in the 8 adjacent directions of the node.

7. heuristic(node1,node2,version) - lines 922 - 946
	Function returns heuristic value calculated between node1 and node2.
	You can choose between "octile", "chebyshev", "euclidean" and 
	manhattan" heuristics. Manhattan is set by default.

8. gcost(node1,node2) - lines 948 - 959
	Function returns the cost of movements between adjacent cells. It is
	set to 1.4 for diagonals and 1 for cardinal directions

9. strip(number) - lines 963 - 972
	Function returns the value of number with a precision of 2 digits

10. get_path() - lines 974 - 983
	Function returns the path calculated after the path finding succeeds

11. draw_path() - lines 985 - 1000
	Function draws a line highlighting the path calculated by the algo

12. qprint() - lines 1003 - 1009
	Function to print the current elements occupying the data structure

##############################





##############################
Functions for Debugging help:

1. cprint() - lines 1028 - 1040
	Function to print and highlight all cells that are obstacles

2. gprint() - lines 1042 - 1053
	Function to print the entire graph with all properties of all nodes

3. n4print(node) - lines 1054 - 1063
	Function to print all "valid" neighbours in the 8 directions of a node

4. n8print(node) - lines 1064 - 1073
	Function to print all "valid" neighbours in the 8 directions of a node

5. test_obstacle(node) - lines 1075 - 1087
	Function to test if the given node is an obstacle or not using range
	and not testCollision()
##############################




##############################
Test Results:
____________________________________________________________________
CASE I:

KEY :  ?search_alg=A-star?planning_scene=narrow1?q_init=[0,0]?q_goal=[4,4]?eps=0.1

---------------------------------------------------------
| start,goal = [0,0] , [4,4]                            |
---------------------------------------------------------
| planning scene = narrow1                              |
---------------------------------------------------------
| eps = 0.1                                             |
---------------------------------------------------------
|Algorithm   |  A*  |  DFS  |  BFS  | Dijkstra | Greedy |
---------------------------------------------------------
|Iterations  |  81  |  1309 |  1386 |   1378   |   81   |
---------------------------------------------------------
|Visited     |  170 |  2246 |  1413 |   1406   |   170  |
---------------------------------------------------------
|Queue size  |  90  |  938  |   28  |    29    |   90   |
---------------------------------------------------------
|Path length |   8  | 106.4 |   8   |     8    |    8   |
---------------------------------------------------------

____________________________________________________________________
CASE II:

KEY :  ?search_alg=greedy-best-first?planning_scene=narrow2?q_init=[0.5,0.5]?q_goal=[4.2,4.5]?eps=0.11

---------------------------------------------------------
| start,goal = [0.5,0.5] , [4.2,4.5]                    |
---------------------------------------------------------
| planning scene = narrow2                              |
---------------------------------------------------------
| eps = 0.11                                            |
---------------------------------------------------------
|Algorithm   |  A*  |  DFS  |  BFS  | Dijkstra | Greedy |
---------------------------------------------------------
|Iterations  |  985 |  1131 |  1789 |   1806   |   245  |
---------------------------------------------------------
|Visited     | 1057 |  1888 |  1814 |   1830   |   357  |
---------------------------------------------------------
|Queue size  |  73  |  758  |   26  |    25    |  113   |
---------------------------------------------------------
|Path length | 11.24| 98.62 | 11.24 |   11.24  | 11.24  |
---------------------------------------------------------

____________________________________________________________________
CASE III:

KEY :  ?search_alg=greedy-best-first?planning_scene=misc?q_init=[0.2,2.3]?q_goal=[3.5,3.4]?eps=0.08

---------------------------------------------------------
| start,goal = [0.2,2.3] , [3.5,3.4]                    |
---------------------------------------------------------
| planning scene = misc                                 |
---------------------------------------------------------
| eps = 0.08                                            |
---------------------------------------------------------
|Algorithm   |  A*  |  DFS  |  BFS  | Dijkstra | Greedy |
---------------------------------------------------------
|Iterations  | 1126 |  1785 |  3737 |   3737   |   121  |
---------------------------------------------------------
|Visited     | 1226 |  2575 |  3761 |   3762   |   226  |
---------------------------------------------------------
|Queue size  |  101 |  791  |   25  |    26    |   106  |
---------------------------------------------------------
|Path length | 5.76 | 66.04 |  5.76 |   5.76   |  5.76  |
---------------------------------------------------------

____________________________________________________________________
CASE IV:

KEY :  ?search_alg=greedy-best-first?planning_scene=three_sections?q_init=[-0.8,-0.1]?q_goal=[4.8,4.8]?eps=0.1

---------------------------------------------------------
| start,goal = [-0.8,-0.1] , [4.8,4.8]                  |
---------------------------------------------------------
| planning scene = three_sections                       |
---------------------------------------------------------
| eps = 0.1                                             |
---------------------------------------------------------
|Algorithm   |  A*  |  DFS  |  BFS  | Dijkstra | Greedy |
---------------------------------------------------------
|Iterations  | 1801 |  1186 |  3034 |   3034   |  1007  |
---------------------------------------------------------
|Visited     | 1938 |  2214 |  3036 |   3036   |  1219  |
---------------------------------------------------------
|Queue size  |  138 | 1029  |   3   |    3     |   213  |
---------------------------------------------------------
|Path length | 16.9 | 117.5 | 16.9  |   16.9   |  18.5  |
---------------------------------------------------------

____________________________________________________________________


Conclusion:

1. A* runs the fastest most of the times(sometimes superseded by Greedy
	best first search)

2. A* / BFS / Dijkstra are most likely to give the most optimal 
	(shortest) path whereas we can't say that about Greedy/DFS (see case IV)

3. In most of the cases, Dijkstra and BFS have similar performance parameters.
	BFS/Dijkstra also seem to explore the most number of cells and highest number
	of iterations.

4. Increasing/Decreasing the eps value, can lead to higher/lower runtime.

5. BFS/ Dijkstra maintain the smallest queue size in the end most of the time.

____________________________________________________________________