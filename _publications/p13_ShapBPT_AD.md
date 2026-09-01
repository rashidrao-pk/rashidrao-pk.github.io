---
title: "ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study"
collection: publications
category: conferences
permalink: /publication/p13_ShapBPT_AD
excerpt: "A consolidated review of ShapBPT and its application to explainable anomaly detection."
research_area:
  - Explainable AI
  - Anomaly Detection
  - Computer Vision
subcategory:
  - XAI for Anomaly Detection
  - Shapley-based Explanations
  - Visual Anomaly Detection
tags:
  - XAI
  - ShapBPT
  - anomaly detection
  - computer vision
  - industrial AI
  - VAE-GAN
date: 2026-05-03
venue: "QualITA Workshop | ICPE 2026 (ACM)"
location: "Florence, Italy"
paperurl: "https://dl.acm.org/doi/10.1145/3777911.3800638"
codeurl: "https://github.com/rashidrao-pk/XAD"
workshop: "https://qualitawg.github.io/"
conference: "https://icpe2026.spec.org/"
thumbnail: "../files/papers_data/shapbpt_ad/XAD_ShapBPT_workflow.png"
---

### XAD Workflow

<div class="talk-image-container">
<img src="/files/papers_data/shapbpt_ad/XAD_ShapBPT_workflow.png" alt="ShapBPT Workflow for Visual Anomaly Detection" class="talk-image">
<p class="talk-image-caption"> ShapBPT Workflow for Visual Anomaly Detection </p>
</div>

This paper presents **ShapBPT in Perspective**, a consolidated review and practical case study of **ShapBPT** for **eXplainable Anomaly Detection (XAD)**. The work bridges **hierarchical Shapley-based explanations** with real-world anomaly detection systems, demonstrating how structured feature attributions can improve the interpretability of black-box models.

Unlike traditional explanation methods based on fixed partitions, **ShapBPT leverages a data-aware Binary Partition Tree (BPT)** to generate **multiscale, semantically aligned explanations**. This enables more faithful localization of anomalous regions and provides clearer insight into model behavior.

---

## 🔗 Resources

- **Paper**: [ACM Digital Library](https://dl.acm.org/doi/10.1145/3777911.3800638)
- **Code**: [XAD GitHub Repository](https://github.com/rashidrao-pk/XAD)
- **Workshop**: [QualITA Workshop](https://qualitawg.github.io/)
- **Conference**: [ICPE 2026](https://icpe2026.spec.org/)

---

## 📌 Key Contributions

1. A **consolidated review** of ShapBPT for explainable computer vision.
2. A **real-world case study** on explainable anomaly detection (XAD).
3. A unified framework connecting **hierarchical Shapley explanations** with anomaly detection systems.
4. Release of **open-source implementation (XAD)** for reproducibility.

---

## ⚙️ Method Overview

ShapBPT explains anomaly detection decisions by assigning **attribution scores to image regions** using a **hierarchical, data-driven partitioning** strategy.

## HOW BPT is build for image

<div class="talk-image-container">
<img src="/files/papers_data/shapbpt_ad/BPT.svg" alt="How BPT is build on Images" class="talk-image">
<p class="talk-image-caption"> How BPT is build on Images </p>
</div>

### Example Explanation

<div class="talk-image-container">
<img src="/files/papers_data/shapbpt/Fig1_explain_bpt-1.png" alt="Fig 1 Explain BPT" class="talk-image">
<p class="talk-image-caption"> Fig 2 Explain BPT</p>
</div>
---

## Evaluation Setup

<div class="talk-image-container">
<img src="/files/papers_data/shapbpt_ad/xai_evaluation.svg" alt="XAI Evaluation for Visual Anomaly Detection" class="talk-image">
<p class="talk-image-caption"> XAI Evaluation for Visual Anomaly Detection </p>
</div>

Shapley/Owen values for AA and BPT coalitionstructures, for different values of the budget 𝑏.

---

This approach enables explanations to follow **intrinsic image structure**, improving robustness compared to grid-based or pixel-wise attribution methods.

---

## 🧪 Experimental Setup

- **Task**: Explainable Anomaly Detection
- **Method**: ShapBPT
- **Model Type**: Black-box anomaly detection models (e.g., VAE-GAN)
- **Explanation Level**: Pixel-level and region-level attribution

---

## 🖼️ Sample Output

<div class="talk-image-container">
<img src="https://raw.githubusercontent.com/rashidrao-pk/XAD/main/docs/sample_result.png" alt="sample_result" class="talk-image">
<p class="talk-image-caption">    Sample Result </p>
</div>

---

## Results over All Applications

<div class="talk-image-container">
<img src="/files/papers_data/shapbpt_ad/results_shapbpt_qualt.svg" alt="Boxplot Results on all experiments" class="talk-image" style="background-color: white;">
<p class="talk-image-caption">    Boxplot Results on all experiments </p>
</div>

## 🔑 Keywords

ShapBPT · Explainable Anomaly Detection · XAI · Shapley Values · Binary Partition Trees · Computer Vision · ICPE 2026

---

---

## 📖 Citation (BibTeX)

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@inproceedings{rashid2026shapbptperspective,
  title     = {ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study},
  author    = {Rashid, Muhammad and Amparore, Elvio G.},
  booktitle = {Proceedings of the QualITA Workshop at ICPE 2026},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3777911.3800638},
  url       = {https://doi.org/10.1145/3777911.3800638}
}</code></pre>
</div>
