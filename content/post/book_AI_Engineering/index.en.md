---
title: '🤖 AI Engineering: The Must-Read Book for Building Intelligent Applications in 2025 📖'
date: 2025-07-04
authors:
  - admin
tags:
  - recommendations
  - 'AI Engineering'
  - 'AI capabilities'
  - 'AI agents'  
  - RAG
  - 'Free and Open Source' 
image:
  caption: "Credit: [**O'Reilly**](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)"
---
Written by Chip Huyen, "[AI Engineering: Building Applications with Foundation Models]((https://www.oreilly.com/library/view/ai-engineering/9781098166298/))" is the top 
book in 2025 for building intelligent applications: implementation essentials, common terminology, and a foundational framework with engineering fundamentals.

<!--more-->
## Overview

If one can only recommend one book in 2025 for building intelligent applications, Chip Huyen’s "[AI Engineering: Building Applications with Foundation Models]((https://www.oreilly.com/library/view/ai-engineering/9781098166298/))" would be the clear top choice.

This book achieves three major goals in summarizing the development of AI applications: (1) generalizing key concepts and implementation essentials, (2) establishing common terminology for AI engineering, and (3) articulating a foundational framework for the engineering of AI-driven applications.

```markmap
 AI Engr.

## 1–3. Apps & Foundation Models

### 🚀 Intro to Building AI Applications

- The Rise of AI Engineering
- Use Cases  
  - Coding  
  - Image & Video Production  
  - Writing  
  - Education  
  - Conversational Bots  
  - Information Aggregation  
  - Data Organization  
  - Workflow Automation  
- Planning  
  - Use Case Evaluation  
  - Setting Expectations  
  - Milestone Planning  
  - Maintenance  
- The AI Engineering Stack  
  - Three Layers  
  - AI Engr. vs. ML Engr.  
  - AI Engr. vs. Full-Stack Engr.  

### 🧠 Understanding

- Training Data  
  - Multilingual Models  
  - Domain-Specific Models  
- Modeling  
  - Architecture  
  - Size  
- Post-Training  
  - Supervised Finetuning  
  - Preference Finetuning  
- Sampling  
  - Fundamentals  
  - Strategies  
  - Test Time Compute  
  - Structured Outputs  
  - Probabilistic Nature of AI  

### 📏 Evaluation Methodology

- Challenges of Evaluating  
- Language Modeling Metrics  
  - Entropy  
  - Cross Entropy  
  - Bits-per-Character & Bits-per-Byte  
  - Perplexity  
  - Interpretation & Use Cases  
- Exact Evaluation  
  - Functional Correctness  
  - Reference Similarity  
  - Embedding Basics  
- AI as a Judge  
  - Why & How  
  - Limitations  
  - Model Candidates  
- Comparative Model Ranking  
  - Challenges  
  - Future Directions  

---

## 4. Eval. AI Systems

### 🧪 Criteria

- Domain-Specific Capability  
- Generation Capability  
- Instruction-Following  
- Cost & Latency  

### 🧭 Model Selection

- Evaluation Workflow  
- Build vs. Buy  
- Benchmark Navigation  

### 🛠️ Evaluation Pipeline

- Step 1: Evaluate Components  
- Step 2: Create Guidelines  
- Step 3: Define Methods & Data  


## 5. Prompt Engr.

### 🎯 Intro to Prompting

- In-Context Learning  
- System vs. User Prompts  
- Context Management  

### ✨ Best Practices

- Clear Instructions  
- Rich Context  
- Task Decomposition  
- Give the Model Time  
- Prompt Iteration  
- Evaluation Tools  
- Organization & Versioning  

### 🛡️ Defensive Strategies

- Proprietary Prompt Protection  
- Jailbreaking & Injection  
- Info Extraction Risks  
- Attack Mitigation  


## 6. RAG & Agents

### 🔍 RAG (Retrieval-Augmented Generation)

- Architecture  
- Algorithms  
- Optimization  
- Beyond Text Content  

### 🤖 Agents

- Tools  
- Planning  
- Failure Modes & Evaluation  

### 🧠 Memory

## 7–10. Finetuning, Optimization, and Feedback

### 🔧 Finetuning

- When to Finetune  
  - Motivations & Alternatives  
  - Finetuning vs. RAG  
- Memory Bottlenecks  
  - Backpropagation  
  - Precision & Quantization  
- Techniques  
  - Parameter Efficiency  
  - Model Merging  
  - Task Specialization  

### 🧱 Dataset Engineering

- Data Curation  
  - Quality, Coverage, Quantity  
  - Annotation Methods  
- Data Augmentation & Synthesis  
  - Traditional vs. AI-Generated  
  - Distillation  
- Processing Pipeline  
  - Inspection  
  - Deduplication  
  - Cleaning & Formatting  

### 🚀 Inference Optimization

- Understanding Metrics  
  - Performance Benchmarks  
  - Hardware Acceleration  
- Optimization  
  - Model-Level  
  - Service-Level  

### 🏗️ Architecture & Feedback

- AI Engineering Architecture  
- User Feedback Loops  

```
{style="max-height: 360px;" id="mindmap"}

