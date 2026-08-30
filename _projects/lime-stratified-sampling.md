---
title: "LIME Stratified Sampling"
collection: projects
category: Research/XAI
permalink: /projects/lime-stratified-sampling/
excerpt: "An improved LIME sampling strategy for generating more stable and reliable image explanations."
thumbnail: "../files/papers_data/lime/LIME-Image-workflow.png"
date: 2024-01-01
year: 2024
project_type: "Research Project"
status: "Published"
research_area:
  - Explainable AI
  - Computer Vision
  - Image Explanations
technologies:
  - Python
  - LIME
  - Computer Vision
  - XAI
paperurl: "https://ojs.aaai.org/index.php/AAAI/article/view/29397"
codeurl: "https://github.com/rashidrao-pk/lime_stratified"
testurl: "https://github.com/rashidrao-pk/lime-stratified-examples"
pypiurl: "https://pypi.org/project/lime-stratified/"
slidesurl: "https://rashidrao-pk.github.io/files/papers_data/lime/st_lime_slides.pdf"

toc: true
toc_sticky: true
toc_label: "On this page"
---

This project improves the stability of **LIME image explanations** by introducing a stratified sampling strategy for perturbation generation.

## Overview

LIME is widely used for model-agnostic explanations, but its explanations can vary because of random perturbation sampling. This project addresses that issue by using a more structured sampling strategy to reduce explanation variance.

## Main Contributions

- Improved perturbation sampling for LIME image explanations.
- Reduced randomness in local explanation generation.
- More stable and reliable visual explanations.
- Reproducible implementation and example experiments.

## Impact

The method helps make LIME-based explanations more consistent, which is important when explanations are used for model debugging, decision support, or trust assessment.

## Technologies

Python · LIME · Scikit-learn · Computer Vision · Explainable AI
