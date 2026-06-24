---
title: "ADVIS-SR: Real-Time Anomaly Detection for Safe Human–Robot Interaction in real industrial scenario"
permalink: /projects/advis-distrimuse-sr/
category: EU Project 🇪🇺
excerpt: "Industrial Safety Detector using deep Generative models based Anomaly Detection on real world"
thumbnail: "../files/projects/advis.png"
date: 2026-04-14
year: 2026
project_type: "Deployment Project"
status: "Development"
research_area:
  - Computer Vision
  - Edge AI
  - Anomaly Detection
  - Industrial Safety

technologies:
  - Python
  - Edge Devides
  - PyTorch
  - OpenCV
  - VAE-GAN models
  - ROS2
  - Zenoh messages
codeurl: "https://github.com/rashidrao-pk/advis_distrimuse_unito_SR"

author_profile: true
toc: true
toc_sticky: true
toc_label: "On this page"
toc_icon: "robot"
---

**ADVIS-SR** is a real-time anomaly detection and visual intelligence system developed for the **DistriMuSe Use Case 3 — Safe Interaction with Robots**.

<center>
<img src="/files/projects/advis.png">
</center>


<a href="https://github.com/rashidrao-pk/advis_distrimuse_unito_SR" target="_blank" class="custom-btn btn-code">GitHub Repo</a>

---

## Project Summary

