---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

# Muhammad Rashid

**PhD in Computer Science**  
**Computer Vision | Explainable AI | Machine Learning | Visual Anomaly Detection**  
Turin, Italy

[Website](https://rashidrao-pk.github.io) · [Google Scholar](https://scholar.google.com/citations?user=F5u_Z5MAAAAJ) · [GitHub](https://github.com/rashidrao-pk) · [LinkedIn](https://www.linkedin.com/in/r4ssh1d)

---

# Professional Summary

I am a **Research Fellow in Computer Science at the University of Torino**
specializing in **Explainable Artificial Intelligence (XAI)**,
**Computer Vision**, and **Visual Anomaly Detection**, with a focus on
trustworthy and deployable AI for safety-critical and industrial environments.

My research spans explainable computer vision, Shapley-value-based attribution,
normal-only anomaly detection, generative models, industrial robotics safety,
and real-time AI systems. I have developed methods and systems including
**LIME Stratified**, **ShapBPT**, **XAD**, and **ADVIS**, with research
published at venues including **AAAI, ACM ICPE/QualITA, and XAI**.

Alongside my core research, I contribute to open-source machine learning
software and collaborate on ongoing research in time-series and video anomaly
detection, interpretable machine learning, cybersecurity, and trustworthy AI.

---

<!-- DEBUG: {{ site.data.research_metrics }} -->

<table class="research-metrics-table">
  <thead>
    <tr>
      <th>Source</th>
      <th>h-index</th>
      <th>Citations</th>
      <th>Publications</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Google Scholar</td>
      <td>{{ site.data.research_metrics.scholar_hindex }}</td>
      <td>{{ site.data.research_metrics.scholar_citations }}+</td>
      <td>{{ site.data.research_metrics.scholar_publications }}</td>
    </tr>

    <tr>
      <td>Scopus</td>
      <td>7</td>
      <td>539+</td>
      <td>11</td>
    </tr>

  </tbody>
</table>

<p class="metrics-updated">
  Last updated: {{ site.data.research_metrics.updated }}
</p>

➡️ [See details on Google Scholar](https://scholar.google.com/citations?user=F5u_Z5MAAAAJ)

---

# Research Areas

- Explainable Artificial Intelligence (XAI) and Trustworthy AI
- Explainable Computer Vision and Feature Attribution
- Visual and Video Anomaly Detection
- Time-Series Anomaly Detection
- Shapley-value-based Explanations
- Generative Models and One-Class Learning
- Industrial AI and Smart Manufacturing
- Human–Robot Collaboration and Robotics Safety
- Edge AI and Real-Time Machine Learning
- Multimodal and Vision-Language AI

---

# Experience

## Research Fellow

**University of Torino, Italy**  
**Nov 2025 – Present**

Working within the [**DistriMuSe**](https://distrimuse.eu/) EU project under the supervision of [Prof. Elvio G. Amparore](https://informatica.unito.it/do/docenti.pl/Alias?elviogilberto.amparore).

- Developing and validating visual anomaly detection systems for industrial robotics safety.
- Evaluating robustness across synthetic and real-world industrial environments.
- Developing RGB-based safety-area monitoring and normal-only anomaly detection pipelines.
- Supporting real-time integration using ROS2 and distributed robotics architectures.
- Investigating explainability, threshold calibration, and deployment of anomaly detection systems.

---

## Visiting Doctoral Researcher

**Valeria Lab, University of Granada, Spain**  
**Jan 2025 – Aug 2025**

- Completed an in-person research stay from **19 Jan 2025 to 19 Apr 2025**, followed by remote collaboration until **31 Aug 2025**.
- Worked on the [**DistriMuSe**](https://distrimuse.eu/) EU project, focusing on safe interaction with robots in smart industrial environments.
- Contributed to synthetic palletizing dataset development for Demo 3.2.
- Tested and validated the ADVIS anomaly detection framework on synthetic robotic scenarios.
- Supervisor: [Prof. Jesús Garrido](https://valeria.ugr.es/author/jesus-garrido/)

---

## Doctoral Researcher – R&D Projects

**University of Torino & RuleX Innovation Labs, Italy**  
**Nov 2022 – Oct 2025**

- Conducted PhD research on trustworthy AI, explainable computer vision, and visual anomaly detection.
- Developed XAI methods including [**LIME Stratified**](/publication/p9_lime_stratified) and [**ShapBPT**](/publication/p12_ShapBPT).
- Built explainable anomaly detection systems using VAE-GANs.
- Contributed to EU-funded projects including **DistriMuSe** and **NextPerception**.
- Completed the thesis:  
   _Improving Trust in Safety-Critical AI Systems: Explainable AI and Anomaly Detection Frameworks for Human Safety in Smart Industries._
  Supervised by:
  - <strong>Academic Supervisor:</strong> [Prof. Elvio G. Amparore](https://informatica.unito.it/do/docenti.pl/Alias?elviogilberto.amparore#tab-profilo)<br>
  - <strong>Industrial Supervisor:</strong> [Dr. Enrico Ferrari](https://www.rulex.ai/about-us/) ([RuleX Innovation Labs](https://www.rulex.ai/))<br>

---

## Research Assistant

**HITEC University, Taxila, Pakistan**  
**Aug 2021 – Jan 2023**

- Designed and implemented machine learning and computer vision pipelines.
- Mentored undergraduate students on AI, computer vision, and data science projects.
- Supported research activities in medical imaging, surveillance, and pattern recognition.

---

## Freelance Computer Vision & Machine Learning Developer

**Independent / Upwork / Fiverr**  
**2017 – 2023**

- Delivered 10+ applied machine learning, computer vision, and image-analysis projects.
- Developed end-to-end solutions spanning data preprocessing, model development,
  evaluation, visualization, and GUI-based deployment.
- Worked across medical imaging, surveillance, agriculture, object recognition,
  and industrial image analysis.

---

# Participation in Research Projects

## DistriMuSe — EU Horizon Europe Project

**Use Case 3: Safe Interaction and Cooperation with Robots**

Role: **Visual anomaly detection, AI demonstrator development, validation, and system integration**

### ADVIS-UniGra — Synthetic Industrial Environment

- Developed an RGB anomaly detection framework for collaborative robotics safety.
- Designed safety-area-specific anomaly detection for PLeft, PRight, RoboArm, and ConvBelt.
- Developed area-specific VAE-GAN models with normal-only training.
- Evaluated L1, L2, SSIM, RAVI, and spatially tolerant anomaly scoring.
- Achieved approximately **99.6% accuracy** and **12.5 FPS** inference.
- Contributed to validation activities and technical deliverables within DistriMuSe.
- Github Repository: [ADVIS-UniGra](https://github.com/rashidrao-pk/advis_distrimuse_unito)

### ADVIS-SR — Real Industrial Environment

- Extended ADVIS from simulation to a real robotic palletizing environment.
- Developed multi-area RGB monitoring for unexpected-condition detection.
- Integrated real-time inference with **ROS2** and distributed communication.
- Developed visualization tools for anomaly timelines, reconstruction analysis,
  safety-area monitoring, and explainability.
- Evaluated the system on real multi-camera industrial data.
- Github Repository: [ADVIS-SR](https://github.com/rashidrao-pk/advis_distrimuse_unito_SR)

---

## NextPerception — EU Project

**Work Package 3: Distributed Intelligence**

Role: **Explainable AI research and demonstrator improvement**

- Contributed to explainable AI methods for perception systems.
- Developed and evaluated improvements to LIME using stratified sampling.
- Improved explanation stability and coverage for high-dimensional image data.

---

# Ongoing Research & Collaborations

### Video Anomaly Detection

Developing a comprehensive study of the evolution of deep learning for video
anomaly detection, from reconstruction- and prediction-based approaches to
transformers, foundation models, and reasoning-oriented methods.

### NIDS-SCNN — Explainable Network Intrusion Detection

Developing a lightweight CNN-based network intrusion detection framework using
time-frequency representations and explainable AI for interpretable binary and
multiclass attack classification.

### Interpretable Machine Learning for Electrical Discharge Machining

Investigating hierarchical and interpretable machine learning for small-sample
prediction of surface and tribological responses in advanced manufacturing.

### Time-Series Anomaly Detection

Investigating deep learning and one-class approaches for time-series anomaly
detection, including robust training, threshold calibration, and benchmark
evaluation.

# Education

## PhD in Computer Science

**University of Torino, Italy**  
**Nov 2022 – Nov 2025**  
Defended: **28 April 2026**

**Thesis:** _Improving Trust in Safety-Critical AI Systems: Explainable AI and Anomaly Detection Frameworks for Human Safety in Smart Industries_

**Supervisors:** Prof. Elvio G. Amparore, Prof. Marco Botta, Dr. Enrico Ferrari

**Research Focus:** Explainable AI, Computer Vision, Visual Anomaly Detection, Industrial AI

---

## Master of Science in Computer Science

**COMSATS University Islamabad, Pakistan**  
**2017 – 2019**

- CGPA: **3.77/4.0**
- Thesis: _Object Detection and Classification Based on Feature Fusion and Deep Convolutional Neural Network_
- Supervisor: Prof. Dr. Muhammad Sharif
- Research focus: object recognition, video surveillance, healthcare image analysis, feature fusion, and deep CNNs.

---

## Bachelor of Science in Computer Science

**Allama Iqbal Open University, Islamabad, Pakistan**  
**2010 – 2016**

- CGPA: **3.19/4.0**
- Final Project: _Online Venue Booking and Tour Planning_
- Focus: secure web application development using CodeIgniter and MVC architecture.

---

# Selected Publications

## 1. ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study

Authors: **Muhammad Rashid**, Elvio G. Amparore, Enrico Ferrari, Damiano Verda  
QualITA Workshop @ ICPE 2026 (ACM)

<p>
  <a href="https://dl.acm.org/doi/10.1145/3777911.3800638" class="custom-btn btn-paper">PDF</a>
  <a href="https://github.com/rashidrao-pk/XAD" class="custom-btn btn-code">Code</a>
  <a href="https://rashidrao-pk.github.io/publication/p13_ShapBPT_AD" class="custom-btn btn-demo">Details</a>
</p>

---

## 2. ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees

Authors: **Muhammad Rashid**, Elvio G. Amparore, Enrico Ferrari, Damiano Verda
AAAI Conference on Artificial Intelligence (AAAI 2026)

<p>
  <a href="https://ojs.aaai.org/index.php/AAAI/article/view/39699" class="custom-btn btn-paper">PDF</a>
  <a href="https://arxiv.org/abs/2602.07047" class="custom-btn btn-arxiv">arXiv</a>
  <a href="https://github.com/amparore/shap_bpt" class="custom-btn btn-code">Code</a>
  <a href="https://github.com/rashidrao-pk/shap_bpt_tests" class="custom-btn btn-tests">Tests</a>
  <a href="https://pypi.org/project/shap-bpt/" class="custom-btn btn-pypi">PyPI</a>
  <a href="https://huggingface.co/spaces/rashidrao/shapbpt-user-study" class="custom-btn btn-demo">User Study</a>
  <a href="https://underline.io/lecture/141841-shapbpt-image-feature-attributions-using-data-aware-binary-partition-trees" class="custom-btn btn-poster">Poster</a>
  <a href="https://rashidrao-pk.github.io/publication/p12_ShapBPT" class="custom-btn btn-demo">Details</a>
</p>

---

## 3. Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI

Authors: **Muhammad Rashid**, Elvio Amparore, Enrico Ferrari, Damiano Verda  
World Conference on Explainable Artificial Intelligence (XAI 2024)

<p>
  <a href="https://link.springer.com/chapter/10.1007/978-3-031-63803-9_13" class="custom-btn btn-paper">PDF</a>
  <a href="https://github.com/rashidrao-pk/anomaly_detection_trust_case_study" class="custom-btn btn-code">Code</a>
  <a href="https://muhammad-rashid.medium.com/explainable-anomaly-detection-in-images-using-self-supervised-learning-with-generative-ai-vae-gan-40a34af50dd4" class="custom-btn btn-demo">Blog</a>
  <a href="https://rashidrao-pk.github.io/publication/p10_anomaly_detection_xai" class="custom-btn btn-demo">Details</a>
</p>

---

## 4. Using Stratified Sampling to Improve LIME Image Explanations

Authors: **Muhammad Rashid**, Elvio G. Amparore, Enrico Ferrari, Damiano Verda  
AAAI Conference on Artificial Intelligence (AAAI 2024)

<p>
  <a href="https://ojs.aaai.org/index.php/AAAI/article/view/29397" class="custom-btn btn-paper">PDF</a>
  <a href="https://github.com/rashidrao-pk/lime_stratified" class="custom-btn btn-code">Code</a>
  <a href="https://github.com/rashidrao-pk/lime-stratified-examples" class="custom-btn btn-tests">Examples</a>
  <a href="https://pypi.org/project/lime-stratified/" class="custom-btn btn-pypi">PyPI</a>
  <a href="https://muhammad-rashid.medium.com/stratified-lime-to-generate-image-explanation-an-improved-version-of-lime-image-6b9668f03f1f" class="custom-btn btn-demo">Blog</a>
  <a href="https://rashidrao-pk.github.io//files/papers_data/lime/st_lime_slides.pdf" class="custom-btn btn-demo">Slides</a>
  <a href="https://rashidrao-pk.github.io/files/papers_data/lime/Poster_St_LIME_AAAI_24.pdf" class="custom-btn btn-demo">Poster</a>
  <a href="https://rashidrao-pk.github.io/publication/p9_lime_stratified" class="custom-btn btn-demo">Details</a>

</p>

---

[See full publication list](/publications/)

---

# Research Software

| Project                   | Description                                                  | Link                                                                         |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| ShapBPT                   | Data-aware Shapley explanations using Binary Partition Trees | [GitHub](https://github.com/amparore/shap_bpt)                               |
| ShapBPT Tests             | Experimental evaluation of ShapBPT across vision tasks       | [GitHub](https://github.com/rashidrao-pk/shap_bpt_tests)                     |
| XAD                       | ShapBPT for explainable anomaly detection                    | [GitHub](https://github.com/rashidrao-pk/XAD)                                |
| LIME Stratified           | Improved LIME Image with stratified sampling                 | [GitHub](https://github.com/rashidrao-pk/lime_stratified)                    |
| LIME Stratified Examples  | Experiments for LIME Stratified                              | [GitHub](https://github.com/rashidrao-pk/lime-stratified-examples)           |
| Explainable AD Case Study | VAE-GAN anomaly detection with XAI                           | [GitHub](https://github.com/rashidrao-pk/anomaly_detection_trust_case_study) |
| ADVIS DistriMuSe          | Real-time anomaly detection for robotics safety              | [GitHub](https://github.com/rashidrao-pk/advis_distrimuse_unito_SR)          |
| AI on Edge Devices        | AI deployment and optimization on Raspberry Pi               | [GitHub](https://github.com/rashidrao-pk/AI_on_Edge_Devices)                 |

---

# Selected Open-Source Contributions

- **Xplique (DEEL)** — Fixed tabular explanation colorbar/axes handling and added regression tests.
  [Repository](https://github.com/deel-ai/xplique) · [PR #184](https://github.com/deel-ai/xplique/pull/184)

- **Anomalib (Open Edge Platform)** — Contributed PatchCore backbone documentation improvements and participated in discussions around explainability for visual anomaly detection.
  [Repository](https://github.com/open-edge-platform/anomalib) · [PR #3630](https://github.com/open-edge-platform/anomalib/pull/3630) · [Issue #1144](https://github.com/open-edge-platform/anomalib/issues/1144)

- **Alibi Detect (Seldon)** — Contributed a Keras 3 compatibility fix for anomaly/outlier detection functionality.
  [Repository](https://github.com/SeldonIO/alibi-detect) · [PR #955](https://github.com/SeldonIO/alibi-detect/pull/955)

- **FLAML (Microsoft)** — Contributing native anomaly detection support, including the initial `anomaly_detection` task and Isolation Forest integration.
  [Repository](https://github.com/microsoft/FLAML) · [PR #1567](https://github.com/microsoft/FLAML/pull/1567) · [Issue #413](https://github.com/microsoft/FLAML/issues/413)

- **Awesome Python for Data Science (Data-Centric AI Community)** — Contributed an anomaly detection tutorial/resource to the community-maintained data science collection.
  [Repository](https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science) · [PR #42](https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science/pull/42) · [Issue #28](https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science/issues/28)

# Teaching Activities

## Teaching Collaboration

**University of Torino, Italy**  
**A.Y. 2023/2024**

- Selected through a competitive departmental call for teaching support activities.
- Supported the course **Sicurezza delle Reti e dei Sistemi**.
- Contributed to exam sessions and student support activities.

## Teaching Assistant

**HITEC University, Pakistan**  
**Sep 2019 – Jun 2021**

- Assisted courses in Web Engineering, Digital Image Processing, Programming Fundamentals, and Data Structures and Algorithms.
- Supported laboratory sessions, assignments, and student evaluations.
- Mentored students on programming and computer vision projects.

---

# Conferences and Presentations

- **QualITA/ICPE 2026**, Florence, Italy — Presented _ShapBPT in Perspective_.
- **AAAI 2026**, Singapore — Presented _ShapBPT_.
- **XAI-World 2024**, Valletta, Malta — Presented _Can I Trust My Anomaly Detection System?_
- **AAAI 2024**, Vancouver, Canada — Presented _Using Stratified Sampling to Improve LIME Image Explanations_.
- **ECML-PKDD 2023**, Turin, Italy — Attendee.
- **icSoftComputing 2024**, Remote — Attendee.

---

# Academic Service

## Program Committee Member

- AAAI 2027
- ECML-PKDD 2026
- AAAI 2026
- ACDSA 2026
- ICLR 2025
- XAI-World 2026
- XAI-World 2025
- XAI-World 2024
- NLDB 2024

## Journal Reviewer

- IEEE Transactions on Intelligent Transportation Systems
- Signal, Image and Video Processing, Springer
- Frontiers in Plant Science

## Workshop Program Committee

- INSAIT Workshop @ ICIAP 2025
- DELTA Workshop @ ACM SIGKDD 2024

## Research Network

- Confederation of Laboratories for AI Research in Europe (CLAIRE)

---

# Awards and Scholarships

| Award                                          | Organization                 | Year |
| ---------------------------------------------- | ---------------------------- | ---- |
| Research Scholarship for DistriMuSe activities | University of Torino         | 2025 |
| Erasmus+ Traineeship Scholarship               | Erasmus+                     | 2025 |
| Innovative Industrial Doctoral Scholarship     | MUR / NRRP Italy             | 2022 |
| National Laptop Award                          | Prime Minister Laptop Scheme | 2018 |

---

# Technical Skills

## Programming

Python, MATLAB, C++, SQL

## Machine Learning & Deep Learning

PyTorch, TensorFlow/Keras, Scikit-learn, Torchvision, timm

## Computer Vision & XAI

OpenCV, SHAP, LIME, Captum, Grad-CAM, Integrated Gradients,
Shapley-value attribution, SAM/SAM2

## Anomaly Detection

VAE/VAE-GAN, reconstruction-based anomaly detection, PatchCore,
one-class learning, visual anomaly detection, time-series anomaly detection

## Engineering & Deployment

Git/GitHub, Linux, ROS2, Zenoh, Docker, Raspberry Pi, HPC/SLURM,
Jupyter, LaTeX

## Data & Scientific Computing

NumPy, Pandas, SciPy, Matplotlib, Scikit-image

<p> See details here - 
  <a href="/courses/" class="custom-btn btn-demo">📘 Courses & Training</a>
  <a href="/certifications/" class="custom-btn btn-paper">🏅 Certifications</a>
</p>

---

# Languages

| Language   | Level                        |
| ---------- | ---------------------------- |
| 🇬🇧 English | C1 (Professional & Academic) |
| 🇮🇹 Italian | A1 (Basic Communication)     |
| 🇵🇰 Urdu    | Native                       |
