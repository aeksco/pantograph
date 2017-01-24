//linear_extrude(height = 5, center = true, convexity = 10)
//              import(file = "output.dxf", layer = "plate");

linear_extrude(height = 100, center=true, convexity = 10)
            import(file = "sample.DXF", layer = "cutout1");

linear_extrude(height = 5, center = true, convexity = 10)
                import_dxf(file = "sample.dxf", layer = "plate");
