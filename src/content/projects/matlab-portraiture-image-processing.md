---
title: MATLAB Portraiture Image Processing
description: Project in the Image Processing course focused on developing a multi-stage pipeline in MATLAB to simulate “portrait mode,” enhancing subject clarity while applying background blur for a professional portrait effect.
heroImage: /images/projects/rry025.jpg
category: Computer Graphics & Image Processing
order: 10
featured: false
tags:
  - "Image Processing"
  - "Computational Photography"
  - "MATLAB"
  - "Edge Detection"
  - "Image Segmentation"
---

Project in the Image Processing course focused on developing a multi-stage pipeline in MATLAB to simulate “portrait mode,” enhancing subject clarity while applying background blur for a professional portrait effect.

## Key Technology & Contributions

- Implemented preprocessing techniques (histogram equalization, sharpening, lowpass filtering) to improve subject contrast and reduce noise, yielding sharper facial details across all test images.
- Evaluated multiple edge detection methods (Laplacian filter, wavelet decomposition, binary thresholding), with binary thresholding delivering the highest segmentation accuracy and lowest noise in both simple and textured backgrounds.
- Applied black–white mask manipulation (imclose, imfill, bwareaopen) to remove noise clusters and reconstruct clean subject masks, producing portrait images with consistent subject isolation and realistic bokeh effects.
