---
title: "ADVIS-UniGra: RGB Anomaly Detection for Safe Human–Robot Collaboration"
permalink: /projects/advis-unigra/

# High-level classification
category: "EU Projects 🇪🇺"
subcategory: "Industrial AI"

# Status
status: "Prototype Delievered"
project_type: "Research Application"

project_group: "advis"

date: 2026-04-14
year: 2026

excerpt: "RGB-based anomaly detection application for safety monitoring in collaborative robotics environments using synthetic industrial data."

thumbnail: "../files/projects/advis/workflow.svg"

research_area:
  - Computer Vision
  - Anomaly Detection
  - Explainable AI

application_domain:
  - Human-Robot Collaboration
  - Industrial Safety
  - Smart Manufacturing

techniques:
  - VAE-GAN
  - Explainable AI
  - Threshold Calibration
  - One-Class Learning

technologies:
  - Python
  - PyTorch
  - OpenCV
  - ROS2
  - Zenoh

datasets:
  - DistriMuSe Synthetic
  - ADVIS-UniGra

partners:
  - University of Turin
  - University of Granada
  - DistriMuSe Consortium

funding:
  - Horizon Europe
  - DistriMuSe

codeurl: "https://github.com/rashidrao-pk/advis_distrimuse_unito"

author_profile: true
toc: true
toc_sticky: true
toc_label: "On this page"
toc_icon: "robot"
---

**ADVIS-UniGra (Anomaly Detection and Visual Intelligence System)** is an RGB-based anomaly detection framework developed for monitoring safety-critical events in collaborative robotics environments.

The framework was developed as a validation application on top of the synthetic industrial environment created within the European DistriMuSe project. The objective is to automatically identify unsafe situations, unexpected human presence, and abnormal operating conditions that may affect safe human–robot collaboration.

<center>
<img src="/files/projects/advis/workflow.svg">
</center>

<br>

<a href="https://github.com/rashidrao-pk/advis_distrimuse_unito" target="_blank" class="custom-btn btn-code">GitHub Repository</a>
<a href="https://zenodo.org/records/18742241" target="_blank" srel="noopener noreferrer" class="custom-btn btn-dataset">Generated Dataset</a>

---

# Project Overview

Modern collaborative robotics environments require continuous monitoring to ensure that humans and robots can safely share the same workspace.

Traditional rule-based systems struggle when unexpected situations occur. ADVIS addresses this challenge using anomaly detection techniques that learn normal operating conditions and automatically identify deviations from expected behavior.

The framework focuses on:

- Human safety monitoring
- Collaborative robotics
- Industrial palletizing environments
- One-class anomaly detection
- Explainable AI for anomaly analysis
- Real-time industrial deployment

---

# Background

The work was carried out within the context of the European DistriMuSe project.

A synthetic collaborative robotics environment was developed by project partners to simulate industrial palletizing operations involving:

- Collaborative robots
- Human operators
- Conveyor belts
- Pallets
- Safety-critical zones

My contribution focused on developing the anomaly detection application and validating the usefulness of the generated synthetic data for industrial AI applications.

---

# My Contributions

## Project Deliverables:

Contributed to deliverables:

