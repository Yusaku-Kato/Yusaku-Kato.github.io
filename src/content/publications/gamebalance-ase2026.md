---
title: "Where Does Balance Break? Boundary Discovery for Game Balance Testing under a Finite Simulation Budget"
authors: ["Hiroki Mukai", "Yusaku Kato", "Norihiro Yoshida", "Erina Makihara", "Katsuro Inoue"]
venue: "41st IEEE/ACM International Conference on Automated Software Engineering (ASE)"
year: 2026
month: 10
type: "conference"
tags: ["game balance", "search-based testing", "boundary discovery"]
featured: false
bibtex: |
  @inproceedings{10.1145/3832783.3834407,
  author = {Mukai, Hiroki and Kato, Yusaku and Yoshida, Norihiro and Makihara, Erina and Inoue, Katsuro},
  title = {Where Does Balance Break? Boundary Discovery for Game Balance Testing under a Finite Simulation Budget},
  year = {2026},
  isbn = {9798400728822},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3832783.3834407},
  doi = {10.1145/3832783.3834407},
  abstract = {Software testing often relies on assumptions such as reproducible executions and stable correctness criteria.   However, many modern software systems exhibit non-deterministic executions and large behavior spaces, making exhaustive exploration impractical and single-run judgments unreliable.   These characteristics make it difficult to identify where acceptable behavior ends and problematic behavior begins.   Competitive multiplayer games represent a challenging instance of such systems, where balance must be maintained so that no single strategy dominates.   Even small parameter changes can trigger abrupt balance disruption, yet detecting such failures requires repeated simulations under non-deterministic outcomes and high-dimensional parameter spaces.   In this paper, we formulate game balance regression testing as a boundary-discovery problem under a finite simulation budget.   The objective is to efficiently identify inputs near the boundary that separates balanced and unbalanced regions.   To address this problem, we propose BBExplorer, which combines multi-directional candidate generation, budget-aware two-stage screening, and adaptive step-size shrinkage for boundary refinement.   Experimental results on two games with different levels of complexity show that the approach is strong in low-dimensional settings and remains effective in higher-dimensional ones.   It also exhibits stable boundary behavior across unseen random seeds and threshold settings.   These results indicate that BBExplorer is effective for practical balance regression testing and, more broadly, for boundary-oriented testing in non-deterministic, budget-constrained systems.},
  booktitle = {Proceedings of the 41st IEEE/ACM International Conference on Automated Software Engineering},
  pages = {967–979},
  numpages = {13},
  keywords = {Boundary discovery, Game balance, Search-based testing},
  location = {Munich, Germany},
  series = {ASE '26}
  }
---

This paper proposes a boundary discovery approach for game balance testing under a finite simulation budget, aiming to identify the conditions under which game balance breaks.
