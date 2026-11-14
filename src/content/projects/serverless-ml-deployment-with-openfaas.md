---
title: Serverless ML Deployment with OpenFaaS
description: Project in the Cloud Computing (COMP4651) course focused on deploying a lightweight MobileNet model on Kubernetes to compare serverless (OpenFaaS) and traditional server-based architectures for ML inference, analyzing trade-offs in scalability, latency, and cost.
heroImage: /images/projects/comp4651.jpg
category: System & Software
order: 8
featured: false
tags:
  - "Cloud Computing"
  - "Serverless ML"
  - "OpenFaaS"
  - "Kubernetes"
  - "Docker"
  - "MobileNet"
---

Project in the Cloud Computing (COMP4651) course focused on deploying a lightweight MobileNet model on Kubernetes to compare serverless (OpenFaaS) and traditional server-based architectures for ML inference, analyzing trade-offs in scalability, latency, and cost.

## Key Technology & Contributions

- Configured a single-node Kubernetes cluster with Minikube and deployed MobileNet via OpenFaaS, achieving real-time inference with ~200ms latency.
- Developed and containerized a Python Flask function to serve classification requests, enabling scalable, on-demand inference with dynamic resource allocation.
- Benchmarked serverless vs. server-based deployments, demonstrating lower maintenance overhead and identifying trade-offs in scalability, cost, and latency.
