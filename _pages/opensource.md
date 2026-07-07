---
layout: single
title: "Open Source Contributions"
permalink: /opensource/
---

<!-- <div class="section-box section-box-opensource" markdown="1"> -->

<!-- # Open Source Contributions -->

Selected contributions to open-source machine learning, anomaly detection, explainable AI, and data science software.

## 🚀 Contribution Summary

<table class="opensource-summary">
<thead>
<tr>
<th>Repository</th>
<th>Organization</th>
<th>⭐ Stars</th>
<th>💻 Language</th>
<th>Contribution</th>
<th>Status</th>
<th>Links</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/open-edge-platform/anomalib"><strong>Anomalib</strong></a></td>
<td>Open Edge Platform</td>
<td><span class="github-stars" data-repo="open-edge-platform/anomalib">...</span></td>
<td><span class="github-language" data-repo="open-edge-platform/anomalib">...</span></td>
<td>PatchCore documentation</td>
<td>✅ Merged</td>
<td><a href="https://github.com/open-edge-platform/anomalib/pull/3630">PR</a></td>
</tr>

<tr>
<td><a href="https://github.com/microsoft/FLAML"><strong>FLAML</strong></a></td>
<td>Microsoft</td>
<td><span class="github-stars" data-repo="microsoft/FLAML">...</span></td>
<td><span class="github-language" data-repo="microsoft/FLAML">...</span></td>
<td>Anomaly detection support</td>
<td>🚧 In Progress</td>
<td><a href="https://github.com/microsoft/FLAML/issues/413">Issue</a></td>
</tr>

<tr>
<td><a href="https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science"><strong>Awesome Python for Data Science</strong></a></td>
<td>Data-Centric AI Community</td>
<td><span class="github-stars" data-repo="Data-Centric-AI-Community/awesome-python-for-data-science">...</span></td>
<td><span class="github-language" data-repo="Data-Centric-AI-Community/awesome-python-for-data-science">...</span></td>
<td>Anomaly detection tutorial</td>
<td>✅ Merged</td>
<td><a href="https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science/pull/42">PR</a></td>
</tr>

<tr>
<td><a href="https://github.com/Lightning-AI/pytorch-lightning"><strong>PyTorch Lightning</strong></a></td>
<td>Lightning AI</td>
<td><span class="github-stars" data-repo="Lightning-AI/pytorch-lightning">...</span></td>
<td><span class="github-language" data-repo="Lightning-AI/pytorch-lightning">...</span></td>
<td>Examples and discussions</td>
<td>💬 Discussion</td>
<td><a href="https://github.com/Lightning-AI/pytorch-lightning">Repo</a></td>
</tr>

<tr>
<td><a href="https://github.com/scikit-learn/scikit-learn"><strong>scikit-learn</strong></a></td>
<td>scikit-learn</td>
<td><span class="github-stars" data-repo="scikit-learn/scikit-learn">...</span></td>
<td><span class="github-language" data-repo="scikit-learn/scikit-learn">...</span></td>
<td>Future contributions</td>
<td>🎯 Planned</td>
<td><a href="https://github.com/scikit-learn/scikit-learn">Repo</a></td>
</tr>

<tr>
<td><a href="https://github.com/yzhao062/pyod"><strong>PyOD</strong></a></td>
<td>PyOD</td>
<td><span class="github-stars" data-repo="yzhao062/pyod">...</span></td>
<td><span class="github-language" data-repo="yzhao062/pyod">...</span></td>
<td>Future contributions</td>
<td>🎯 Planned</td>
<td><a href="https://github.com/yzhao062/pyod">Repo</a></td>
</tr>
</tbody>
</table>

<div id="opensource-cards"></div>

<!-- </div> -->

<script>
const contributions = [
  {
    repo: "open-edge-platform/anomalib",
    org: "Open Edge Platform",
    contribution: "PatchCore backbone documentation and usage improvements",
    type: "Documentation",
    status: "✅ Merged",
    pr: "https://github.com/open-edge-platform/anomalib/pull/3630",
    issue: "",
    tags: ["Anomaly Detection", "Computer Vision", "PyTorch", "PatchCore"]
  },
  {
    repo: "microsoft/FLAML",
    org: "Microsoft",
    contribution: "Anomaly detection support, tests, and implementation work",
    type: "Feature Development",
    status: "🚧 In Progress",
    pr: "",
    issue: "https://github.com/microsoft/FLAML/issues/413",
    tags: ["AutoML", "Anomaly Detection", "Testing", "Python"]
  },
  {
    repo: "Data-Centric-AI-Community/awesome-python-for-data-science",
    org: "Data-Centric AI Community",
    contribution: "Added anomaly detection tutorial and related documentation",
    type: "Tutorial",
    status: "✅ Merged",
    pr: "https://github.com/Data-Centric-AI-Community/awesome-python-for-data-science/pull/42",
    issue: "",
    tags: ["Data Science", "Education", "Tutorial", "Anomaly Detection"]
  },
  {
    repo: "Lightning-AI/pytorch-lightning",
    org: "Lightning AI",
    contribution: "Example improvements and anomaly detection discussions",
    type: "Examples / Discussion",
    status: "💬 Discussion",
    pr: "",
    issue: "",
    tags: ["PyTorch", "Lightning", "Deep Learning", "Examples"]
  },
  {
    repo: "scikit-learn/scikit-learn",
    org: "scikit-learn",
    contribution: "Future contribution target for ML examples and documentation",
    type: "Planned",
    status: "🎯 Planned",
    pr: "",
    issue: "",
    tags: ["Machine Learning", "Python", "Documentation"]
  },
  {
    repo: "yzhao062/pyod",
    org: "PyOD",
    contribution: "Future contribution target for anomaly detection examples and benchmarks",
    type: "Planned",
    status: "🎯 Planned",
    pr: "",
    issue: "",
    tags: ["Anomaly Detection", "Outlier Detection", "Python"]
  }
];

