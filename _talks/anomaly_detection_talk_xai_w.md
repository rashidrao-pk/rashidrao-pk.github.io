---
title: "Can I Trust My Anomaly Detection System? A Case Study Based on Explainable AI"
collection: talks
type: "Conference Talk"
permalink: /talks/anomaly_detection_talk_xai_w
venue: "Mediterranean Conference Centre"
date: 2024-07-17
location: "La Valletta, Malta"
coordinates: [35.8989, 14.5146]

conference: "XAI 2024 | World Conference on Explainable Artificial Intelligence"
session: "Explainable AI for Improved Human–Computer Interaction"

talkurl: "https://xaiworldconference.com/2024/timetable/event/s-17-a-1/"
paperurl: "https://arxiv.org/abs/2407.19951"
springerurl: "https://link.springer.com/chapter/10.1007/978-3-031-63803-9_13"
codeurl: "https://github.com/rashidrao-pk/anomaly_detection_trust_case_study"
excerpt: "A case study on the trustworthiness of VAE-based anomaly detection systems using Explainable AI, highlighting how high anomaly scores can be driven by misleading visual features."
---

## 🧠 Overview

This talk presents a case study on the **trustworthiness of anomaly detection systems**, focusing on models based on **Variational Autoencoders (VAEs)**.

While reconstruction-based anomaly detection methods often achieve high accuracy, their decision process remains **opaque and potentially misleading**, especially when anomaly scores are influenced by irrelevant or spurious features.

---

## 🔍 Key Idea

Instead of relying only on anomaly scores, this work asks:

> **Can we trust what anomaly detectors are actually learning?**

Using **Explainable AI (XAI)** techniques, the study analyzes the internal behavior of VAE-based models to understand **why certain samples are classified as anomalous**.

---

## ⚠️ Key Findings

- High anomaly scores do **not always correspond to true anomalies**
- Models may rely on **irrelevant visual patterns**
- Reconstruction-based methods can produce **misleading explanations**
- Trust in anomaly detection requires **interpretability**, not only performance

---

## 🔗 Resources

<p>
  <a href="https://arxiv.org/abs/2407.19951" class="custom-btn btn-arxiv">arXiv</a>
  <a href="https://link.springer.com/chapter/10.1007/978-3-031-63803-9_13" class="custom-btn btn-paper">Springer</a>
  <a href="https://github.com/rashidrao-pk/anomaly_detection_trust_case_study" class="custom-btn btn-code">Code</a>
  <a href="https://xaiworldconference.com/2024/timetable/event/s-17-a-1/" class="custom-btn btn-demo">Talk Info</a>
</p>

---

## 🧪 Methodology

- **Model**: Variational Autoencoder (VAE)
- **Task**: Visual anomaly detection
- **Goal**: Explain why reconstruction-based anomaly detectors flag samples as anomalous
- **Analysis**: Reconstruction error versus explanation maps

---

## 🎯 Impact

This work highlights a key limitation of reconstruction-based anomaly detection:

> **Accurate anomaly detection does not necessarily imply trustworthy decision-making.**

It motivates the integration of **Explainable AI** into anomaly detection pipelines, especially for **safety-critical and industrial applications**.

---

## 🏷️ Keywords

Explainable AI · Anomaly Detection · VAE · Trustworthy AI · Feature Attribution · Industrial AI