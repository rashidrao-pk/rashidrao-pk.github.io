---
layout: archive
permalink: /projects_old/
title: "Projects & Research Work"
author_profile: true
---

This page highlights selected **research projects, industrial systems, and open-source contributions** spanning **Explainable AI, Computer Vision, Anomaly Detection, and Industrial AI**.

{% assign sorted_projects = site.projects | sort: "date" | reverse %}

{% for post in sorted_projects %}
{% include project-single.html %}
{% endfor %}