### Purpose & Audience

This book is designed as a **practical guide** aimed at engineers, developers, and technical decision-makers. It focuses on delivering **application-oriented** and **implementation-level** knowledge rather than deep academic theory—namely, how to effectively leverage foundation models to build intelligent systems. (See `Preface`)

After reviewing the table of contents, I found that although the book doesn’t include full implementation code, it distills and summarizes all the essential operational knowledge necessary for designing and validating intelligent applications using large language models.

### Key Attributes

The book’s strength (and limitation) lies in its clear commitment to the **model-as-a-service (MaaS)** approach—akin to SaaS, but for LLMs. As such, it won’t walk you through building an AI app with specific tools, but it remains platform-agnostic and broadly applicable.

That makes it a perfect entry point for beginners to grasp both breadth and depth of the field, while also being useful for seasoned engineers seeking to understand adjacent tools, workflows, or compare with alternative products.

This also highlights the book’s value in areas like **technology management** and **AI governance**, abstracting practical engineering lessons from real-world LLM deployment scenarios, and articulating essential engineering concepts around evaluation, prompting, quality assurance, and debugging.

Overall, _AI Engineering_ presents a systematic framework for integrating and refining intelligent systems, and stands out as the most comprehensive reference I’ve seen on CI/CD for AI-driven apps.

### Foundation of AI Engineering: Start with Evaluation

Chapters 1–3 build the groundwork for **evaluation methodologies** by tracing the evolution of foundation models from LLMs and AI applications. The core thesis is: AI engineering is an emerging discipline.

Despite diversity in use cases, development planning shares a common structure: use case evaluation, expectation setting, and maintenance. The book introduces a three-layer AI engineering stack and clearly differentiates AI engineering from ML engineering and full-stack development.

After covering training data (e.g. multilingual or domain-optimized), model parameters (architecture and size), fine-tuning (both supervised and preference-based), and sampling concepts (strategy, inference cost, structured outputs, and probabilistic nature), Chapter 3 dives into evaluation. It outlines classic methods such as accuracy metrics, AI-as-a-judge, and comparative model ranking.

### Whole-System Evaluation and Optimization

Chapter 4 extends evaluation beyond models to entire AI systems, using criteria like domain capability, generation quality, instruction compliance, cost, and latency. It also guides readers through the model selection process and benchmark-driven evaluation workflows.

Chapter 5 covers prompt engineering—zero-shot, few-shot, and system prompts—plus how to manage context and optimize prompt clarity and structure. It includes best practices and defense strategies against prompt injection and adversarial use.

### Agents, Finetuning, and Data Engineering

Chapter 6 introduces Retrieval-Augmented Generation (RAG) and autonomous agents, including retrieval architecture, planning tools, and evaluation techniques. Chapter 7 outlines when and why to finetune, memory bottlenecks, quantization, and parameter-efficient strategies.

Chapter 8 focuses on data curation—quality, coverage, scale, and labeling—plus synthetic data generation and distillation methods. It also advises on pipelines for deduplication, cleaning, transformation, and formatting.

### Inference & Architecture

Chapter 9 highlights inference optimization, including performance metrics, hardware accelerators, and model/service-level improvements.

Chapter 10 addresses AI architecture and user feedback loops, emphasizing iterative development and human-AI collaboration.

## Initial Impressions

Because the book distills such a practical framework for AI app development, it’s an ideal reference for both students and managers navigating the 2025 AI landscape. It’s useful for quickly understanding core concepts and best practices.

For industry or government leaders, it offers vendor-neutral, standardized terminology that can inform policies, proposals, and tech documentation. For educators and curriculum designers, its engineering insights can inspire new ways to evaluate concepts, tasks, and data across disciplines.

---