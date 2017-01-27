#!/usr/local/bin/python
import os
import sys
import cv2
import numpy as np
from matplotlib import pyplot as plt

# # # # #

# Image sourse
imgSrc = sys.argv[1]

# Set threshold value
if len(sys.argv) > 2:
  threshVal = int(sys.argv[2])
else:
  threshVal = 100

# # # # #

# os.chdir
print('Starting..')

# Input Image
inputImg = cv2.imread(imgSrc)

print('Read input..')

# Resizes input
# scale = 0.25
# resizedImg = cv2.resize(inputImg, None, fx=scale, fy=scale, interpolation = cv2.INTER_CUBIC)
# cv2.imwrite('_out_01_resized_resized.jpg', resizedImg)
resizedImg = inputImg

print('Resize..')

# Greyscales image
greyImage = cv2.cvtColor(resizedImg,cv2.COLOR_BGR2GRAY)
cv2.imwrite('_out_02_input_greyscale.jpg',greyImage)

print('Greyscale..')

# Extracts image contours
# threshVal = 100
maxVal = 255
ret, thresh = cv2.threshold(greyImage,threshVal,maxVal,0)
im2, contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
cv2.imwrite('_out_03_contours.jpg', im2)
cv2.imwrite('_out_04_contours.png', im2)
cv2.imwrite('_out_05_contours.pbm', im2)

print('Contours..')

# Converts to SVG with Potrace
os.system('/usr/local/bin/potrace _out_05_contours.pbm -o _out_06_output.svg -s')
os.system('/usr/local/bin/potrace _out_05_contours.pbm -b dxf -o _out_07_output.dxf')
os.system('/usr/local/bin/potrace _out_05_contours.pbm -b pdf -o _out_07_output.pdf')

print('Potrace..')

print('DONE.')

# Converts image to STL
# os.system('image2stl _out_04_contours.png')

# edgeMap = 10
# threshold1 = 100
# threshold2 = 100
# apertureSize = 3
# edges = cv2.Canny(greyImage, edgeMap, threshold1, apertureSize)
# edges = cv2.Canny(greyImage,50,150,apertureSize = 3)

# Writes edges to file
# cv2.imwrite('detected_edges.jpg',edges)
# cv2.imwrite('detected_edges.pbm',edges)

# Inverted edges
# edges = (255-edges)
# cv2.imwrite('inverted_edges.jpg', edges)
