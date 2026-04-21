---
title: "ShapBPT: Image feature attributions using Data-Aware Binary Partition Trees"
collection: talks
type: "Talk"
permalink: /talks/shapbpt_aaai
venue: "Singapore Expo Center"
date: 25-01-2026
location: "Singapore"
Special Session: Main Track - Poster Talk
Conference: AAAI-24 | The 38th Annual AAAI Conference on Artificial Intelligence
Link to talk:   https://underline.io/speakers/254136-muhammad-rashid

---

Pixel-level **_feature attributions_** play a key role in **_Explainable Computer Vision (XCV)_** by revealing how visual features influence model predictions. While hierarchical **_Shapley_** methods based on the **_Owen formula_** offer a principled explanation framework, existing approaches overlook the multiscale and morphological structure of images, resulting in inefficient computation and weak semantic alignment.

To bridge this gap, we introduce **_ShapBPT_**, a data-aware **_XCV_** method that integrates hierarchical Shapley values with a **_Binary Partition Tree (BPT)_** representation of images. By assigning Shapley coefficients directly to a multiscale, image-adaptive hierarchy, ShapBPT produces explanations that align naturally with intrinsic image structures while significantly reducing computational cost. Experimental results demonstrate improved efficiency and structural faithfulness compared to existing XCV methods, and a **_20-subject user study_** confirms that ShapBPT explanations are consistently preferred by humans.

Links:
*   Main Technical Track: **_ShapBPT_** for improved **Image Feature Attributions using Binary Partition Trees**
*   The method is available under: [https://github.com/amparore/**shap_bpt**](https://github.com/amparore/shap_bpt).
*   Conference: **_AAAI-2026_** (40th Annual AAAI Conference on Artificial Intelligence)
*   Link to talk:   [**_https://aaai.org/wp-content/uploads/2026/01/Main-track-poster-presentations-1.pdf_**](https://aaai.org/wp-content/uploads/2026/01/Main-track-poster-presentations-1.pdf)
*   Python Package: [https://pypi.org/project/shap-bpt/](https://pypi.org/project/shap-bpt/) - **`pip install shap-bpt`**
*   **_Poster in PDF_**: [**_https://rashidrao-pk.github.io/files/AAAI_26_poster.pdf_**](https://rashidrao-pk.github.io/files/AAAI_26_poster.pdf)
*   [PDF on ArXiv](https://www.arxiv.org/abs/2602.07047),  [**_Technical Appendix_**](https://zenodo.org/records/17570695).
*   [https://github.com/rashidrao-pk/**shap_bpt_tests**](https://github.com/rashidrao-pk/shap_bpt_tests)


How it Works?
===

<img src='../files/papers_data/Fig1_explain_bpt-1.png'> 
---
<img src='../files/papers_data/bpt-animation.gif'> 
<img src='../files/papers_data/sequence_aa.gif'> <img src='../files/papers_data/sequence_bpt.gif'> 
---
<img src='../files/papers_data/Fig3_sequence_explanations-1.png'> 
---
<img src='../files/papers_data/aa_plot.png'>
---
<img src='../files/papers_data/bpt_plot.png'>
---


<!-- How LIME_Image Works
===

<img src='../files/papers_data/LIME-Image-workflow.png'> -->