function formatNumber(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num;
}

async function fetchRepoData(repo, cache) {
  if (!cache[repo]) {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      cache[repo] = await res.json();
    } catch {
      cache[repo] = {};
    }
  }
  return cache[repo];
}

async function fillSummaryTable(cache) {
  const elements = document.querySelectorAll("[data-repo]");

  for (const el of elements) {
    const repo = el.dataset.repo;
    const data = await fetchRepoData(repo, cache);

    if (el.classList.contains("github-stars")) {
      el.textContent =
        data.stargazers_count !== undefined
          ? formatNumber(data.stargazers_count)
          : "—";
    }

    if (el.classList.contains("github-language")) {
      el.textContent = data.language || "—";
    }
  }
}

async function loadGitHubCards(cache) {
  const container = document.getElementById("opensource-cards");

  for (const item of contributions) {
    const data = await fetchRepoData(item.repo, cache);

    const repoName = item.repo.split("/")[1];
    const repoUrl = `https://github.com/${item.repo}`;
    const description = data.description || "Open-source software repository.";
    const stars = data.stargazers_count !== undefined ? formatNumber(data.stargazers_count) : "—";
    const forks = data.forks_count !== undefined ? formatNumber(data.forks_count) : "—";
    const language = data.language || "—";
    const updated = data.updated_at ? new Date(data.updated_at).toLocaleDateString() : "—";
    const avatar = data.owner && data.owner.avatar_url ? data.owner.avatar_url : "";

    const prButton = item.pr
      ? `<a href="${item.pr}" class="custom-btn btn-code">Pull Request</a>`
      : "";

    const issueButton = item.issue
      ? `<a href="${item.issue}" class="custom-btn btn-tests">Issue</a>`
      : "";

    const tags = item.tags.map(tag => `<span class="os-tag">${tag}</span>`).join("");

    container.innerHTML += `
      <div class="os-card">
        <div class="os-card-header">
          ${avatar ? `<img src="${avatar}" class="os-avatar" alt="${item.org} logo">` : ""}
          <div>
            <h2><a href="${repoUrl}">${repoName}</a></h2>
            <p><strong>${item.org}</strong></p>
          </div>
        </div>

        <p>${description}</p>

        <div class="os-stats">
          <span>⭐ ${stars}</span>
          <span>🍴 ${forks}</span>
          <span>💻 ${language}</span>
          <span>📅 Updated ${updated}</span>
        </div>

        <p><strong>My contribution:</strong> ${item.contribution}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Status:</strong> ${item.status}</p>

        <div class="os-tags">${tags}</div>

        <p>
          <a href="${repoUrl}" class="custom-btn btn-paper">Repository</a>
          ${prButton}
          ${issueButton}
        </p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const repoCache = {};
  await fillSummaryTable(repoCache);
  await loadGitHubCards(repoCache);
});
</script>

<style>
.opensource-summary {
  width: 100%;
  font-size: 0.92rem;
  margin-bottom: 1.5rem;
}

.opensource-summary th,
.opensource-summary td {
  padding: 0.55rem;
  vertical-align: top;
}

.os-card {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.2rem;
  margin: 1.2rem 0;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.os-card-header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.8rem;
}

.os-card-header h2 {
  margin: 0;
}

.os-card-header p {
  margin: 0.2rem 0 0;
}

.os-avatar {
  width: 52px;
  height: 52px;
  border-radius: 12px;
}

.os-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0.8rem 0;
  font-size: 0.9rem;
}

.os-stats span {
  background: #f3f4f6;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

.os-tags {
  margin: 0.7rem 0 1rem;
}

.os-tag {
  display: inline-block;
  background: #eef2ff;
  color: #3730a3;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  font-size: 0.8rem;
  margin: 0.15rem;
}
</style>
