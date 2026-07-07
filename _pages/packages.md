---
layout: single
title: "Published Python Packages"
permalink: /packages/
---

<div class="section-box section-box-packages" markdown="1">

# Published Python Packages

This page summarizes my published Python packages for Explainable AI (XAI), Computer Vision, and reproducible machine learning research.

## 📦 Package Summary

| Package             | Domain         |                            Latest Version                            | Registry | Links                                                                                                                                                                          |
| :------------------ | :------------- | :------------------------------------------------------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lime-stratified** | Explainable AI | <span class="pypi-version" data-package="lime-stratified">...</span> |   PyPI   | <a href="https://pypi.org/project/lime-stratified/">PyPI</a> · <a href="https://github.com/rashidrao-pk/lime_stratified">Code</a>                                              |
| **shap-bpt**        | Explainable AI |    <span class="pypi-version" data-package="shap-bpt">...</span>     |   PyPI   | <a href="https://pypi.org/project/shap-bpt/">PyPI</a> · <a href="https://github.com/amparore/shap_bpt">Code</a> · <a href="https://shapbpt.readthedocs.io/en/latest/">Docs</a> |

---

## 🌿 lime-stratified

<img src="https://img.shields.io/pypi/v/lime-stratified">
<img src="https://img.shields.io/pypi/dm/lime-stratified">
<img src="https://img.shields.io/pypi/pyversions/lime-stratified">
<img src="https://img.shields.io/pypi/l/lime-stratified">

### Overview

`lime-stratified` is a Python package that improves the stability of **LIME image explanations** using a novel **stratified sampling strategy** proposed in my AAAI 2024 paper.

### Features

- Improved stability of LIME explanations
- Reduced perturbation variance
- Compatible with the original LIME API
- PyPI package
- Open source

### Installation

```bash
pip install lime-stratified
```

### Resources

<p>
<a href="https://pypi.org/project/lime-stratified/" class="custom-btn btn-pypi">PyPI</a>
<a href="https://github.com/rashidrao-pk/lime_stratified" class="custom-btn btn-code">Source Code</a>
<a href="https://github.com/rashidrao-pk/lime-stratified-examples" class="custom-btn btn-tests">Examples</a>
<a href="/publication/p9_lime_stratified/" class="custom-btn btn-paper">Publication</a>
</p>

---

## 🌳 shap-bpt

<img src="https://img.shields.io/pypi/v/shap-bpt">
<img src="https://img.shields.io/pypi/dm/shap-bpt">
<img src="https://img.shields.io/pypi/pyversions/shap-bpt">
<img src="https://img.shields.io/pypi/l/shap-bpt">

### Overview

`shap-bpt` implements **ShapBPT**, a hierarchical image feature attribution method based on **Binary Partition Trees**, introduced at AAAI 2026.

### Features

- Hierarchical Shapley explanations
- Data-aware Binary Partition Trees
- Faster image explanations
- Explainable AI for Computer Vision
- PyPI package
- Comprehensive documentation

### Installation

```bash
pip install shap-bpt
```

### Resources

<p>
<a href="https://pypi.org/project/shap-bpt/" class="custom-btn btn-pypi">PyPI</a>
<a href="https://github.com/amparore/shap_bpt" class="custom-btn btn-code">Source Code</a>
<a href="https://shapbpt.readthedocs.io/en/latest/" class="custom-btn btn-docs">Documentation</a>
<a href="/publication/p12_shapbpt/" class="custom-btn btn-paper">Publication</a>
<a href="https://huggingface.co/spaces/rashidrao/shapbpt-user-study" class="custom-btn btn-demo">Demo</a>
</p>

---

## 📈 Package Statistics

<table class="packages-summary">
<thead>
<tr>
<th>Package</th>
<th>Latest Version</th>
<th>Python</th>
<th>License</th>
<th>Downloads</th>
</tr>
</thead>

<tbody>

<tr>
<td><strong>lime-stratified</strong></td>
<td><span class="pypi-version" data-package="lime-stratified">...</span></td>
<td><span class="pypi-python" data-package="lime-stratified">...</span></td>
<td><span class="pypi-license" data-package="lime-stratified">...</span></td>
<td> <a href="https://pypistats.org/packages/lime-stratified">View downloads</a></td>
</tr>

<tr>
<td><strong>shap-bpt</strong></td>
<td><span class="pypi-version" data-package="shap-bpt">...</span></td>
<td><span class="pypi-python" data-package="shap-bpt">...</span></td>
<td><span class="pypi-license" data-package="shap-bpt">...</span></td>
<td><a href="https://pypistats.org/packages/shap-bpt">View downloads</a></td>
</tr>

</tbody>
</table>

</div>

<script>

document.addEventListener("DOMContentLoaded", async () => {
    async function getDownloads(pkg){
        try{
            const response =
                await fetch(`https://pypistats.org/api/packages/${pkg}/recent`);
            const data = await response.json();
            return data.data.last_month;
        }catch{

            return "—";

        }

    }

    const cache = {};
    
    async function getPackage(pkg){

        if(cache[pkg]) return cache[pkg];

        try{

            const response = await fetch(`https://pypi.org/pypi/${pkg}/json`);
            cache[pkg] = await response.json();

        }catch{

            cache[pkg] = {};

        }

        return cache[pkg];

    }

    for(const element of document.querySelectorAll("[data-package]")){

        const pkg = element.dataset.package;
        const data = await getPackage(pkg);

        if(element.classList.contains("pypi-version")){

            element.textContent = data.info?.version || "—";

        }

        if(element.classList.contains("pypi-python")){
            element.textContent = data.info?.requires_python || "—";

        }

        if(element.classList.contains("pypi-license")){
            element.textContent = data.info?.license || "—";

        }
        if(element.classList.contains("pypi-downloads")){
            const downloads = await getDownloads(pkg);
            element.textContent = downloads.toLocaleString ? downloads.toLocaleString() : downloads;
    }

    }

});
</script>

<style>

.packages-summary{
    width:100%;
    margin-top:1rem;
}

.packages-summary th,
.packages-summary td{
    padding:0.6rem;
}

</style>
