---
title: "AI on Edge Devices"
collection: projects
category: Research/Edge AI
permalink: /projects/ai-on-edge-devices/
excerpt: "Lightweight AI deployment on edge devices, including Raspberry Pi-based computer vision systems."
thumbnail: "../files/projects/edge_AI_thumb.png"
date: 2025-09-01
year: 2025
project_type: "Deployment Project"
status: "Completed"
research_area:
  - Edge AI
  - Computer Vision
  - Embedded AI
technologies:
  - Python
  - Raspberry Pi
  - TensorFlow Lite
  - OpenCV
codeurl: "https://github.com/rashidrao-pk/AI_on_Edge_Devices"

toc: true
toc_sticky: true
toc_label: "On this page"
---

This project investigates how deep learning models can be optimized and deployed
on **resource-constrained edge devices**, with a particular focus on
**TensorFlow Lite**, **post-training quantization**, and **Raspberry Pi-based inference**.

The objective is to move AI inference closer to the data source, reducing dependence
on cloud infrastructure while improving latency, privacy, and deployment flexibility.

<center>
<img src="/files/projects/edge_AI_thumb.png"
     alt="AI on Edge Devices — TensorFlow Lite and Raspberry Pi deployment"
     style="max-width: 650px; width: 100%;">
</center>

## Edge AI Pipeline

The project follows an end-to-end deployment workflow:

**Deep Learning Model → TensorFlow Lite → Quantization → Edge Device → On-Device Inference**

Models are first trained or fine-tuned using TensorFlow/Keras and then converted
to the **TensorFlow Lite (`.tflite`) format** for deployment on resource-constrained
hardware.

Several post-training quantization strategies are investigated:

- **INT8 / Integer Quantization**
- **Float16 Quantization**
- **Int16×8 Mixed-Precision Quantization**
- **Dynamic Range Quantization**
- **Dynamic Quantization with Float Fallback**

These techniques reduce model storage and computational requirements while attempting
to preserve predictive performance.

## Models and Datasets

The experiments cover both a custom CNN and established deep-learning architectures:

- Custom CNN
- MobileNetV2
- MobileNetV3
- ResNet50 / ResNet50V2
- EfficientNetB0
- VGG16

The models were evaluated across image-classification datasets including:

- CIFAR-100
- Flower Photos / Oxford Flowers
- Stanford Dogs
- Caltech-101

This makes it possible to study how optimization behaves across architectures with
different computational and memory requirements.

## Raspberry Pi Deployment

A major component of the project is moving beyond desktop benchmarking and executing
the optimized models on real edge hardware.

The quantized TensorFlow Lite models were deployed and evaluated on a
**Raspberry Pi 4 Model B**, with additional experiments targeting Android devices.

The deployment workflow evaluates:

- model size,
- classification accuracy,
- inference latency,
- memory requirements,
- and practical feasibility of on-device inference.

This provides a realistic assessment of the trade-off between model performance
and computational efficiency.

## Quantization Results

One representative experiment uses a custom CNN trained on CIFAR-100.

| Model                | Accuracy | Model Size |
| -------------------- | -------: | ---------: |
| Original             |   69.97% |   58.00 MB |
| Dynamic Quantization |   68.21% |   15.49 MB |
| Integer Quantization |   68.11% |   15.54 MB |
| Float16 Quantization |   67.20% |   30.83 MB |
| Int16×8 Quantization |   68.11% |   28.99 MB |

Dynamic quantization therefore reduced the model from **58 MB to 15.49 MB**
while retaining **68.21% accuracy**, illustrating the practical
accuracy–compression trade-off required for Edge AI deployment.

## Model Compression

The current implementation primarily investigates **post-training quantization (PTQ)**.

Additional compression techniques such as **network pruning**, knowledge distillation,
and quantization-aware training provide natural extensions for further reducing
computational and memory requirements.

## Why Edge AI?

Running inference directly on edge devices provides several practical advantages:

- **Lower latency** — inference occurs close to the sensor.
- **Reduced cloud dependency** — models can operate locally.
- **Improved privacy** — raw data does not necessarily need to leave the device.
- **Reduced bandwidth requirements** — only predictions or selected information
  need to be transmitted.
- **Deployment on low-cost hardware** — optimized models can run on devices such
  as Raspberry Pi.

## Applications

The resulting workflow can support applications including:

- Embedded computer vision
- Smart cameras
- Industrial IoT
- Robotics
- Environmental monitoring
- Agricultural vision systems
- Real-time image classification
- Low-cost intelligent sensing

## Technologies

**Python · TensorFlow · Keras · TensorFlow Lite · Raspberry Pi · OpenCV · Edge AI · IoT**

## Future Extensions

Future development can extend the pipeline toward:

- structured and unstructured **model pruning**,
- quantization-aware training,
- knowledge distillation,
- hardware-aware neural architecture optimization,
- real-time camera inference,
- TinyML platforms,
- and benchmarking energy consumption alongside latency and accuracy.
