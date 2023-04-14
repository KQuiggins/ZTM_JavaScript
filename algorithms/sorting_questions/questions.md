# Interview Questions On Sorting

## 1 - Sort 10 schools around your house by distance

Insertion sort - really fast for small data sets. It's easy to code and understand, and has a space complexity of O(1). It's also stable, which means that if two items have the same value, they will remain in the same order in the sorted list.

## 2 - eBay sorts listings by the current Bid amount

Radix or counting sort - To beat the O(n log n) time knowing the bids are integers between a set amount.

## 3 - Sport scores on ESPN

Quick sort - If you know the data is random, quick sort is usually the best choice. It has a worst case of O(n^2), but it's usually much faster than that. It's also in-place, so it doesn't require any extra space.

## 4 - Massive database (can't fit all into memory) needs to sort through past year's user data

Merge sort - Merge sort is a great choice for sorting massive amounts of data. It's a stable sort, so it doesn't change the order of items with the same value. It's also a divide and conquer algorithm, so it's easy to implement in parallel.

## 5 - Almost sorted Udemy review data needs to update and add 2 new reviews

Insertion sort - If the data is almost sorted, insertion sort is a good choice. It iterates through the list, growing a sorted list behind the current location. It only takes O(n) time if the list is already sorted.

## 6 - Temperature Records for the past 50 years in Canada

Radix or counting sort - If you know the data is integers within a certain range, radix or counting sort is a good choice. It's a stable sort, so it doesn't change the order of items with the same value. It's also a divide and conquer algorithm, so it's easy to implement in parallel.

## 7 - Large user name database needs to be sorted. Data is very random

Quick sort - If you know the data is random, quick sort is usually the best choice. It has a worst case of O(n^2), but it's usually much faster than that. It's also in-place, so it doesn't require any extra space.

## 8 - You want to teach sorting for the first time

Bubble sort - Bubble sort is a good choice for teaching sorting. It's easy to understand, and it's easy to implement. It's also a stable sort, so it doesn't change the order of items with the same value.
