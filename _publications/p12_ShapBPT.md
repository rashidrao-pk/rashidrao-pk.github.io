---
title: "ShapBPT: Image Feature Attributions using Data-Aware Binary Partition Trees"
collection: publications
category: conferences
permalink: /publication/p12_ShapBPT
excerpt: "A data-aware XAI method for image feature attribution using Binary Partition Trees and hierarchical Shapley values."
research_area:
  - Explainable AI
  - Computer Vision
subcategory:
  - Image Feature Attribution
  - Shapley Values
  - Binary Partition Trees
tags:
  - XAI
  - ShapBPT
  - Shapley values
  - BPT
  - feature attribution
date: 2026-01-24
venue: "AAAI-26 | 40th Annual AAAI Conference on Artificial Intelligence"
location: "Singapore"
paperurl: "https://ojs.aaai.org/index.php/AAAI/article/view/39699"
arxivurl: "https://www.arxiv.org/abs/2602.07047"
codeurl: "https://github.com/amparore/shap_bpt"
testurl: "https://github.com/rashidrao-pk/shap_bpt_tests"
pypiurl: "https://pypi.org/project/shap-bpt/"
docsurl: "https://shapbpt.readthedocs.io/en/latest/"
userstudyurl: "https://huggingface.co/spaces/rashidrao/shapbpt-user-study"
posterurl: "https://underline.io/lecture/141841-shapbpt-image-feature-attributions-using-data-aware-binary-partition-trees"
citation: "Rashid, Muhammad, Amparore, Elvio G., Ferrari, Enrico, and Verda, Damiano. (2026). ShapBPT: Image Feature Attributions Using Data-Aware Binary Partition Trees. Proceedings of the AAAI Conference on Artificial Intelligence, 40."
thumbnail: "../files/papers_data/shapbpt/Fig1_explain_bpt-Thumbnail.png"

toc: true
toc_sticky: true
toc_label: "On this page"
---

Pixel-level **feature attribution** plays a central role in **Explainable Computer Vision (XCV)** by showing which image regions influence a model prediction. Although hierarchical Shapley-based methods provide a principled explanation framework, many existing approaches rely on rigid image partitions that do not follow the natural structure of visual content.

**ShapBPT** addresses this limitation by combining hierarchical Shapley values with a **data-aware Binary Partition Tree (BPT)** representation of images. Instead of explaining images through arbitrary grid-based regions, ShapBPT builds a multiscale hierarchy that follows image morphology and object structure. This produces explanations that are more interpretable, structurally faithful, and computationally efficient.

## Overview

**ShapBPT** is a model-agnostic XAI method for image feature attribution. It integrates the **Owen approximation of Shapley values** with an adaptive image hierarchy constructed using **Binary Partition Trees**. The method is designed to generate explanations that better align with meaningful visual regions and object boundaries.

> 📚 The paper, source code, documentation, reproducibility tests, Python package, user study, and presentation materials can be accessed directly through the buttons above.

### Highlights

- 🎓 Accepted in the **Main Technical Track of AAAI 2026**.
- 🌳 Introduces **data-aware Binary Partition Trees** for hierarchical image explanations.
- ⚡ Reduces computational cost compared with conventional hierarchical Shapley-based methods.
- 🎯 Produces explanations that better follow image structure and object morphology.
- 👥 Validated through a **20-participant user study**, where ShapBPT explanations were consistently preferred.
- 📦 Released as an open-source Python package.

### Installation

<pre><code class="language-bash">pip install shap-bpt</code></pre>

### Resources

Use the buttons above to access the paper, arXiv version, source code, documentation, PyPI package, reproducibility tests, user study, and presentation material.

## Contributions 📃

This research makes the following contributions:

1. We introduce **ShapBPT**, a hierarchical model-agnostic XCV method that combines adaptive multiscale image partitioning with the Owen approximation of Shapley values.

2. We repurpose **Binary Partition Trees (BPTs)** to construct data-aware hierarchical coalition structures for visual explanation, overcoming the limitations of rigid and inflexible partitioning strategies used by existing methods.

3. We evaluate ShapBPT on multiple image datasets and model architectures, demonstrating improved explanation efficiency and structural faithfulness.

4. We conduct a controlled human-subject study showing that users consistently prefer ShapBPT explanations over competing XCV methods.

