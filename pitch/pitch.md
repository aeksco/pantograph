# Pantograph CV
#### Lowering the barrier of entry to 3D design
###### github.com/aeksco/pantograph_cv

#### Climate

We live in an age where 3D Printers are more affordable and accessible than ever before.

<!--Today you can get a functionally adequate 3D printer for under $200.-->

While the financial barrier of entry to 3D printer ownership has never been lower, the barrier of entry to effectively working with modern design software hasn't kept pace with the steep drop in price.

#### Problem
Let's say you need to cut a simple, closed shape out of a thin piece of plywood - you'll probably trace an outline of your design, and proceed to cut the shape out with a bandsaw.

So your entire 'design' process was as simple as drawing an outline by hand, or tracing an outline from an existing object.

Now let's say that you want to make the same shape with a 3D printer. You'll have to take measurements and create a 2D sketch in your design software that can be extruded in the third dimension. Even for simple polygons this process can be time consuming. For complex designs that incorporate bezier curves, the design phase can potentially tailspin.

We take for granted the how intuitive non-digital design methods are.

Working with your hands is a fundamentally human activity, but bridging the gap between digital and non-digital design methods is something that a most 3D design solutions don't successfully execute.

#### Solution
This is where PantographCV comes in. PantographCV can analyze a hand-drawn two-dimensional outline and generate a vectorized image file (DXF, SVG) consumable by most 3D design software.

The goal is to make 3D design as simple as tracing an object.

#### Technology
PantographCV will be built with OpenCV and Python to handle edge detection, object scale, and vectorized image file export.


#### Goals
The initial goal is to have a tool that is functional from the command line, though potential future plans include web and mobile applications to facilitate taking and uploading pictures to a server that handles the processing.
