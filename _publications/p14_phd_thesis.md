---
title: "Improving Trust in Safety-Critical AI Systems: Explainable AI and Anomaly Detection Frameworks for Human Safety in Smart Industries"

collection: publications
category: thesis
permalink: /publication/p14_phd_thesis/

excerpt: "PhD thesis on explainable AI, Shapley-based visual explanations, and anomaly detection frameworks for safety-critical industrial systems."

research_area:
  - Explainable AI
  - Anomaly Detection
  - Computer Vision
  - Industrial AI

subcategory:
  - Explainable Computer Vision
  - Shapley-based Explanations
  - Visual Anomaly Detection
  - Industrial Safety Systems

tags:
  - Explainable AI
  - XAI
  - SHAP
  - LIME
  - ShapBPT
  - anomaly detection
  - computer vision
  - industrial AI
  - VAE-GAN
  - Industry 4.0

date: 2026-04-28

venue: "University of Torino"
location: "Turin, Italy"

thesisurl: "https://iris.unito.it/handle/2318/2137472"
conference: "https://iris.unito.it/handle/2318/2137472"

codeurl: "https://github.com/rashidrao-pk"

thumbnail: "/files/papers_data/shapbpt_ad/Fig1_explain_bpt-Hazelnut.png"

author_profile: true

toc: true
toc_label: "Thesis Contents"
toc_icon: "book"

classes: wide
---

<div style="margin-top:1.5rem; margin-bottom:2rem;">

<strong>Ph.D. in Computer Science</strong><br>
University of Torino, Italy<br><br>