5. We release the source code, documentation, reproducibility tests, and Python package to support open and reproducible research.

## How it Works?

ShapBPT first constructs a data-aware image hierarchy using a Binary Partition Tree. This hierarchy represents the image at multiple levels of granularity, from coarse regions to fine visual structures. Shapley-based attribution scores are then computed over this hierarchy, allowing the method to assign importance values to meaningful image regions instead of arbitrary pixel grids.

<img src="/files/papers_data/shapbpt/Fig1_explain_bpt-1.png">

<hr>

<img src="/files/papers_data/shapbpt/bpt-animation.gif">

<hr>

<img src="/files/papers_data/shapbpt/sequence_aa.gif">
<img src="/files/papers_data/shapbpt/sequence_bpt.gif">

<hr>

<img src="/files/papers_data/shapbpt/Fig3_sequence_explanations-1.png">

<hr>

<img src="/files/papers_data/shapbpt/aa_plot.png">

<hr>

<img src="/files/papers_data/shapbpt/bpt_plot.png">

<hr>

## Datasets and Models

ShapBPT was evaluated across different computer vision tasks, datasets, and model architectures.

- **Datasets:** ImageNet, MS-COCO, MVTec, and CelebA-HQ.
- **Models:** ResNet-50, ViT, SwinViT, YOLOv11, custom CNN, and VAE-GAN.

## Experiments Summary

| ID  | Dataset                 | Size | Model      | Short Description                          |
| :-: | :---------------------- | :--: | :--------- | :----------------------------------------- |
| E1  | ImageNet-S<sub>50</sub> | 574  | ResNet-50  | Common ImageNet classification setup       |
| E2  | ImageNet-S<sub>50</sub> | 574  | Ideal      | Linear ideal attribution model             |
| E3  | ImageNet-S<sub>50</sub> | 621  | SwinViT    | Vision Transformer-based classification    |
| E4  | MS-COCO                 | 274  | YOLOv11s   | Object detection explanations              |
| E5  | CelebA-HQ               | 400  | Custom CNN | Facial attribute localization              |
| E6  | MVTec                   | 280  | VAE-GAN    | Explainable anomaly detection              |
| E7  | ImageNet-S<sub>50</sub> | 593  | ViT-Base16 | Vision Transformer explanations            |
| E8  | User Study              |  —   | —          | Human preference study using saliency maps |

---

## Authors ✍️

| Sr. No. | Author Name       | Affiliation                                                    | Google Scholar                                                                          |
| :-----: | :---------------- | :------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
|    1    | Muhammad Rashid   | University of Torino, Dept. of Computer Science, Torino, Italy | [Muhammad Rashid](https://scholar.google.com/citations?user=F5u_Z5MAAAAJ&hl=en)         |
|    2    | Elvio G. Amparore | University of Torino, Dept. of Computer Science, Torino, Italy | [Elvio G. Amparore](https://scholar.google.com/citations?user=Hivlp1kAAAAJ&hl=en&oi=ao) |
|    3    | Enrico Ferrari    | Rulex Innovation Labs, Rulex Inc., Genova, Italy               | [Enrico Ferrari](https://scholar.google.com/citations?user=QOflGNIAAAAJ&hl=en&oi=ao)    |
|    4    | Damiano Verda     | Rulex Innovation Labs, Rulex Inc., Genova, Italy               | [Damiano Verda](https://scholar.google.com/citations?user=t6o9YSsAAAAJ&hl=en&oi=ao)     |

## Keywords 🔍

Shapley Values · Binary Partition Trees · Explainable AI · XAI · Image Feature Attribution · Explainable Computer Vision

## 📖 Citation (BibTeX)

<div class="bibtex-box">
  <button class="copy-bibtex-btn" onclick="copyBibtex(this)">Copy BibTeX</button>

<pre><code class="language-bibtex">@inproceedings{rashid2026shapbpt,
  title     = {ShapBPT: Image Feature Attributions Using Data-Aware Binary Partition Trees},
  author    = {Rashid, Muhammad and Amparore, Elvio G. and Ferrari, Enrico and Verda, Damiano},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {40},
  number    = {30},
  pages     = {25099--25107},
  year      = {2026},
  url       = {https://doi.org/10.1609/aaai.v40i30.39699}
}</code></pre>
</div>
