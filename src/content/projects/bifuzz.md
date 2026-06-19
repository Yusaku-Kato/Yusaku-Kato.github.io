---
title: "BiFuzz"
summary: "A two-stage fuzzing tool for open-world video games to detect character stuck issues."
period: "2024–2025"
role: "Lead Developer"
technologies: ["C#", "Unity", "Fuzzing"]
links:
  - label: "GitHub"
    url: "https://github.com/Yusaku-Kato/BiFuzz"
featured: true
---

BiFuzz is an automated testing tool designed to detect bugs and character "stuck" failures in open-world video games developed using the Unity engine.

### Key Features
- **Two-Stage Fuzzing Process**: Employs **Global Fuzzing (GF)** to sequence player movement keypoints and **Local Fuzzing (LF)** to refine path details with waypoints.
- **Unity Integration**: Runs directly in the Unity Editor as component scripts attached to game objects.
- **Automated Issue Detection**: Significantly reduces manual playtesting costs by mutating movement inputs to find issues.
