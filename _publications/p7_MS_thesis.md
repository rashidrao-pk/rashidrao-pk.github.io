---
title: "Object Detection and Classification Based on Feature Fusion and Deep Convolutional Neural Network"

collection: publications
category: thesis
permalink: /publication/p7_MS_thesis/

excerpt: "Master’s thesis on object detection and classification using deep convolutional neural networks, SIFT point features, feature fusion, and entropy-based feature selection."

research_area:
  - Computer Vision
  - Deep Learning

subcategory:
  - Object Detection
  - Object Classification
  - Feature Fusion
  - Deep CNN

tags:
  - computer vision
  - object detection
  - object classification
  - deep learning
  - CNN
  - SIFT
  - feature fusion
  - AlexNet
  - VGG-19
  - ensemble classifier

date: 2019-02-20

venue: "COMSATS University Islamabad, Wah Campus"
location: "Wah Cantt, Pakistan"

# pdfurl: "/files/thesis/Rashid_Thesis_Final_20-02-2019.pdf"
# codeurl: "https://github.com/rashidrao-pk"
thumbnail: "../files/thesis/ms_thesis.jpg"

author_profile: true

toc: true
toc_label: "Thesis Contents"
toc_icon: "book"

classes: wide
---

<div style="margin-top:1.5rem; margin-bottom:2rem;">

<strong>Master of Science in Computer Science</strong><br>
COMSATS University Islamabad, Wah Campus, Pakistan<br><br>

