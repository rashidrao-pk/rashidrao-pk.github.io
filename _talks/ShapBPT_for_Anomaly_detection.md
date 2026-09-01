---
title: "ShapBPT in Perspective: A Consolidated Review and an eXplainable Anomaly Detection Case Study"
collection: talks
type: "Oral Presentation"
permalink: /talks/qualita_shapbpt_xad
venue: "QualITA Workshop | ICPE 2026"
date: 2026-05-03
location: "Florence, Italy"
# Used by your webpage
location_display: "Florence, Italy 🇮🇹"
coordinates: [43.7696, 11.2558]
conference: "ICPE 2026"
workshop: "QualITA Workshop"
paperurl: "https://dl.acm.org/doi/10.1145/3777911.3800638"
codeurl: "https://github.com/rashidrao-pk/XAD"
workshopurl: "https://qualitawg.github.io/"
conferenceurl: "https://icpe2026.spec.org/"
thumbnail: "../files/talks/papers/QualITA-ICPE-ShapBPT-AD.jpg"
---

This talk presents **ShapBPT in Perspective**, a consolidated review and practical case study of **ShapBPT** for **eXplainable Anomaly Detection (XAD)**.

The work connects **hierarchical Shapley-based explanations** with real-world anomaly detection systems, showing how structured image feature attributions can support the interpretation of black-box anomaly detection models.

---

## 🔗 Resources

<p>
  <a href="https://dl.acm.org/doi/10.1145/3777911.3800638" class="custom-btn btn-paper">Paper</a>
  <a href="https://github.com/rashidrao-pk/XAD" class="custom-btn btn-code">Code</a>
  <a href="https://qualitawg.github.io/" class="custom-btn btn-demo">Workshop</a>
  <a href="https://icpe2026.spec.org/" class="custom-btn btn-demo">ICPE 2026</a>
</p>

---

## 📌 Talk Summary

- Presented ShapBPT as a data-aware hierarchical explanation method.
- Discussed its role in **Explainable Computer Vision**.
- Applied ShapBPT to **visual anomaly detection**.
- Showed how explanations can help interpret black-box anomaly detection systems.

<img src="/files/talks/papers/QualITA-ICPE-ShapBPT-AD.jpg">

---

## ⚙️ Method Overview

ShapBPT explains anomaly detection decisions by assigning attribution scores to image regions. Instead of using fixed geometric partitions, it relies on a **Binary Partition Tree (BPT)** to follow the intrinsic structure of the image.

<img src="../files/papers_data/shapbpt_ad/Fig1_explain_bpt-Hazelnut.png">

---

## 🔍 Explainable Anomaly Detection Workflow

<img src="../files/papers_data/shapbpt_ad/XAD_ShapBPT_workflow.png">

---

## 🖼️ Sample Output

<img src="https://raw.githubusercontent.com/rashidrao-pk/XAD/main/docs/sample_result.png">

---

## Keywords

ShapBPT · Explainable Anomaly Detection · XAI · Shapley Values · Binary Partition Trees · Computer Vision · ICPE 2026 · QualITA Workshop
