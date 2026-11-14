---
title: People Tracking and Counting for Statistical Analys
description: A Computer Vision-powered people counting system to support Academia Sinica Open House people-flow estimation. The system combined YOLO-based detection, feature extraction with re-identification (ReID), and ByteTrack tracking to achieve stable and continuous multi-person tracking in crowded environments.
heroImage: /images/projects/peoplecount.jpg
category: AI & ML
order: 2
featured: true
tags:
  - "Computer Vision"
  - "Multi-Object Tracking"
  - "YOLO11"
  - "ByteTrack"
  - "OSNet Re-ID"
  - "PyTorch"

---

A Computer Vision-powered people counting system to support Academia Sinica Open House people-flow estimation. The system combined YOLO-based detection, feature extraction with re-identification (ReID), and ByteTrack tracking to achieve stable and continuous multi-person tracking in crowded environments.

## Key Technology & Contributions

- Enhanced people detection and tracking in multi-angle occlusion scenario by fine-tuning YOLO on the CrowdHuman dataset (boosting dense-scene accuracy by 25%), training OSNet for ReID, and integrating ByteTrack with optimized buffer tuning, achieving more stable long-duration tracking and reducing ID-switch errors.
- Developed flexible zone/line setup tools with command-line and config integration, and implemented real-time ingress/egress analytics via bounding-box cross-product calculations, delivering >80% accuracy for current occupancy and cumulative unique counts in test runs.
