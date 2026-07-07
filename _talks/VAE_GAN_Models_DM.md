---
title: "Unexpected Condition Detector for Industrial Safety using Deep Generative Models"
collection: talks
type: "Oral Presentation - Consortium Meeting"
permalink: /talks/VAE_GAN_Models_DM
venue: "Universidad de Vigo"
date: 2025-11-13
location: "Vigo, Spain 🇪🇸"
coordinates: [42.2399, -8.6834]

conference: "Project Consortium Meeting - DistriMuSe EU Project"
session: "Use Case 3: Safe Interaction with Robots"

excerpt: "A consortium presentation on VAE-GAN based unexpected condition detection for industrial safety monitoring in robotic environments, developed within UC3 of the DistriMuSe EU project."
---

## 🧠 Overview

This talk presented our work on an **Unexpected Condition Detector** for **industrial safety monitoring** in robotic environments, developed within **Use Case 3: Safe Interaction with Robots** of the **DistriMuSe EU Project**.

The goal is to detect deviations from expected operating conditions in safety-critical robotic workspaces, where unexpected situations are difficult to define exhaustively and collect in advance.

Instead of relying on fully labelled abnormal data, the system is trained mainly on **normal operating conditions** and learns to identify unexpected situations through reconstruction-based anomaly detection.

---

## 🎯 Motivation

In industrial robotic environments, unsafe or unexpected situations can occur in many different forms, such as:

- a person entering a restricted safety area,
- an object falling into the workspace,
- abnormal interaction near the robot arm or conveyor belt,
- deviations from expected human-robot collaboration patterns.

These situations are difficult to enumerate completely. Therefore, we use a **semi-supervised anomaly detection strategy**, where the model learns normal behaviour and detects deviations as unexpected conditions.

---

## ⚙️ Method: VAE-GAN Based Detector

The proposed detector is based on a **Variational Autoencoder with Generative Adversarial Network components**, referred to as a **VAE-GAN detector**.

The system learns to reconstruct normal visual patterns. During inference, unexpected situations produce higher reconstruction errors because they do not match the learned normal distribution.

The detector combines:

- **VAE** for learning a probabilistic latent representation,
- **Autoencoder reconstruction** for measuring visual deviations,
- **GAN-based discriminator** to improve reconstruction realism,
- **difference maps** to localize anomalous regions.

---

## 🏭 UC3 Safety Areas

The input frame is divided into multiple safety-relevant regions to avoid learning unrelated correlations across the scene.

The main monitored safety areas are:

- **Robot Arm**
- **Conveyor Belt**
- **Pallet Left**
- **Pallet Right**

A separate detector is trained for each safety area, allowing the system to produce both image-level and region-level anomaly decisions.

---

## 🔄 Pipeline

The complete pipeline consists of four main stages:

### 1. Training AI Detectors

Frames from normal operations are used to train one VAE-GAN detector per safety area.

Data augmentation is applied to introduce small variations and make the detector more robust to normal visual changes.

### 2. Threshold Calibration

After training, reconstruction errors are computed on validation data and calibrated using multiple difference scoring strategies.

The evaluation included **53 difference scoring methods**, including pixel-wise, Euclidean, SSIM-based, and spatial-tolerance based scoring.

### 3. Inference

During inference, each incoming frame is divided into safety areas and processed by the corresponding detector.

The system computes:

- reconstruction output,
- difference map,
- anomaly score,
- normalized score,
- final normal/unexpected decision.

A normalized score below 1.0 is treated as normal, while a score above 1.0 indicates an unexpected condition.

### 4. Results and Visualization

The system produces both numerical anomaly scores and visual difference maps, helping identify where unexpected behaviour occurs inside the safety area.

---

## 📊 Experimental Results

The detector was evaluated on **Demo 3.2 synthetic data** and **Demo 3.3 real Smart Robotics data**.

Reported performance:

- **Accuracy:** 99.61%
- **F1-score:** 90.9%
- **Precision:** 87.4%
- **Recall:** 95.1%
- **Inference speed:** approximately 12 FPS

These results show that the system can detect unexpected conditions in real robotic environments while maintaining real-time inference capability.

---

## 🧪 Use Case Demonstrations

The talk included examples from the UC3 scenario, including:

- normal pallet interaction,
- unexpected person entering a restricted safety area,
- fallen object or unexpected item near the working area,
- correct and incorrect detections across safety regions.

These demonstrations highlight how the detector supports safety monitoring by identifying deviations from expected robotic workspace conditions.

---

<!-- ## 🖼️ Poster / Visual Summary -->

<!-- <img src="../files/talks/Vigo_Poster_Presentation_UniTo_RuleX.png"> -->

---

## 🎯 Impact

This work contributes to the DistriMuSe UC3 objective of improving **human safety in smart industrial environments** through AI-powered monitoring.

The proposed approach shows that deep generative models can be used to detect unexpected conditions even when abnormal examples are limited or unavailable during training.

> The key idea is to learn what is normal, then detect what deviates from it.

---

## 🏷️ Keywords

Anomaly Detection · VAE-GAN · Deep Generative Models · Industrial Safety · Smart Robotics · Human-Robot Interaction · DistriMuSe · Explainable AI · Safety Monitoring
