# Pantograph CV
#### Lowering the barrier of entry to 3D design

We're living in an age where 3D Printers are more affordable and accessible than ever before.

You can get a Monoprice Mini for under $200 and it's an excellent little printer.

The barrier of entry to 3d printer ownership has never been lower.

However, the barrier of entry to effectively working modern 3d design software hasn't kept pace with the steep drop in price.

Unlike working


RCOS Proposal - 3D Design Aid (Pantograph)
#### Lowering the barrier of entry to 3D Printing
- Design isn't as simple as sketching, yet.

Non-digital design methods are simple and intuitive.

Let's say you need to cut a simple, closed shape out of a thin piece of plywood - you'll probably trace an outline of your design, and proceed to cut the shape out with a bandsaw.

So the entire 'design' process was as simple as drawing an outline by hand, or tracing an outline from an existing object.

Now let's say that you want to make the same shape with a 3D printer. You'll have to take measurements and create a 2D sketch in your design software that can be extruded in the third dimension. Even for simple polygons this process can be time consuming, and for complex designs made from bezier curves the process can become very time-consuming.

#

This is where PantographCV comes in. PantographCV can analyze a two-dimensional outline and generate a vectorized image file (DXF, SVG) consumable by most 3D design software.

The goal is to make 3D design as simple as tracing an object.

#

The initial project outlines this software being run from the commandline, though potential future plans include web and mobile applications to facilitate taking and uploading pictures.

- OpenCV
- Python
