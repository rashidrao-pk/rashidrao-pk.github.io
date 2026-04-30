---
title: "Acute Lymphoblastic Leukemia Classification: Deep Learning Techniques for Blood Diseases Diagnosis"
collection: publications
category: journals
permalink: /publication/p11_lukemia
excerpt: "Deep learning-based classification of Acute Lymphoblastic Leukemia from peripheral blood smear images using EfficientNetB3."
date: 2025-06-01
venue: "Journal of Computing & Biomedical Informatics"
paperurl: "https://www.jcbi.org/index.php/Main/article/view/1033"
pdfurl: "https://www.jcbi.org/index.php/Main/article/view/1033/720"
citation: "Yaseen, Faisal, Muhammad Rashid, Muhammad Yasir Shabir, Muhammad Attique Khan, and Nazar Hussain. (2025). Acute Lymphoblastic Leukemia Classification: Deep Learning Techniques for Blood Diseases Diagnosis. Journal of Computing & Biomedical Informatics, 9(01)."
research_area:
  - Medical Imaging
  - Deep Learning
  - Computer Vision
subcategory:
  - Leukemia Classification
  - Biomedical Image Classification
  - EfficientNet
tags:
  - leukemia
  - acute lymphoblastic leukemia
  - EfficientNetB3
  - deep learning
  - medical image analysis
---

This work presents a deep learning-based approach for **Acute Lymphoblastic Leukemia (ALL) classification** using microscopic peripheral blood smear images. The study focuses on automatic classification of ALL and its subtypes to support early screening and assist healthcare professionals in laboratory diagnosis.

The proposed system uses a fine-tuned **EfficientNetB3** model trained on a publicly available Kaggle dataset of ALL blood smear images. The dataset contains **3,256 peripheral blood smear images** collected from **89 suspected ALL patients**, including benign samples and malignant ALL subtypes such as **Early Pre-B**, **Pre-B**, and **Pro-B**.

<p>
  <a href="https://www.jcbi.org/index.php/Main/article/view/1033" class="custom-btn btn-paper">Paper</a>
  <a href="https://www.jcbi.org/index.php/Main/article/view/1033/720" class="custom-btn btn-paper">PDF</a>
</p>

Contributions 📃
===

In this study, we present:

1. A deep learning framework for classifying Acute Lymphoblastic Leukemia from microscopic blood smear images.
2. A fine-tuned **EfficientNetB3** model for multi-class ALL subtype classification.
3. A complete pipeline covering data preprocessing, model training, learning-rate tuning, and classification.
4. Evaluation using multiple metrics including accuracy, precision, recall, F1-score, ROC curve, confusion matrix, Cohen’s kappa, MCC, and F2-score.
5. Experimental results showing **99.84% classification accuracy** after 20 epochs.

Method Summary
===

The proposed workflow consists of three main stages:

1. **Data Preprocessing**  
   Peripheral blood smear images are prepared, labels are checked, and data loaders are created for training and validation.

2. **Model Structuring and Training**  
   A fine-tuned **EfficientNetB3** model is trained using mixed-precision training and the one-cycle learning-rate policy.

3. **Classification and Evaluation**  
   The trained model is evaluated using standard classification metrics and visual tools such as confusion matrix, ROC curve, and accuracy/error-rate plots.

Dataset and Model
===

| Component | Details |
|:--|:--|
| Dataset | Acute Lymphoblastic Leukemia blood smear image dataset |
| Images | 3,256 PBS images |
| Patients | 89 suspected ALL patients |
| Classes | Benign and malignant ALL subtypes |
| ALL Subtypes | Early Pre-B, Pre-B, Pro-B |
| Model | EfficientNetB3 |
| Training | Fine-tuning with mixed precision |
| Accuracy | 99.84% |

Authors ✍️
===

| Sr. No. | Author Name | Affiliation |
| :--: | :-- | :-- |
| 1. | Faisal Yaseen | Department of Computer Science, Bahaudin Zakriya University, Multan, Pakistan |
| 2. | Muhammad Rashid | Department of Computer Science, University of Torino, Italy |
| 3. | Muhammad Yasir Shabir | Department of Computer Sciences, University of Kotli, Pakistan |
| 4. | Muhammad Attique Khan | Prince Mohammad bin Fahd University, AlKhobar, Saudi Arabia |
| 5. | Nazar Hussain | Department of Management Information Systems, King Saud University Riyadh, Saudi Arabia |

Keywords 🔍
===

Acute Lymphoblastic Leukemia · Blood Disease Diagnosis · Deep Learning · EfficientNetB3 · Medical Image Classification · Computer Vision


<h2>📖 Citation</h2>

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@article{yaseen2025acute,
  author  = {Yaseen, Faisal and Rashid, Muhammad and Shabir, Muhammad Yasir and Khan, Muhammad Attique and Hussain, Nazar},
  title   = {Acute Lymphoblastic Leukemia Classification: Deep Learning Techniques for Blood Diseases Diagnosis},
  journal = {Journal of Computing \& Biomedical Informatics},
  volume  = {9},
  number  = {01},
  year    = {2025},
  url     = {https://www.jcbi.org/index.php/Main/article/view/1033}
}</code></pre>
</div>