<strong>Ph.D. Candidate:</strong> Muhammad Rashid<br>
<strong>Academic Supervisor:</strong> [Prof. Elvio G. Amparore](https://informatica.unito.it/do/docenti.pl/Alias?elviogilberto.amparore#tab-profilo)<br>
<strong>Industrial Supervisor:</strong> [Dr. Enrico Ferrari](https://www.rulex.ai/about-us/) ([RuleX Innovation Labs](https://www.rulex.ai/))<br>
<strong>Mobility Supervisor:</strong> [Prof. Jesus Garrido](https://valeria.ugr.es/author/jesus-garrido/)<br>
<strong>Research Abroad:</strong> [ValeriaLab, University of Granada, Spain](https://valeria.ugr.es), to work on [EU Project DistriMuSe](https://valeria.ugr.es/project/distrimuse/)<br>
<strong>External Collaborations:</strong> [RuleX](https://www.rulex.ai/), [University of Granada](https://valeria.ugr.es/), [Smart Robotics](https://smart-robotics.io/), [Other EU Partners](https://distrimuse.eu/consortium/)
<strong>Defense Date:</strong> 28 April 2026

</div>

[📄 View Thesis on IRIS](https://iris.unito.it/handle/2318/2137472){: .btn .btn--primary}
[💻 GitHub Profile](https://github.com/rashidrao-pk){: .btn .btn--info}
[🎓 Publications](/publications/){: .btn .btn--success}
[🐍📦 Python Packages](https://pypi.org/user/mrashid/){: .btn .btn--success}

<div align="center">
<img src="/files/thesis/thesis_overview.svg" width="900">
<p><em>Overview of the thesis contributions and explainable AI framework.</em></p>
</div>

<div class="notice--info">
<h4>Chapters Overview</h4>

<ul>
<li><a href="#sec-chapter-2">Chapter 2 — LIME Stratified</a></li>
<li><a href="#sec-chapter-3">Chapter 3 — ShapBPT</a></li>
<li><a href="#sec-chapter-4">Chapter 4 — Explainable AD</a></li>
<li><a href="#sec-chapter-5">Chapter 5 — Synthetic Industrial Data</a></li>
<li><a href="#sec-chapter-6">Chapter 6 — Real Industrial Data</a></li>
</ul>
</div>


<div class="notice--primary">

### Thesis Statistics

- 📘 7 Chapters
- 📝 170+ Pages
- 📄 4 Research Publications
- 🧠 Explainable AI + Anomaly Detection
- 🏭 Industrial Safety Applications
- 🐍 Open-source Python Packages
- 🎓 University of Torino & RuleX Innovation Labs
- Applied AI research and Prototype tested in industry (Smart Robotics)
</div>


## Abstract

The growing use of deep learning systems in safety-critical applications, such as smart industries, collaborative robots environments, and healthcare, raises basic questions of trust, transparency, and accountability. While modern propositions have shown incredible predictive performance but their black-box nature of decision-making poses a challenge in applications where trust and readability are of paramount importance. This thesis focuses on the advancement in the field of Explainable Artificial Intelligence (XAI) through methodological contributions and applications in industry and safety-critical environments, especially the field of explainable anomaly detection.

First, the thesis focuses on the issue of instability of local surrogate explanations in LIME-Image. It presents a new sampling strategy called LIME Stratified. The proposed approach implements the unbiased stratified sampling with respect to the superpixel masks instead of the random perturbations, which are based on Monte Carlo sampling. By explicitly managing the distribution of the feature coalitions the proposed strategy lessens the variance in the synthetic neighborhood, improves the coverage of relevant feature combinations and gives explanations that are significantly more stable and faithful. Extensive empirical analysis shows state-of-the-art improvements over several common LIME, on ImageNet data sets using resnet CNN model. 

Second, the thesis presents ShapBPT, which is a hierarchical feature attribution algorithm that uses Binary Partition Trees and the Owen approximation of the Shapley value. By using the hierarchy of image regions, ShapBPT generates semantically meaningful attribution results with a more efficient use of computational budgets. Comprehensive experiments on convolutional and transformer-based architectures demonstrate that ShapBPT is better at localization accuracy and efficiency compared to existing cutting-edge attribution methods and thus can be applied on a large scale and in real time. 

Third, the thesis studies the dependability of anomaly detection systems by tightly integrating generative models and XAI techniques. Variational Autoencoder- Generative Adversarial Networks (VAE-GANs) are trained only on data without any defect to produce the pixel-level anomaly maps, which are explained through LIME and SHAP. By comparison of explanation maps and ground truth defect regions, the contributions of analyzing votes for anomalies to analyze and interpret those anomalies alert to detect reasons that are not correct. This study makes it clear how performance-only evaluation has limitations and drives the introduction of explanation-based validation as a necessary complementary aspect for trustworthy anomaly detection. 

Finally, a new zoned anomaly detection and visual intelligence system for industrial safety monitoring, called ADVIS, is introduced in this thesis. ADVIS combines area-specific VAE-GAN-based detectors,anomaly scoring and saliency-based explanations in order to produce accurate, interpretable, and real-time safety evaluations. Validation on realistic synthetic palletizing scenarios, like human-robot interaction data, highlights high precision and recall and provides interpretable outputs that can be acted on by the engineers and safety operators. Overall, this thesis makes methodical contributions to boost the robustness, faithfulness and practicality of XAI methods and verify their effectiveness in real industrial scenarios. The work concludes by identifying open challenges and future research directions, including multimodal explainability, integration of XAI with vision-language models, and scalable deployment of trustworthy AI in dynamic industrial environments.

# 1. Introduction {#sec-chap-1-introduction}

Artificial intelligence is increasingly used in industrial inspection, robotics, healthcare, and other safety-critical domains. Although deep learning models achieve strong predictive performance, their black-box nature limits trust, especially when their decisions affect human safety. In industrial settings, a correct prediction is not sufficient; engineers and operators also need to understand why a model raises an alarm.

This thesis addresses this gap by combining explainable computer vision with robust anomaly detection. The central objective is to build AI systems that are accurate, interpretable, and suitable for deployment in smart industrial environments.

---



## 1.1 Research Motivation {#sec-thesis-motivation}

Modern AI systems are widely used in industrial automation, robotics, and safety-critical applications. Despite their impressive performance, deep learning models often behave as opaque black boxes, making their decisions difficult to interpret.

<img src="https://rashidrao-pk.github.io/files/thesis/motivation.svg">

In industrial environments where humans and robots collaborate, understanding *why* a model predicts an anomaly is as important as the prediction itself. A reliable AI system must therefore be:

- Accurate
- Transparent
- Stable
- Explainable
- Trustworthy

This thesis aims to bridge the gap between high-performance AI and safe real-world deployment through explanation-driven validation and robust anomaly detection.


## 1.2 Research Questions {#sec-research-questions}

The thesis investigates the following research questions:

1. How can local explanation methods such as LIME be made more stable and reliable?

2. Can data-aware image partitioning improve Shapley-based visual explanations?

3. How can explainability be integrated into anomaly detection systems?

4. How can AI systems support safer human–robot collaboration in industrial environments?

5. How can explanation quality and trustworthiness be quantitatively evaluated?

## 1.3 Main Contributions {#sec-main-contributions}


<img src="https://rashidrao-pk.github.io/files/thesis/contributions.svg">

### 1.3.1 LIME Stratified

Introduced a stratified sampling strategy for LIME Image to improve neighborhood generation and reduce instability in perturbation-based explanations.

#### Contributions
- Reduced variance in explanations
- Improved feature attribution consistency
- Better regression neighborhood coverage

---

### 1.3.2. ShapBPT

Developed a hierarchical Shapley explanation framework using Binary Partition Trees (BPT) and recursive Owen values.

#### Contributions
- Data-aware hierarchical explanations
- Improved object localization
- Faster convergence under constrained budgets
- Better semantic alignment with image regions

---

### 1.3.3. Explainable Anomaly Detection

Integrated XAI methods with VAE-GAN anomaly detection systems to validate whether models detect anomalies for the correct reasons.

#### Contributions
- Explanation-guided anomaly validation
- Localization analysis using IoU metrics
- Evaluation of trustworthy anomaly detection

---

### 1.3.4. ADVIS Framework

Designed a real-time anomaly detection and visual intelligence system for industrial safety monitoring.

#### Contributions
- Safety-area decomposition
- Area-specific VAE-GAN detectors
- Adaptive threshold calibration
- Real-time explainable inference

---

## 1.4 Impact on Industrial EU Projects

Apart from publications, the thesis and developed tools contribute to a use case (UC3-safe interaction and cooperation with robots) of the European Union project Distributed Multi-Sensor systems for human safety and health (DistriMuSe) The main goal of UC3 was to make machines intelligent enough and allowing them to
keep collaborating with humans instead of putting them in caged cells. By this, ensuring the human safety, the throughput of the system can be increased in smart
industries.

Chapter 5 is used for Demonstrator 3.1 for Pilot 3 - University of Granada (P3-GRA) of UC3 in collaboration with ValeriaLAB. Figure 1.3 shows the three
use-cases of the project where this thesis contributes to the UC3 - Safe interaction and cooperation with robots.
Chapter 6 of this thesis is used in the Demonstrator 3.2 for Pilot 3 - BEST (P3-BEST) of UC3 in collaboration with the Smart Robotics industry. Furthermore, Chapter 3 (SHapley Additive exPlanations using Binary Partition Trees
(ShapBPT)) will be used in the last cycle of DistriMuSe to make AD systems trustworthy and transparent.

# Thesis Organization {#sec-thesis-organization}

| Chapter | Description |
|---|---|
| Chapter 1 | Introduction and research motivation |
| Chapter 2 | Improving LIME explanations using stratified sampling |
| Chapter 3 | ShapBPT: Data-aware hierarchical Shapley explanations |
| Chapter 4 | Explainable anomaly detection using VAE-GAN |
| Chapter 5 | Industrial anomaly detection using synthetic data |
| Chapter 6 | Industrial anomaly detection using real data |
| Chapter 7 | Conclusions and future directions |

---

# Chapter 2 — LIME Stratified {#sec-chapter-2}

This chapter studies instability in LIME Image explanations caused by Monte Carlo neighborhood sampling.

A new stratified sampling strategy is introduced to ensure balanced coverage of perturbation masks and improve the stability of local surrogate models.

### Key Ideas
- Stratified neighborhood generation
- Reduced variance in explanations
- Better regression fitting
- Improved explanation consistency

### Publication
**Using Stratified Sampling to Improve LIME Image Explanations**  
AAAI Conference on Artificial Intelligence (AAAI 2024)

---

# Chapter 3 — ShapBPT {#sec-chapter-3}

This chapter introduces ShapBPT, a hierarchical explanation framework that combines Binary Partition Trees (BPT) with recursive Owen-Shapley values.

Unlike traditional grid-based SHAP approaches, ShapBPT generates explanations aligned with image morphology and semantic regions.

### Key Ideas
- Binary Partition Trees
- Recursive Owen values
- Data-aware coalition structures
- Adaptive evaluation budget splitting

### Publication
**ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees**  
AAAI Conference on Artificial Intelligence (AAAI 2026)

---

# Chapter 4 — Explainable Anomaly Detection {#sec-chapter-4}

This chapter investigates how explainability methods can validate anomaly detection systems.

VAE-GAN models are combined with LIME and SHAP explanations to analyze whether anomaly predictions correspond to meaningful defect regions.

### Key Ideas
- VAE-GAN anomaly detection
- Reconstruction-based explanations
- IoU-based explanation evaluation
- Trustworthiness analysis

### Publication
**Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI**  
World Conference on Explainable Artificial Intelligence (XAI 2024)

---

# Chapter 5 — Industrial Safety with Synthetic Data {#sec-chapter-5}

This chapter presents ADVIS, an industrial anomaly detection framework developed for human safety in smart manufacturing environments.

The framework uses synthetic palletizing workflows and safety-area decomposition for localized anomaly monitoring.

### Key Ideas
- Safety-area zoning
- Area-specific detectors
- Threshold calibration
- Real-time industrial inference

---

# Chapter 6 — Industrial Safety with Real Data {#sec-chapter-6}

This chapter extends the ADVIS framework to real industrial environments and evaluates robustness under practical operating conditions.

### Key Ideas
- Real-world anomaly detection
- Annotation refinement
- Industrial deployment challenges
- Real-time safety monitoring

---

# Publications {#sec-publications}


1. **ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study**

  QualITA Workshop,  ICPE 2026 (ACM), 2026. [See details here](https://rashidrao-pk.github.io//publication/p13_ShapBPT_AD)

2. **ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees** 
  Rashid, Muhammad, Elvio G. Amparore, Enrico Ferrari, and Damiano Verda.
  ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees, Proceedings of the AAAI Conference on Artificial Intelligence (https://doi.org/10.1609/aaai.v40i30.39699). - [See details here](https://rashidrao-pk.github.io//publication/p12_ShapBPT)

3. **Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI** 
  Rashid, Muhammad, Elvio Amparore, Enrico Ferrari, and Damiano Verda.
  Can I trust my anomaly detection system? A case study based on explainable AI presented at Main Technical Track of XAI-World conference (Valletta, Malta) and is published as World Conference on Explainable Artificial Intelligence, pp. 243-254. Cham: Springer Nature Switzerland, 2024 (https://doi.org/10.1007/978-3-031-63803-9_13). - [See details here](https://rashidrao-pk.github.io//publication/p10_anomaly_detection_xai)

4. **Using Stratified Sampling to Improve LIME Image Explanations**
  - <b>Rashid, Muhammad</b>, Elvio G. Amparore, Enrico Ferrari, and Damiano Verda. Using stratified sampling to improve lime image explanations presented at Main Technical Track of AAAI-24 (Vancouver, Canada) and published In Proceedings of the **AAAI** Conference on Artificial Intelligence, vol. 38, no. 13, pp. 14785-14792. 2024 (https://doi.org/10.1609/aaai.v38i13.29397). [See details here](https://rashidrao-pk.github.io//publication/p9_lime_stratified)

---

# Open Source Contributions {#sec-open-source}

| Project | Link |
|---|---|
| LIME Stratified | [https://github.com/rashidrao-pk/**_lime_stratified_**](https://github.com/rashidrao-pk/lime_stratified) |
| LIME Stratified Experiments | [https://github.com/rashidrao-pk/**_lime-stratified-examples_**](https://github.com/rashidrao-pk/lime-stratified-examples) |
| ShapBPT | [https://github.com/amparore/**_shap_bpt_**](https://github.com/amparore/shap_bpt) |
| ShapBPT Experiments | [https://github.com/rashidrao-pk/**_shap_bpt_tests_**](https://github.com/rashidrao-pk/shap_bpt_tests) |
| Explainable AD | [https://github.com/rashidrao-pk/**_anomaly_detection_trust_case_study_**](https://github.com/rashidrao-pk/anomaly_detection_trust_case_study) |
| Explainable AD with ShapBPT | [https://github.com/rashidrao-pk/**_XAD_**](https://github.com/rashidrao-pk/XAD) |

Python Packages:

| Project | Package Link |
|---|---|
| LIME Stratified | [https://pypi.org/project/lime-stratified/](https://pypi.org/project/lime-stratified/) |
| ShapBPT | [https://pypi.org/project/shap-bpt/](https://pypi.org/project/shap-bpt/) |


The full set of open-source contributions, including demos, and models, are available on [GitHub](https://github.com/rashidrao-pk) and 🤗[Hugging Face](https://huggingface.co/rashidrao).

---

# Additional Research Contributions {#sec-additional-contributions}

Alongside the main contributions of this thesis, additional research activities were carried out in related domains including edge AI, cybersecurity, and medical imaging. These works demonstrate the broader applicability of explainable and efficient AI systems across multiple real-world scenarios.

## AI on Edge Devices

This work focused on optimizing deep learning models for deployment on resource-constrained embedded systems such as Raspberry Pi and mobile devices.

### Contributions
- Evaluated quantization techniques for lightweight deployment
- Benchmarked MobileNet, ResNet50, EfficientNet, and VGG16
- Tested on CIFAR-10, CIFAR-100, and MNIST datasets
- Explored transfer learning for efficient edge inference

### Technologies
- TensorFlow Lite
- PyTorch
- Raspberry Pi
- Mobile AI Deployment

---

## Explainable Intrusion Detection Systems

Developed lightweight and explainable intrusion detection frameworks for cybersecurity applications.

### Contributions
- Proposed NF2SPEC for converting network flows into spectrogram representations
- Developed lightweight CNN-based intrusion detection models
- Integrated Grad-CAM explanations for interpretability
- Evaluated on the CIC-IDS2017 dataset

### Research Focus
- Explainable cybersecurity
- Edge-device deployment
- Lightweight deep learning
- Network anomaly detection

---

## Medical Image Segmentation

Investigated lightweight segmentation architectures for cardiac MRI analysis.

### Contributions
- Developed an optimized U-Net framework for left ventricle segmentation
- Improved preprocessing using histogram equalization and contrast enhancement
- Reduced encoder–decoder complexity while maintaining high accuracy
- Achieved strong segmentation precision on LVOT MRI images

### Research Focus
- Medical imaging
- Semantic segmentation
- Cardiac MRI analysis
- Lightweight healthcare AI

---


# Citation {#sec-citation}

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@phdthesis{rashid2026trustworthyai,
  title={Improving Trust in Safety-Critical AI Systems: Explainable AI and Anomaly Detection Frameworks for Human Safety in Smart Industries},
  school    = {University of Torino},
  type      = {PhD Thesis},
  author    = {Rashid, Muhammad and Amparore, Elvio G.},
  year      = {2026},
  publisher = {IRIS},
  url       = {https://iris.unito.it/handle/2318/2137472?mode=full}
}</code></pre>
</div>