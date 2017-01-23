# import numpy as np
# import cv2

# # Load an color image in grayscale
# img = cv2.imread('duplicator.jpg',0)

# # Show an Image
# cv2.imshow('image',img)
# # cv2.waitKey(0)
# cv2.imwrite('duplicator_grey.png',img)
# cv2.destroyAllWindows()

# # # # #

# import cv2
# import numpy as np

# # filename = 'duplicator.jpg'
# filename = 'guitar.jpg'

# img = cv2.imread(filename)
# gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# gray = np.float32(gray)
# dst = cv2.cornerHarris(gray,2,3,0.04)

# #result is dilated for marking the corners, not important
# dst = cv2.dilate(dst,None)

# # Threshold for an optimal value, it may vary depending on the image.
# img[dst>0.01*dst.max()]=[0,0,255]

# cv2.imshow('dst',img)
# if cv2.waitKey(0) & 0xff == 27:
#     cv2.destroyAllWindows()

# # # # #

# import numpy as np
# import cv2
# from matplotlib import pyplot as plt

# img = cv2.imread('guitar.jpg')
# gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# maxCorners = 100
# qualityLevel = 0.01
# minDistance = 2

# corners = cv2.goodFeaturesToTrack(gray, maxCorners, qualityLevel, minDistance)
# corners = np.int0(corners)

# for i in corners:
#     x,y = i.ravel()
#     cv2.circle(img,(x,y),3,255,-1)

# plt.imshow(img),plt.show()

# # # # #

# import cv2
# import numpy as np

# img = cv2.imread('guitar.jpg')
# gray= cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# # sift = cv2.SIFT()
# sift = cv2.xfeatures2d.SIFT_create()
# kp = sift.detect(gray,None)

# img = cv2.drawKeypoints(gray,kp,img)
# cv2.imwrite('sift_keypoints.jpg',img)

# # # # #

import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('guitar.jpg',0)

edgeMap = 50
threshold1 = 100
threshold2 = 100
apertureSize = 2
edges = cv2.Canny(img, edgeMap, threshold1, apertureSize)

# Writes edges to file
cv2.imwrite('edges.pbm',edges)
# cv2.imwrite('edges.jpg',edges)

# Plots both
plt.subplot(121),plt.imshow(img,cmap = 'gray')
plt.title('Original Image'), plt.xticks([]), plt.yticks([])

plt.subplot(122),plt.imshow(edges,cmap = 'gray')
plt.title('Edge Image'), plt.xticks([]), plt.yticks([])

plt.show()

# # # # #

# import cv2
# import numpy as np

# # img = cv2.imread('guitar.jpg')
# # img = cv2.imread('edges.jpg')
# # img = cv2.imread('crossword.jpg')
# # img = cv2.imread('smile.gif')
# img = cv2.imread('superman.png')

# gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# # Writes Edges
# edges = cv2.Canny(gray,50,150,apertureSize = 3)
# cv2.imwrite('hough_edges.jpg',edges)

# lines = cv2.HoughLines(edges,1,np.pi/180,200)

# if lines is None:
#   raise ValueError('No edges found.')

# for each in lines:
#   for rho, theta in each:
#     a = np.cos(theta)
#     b = np.sin(theta)
#     x0 = a*rho
#     y0 = b*rho
#     x1 = int(x0 + 1000*(-b))
#     y1 = int(y0 + 1000*(a))
#     x2 = int(x0 - 1000*(-b))
#     y2 = int(y0 - 1000*(a))

#     cv2.line(img,(x1,y1),(x2,y2),(0,0,255),2)

# cv2.imwrite('hough_lines.jpg',img)

# # # # #

# import numpy as np
# import cv2

# img = cv2.imread('duplicator.jpg')
# # img = cv2.imread('crossword.jpg')
# grey = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# ret,thresh = cv2.threshold(grey,127,255,0)
# im2, contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)

# cv2.imwrite('countours.jpg', im2)

# # # # #










# # # # #