<strong>Candidate:</strong> Muhammad Rashid<br>
<strong>Supervisor:</strong> [Dr. Muhammad Sharif](https://orcid.org/0000-0002-1355-2168)<br>
<strong>Department:</strong> Computer Science<br>

</div>

<!-- [📄 Download Thesis PDF](/files/thesis/Rashid_Thesis_Final_20-02-2019.pdf){: .btn .btn--primary} -->
[💻 GitHub Profile](https://github.com/rashidrao-pk){: .btn .btn--info}
[🎓 Publications](/publications/){: .btn .btn--success}

<div class="notice--info">
<h4>Thesis Overview</h4>

<ul>
<li><a href="#sec-abstract">Abstract</a></li>
<li><a href="#sec-introduction">Introduction</a></li>
<li><a href="#sec-motivation">Research Motivation</a></li>
<li><a href="#sec-problem">Problem Statement</a></li>
<li><a href="#sec-contributions">Main Contributions</a></li>
<li><a href="#sec-methodology">Proposed Methodology</a></li>
<li><a href="#sec-datasets">Datasets</a></li>
<li><a href="#sec-results">Experimental Results</a></li>
<li><a href="#sec-conclusion">Conclusion</a></li>
<li><a href="#sec-citation">Citation</a></li>
</ul>
</div>

<div class="notice--primary">

## Thesis Statistics

- 📘 5 Main Chapters
- 🧠 Deep CNN + Handcrafted Feature Fusion
- 🔍 Object Detection and Classification
- 🧩 SIFT Point Features
- 🖼️ AlexNet and VGG-19 Deep Features
- 📉 Rényi Entropy-Based Feature Selection
- 🧪 Evaluated on 5 Public Datasets
- 🏆 Reported up to 100% classification accuracy on the Birds dataset

</div>



## Abstract {#sec-abstract}

Object detection and classification are challenging tasks in computer vision and machine learning due to their broad applications in video surveillance, pedestrian detection, object recognition, and image understanding. This thesis proposes a deep learning-based object detection and classification framework that combines handcrafted SIFT point features with deep convolutional neural network features.

The proposed method first applies an improved saliency-based segmentation method to identify prominent object regions. SIFT point features are extracted from the segmented object regions, while deep CNN features are extracted from two pre-trained convolutional neural networks: AlexNet and VGG-19. Feature activations are obtained from fully connected layers and refined using max pooling to reduce noise and redundancy.

To improve feature compactness and classification performance, a Rényi entropy-controlled feature selection method is applied. The selected SIFT and deep CNN features are fused using a serial feature fusion strategy and passed to an ensemble classifier for final classification.

The proposed method was evaluated on five publicly available datasets: Caltech-101, Pascal 3D+, Barkley 3D, Birds, and Butterflies. The reported classification accuracies were 93.8%, 88.6%, 99.7%, 100%, and 98.0%, respectively.

---

## 1. Introduction {#sec-introduction}

Object detection and classification are central problems in computer vision. They aim to identify objects in images and assign them to their correct categories. These tasks are widely used in surveillance, pedestrian detection, target recognition, face detection, optical character recognition, and automated image analysis.

Traditional object classification methods rely on handcrafted descriptors such as SIFT, HOG, SURF, texture, color, and shape features. Although these descriptors are useful, their performance may degrade under complex backgrounds, object similarity, illumination variations, and large intra-class variation.

Deep convolutional neural networks have significantly improved visual recognition performance by automatically learning hierarchical visual representations. However, a single CNN model may not capture all relevant local and global object characteristics. This thesis therefore investigates the fusion of handcrafted and deep CNN features for improved object detection and classification.

---

## Research Motivation {#sec-motivation}

The motivation of this thesis is to improve object classification accuracy by combining complementary visual features. Handcrafted features such as SIFT capture local keypoint information, while deep CNN models capture high-level semantic representations.

The thesis focuses on the following motivations:

- Improving classification performance under complex backgrounds
- Combining local handcrafted descriptors with deep CNN features
- Reducing redundant and noisy features
- Improving computational efficiency through feature selection
- Evaluating the proposed method on multiple public datasets

---

## Problem Statement {#sec-problem}

Object detection and classification systems face several challenges:

- Noise, distortion, and illumination variations can reduce classification accuracy.
- Irrelevant and redundant features increase computational cost.
- Feature selection is required to identify the most discriminative descriptors.
- Feature fusion is challenging when descriptors have different dimensions.
- Classification becomes harder when datasets contain many object classes and complex backgrounds.

This thesis addresses these challenges by proposing a feature fusion and feature selection framework based on SIFT features, AlexNet features, VGG-19 features, Rényi entropy-based feature selection, and ensemble classification.

---

## Main Contributions {#sec-contributions}

The main contributions of this thesis are:

1. An improved saliency-based preprocessing method for object region extraction.

2. Extraction of SIFT point features from segmented and mapped RGB object regions.

3. Extraction of deep CNN features from pre-trained AlexNet and VGG-19 models.

4. Application of max pooling to reduce noise in deep CNN feature vectors.

5. Use of Rényi entropy-controlled feature selection to select the most relevant features.

6. Serial fusion of selected SIFT and deep CNN features into a unified feature vector.

7. Classification using ensemble classifiers and comparison with SVM, KNN, decision tree, and other supervised classifiers.

---



## Proposed Methodology {#sec-methodology}

The proposed framework follows a multi-stage object detection and classification pipeline.

### 1. Improved Saliency-Based Segmentation

<center>
<img src="/files/thesis/thesis_3.jpg" width="70%">
</center>



The input image is first transformed into LAB color space. An improved saliency method is then applied to segment the most prominent object region from the image. The segmented object is mapped back to RGB space for feature extraction.


### 2. SIFT Point Feature Extraction

<center>
<img src="/files/thesis/ms_sift.jpg"  width="90%">
</center>


SIFT features are extracted from the segmented object region. These features capture local keypoints and are robust to scale, rotation, and local appearance changes.

ms_alexms
### 3. Deep CNN Feature Extraction

Two pre-trained CNN models are used:

- AlexNet
- VGG-19

<center>
<img src="/files/thesis/ms_alexnet.jpg" width="90%">

<img src="/files/thesis/ms_vgg.jpg" width="90%">

</center>

Deep features are extracted from fully connected layers. Each model provides a high-dimensional feature representation, which is later refined using max pooling.

### 4. Max Pooling

Max pooling is applied to reduce noise and compact the extracted CNN feature vectors.

### 5. Rényi Entropy-Based Feature Selection

Rényi entropy is used to measure the importance and randomness of extracted features. The most informative features are selected from each feature space.

### 6. Feature Fusion

Selected AlexNet, VGG-19, and SIFT features are fused using a serial feature fusion strategy.
<center>
<img src="/files/thesis/ms_fusion.jpg" width="90%">
</center>
### 7. Classification

The fused feature vector is passed to supervised classifiers. The best performance is reported using an ensemble classifier.

---

## Datasets {#sec-datasets}

The proposed method was evaluated on five public datasets:

| Dataset | Classes | Total Images |
|---|---:|---:|
| Caltech-101 | 101 | 9144 |
| Pascal 3D+ | 12 | 22394 |
| Barkley 3D | 10 | 6604 |
| Birds | 6 | 600 |
| Butterflies | 7 | 619 |

---

## Experimental Results {#sec-results}

The proposed method achieved strong classification performance across all evaluated datasets.

| Dataset | Best Reported Accuracy |
|---|---:|
| Caltech-101 | 93.8% |
| Pascal 3D+ | 88.6% |
| Barkley 3D | 99.7% |
| Birds | 100% |
| Butterflies | 98.0% |

The results show that fusing handcrafted SIFT features with deep CNN features improves classification performance compared to using individual feature descriptors alone.



---
---

## Publications from this Thesis {#sec-publications}

The research conducted during this Master’s thesis resulted in the following peer-reviewed journal publications.

---

### 1. Object Detection and Classification: A Joint Selection and Fusion Strategy of Deep Convolutional Neural Network and SIFT Point Features

<center>
<img src="/files/thesis/ms_thesis.jpg" width="90%">
</center>


**Published in:** Multimedia Tools and Applications (Springer), 2018

This work proposed a hybrid object detection and classification framework that combines deep CNN representations with handcrafted SIFT point features. The method introduced a joint feature selection and feature fusion strategy to improve classification performance across multiple benchmark datasets.

### Main Contributions
- Hybrid CNN + SIFT feature extraction
- Joint feature selection and fusion
- Improved object classification accuracy
- Integration of handcrafted and deep representations

### Keywords
`CNN` `SIFT` `Feature Fusion` `Object Detection` `Computer Vision`

<center>
<img src="/files/thesis/thesis_ms_2.jpg" width="90%">
</center>


[📄 View Publication](/publication/p1_ObDC/){: .btn .btn--success}

---

### 2. A Sustainable Deep Learning Framework for Object Recognition Using Multi-Layers Deep Features Fusion and Selection

**Published in:** Sustainability (MDPI), 2020

This work proposed a sustainable deep learning framework for object recognition using transfer learning, multi-layer deep feature extraction, feature fusion, and entropy-controlled feature selection.

The framework combined VGG19 and InceptionV3 deep representations using Parallel Maximum Covariance (PMC) fusion and selected discriminative features through Multi Logistic Regression controlled Entropy-Variances (MRcEV).

### Main Contributions
- Transfer learning using VGG19 and InceptionV3
- Multi-layer deep feature extraction
- Parallel Maximum Covariance (PMC) fusion
- MRcEV feature selection
- Evaluation on multiple object recognition datasets

### Datasets
- Caltech-101
- Birds
- Butterflies
- CIFAR-100

### Keywords
`Transfer Learning` `VGG19` `InceptionV3` `Feature Selection` `Object Recognition`

[📄 View Publication](/publication/p3_sustainable_OD/){: .btn .btn--success}

---

## Conclusion {#sec-conclusion}

This thesis proposed an object detection and classification framework based on feature fusion and deep convolutional neural networks. The method integrates improved saliency-based segmentation, SIFT point features, AlexNet and VGG-19 deep features, Rényi entropy-based feature selection, and ensemble classification.

Experimental results on five public datasets demonstrate that the proposed approach improves classification accuracy and provides competitive performance compared to existing techniques. The work highlights the value of combining handcrafted local descriptors with deep CNN representations for robust object classification.

Future work may extend this approach to real-time object detection, multiple object classification, and more advanced deep learning architectures.

---

## Citation {#sec-citation}

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@mastersthesis{rashid2019objectdetection,
  title  = {Object Detection and Classification Based on Feature Fusion and Deep Convolutional Neural Network},
  author = {Rashid, Muhammad},
  school = {COMSATS University Islamabad, Wah Campus},
  type   = {MS Thesis},
  year   = {2019}
}</code></pre>
</div>