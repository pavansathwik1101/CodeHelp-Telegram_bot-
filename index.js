const axios = require('axios');
const { Telegraf } = require('telegraf');
const bot = new Telegraf('6046316287:AAEotykcjqgObZ1H5SkIGUBqWIuaiXnFgK0')
const linearsearch=`# Linear Search in Python


def linearSearch(array, n, x):

    # Going through array sequencially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1


array = [2, 4, 0, 1, 9]
x = 1
n = len(array)
result = linearSearch(array, n, x)
if(result == -1):
    print("Element not found")
else:
    print("Element found at index: ", result)`
const binarysearch=`# Binary Search in python


    def binarySearch(array, x, low, high):
    
        # Repeat until the pointers low and high meet each other
        while low <= high:
    
            mid = low + (high - low)//2
    
            if array[mid] == x:
                return mid
    
            elif array[mid] < x:
                low = mid + 1
    
            else:
                high = mid - 1
    
        return -1
    
    
    array = [3, 4, 5, 6, 7, 8, 9]
    x = 4
    
    result = binarySearch(array, x, 0, len(array)-1)
    
    if result != -1:
        print("Element is present at index " + str(result))
    else:
        print("Not found")`
    const mergesort=`# MergeSort in Python


    def mergeSort(array):
        if len(array) > 1:
    
            #  r is the point where the array is divided into two subarrays
            r = len(array)//2
            L = array[:r]
            M = array[r:]
    
            # Sort the two halves
            mergeSort(L)
            mergeSort(M)
    
            i = j = k = 0
    
            # Until we reach either end of either L or M, pick larger among
            # elements L and M and place them in the correct position at A[p..r]
            while i < len(L) and j < len(M):
                if L[i] < M[j]:
                    array[k] = L[i]
                    i += 1
                else:
                    array[k] = M[j]
                    j += 1
                k += 1
    
            # When we run out of elements in either L or M,
            # pick up the remaining elements and put in A[p..r]
            while i < len(L):
                array[k] = L[i]
                i += 1
                k += 1
    
            while j < len(M):
                array[k] = M[j]
                j += 1
                k += 1
    
    
    # Print the array
    def printList(array):
        for i in range(len(array)):
            print(array[i], end=" ")
        print()
    
    
    # Driver program
    if __name__ == '__main__':
        array = [6, 5, 12, 10, 9, 1]
    
        mergeSort(array)
    
        print("Sorted array is: ")
        printList(array)`

bot.start((ctx)=>{ctx.reply("welcome to sathwik's Bot")});
bot.on('sticker',(ctx)=>{ctx.reply('😎')})
bot.command('whomadeyou',(ctx)=>{ctx.reply("sathwik!!")});
bot.command('index',(ctx)=>{ctx.reply("linear search\nbinarysearch\nmerge sort")});
bot.command('linearsearch',(ctx)=>{ctx.reply(linearsearch)});
bot.command('binarysearch',(ctx)=>{ctx.reply(binarysearch)});
bot.command('howareyou',(ctx)=>{ctx.reply('am gud,what about you?')});
bot.command('mergesort',(ctx)=>{ctx.reply(mergesort)});
bot.launch()