---
title: "ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees"
collection: talks
type: "Conference Poster Presentation"
permalink: /talks/shapbpt_aaai
venue: "Singapore Expo Centre"
date: 2026-01-25
location: "Singapore"
# Used by your webpage
location_display: "Singapore 🇸🇬"
coordinates: [1.3521, 103.8198]

conference: "AAAI 2026 | 40th Annual AAAI Conference on Artificial Intelligence"
session: "Main Track – Poster Presentation"

talkurl: "https://underline.io/speakers/254136-muhammad-rashid"
paperurl: "https://ojs.aaai.org/index.php/AAAI/article/view/39699"
arxivurl: "https://www.arxiv.org/abs/2602.07047"
codeurl: "https://github.com/amparore/shap_bpt"
testurl: "https://github.com/rashidrao-pk/shap_bpt_tests"
pypiurl: "https://pypi.org/project/shap-bpt/"
posterurl: "https://rashidrao-pk.github.io/files/AAAI_26_poster.pdf"

excerpt: "Introduces ShapBPT, a data-aware hierarchical Shapley-based method for image feature attribution that improves efficiency, structural alignment, and interpretability in computer vision models."
---

## 🧠 Overview

This talk introduces **ShapBPT**, a novel method for **image feature attribution** in **Explainable Computer Vision (XCV)**.

While existing hierarchical Shapley-based methods rely on fixed partitions, they fail to capture the intrinsic **multiscale structure of images**, leading to inefficient and less meaningful explanations.

---

## 🔍 Key Idea

ShapBPT integrates:

- **Shapley/Owen values**
- **Binary Partition Trees (BPT)**

to create a **data-aware hierarchical representation** of images.

👉 This allows explanations to follow **natural image structures**, rather than arbitrary grids.

---

## ⚙️ Key Contributions

- Data-aware hierarchical explanation framework using **BPT**
- Improved **efficiency** in Shapley value computation
- Better alignment with **object boundaries and semantics**
- Validated through experiments and a **20-subject user study**

---

## 🔗 Resources

<p>
  <a href="https://ojs.aaai.org/index.php/AAAI/article/view/39699" class="custom-btn btn-paper">Paper</a>
  <a href="https://www.arxiv.org/abs/2602.07047" class="custom-btn btn-arxiv">arXiv</a>
  <a href="https://github.com/amparore/shap_bpt" class="custom-btn btn-code">Code</a>
  <a href="https://github.com/rashidrao-pk/shap_bpt_tests" class="custom-btn btn-tests">Tests</a>
  <a href="https://pypi.org/project/shap-bpt/" class="custom-btn btn-pypi">PyPI</a>
  <a href="https://rashidrao-pk.github.io/files/AAAI_26_poster.pdf" class="custom-btn btn-poster">Poster</a>
  <a href="https://underline.io/speakers/254136-muhammad-rashid" class="custom-btn btn-demo">Talk</a>
</p>

---

## 🧪 Method Overview

ShapBPT explains model predictions by assigning attribution scores to image regions through a **hierarchical decomposition**:

<img src="../files/papers_data/Fig1_explain_bpt-1.png">

---

## 🔄 Explanation Process

<img src="../files/papers_data/bpt-animation.gif">

<img src="../files/papers_data/sequence_aa.gif">
<img src="../files/papers_data/sequence_bpt.gif">

---

## 📊 Results & Comparisons

<img src="../files/papers_data/Fig3_sequence_explanations-1.png">

<img src="../files/papers_data/aa_plot.png">
<img src="../files/papers_data/bpt_plot.png">

---

## 🎯 Impact

ShapBPT demonstrates that:

> **Explanations should follow data structure, not arbitrary partitions.**

It provides a more **efficient, stable, and human-aligned** approach to explain deep vision models.

---

## 🏷️ Keywords

Explainable AI · Shapley Values · Binary Partition Trees · Feature Attribution · Computer Vision · XAI · AAAI 2026