The project is built for the activities in use-case of the EU project [**_DistriMuSe_**](https://cordis.europa.eu/project/id/101139769) focuses on monitoring industrial safety zones in collaborative robotics environments. It uses **VAE/VAE-GAN models** to learn normal visual patterns and detect unexpected or unsafe conditions through reconstruction-based anomaly scoring.

The system is designed for real-time deployment with:

- ROS2 image streams
- Safety-area-specific models
- Threshold calibration
- GUI-based inference
- RuleX-compatible message publishing

# My Contributions

## Project Deliverables:

Contributed to deliverables:

- [**D5.3** Results of the first evaluation and stage 2 feedback](https://distrimuse.eu/wp-content/uploads/2026/06/D5.3_DistriMuSe_v1.01.pdf):
  - Section: Unexpected situations detection and localization by UniTO and RULEX ([section 5.1.2.4 of D5.3](https://distrimuse.eu/wp-content/uploads/2026/06/D5.3_DistriMuSe_v1.01.pdf))

- [**D3.6** First set of machine learning algorithms](https://distrimuse.eu/results/):
  - [Section 2.1.22 UNITO and RULEX](https://distrimuse.eu/results/)

- [**D3.5**  Privacy-preserving trustworthy ML solutions](https://distrimuse.eu/results/):
  - Section: Building Trustworthiness, Achieving Trustworthiness by Explainability and Explainable AI for Computer Vision with Robotics Focus by using [**ShapBPT**](https://rashidrao-pk.github.io//publication/p12_ShapBPT) for Robotics.
  - Section 2: Achieving Trustworthiness by System Quality Improvement -  2.2.2 Unexpected Condition Detector: 
- [**D4.6** Second release of the reference implementation for the distributed platform](https://distrimuse.eu/results/)
  - Section: SW-025 Unexpected Condition Detector -  for communication between application and worker nodes.

- [**D4.5** Updated requirements and design of the distributed platform,design and simulation tools](https://distrimuse.eu/wp-content/uploads/2026/06/DistriMuSe_Deliverable_D4.5_v1.0.pdf):
  -  _SW-025 - AI-powered anomaly detection system_

---

## Safety Areas

| Safety Area | Description |
|---|---|
| `RoboArm` | Robot arm zone |
| `ConvBelt` | Conveyor belt zone |
| `PLeft` | Left personnel safety area |
| `PRight` | Right personnel safety area |

---

## Pipeline

```text
Raw Video / ROS Stream
        ↓
Frame Extraction + Masking
        ↓
Safety Area Cropping / Resize
        ↓
VAE-GAN Training
        ↓
Threshold Calibration
        ↓
Live Inference / Alert Publishing

```

# Safety Monitoring Areas

The industrial scene is decomposed into multiple monitored safety zones.

| Safety Area | Description |
|---|---|
| RoboArm | Robotic arm operational zone |
| ConvBelt | Conveyor belt monitoring area |
| PLeft | Left personnel interaction area |
| PRight | Right personnel interaction area |

Each zone is processed independently using dedicated anomaly detection models.

---

# Deep Learning Models

## VAE / VAE-GAN Framework

The system uses Variational Autoencoder-based models trained only on normal operating conditions.

During inference:

- Normal patterns are reconstructed correctly
- Unexpected conditions generate larger reconstruction errors
- Reconstruction errors are converted into anomaly scores

### Core Components

- Encoder
- Latent representation
- Decoder
- Reconstruction loss
- Adversarial discriminator (VAE-GAN variant)

---

# Threshold Calibration

The framework supports threshold calibration across multiple anomaly scoring strategies.

### Features

- Multiple reconstruction-error metrics
- Quantile-based thresholding
- Local neighborhood tolerance
- Area-specific calibration

### Supported Analysis

- Threshold sweeping
- Quantile optimization
- Validation-based tuning

---

# Real-Time ROS2 Inference

The system supports live industrial deployment through ROS2.

### Supported Features

- ROS2 image subscriptions
- ROS bag replay
- Real-time GUI visualization
- Timeline inspection
- Live anomaly scoring

### Example ROS2 Topic

    /camera/back_view/image_raw

---

# Explainability and Visualization

The framework supports interpretable inspection of anomaly predictions.

### Visual Outputs

- Reconstruction maps
- Difference maps
- Heatmaps
- Timeline visualization
- Safety-area overlays

### Goal

Enable engineers and operators to understand:

- why the anomaly was triggered
- where the anomaly occurred
- whether the model decision is trustworthy

---

# GUI-Based Monitoring

<!-- <div align="center">
<img src="/files/projects/advis_gui.png" width="900">
<p><em>GUI-based industrial anomaly monitoring interface.</em></p>
</div> -->

The GUI interface supports:

- Real-time visualization
- Detector outputs
- Reconstruction inspection
- Timeline analysis
- Multi-zone monitoring

---

# Performance

## Experimental Results

| Metric | Result |
|---|---:|
| Accuracy | 99.61% |
| Recall | 95.1% |
| F1-score | 90.9% |
| Real-time Speed | ~12.5 FPS |

---

# Technologies

## AI & Vision

- PyTorch
- OpenCV
- NumPy
- torchvision

## Robotics & Streaming

- ROS2
- rclpy
- cv_bridge
- sensor_msgs
- Zenoh

## Environment & Deployment

- Pixi
- Python
- Linux
- Industrial ROS pipelines

---

# Research Contributions

### Main Contributions

- Real-time industrial anomaly detection
- Explainable AI integration
- Area-specific safety monitoring
- Threshold calibration framework
- ROS2 industrial deployment
- Human-centered trustworthy AI

---

# Related Publications

1. **Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI**

2. **ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study**

3. **ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees**

---

# Open Source

The full project implementation is publicly available on GitHub.

<a href="https://github.com/rashidrao-pk/advis_distrimuse_unito_SR"
   target="_blank"
   rel="noopener noreferrer"
   class="custom-btn btn-code">
   View Repository
</a>

---

# Future Directions

Potential future improvements include:

- Vision-Language integration
- Multimodal anomaly detection
- Explainable robotics systems
- Edge-AI deployment
- Foundation models for industrial monitoring
- Human feedback integration

---

# Citation

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@misc{rashid2026advis,
  title={ADVIS-DistriMuSe-SR: Real-Time Anomaly Detection for Safe Human-Robot Interaction},
  author={Rashid, Muhammad, Amparore, Elvio},
  year={2026},
  howpublished={GitHub Repository},
  url={https://github.com/rashidrao-pk/advis_distrimuse_unito_SR}
}</code></pre>
</div>