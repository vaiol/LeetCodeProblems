from typing import List


def findDisappearedNumbers(nums: List[int]) -> List[int]:
    tmp = list(range(1, len(nums) + 1))
    for i in range(len(nums)):
        tmp[nums[i] - 1] = False
    return list(filter(lambda x: x, tmp))
