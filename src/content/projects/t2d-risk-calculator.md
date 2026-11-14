---
title: T2D Risk Calculator
description: An AI-powered web application that integrates clinical records, genetic data, and medical imaging to predict personalized Type 2 Diabetes (T2D) risk, with SMART on FHIR integration for hospital systems. Developed at Academia Sinica.
heroImage: /images/projects/t2d.jpg
category: AI & ML
order: 0
featured: true
award: "Taiwan SMART 50 Award"
report: https://thas.mohw.gov.tw/news/e476dd00-c9b3-4512-a7f8-ea46ce0a224a
tags:
  - "Medical AI"
  - "Precision Medicine"
  - "XGBoost"
  - "SMART on FHIR"
  - "Polygenic Risk Score"
  - "Multimodal Imaging"
---

Developed at the **Institute of Statistical Science, Academia Sinica**, during my Research Assistant role. The system is a precision risk-assessment tool for Type 2 Diabetes that combines **demographic information, genetic data, and medical imaging**. It's ready-to-plug into existing hospital information systems through **SMART on FHIR**, retrieves patient data automatically, and returns a personalized risk classification with visual analytics **within three seconds**.

## Highlights

- **AI risk engine:** an **XGBoost** model trained on **68,000 Taiwan Biobank participants**, using genetic microarray data optimized for Taiwanese and Han Chinese populations, reaching an **AUC of up to 0.95**. The underlying research is published in *Nature Communications*.
- **Two configurations:**
  - **Basic:** uses routine clinical information (e.g. age, sex, family history) to estimate 3-, 5-, and 7-year risk, shown as low / medium / high on an interactive dashboard with age-matched comparisons.
  - **Advanced:** adds imaging from hospital PACS (abdominal ultrasound, bone density, ECG, carotid ultrasound) to build a **Multimodal Imaging Risk Score (MRS)**, plus a **Polygenic Risk Score (PRS)** for inherited susceptibility.
- **Interoperability:** a RESTful backend on **FHIR R4** (Patient, Observation, DiagnosticReport, DocumentReference) with **OAuth 2.0** SMART launch, a responsive JavaScript frontend for desktop, tablet, and mobile, and downloadable PDF reports.
- **Clinical impact:** designed for health examination centers and hospitals to flag high-risk and prediabetic individuals early, supporting lifestyle intervention, clinical management, and better allocation of preventive care.

## Recognition & Related Reports

- Selected for **Taiwan SMART 50**, featured by the Ministry of Health and Welfare's Taiwan Health Application Space: [臺灣 SMART 50｜第二型糖尿病風險計算機](https://thas.mohw.gov.tw/news/e476dd00-c9b3-4512-a7f8-ea46ce0a224a)
- Featured post on Facebook: [View post](https://www.facebook.com/permalink.php?story_fbid=pfbid02A7gMKbZGoN5nJu1Adc9e9qWb5FNSUTJgH8ukWCY2DbX9wiP89LLbBg2cry9XdQNFl&id=61584176884898)