- [**D5.3** Results of the first evaluation and stage 2 feedback](https://distrimuse.eu/wp-content/uploads/2026/06/D5.3_DistriMuSe_v1.01.pdf):
  - Section: Unexpected situations detection and localization by UniTO and RULEX ([section 5.1.2.4 of D5.3](https://distrimuse.eu/wp-content/uploads/2026/06/D5.3_DistriMuSe_v1.01.pdf))

- [**D3.6** First set of machine learning algorithms](https://distrimuse.eu/results/):
  - [Section 2.1.22 UNITO and RULEX](https://distrimuse.eu/results/)

- [**D3.5** Privacy-preserving trustworthy ML solutions](https://distrimuse.eu/results/):
  - Section: Building Trustworthiness, Achieving Trustworthiness by Explainability and Explainable AI for Computer Vision with Robotics Focus by using [**ShapBPT**](https://rashidrao-pk.github.io//publication/p12_ShapBPT) for Robotics.
  - Section 2: Achieving Trustworthiness by System Quality Improvement - 2.2.2 Unexpected Condition Detector:
- [**D4.6** Second release of the reference implementation for the distributed platform](https://distrimuse.eu/results/)
  - Section: SW-025 Unexpected Condition Detector - for communication between application and worker nodes.

- [**D4.5** Updated requirements and design of the distributed platform,design and simulation tools](https://distrimuse.eu/wp-content/uploads/2026/06/DistriMuSe_Deliverable_D4.5_v1.0.pdf):
  - _SW-025 - AI-powered anomaly detection system_

## RGB-Based Anomaly Detection Application

Developed the complete RGB anomaly detection pipeline used as the validation use case.

## Dataset Evaluation and Feedback

Evaluated multiple releases of the synthetic dataset and provided feedback regarding:

- Visibility of anomalies
- Camera placement
- Safety-zone coverage
- Dataset suitability for anomaly detection
- Annotation quality
- Failure cases
- Difficult operating scenarios

## Safety-Area Monitoring

Designed a monitoring strategy based on operational safety areas instead of processing the entire image as a single scene.

<center>
<img src="/files/projects/advis/preprocessing.svg">
</center>

## Area-Specific Models

Implemented dedicated VAE-GAN models for each monitored safety area.

<center>
<img src="/files/projects/advis/VAE_GAN_Model.svg">
</center>

## Threshold Calibration

Developed an anomaly score calibration framework to improve robustness and reduce false alarms.

## Explainability

Generated anomaly maps and visual explanations to support operator understanding and trust.

---

# Safety Monitoring Areas

The industrial scene is decomposed into operationally meaningful safety zones.

| Safety Area | Description                   |
| ----------- | ----------------------------- |
| PLeft       | Left pallet area              |
| PRight      | Right pallet area             |
| RoboArm     | Robot operating zone          |
| ConvBelt    | Conveyor belt monitoring area |

Each area is monitored independently using a dedicated anomaly detection model.

Benefits include:

- Improved interpretability
- Localized anomaly reporting
- Easier debugging
- Better threshold calibration

---

# System Pipeline

```text
Input RGB Frame
↓
Safety Area Extraction
↓
Image Preprocessing
↓
128×128 Input Generation
↓
Area-Specific VAE-GAN
↓
Image Reconstruction
↓
Difference Map
↓
Anomaly Score
↓
Threshold Calibration
↓
Normal / Unexpected Decision
```

---

# Deep Learning Architecture

The anomaly detector is based on a Variational Autoencoder Generative Adversarial Network (VAE-GAN).

Each detector contains:

## Encoder

Transforms RGB images into a compact latent representation.

## Latent Space

Captures the normal operating characteristics of each safety area.

## Decoder

Reconstructs the original image from the latent representation.

## Discriminator

Improves reconstruction quality by encouraging realistic outputs during training.

---

# Training Strategy

The framework follows a one-class learning approach.

Training uses only:

- Normal operating conditions
- Safe robot behavior
- Authorized human activities

The model never sees anomalous events during training.

During inference:

- Normal patterns are reconstructed correctly.
- Abnormal patterns generate reconstruction errors.
- Reconstruction errors become anomaly scores.

---

# Threshold Calibration Framework

A major contribution of ADVIS is the calibration framework.

Instead of relying on a single anomaly score, multiple scoring functions are evaluated.

Supported approaches include:

- L1 distance
- L2 distance
- SSIM
- RAVI
- Tolerance-Aware Anomaly Score (TAAS)

The best-performing score is selected individually for each monitored area.

---

# Tolerance-Aware Anomaly Score (TAAS)

Industrial environments often contain:

- Small motions
- Blur
- Misalignment
- Reconstruction artifacts

Traditional pixel-wise scores may produce false alarms.

TAAS introduces local spatial tolerance by allowing pixels to match nearby reconstructed pixels rather than requiring exact correspondence.

Benefits:

- Reduced false positives
- Increased robustness
- Improved anomaly separation
- Better industrial applicability

---

# Explainable AI

The framework was designed with explainability in mind.

Generated outputs include:

## Reconstruction Maps

Visual comparison between original and reconstructed images.

## Difference Maps

Pixel-level residual information.

## Anomaly Maps

Heatmaps highlighting suspicious regions.

## Temporal Analysis

Evolution of anomaly scores over time.

<center>
<img src="/files/projects/advis/timeline.svg">
</center>

These visualizations help engineers understand:

- Where the anomaly occurred
- Why the alert was triggered
- Whether the detection is trustworthy

---

# Dataset Validation

The synthetic dataset itself was developed by project collaborators.

My role was to evaluate the dataset from the perspective of anomaly detection and provide continuous feedback during development.

Key validation questions included:

- Are anomalies visible?
- Are camera views informative?
- Can one-class models learn meaningful patterns?
- Are annotations reliable?
- Do anomaly maps align with human intuition?

The resulting experiments demonstrated that synthetic data can effectively support industrial anomaly detection research.

---

# Experimental Results

The final system achieved strong performance across monitored safety areas.

<center>
<img src="/files/projects/advis/sample_results.svg">
</center>

## Overall Performance

| Metric    |    Result |
| --------- | --------: |
| Accuracy  |    99.61% |
| Precision |     87.4% |
| Recall    |     95.1% |
| F1-score  |     90.9% |
| Runtime   | ~12.5 FPS |

---

# Area-Level Results

| Area    | Accuracy | Precision | Recall |    F1 |
| ------- | -------: | --------: | -----: | ----: |
| PLeft   |    99.6% |     94.5% |  93.9% | 94.2% |
| PRight  |    99.8% |     97.1% |  80.9% | 88.3% |
| RoboArm |    98.9% |     25.9% |  84.0% | 39.6% |
| Overall |    99.6% |     87.4% |  85.1% | 90.9% |

---

# Key Findings

- Synthetic industrial data can be effectively used for anomaly detection.
- Safety-area decomposition improves interpretability.
- Area-specific models outperform global detectors.
- Threshold calibration is essential.
- Explainable anomaly maps support trust and debugging.
- Real-time monitoring is feasible.

---

# Open Source

The complete implementation is publicly available.

<a href="https://github.com/rashidrao-pk/advis_distrimuse_unito"
target="_blank"
class="custom-btn btn-code">
View Repository
</a>

---

# Related Publication

## Simulation-Based Multimodal Dataset Creation for Industrial Collaborative Robotics. Application to RGB Anomaly Detection

José M. Herrera-Vera,
Muhammad Rashid,
Enrico Ferrari,
Eduardo Ros,
Elvio Amparore,
Jesús A. Garrido

---

# Related Research

This work builds upon previous research activities in explainable anomaly detection and trustworthy AI.

- Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI
- ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study
- ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees

---

# Future Directions

Potential future improvements include:

- RGB + LiDAR fusion
- Multimodal anomaly detection
- Vision-Language Models
- Sim-to-real transfer learning
- Foundation models for industrial monitoring
- Human-in-the-loop anomaly verification
- Edge AI deployment

---

# Citation

@misc{rashid2026advisunigra,
title={ADVIS-UniGra: RGB Anomaly Detection for Safe Human-Robot Collaboration},
author={Rashid, Muhammad and Herrera-Vera, Jose M. and Garrido, Jesus A. and Amparore, Elvio and Ferrari, Enrico},
year={2026},
howpublished={GitHub Repository},
url={https://github.com/rashidrao-pk/advis_distrimuse_unito}
}
