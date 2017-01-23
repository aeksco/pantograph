import os
import cv2
import numpy as np
from matplotlib import pyplot as plt

# # # # #

# Input Image
inputImg = cv2.imread('input.jpg')

# Resizes input
scale = 0.25
resizedImg = cv2.resize(inputImg, None, fx=scale, fy=scale, interpolation = cv2.INTER_CUBIC)
cv2.imwrite('result/resized_resized.jpg', resizedImg)

# Greyscales image
greyImage = cv2.cvtColor(resizedImg,cv2.COLOR_BGR2GRAY)
cv2.imwrite('result/input_greyscale.jpg',greyImage)

# Extracts image contours
threshVal = 80
maxVal = 255
ret, thresh = cv2.threshold(greyImage,threshVal,maxVal,0)
im2, contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
cv2.imwrite('result/contours.jpg', im2)
cv2.imwrite('result/contours.png', im2)
cv2.imwrite('result/contours.pbm', im2)

# Converts to SVG with Potrace
os.system('potrace ./result/contours.pbm -o output.svg -s')
os.system('potrace ./result/contours.pbm -o output.dxf -b dxf')

# Converts image to STL
os.system('image2stl ./result/contours.png')

# edgeMap = 10
# threshold1 = 100
# threshold2 = 100
# apertureSize = 3
# edges = cv2.Canny(greyImage, edgeMap, threshold1, apertureSize)
# edges = cv2.Canny(im2,50,150,apertureSize = 3)

# Writes edges to file
# cv2.imwrite('result/detected_edges.jpg',edges)
# cv2.imwrite('result/detected_edges.pbm',edges)
