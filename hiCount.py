# -*- coding: utf-8 -*-
import re
import os
import glob

def is_chinese(char):
    if '\u4e00' <= char <= '\u9fff':
        return True
    else:
        return False

def hiCount(s,debug=False):
    count,lCount = 0,0
    ignore_ = ["，","、","“","”","（","）","？","！","。","—","：","《","》","【","】","；"]
    for i in s:
        if is_chinese(i) and i not in ignore_:
            count += 1
        elif i in ignore_:
            lCount += 1
    print("字数",count,"中文字符数",lCount)
    return (count,lCount)

def openRead(name,debug=False):
    # print(os.getcwd())
    file = open(name,'r',encoding="UTF-8")
    b = file.read()
    if debug:
        print(b)
    return b

def foundFiles(name,debug=False):
    c = name + "\*.md"
    print(c)
    dirs = glob.glob(c)
    for files in dirs:
        if debug:
            print(files) 
    else:
        return (True,dirs)
    return (False,None)

def __main__():
    count = [0,0]
    a = foundFiles(input('请输入要计数的维基名称: '))
    if a[0]:
        for wj in a[1]:
            # 遍历并打开文件
            countFiles = openRead(wj)
            print(wj,end=" ")
            count[0] += hiCount(countFiles)[0]
            count[1] += hiCount(countFiles)[1]
        else:
            print('共',count[0],'字,','其中汉字',count[0]-count[1],'字,','中文标点符号',count[1],'字')

__main__()
        

