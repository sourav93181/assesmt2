

def maxArea(arr):
    maxiArea = 0
    for i in range(len(arr)):

        for j in range(i+1, len(arr)):
            diff = j-i
            height = min(arr[i], arr[j])
            result = diff*height
            if result >= maxiArea:
                maxiArea = result
    return maxiArea


arr = [6, 4, 2, 5, 4, 6, 1, 3, 5]

print(maxArea(arr))
arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

print(maxArea(arr))
