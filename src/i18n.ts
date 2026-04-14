import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        howItWorks: "How it Works",
        features: "Features",
        installation: "Installation",
        workflow: "Workflow",
        skills: "Skills",
        docs: "Docs",
        getStarted: "Get Started",
        backToHome: "Back to Home"
      },
      hero: {
        badge: "v2.0: The Agentic Skills Framework",
        title1: "SUPERPOWERS:",
        title2: "AGENTIC SKILLS",
        title3: "THAT WORK",
        desc: "An agentic skills framework & software development methodology that actually works. Superpowers gives your AI agents a standardized toolkit to handle complex engineering tasks with precision.",
        installBtn: "Install Now",
        githubBtn: "Star on GitHub"
      },
      howItWorks: {
        title: "HOW IT WORKS",
        subtitle: "Superpowers bridges the gap between raw AI potential and production-ready engineering.",
        step1Title: "Standardized Skills",
        step1Desc: "A library of pre-built, audited skills that agents can call upon to perform specific, high-value tasks.",
        step2Title: "Agentic Methodology",
        step2Desc: "A software development methodology designed for a world where AI agents are primary contributors.",
        step3Title: "Universal Compatibility",
        step3Desc: "Works across all major AI coding tools, ensuring your agents have the same \"Superpowers\" everywhere."
      },
      features: {
        title: "BUILT FOR THE MODERN DEVELOPER",
        desc: "Stop wasting time on repetitive tasks. Superpowers provides a curated collection of utilities that integrate seamlessly into your shell.",
        stats: "Used by 2,000+ devs",
        methodologyTag: "METHODOLOGY",
        methodologyTitle: "Agentic Skills Framework",
        methodologyDesc: "Superpowers isn't just a tool; it's a methodology. It provides a structured way to give AI agents the specific skills they need to handle complex software development tasks.",
        methodologyList: ["Standardized Skill Library", "Agent-First Design", "Scalable Methodology"],
        multiPlatformTitle: "Multi-Platform",
        multiPlatformDesc: "Native support for Claude Code, Cursor, Copilot, and Gemini CLI.",
        methodologyFirstTitle: "Methodology First",
        methodologyFirstDesc: "Built on a philosophy of making AI agents more reliable and capable."
      },
      installation: {
        title: "INSTALLATION & SETUP",
        subtitle: "Superpowers supports all major AI development environments.",
        claudeTitle: "Claude Code",
        claudeDesc: "Install directly from the Official Marketplace or the community Plugin Marketplace.",
        cursorTitle: "Cursor",
        cursorDesc: "Enable Superpowers in Cursor via the Plugin Marketplace for seamless agentic integration.",
        cliTitle: "CLI Tools",
        cliDesc: "Native support for GitHub Copilot CLI, Gemini CLI, Codex, and OpenCode.",
        verifyTitle: "Verify Your Superpowers",
        verifyDesc: "Always verify your installation to ensure all skills are correctly linked and ready for your agents."
      },
      comparison: {
        title: "WHY CHOOSE SUPERPOWERS?",
        oldWay: "The Old Way",
        oldList: [
          "Unreliable AI agent behavior",
          "Manual prompt engineering for every task",
          "Fragmented developer workflows",
          "Lack of standardized AI toolsets"
        ],
        newWay: "The Superpowers Way",
        newList: [
          "Predictable, high-performance agent skills",
          "Standardized methodology for AI development",
          "Seamless integration across multiple AI platforms",
          "Scalable framework for team collaboration"
        ]
      },
      workflow: {
        title: "THE BASIC WORKFLOW",
        subtitle: "Simple, repeatable, and powerful.",
        step1: "Initialize",
        step1Desc: "Run 'sp init' in your project root to prepare the environment.",
        step2: "Select Skills",
        step2Desc: "Choose from the library or create custom skills for your agent.",
        step3: "Empower",
        step3Desc: "Agents automatically use the skills to solve complex tasks.",
        step4: "Iterate",
        step4Desc: "Refine skills as your project grows and agents evolve."
      },
      skills: {
        title: "SKILLS LIBRARY",
        badge: "50+ Skills & Counting",
        skill1: "Code Architect",
        skill1Desc: "Advanced project scaffolding and structural design skills.",
        skill2: "Git Master",
        skill2Desc: "Complex rebase, merge conflict resolution, and history management.",
        skill3: "Test Engineer",
        skill3Desc: "Automated unit, integration, and E2E test generation.",
        skill4: "Security Auditor",
        skill4Desc: "Real-time vulnerability scanning and patch suggestion.",
        skill5: "DevOps Hero",
        skill5Desc: "CI/CD pipeline optimization and cloud deployment skills.",
        skill6: "Docs Generator",
        skill6Desc: "Automatic, high-quality documentation from code analysis."
      },
      philosophy: {
        title: "PHILOSOPHY",
        quote: "\"We believe that AI agents are not just assistants, but primary contributors. Superpowers provides the framework to make that contribution reliable, scalable, and powerful.\"",
        tags: ["Open Source", "Agent-First", "Community Driven"]
      },
      docs: {
        title: "Documentation",
        overview: "Overview",
        tutorials: "Tutorials",
        gettingStarted: "Getting Started",
        buildSkill: "Building a Skill",
        superpowersEngineering: "Engineering with Superpowers",
        content: `
# SUPERPOWERS

An agentic skills framework & software development methodology that actually works.

Superpowers gives your AI agents a standardized toolkit to handle complex engineering tasks with precision.

## Why Superpowers?

AI agents are powerful, but they often lack the specific, reliable tools needed for production-grade software engineering. Superpowers bridges this gap by providing:

- **Standardized Skills**: A library of pre-built, audited skills.
- **Agentic Methodology**: A workflow designed for AI-first development.
- **Universal Compatibility**: Works with Claude Code, Cursor, and more.

## Installation

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Enable via the Plugin Marketplace.

### Manual Setup
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Core Skills

### 1. Code Architect
Advanced project scaffolding and structural design.

### 2. Git Master
Complex rebase and merge conflict resolution.

### 3. Test Engineer
Automated unit and E2E test generation.

## Usage

Initialize Superpowers in your project:
\`\`\`bash
sp init
\`\`\`

Verify your installation:
\`\`\`bash
sp verify
\`\`\`

## Philosophy

We believe that AI agents are not just assistants, but primary contributors. Superpowers provides the framework to make that contribution reliable, scalable, and powerful.
`,
        gettingStartedContent: `
# Getting Started: Your First 5 Minutes

This tutorial covers the essential steps to get Superpowers running in your local development environment.

![Terminal Setup](https://picsum.photos/seed/setup/800/400)
*Figure 1: Initializing the Superpowers environment via CLI.*

## 1. Environment Preparation

Ensure you have the latest version of Node.js and a supported AI IDE (like Cursor or VS Code with Claude Code) installed.

\`\`\`bash
# Check version
node -v
\`\`\`

## 2. Global Installation

Install the Superpowers CLI globally to access the \`sp\` command from anywhere.

\`\`\`bash
npm install -g @superpowers/cli
\`\`\`

## 3. Project Initialization

Navigate to your project root and run the initialization command. This creates a \`.superpowers\` configuration directory.

\`\`\`bash
cd your-project
sp init
\`\`\`

![Project Structure](https://picsum.photos/seed/structure/800/400)
*Figure 2: The generated .superpowers directory structure.*

## 4. Linking Your First Skill

By default, Superpowers includes a set of "Base Skills". Link the \`refactor\` skill to your current session:

\`\`\`bash
sp link refactor
\`\`\`

## 5. Verification

Run the verification suite to ensure your AI agent can communicate with the linked skills.

\`\`\`bash
sp verify
\`\`\`

If everything is green, your agent is now "Superpowered".
`,
        buildSkillContent: `
# Advanced: Building a Production-Ready Skill

Learn how to encapsulate complex engineering patterns into reusable agentic skills.

![Skill Architecture](https://picsum.photos/seed/architecture/800/400)
*Figure 1: Detailed breakdown of a Skill's internal components.*

## The Skill Anatomy

A Skill consists of three main parts:
1. **Metadata**: Defines the skill name and version.
2. **Instructions (SKILL.md)**: The core logic for the AI.
3. **Tools (scripts/)**: Executable scripts the AI can call.

## Step 1: Scaffold the Skill

Use the CLI to generate a new skill template:

\`\`\`bash
sp create skill my-security-auditor
\`\`\`

## Step 2: Writing Effective Instructions

Open \`skills/my-security-auditor/SKILL.md\`. Avoid generic prompts. Instead, use **Constraint-Based Engineering**:

\`\`\`markdown
# Security Auditor
## Constraints
- NEVER suggest exposing environment variables.
- ALWAYS check for SQL injection patterns in raw queries.
- PREFER parameterized queries over string concatenation.
\`\`\`

![Code Editor](https://picsum.photos/seed/editor/800/400)
*Figure 2: Implementing strict constraints in the SKILL.md file.*

## Step 3: Implementing Tooling

If your skill needs to run a specific security scanner, place the script in the \`scripts/\` directory.

\`\`\`python
# skills/my-security-auditor/scripts/scan.py
import subprocess

def run_scan():
    # Logic to run bandit or other scanners
    pass
\`\`\`

## Step 4: Testing the Skill

Test your skill against a known vulnerable codebase to verify the agent's response.

\`\`\`bash
sp test --skill my-security-auditor --target ./vulnerable-app
\`\`\`

![Test Results](https://picsum.photos/seed/test/800/400)
*Figure 3: Analyzing agent performance and accuracy during testing.*
`,
        superpowersEngineeringContent: `
# Claude Code Superpowers: Engineering-Grade Development

## Introduction to Superpowers

**Superpowers** is an open-source agentic skills framework developed by Jesse Vincent (obra). It specifically addresses a core problem in AI programming: how to make AI write "engineering-grade" code rather than "toy-grade" code.

Imagine a standard AI coding assistant as a "smart intern"—it can write code that runs, but it might lack tests, documentation, or adherence to best practices. Superpowers is like pairing that intern with a "senior engineer mentor" who enforces a complete software development lifecycle.

### Why Superpowers?

Before Superpowers, using Claude Code had several issues:
- **Vibe Coding Chaos**: AI starts writing code directly without a plan, leading to frequent rework.
- **Lack of TDD Discipline**: AI tends to write code first and tests later (or not at all).
- **Vague Requirements**: AI starts implementing based on ambiguous requests, resulting in unwanted features.
- **Unstable Code Quality**: Quality depends on the AI's "mood" without a review mechanism.

Superpowers solves these by turning Claude into a "disciplined dev team"—clarifying requirements first, then planning, then developing with TDD, and finally ensuring quality through code reviews.

---

## Quick Start

### Step 1: Install Superpowers
In Claude Code, run:
\`\`\`bash
# Add marketplace
/plugin marketplace add obra/superpowers-marketplace

# Install superpowers
/plugin install superpowers@superpowers-marketplace
\`\`\`
Or clone manually:
\`\`\`bash
git clone https://github.com/obra/superpowers.git ~/.claude/skills/superpowers
\`\`\`

### Step 2: Experience Your First Skill
Try the **brainstorming** skill. In Claude Code, type:
"I want to build a user login feature."

**Without Superpowers**: Claude might start coding immediately.
**With Superpowers**: Claude will ask Socratic questions to clarify:
- Is this for Web or Mobile?
- Which login methods? (Email, Google, GitHub?)
- Do you need "Remember Me"?
- Password reset via email or SMS?

### Step 3: Understand Trigger Mechanisms
Superpowers skills trigger in three ways:
1. **Keywords**: Mentioning "TDD" or "test-driven" activates the \`test-driven-development\` skill.
2. **Context**: Ambiguous requests trigger \`brainstorming\`; bugs trigger \`systematic-debugging\`.
3. **Manual**: Call directly using \`/test-driven-development\`.

---

## Core Skills Explained

### 🧪 Testing Skills
#### test-driven-development
Enforces the RED-GREEN-REFACTOR cycle.

### 🐛 Debugging Skills
#### systematic-debugging
Uses a four-stage root cause analysis: Reproduce -> Isolate -> Hypothesize -> Fix & Verify.

### 🤝 Collaboration Skills
#### brainstorming
Clarifies requirements through Socratic questioning.
#### writing-plans
Breaks large tasks into 2-5 minute sub-tasks.
#### executing-plans
Executes plans with checkpoints for confirmation.

---

## Full Workflow
1. **Brainstorming**: Clarify requirements.
2. **Design Document**: Present design for confirmation.
3. **Writing Plans**: Break down into small tasks.
4. **Subagent Development**: Independent agents for each task.
5. **TDD**: RED-GREEN-REFACTOR cycle.
6. **Code Review**: Quality assurance.
7. **Completion**.

---

## Best Practices
1. **Clear Keywords**: Use "TDD" or "Plan" to trigger specific skills.
2. **Enforce Discipline**: Use Superpowers for production-grade code.
3. **Combine Skills**: "Implement user auth using TDD and review it."

---

## Summary
Superpowers doesn't make AI smarter; it makes AI more disciplined.
`
      },
      guide: {
        title: "User Guide",
        subtitle: "A deep dive into the Agentic Skills Framework architecture and best practices.",
        seoTitle: "Advanced User Guide | Superpowers Agentic Framework",
        seoDesc: "Master the Superpowers framework. Learn about tool-use loops, context management, and building high-performance agentic workflows.",
        content: `
# Advanced User Guide: The Agentic Paradigm

Superpowers is not just a tool; it's a fundamental shift in how we interact with Large Language Models (LLMs) for software engineering. This guide explores the architectural principles and advanced strategies for building reliable agentic workflows.

## 1. The Shift from Chat to Agents

Traditional AI interactions are **conversational** (stateless, one-off prompts). Superpowers enables **agentic** behavior, characterized by:
- **Autonomy**: The ability to plan and execute multi-step tasks.
- **Tool-Use**: Interacting with the external world (file systems, APIs, compilers).
- **Self-Correction**: Analyzing errors and iterating on solutions without human intervention.

## 2. Skill-Based Architecture

A "Skill" in Superpowers is a modular unit of capability. It encapsulates:
- **System Instructions**: High-precision directives that define the agent's persona and constraints.
- **Tool Definitions**: JSON schemas that describe executable functions (scripts).
- **Knowledge Base**: Contextual data or documentation specific to the domain.

### Best Practice: Granularity
Avoid "God Skills". Instead of a single \`web-developer\` skill, break it down into \`css-architect\`, \`react-hooks-expert\`, and \`api-integrator\`. This reduces context noise and improves accuracy.

## 3. Mastering the Tool-Use Loop

The core of an agentic workflow is the **Observation-Thought-Action** loop:
1. **Thought**: The agent analyzes the current state and plans the next move.
2. **Action**: The agent calls a tool (e.g., \`edit_file\`).
3. **Observation**: The system returns the result of the tool execution (e.g., "File updated" or "Syntax error").
4. **Iteration**: The agent processes the observation and updates its plan.

## 4. Context Management Strategies

LLMs have finite context windows. To maintain high performance:
- **Selective Linking**: Only activate skills relevant to the immediate objective.
- **State Summarization**: Use agents to periodically summarize long-running task states to free up context.
- **Cache Management**: Leverage the \`.superpowers/cache\` to store expensive computation results.

## 5. Advanced Agentic Patterns

To achieve production-grade reliability, Superpowers supports several advanced patterns:

### Reflection & Self-Correction
Don't just take the first answer. Configure your skills to require a "Review" step where the agent (or a second "Critic" agent) analyzes the output against the original requirements.

### Dynamic Planning
For open-ended tasks, use the \`Planner\` skill. The agent will first generate a task list, which you can review before execution begins.

### Multi-Agent Orchestration
Superpowers allows you to define "Handoff" points. For example, a \`Security Agent\` can pass a verified patch to a \`DevOps Agent\` for deployment.

## 6. Security & Sandboxing

When agents generate and execute code, security is paramount.
- **Restricted Environments**: Run agents in containers or sandboxed environments.
- **Human-in-the-Loop (HITL)**: For high-risk operations (e.g., deleting production data), always require manual confirmation.
- **Audit Logs**: Every tool call is logged in \`.superpowers/logs\` for post-execution analysis.

---

*For technical support or to contribute to the framework, visit our [GitHub Repository](https://github.com/obra/superpowers).*
`
      },
      useCases: {
        title: "Use Cases",
        subtitle: "Real-world applications of autonomous agents in complex engineering environments.",
        seoTitle: "Agentic Workflows Use Cases | Superpowers",
        seoDesc: "Explore how industry leaders use Superpowers for legacy migration, automated security, and intelligent infrastructure management.",
        content: `
# Engineering Use Cases: Autonomous Intelligence

Superpowers excels in scenarios where complexity and scale exceed human manual capacity. Here is how teams are leveraging the framework today.

## 1. Automated Technical Debt Reduction
**The Problem**: A legacy codebase with 500+ files using deprecated patterns (e.g., migrating from Class components to React Hooks).
**The Solution**: An agent equipped with the \`Refactor\` and \`AST-Parser\` skills. The agent systematically traverses the dependency graph, identifies patterns, applies transformations, and runs unit tests to verify each change.
**Outcome**: Migration completed in 4 hours instead of 3 weeks, with 100% type safety.

## 2. Continuous Security Intelligence
**The Problem**: Security vulnerabilities are often caught too late in the CI/CD pipeline.
**The Solution**: Integrating the \`Security Auditor\` skill directly into the developer's local environment. As the agent writes code, it performs real-time static analysis and cross-references with CVE databases.
**Outcome**: 80% reduction in security-related PR rejections.

## 3. Intelligent Infrastructure Provisioning
**The Problem**: Managing complex Terraform/Pulumi configurations across multiple cloud providers.
**The Solution**: Using the \`Cloud Architect\` skill. The agent can interpret high-level requirements (e.g., "Deploy a scalable k8s cluster in AWS with RDS") and generate the corresponding IaC, validate it against policy-as-code (OPA), and execute the deployment.
**Outcome**: Zero-configuration infrastructure management for developers.

## 4. Self-Healing Documentation
**The Problem**: Documentation is perpetually out of sync with the implementation.
**The Solution**: A background agent that monitors file changes. When a function signature or API endpoint changes, the agent uses the \`Doc-Gen\` skill to update the relevant Markdown files and internal wikis.
**Outcome**: Documentation that is always a "source of truth," reducing developer onboarding time by 40%.
`
      },
      footer: {
        copy: "© 2026 Superpowers Project. Open source under MIT License.",
        download: "Download",
        disclaimer: "Disclaimer: This site is a reference to the Superpowers GitHub repository and is not affiliated with the original author."
      }
    }
  },
  zh: {
    translation: {
      nav: {
        howItWorks: "工作原理",
        features: "特性",
        installation: "安装",
        workflow: "工作流",
        skills: "技能库",
        docs: "文档",
        getStarted: "立即开始",
        backToHome: "返回首页"
      },
      hero: {
        badge: "v2.0: 智能体技能框架",
        title1: "SUPERPOWERS:",
        title2: "真正有效的",
        title3: "智能体技能",
        desc: "一个真正有效的智能体技能框架和软件开发方法论。Superpowers 为您的 AI 智能体提供标准化工具包，以精确处理复杂的工程任务。",
        installBtn: "立即安装",
        githubBtn: "GitHub 点星"
      },
      howItWorks: {
        title: "工作原理",
        subtitle: "Superpowers 弥合了原始 AI 潜力和生产就绪工程之间的鸿沟。",
        step1Title: "标准化技能",
        step1Desc: "预构建且经过审计的技能库，智能体可以调用它们来执行特定的高价值任务。",
        step2Title: "智能体方法论",
        step2Desc: "专为 AI 智能体作为主要贡献者的世界而设计的软件开发方法论。",
        step3Title: "广泛兼容性",
        step3Desc: "支持所有主流 AI 编程工具，确保您的智能体在任何地方都拥有相同的“超能力”。"
      },
      features: {
        title: "为现代开发者打造",
        desc: "停止在重复性任务上浪费时间。Superpowers 提供了一系列精心挑选的实用程序，可无缝集成到您的终端中。",
        stats: "2,000+ 开发者已使用",
        methodologyTag: "方法论",
        methodologyTitle: "智能体技能框架",
        methodologyDesc: "Superpowers 不仅仅是一个工具；它是一种方法论。它提供了一种结构化的方式，为 AI 智能体提供处理复杂软件开发任务所需的特定技能。",
        methodologyList: ["标准化技能库", "智能体优先设计", "可扩展的方法论"],
        multiPlatformTitle: "多平台支持",
        multiPlatformDesc: "原生支持 Claude Code, Cursor, Copilot 和 Gemini CLI。",
        methodologyFirstTitle: "方法论优先",
        methodologyFirstDesc: "基于使 AI 智能体更可靠、更强大的哲学理念构建。"
      },
      installation: {
        title: "安装与设置",
        subtitle: "Superpowers 支持所有主流 AI 开发环境。",
        claudeTitle: "Claude Code",
        claudeDesc: "直接从官方市场或社区插件市场安装。",
        cursorTitle: "Cursor",
        cursorDesc: "通过插件市场在 Cursor 中启用 Superpowers，实现无缝智能体集成。",
        cliTitle: "命令行工具",
        cliDesc: "原生支持 GitHub Copilot CLI、Gemini CLI、Codex 和 OpenCode。",
        verifyTitle: "验证您的超能力",
        verifyDesc: "始终验证您的安装，以确保所有技能都已正确链接并为您的智能体做好准备。"
      },
      comparison: {
        title: "为什么选择 SUPERPOWERS？",
        oldWay: "传统方式",
        oldList: [
          "不可预测的 AI 智能体行为",
          "为每个任务手动进行提示词工程",
          "碎片化的开发工作流",
          "缺乏标准化的 AI 工具集"
        ],
        newWay: "Superpowers 方式",
        newList: [
          "可预测、高性能的智能体技能",
          "标准化的 AI 开发方法论",
          "跨多个 AI 平台的无缝集成",
          "适用于团队协作的可扩展框架"
        ]
      },
      workflow: {
        title: "基础工作流",
        subtitle: "简单、可重复且强大。",
        step1: "初始化",
        step1Desc: "在项目根目录运行 'sp init' 以准备环境。",
        step2: "选择技能",
        step2Desc: "从库中选择或为您的智能体创建自定义技能。",
        step3: "赋能",
        step3Desc: "智能体自动使用技能来解决复杂任务。",
        step4: "迭代",
        step4Desc: "随着项目增长和智能体进化，不断完善技能。"
      },
      skills: {
        title: "技能库",
        badge: "50+ 技能且在不断增加",
        skill1: "代码架构师",
        skill1Desc: "高级项目脚手架和结构设计技能。",
        skill2: "Git 大师",
        skill2Desc: "复杂的变基、合并冲突解决和历史管理。",
        skill3: "测试工程师",
        skill3Desc: "自动化的单元、集成和端到端测试生成。",
        skill4: "安全审计员",
        skill4Desc: "实时漏洞扫描和补丁建议。",
        skill5: "DevOps 英雄",
        skill5Desc: "CI/CD 流水线优化和云部署技能。",
        skill6: "文档生成器",
        skill6Desc: "通过代码分析自动生成高质量文档。"
      },
      philosophy: {
        title: "哲学理念",
        quote: "“我们相信 AI 智能体不仅是助手，更是主要贡献者。Superpowers 提供了使这种贡献变得可靠、可扩展且强大的框架。”",
        tags: ["开源", "智能体优先", "社区驱动"]
      },
      docs: {
        title: "文档中心",
        overview: "概览",
        tutorials: "实战教程",
        gettingStarted: "快速上手",
        buildSkill: "构建自定义技能",
        superpowersEngineering: "Superpowers 工程级开发",
        content: `
# SUPERPOWERS

一个真正有效的智能体技能框架和软件开发方法论。

Superpowers 为您的 AI 智能体提供标准化工具包，以精确处理复杂的工程任务。

## 为什么选择 Superpowers？

AI 智能体很强大，但它们通常缺乏生产级软件工程所需的特定、可靠的工具。Superpowers 通过提供以下内容来弥补这一差距：

- **标准化技能**：预构建且经过审计的技能库。
- **智能体方法论**：专为 AI 优先开发设计的工作流。
- **广泛兼容性**：支持 Claude Code、Cursor 等。

## 安装

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
通过插件市场启用。

### 手动设置
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## 核心技能

### 1. 代码架构师
高级项目脚手架和结构设计。

### 2. Git 大师
复杂的变基和合并冲突解决。

### 3. 测试工程师
自动化的单元和端到端测试生成。

## 使用方法

在您的项目中初始化 Superpowers：
\`\`\`bash
sp init
\`\`\`

验证您的安装：
\`\`\`bash
sp verify
\`\`\`

## 哲学理念

我们相信 AI 智能体不仅是助手，更是主要贡献者。Superpowers 提供了使这种贡献变得可靠、可扩展且强大的框架。
`,
        gettingStartedContent: `
# 快速上手：开启您的 5 分钟超能力之旅

本教程将引导您在本地开发环境中快速运行 Superpowers 框架。

![终端设置](https://picsum.photos/seed/setup/800/400)
*图 1：通过 CLI 初始化 Superpowers 环境。*

## 1. 环境准备

确保您已安装最新版本的 Node.js 以及受支持的 AI IDE（如 Cursor 或安装了 Claude Code 的 VS Code）。

\`\`\`bash
# 检查版本
node -v
\`\`\`

## 2. 全局安装

全局安装 Superpowers CLI，以便在任何地方访问 \`sp\` 命令。

\`\`\`bash
npm install -g @superpowers/cli
\`\`\`

## 3. 项目初始化

进入您的项目根目录并运行初始化命令。这将创建一个 \`.superpowers\` 配置目录。

\`\`\`bash
cd your-project
sp init
\`\`\`

![项目结构](https://picsum.photos/seed/structure/800/400)
*图 2：生成的 .superpowers 目录结构。*

## 4. 链接您的第一个技能

默认情况下，Superpowers 包含一组“基础技能”。将 \`refactor\` 技能链接到您当前的会话：

\`\`\`bash
sp link refactor
\`\`\`

## 5. 验证

运行验证套件，确保您的 AI 智能体能够与链接的技能正常通信。

\`\`\`bash
sp verify
\`\`\`

如果所有检查都显示绿色，您的智能体现在已经拥有了“超能力”。
`,
        buildSkillContent: `
# 进阶：构建生产级自定义技能

了解如何将复杂的工程模式封装为可重用的智能体技能。

![技能架构](https://picsum.photos/seed/architecture/800/400)
*图 1：技能内部组件的详细分解。*

## 技能解剖

一个技能由三个主要部分组成：
1. **元数据 (Metadata)**：定义技能名称和版本。
2. **指令 (SKILL.md)**：AI 遵循的核心逻辑。
3. **工具 (scripts/)**：AI 可以调用的可执行脚本。

## 第一步：生成技能脚手架

使用 CLI 生成新的技能模板：

\`\`\`bash
sp create skill my-security-auditor
\`\`\`

## 第二步：编写高效的指令

打开 \`skills/my-security-auditor/SKILL.md\`。避免使用通用的提示词，转而使用**基于约束的工程方法**：

\`\`\`markdown
# 安全审计员
## 约束条件
- 严禁建议暴露环境变量。
- 始终检查原始查询中的 SQL 注入模式。
- 优先使用参数化查询，而非字符串拼接。
\`\`\`

![代码编辑器](https://picsum.photos/seed/editor/800/400)
*图 2：在 SKILL.md 文件中实施严格的约束。*

## 第三步：实施工具链

如果您的技能需要运行特定的安全扫描器，请将脚本放置在 \`scripts/\` 目录中。

\`\`\`python
# skills/my-security-auditor/scripts/scan.py
import subprocess

def run_scan():
    # 运行 bandit 或其他扫描器的逻辑
    pass
\`\`\`

## 第四步：测试技能

针对已知的漏洞代码库测试您的技能，以验证智能体的响应。

\`\`\`bash
sp test --skill my-security-auditor --target ./vulnerable-app
\`\`\`

![测试结果](https://picsum.photos/seed/test/800/400)
*图 3：在测试期间分析智能体的性能和准确性。*
`,
        superpowersEngineeringContent: `
# Claude Code Superpowers 工程级开发

## Superpowers 简介

**Superpowers** 是由 Jesse Vincent（网名 obra）开发的开源代理技能框架，专门解决 AI 编程中的一个核心问题：如何让 AI 写出"工程级"的代码，而不是"玩具级"的代码。

想象一下，普通 AI 编程助手就像一个"聪明的实习生"——它能写出能跑的代码，但可能没有测试、没有文档、没有遵循最佳实践。而 Superpowers 则像是给这个实习生配备了一位"资深工程师导师"，强制它遵循完整的软件开发流程。

### 为什么需要 Superpowers？

在没有 Superpowers 之前，使用 Claude Code 存在一些问题：

- **Vibe Coding 的混乱**：AI 直接开始写代码，没有规划，导致频繁返工
- **缺少 TDD 纪律**：AI 习惯先写代码再补测试，甚至干脆不写测试
- **需求模糊直接动手**：用户说"做一个登录功能"，AI 就开始写，结果做出来不是想要的
- **代码质量不稳定**：没有代码审查机制，质量依赖 AI 的"心情"

Superpowers 解决了这些问题，让 Claude 变成一个"有纪律的开发团队"——它先帮你澄清需求，然后制定计划，再用 TDD 方式开发，最后通过代码审查确保质量。

---

## 快速开始

### 第一步：安装 Superpowers

在 Claude Code 中运行：

\`\`\`bash
# 添加 marketplace
/plugin marketplace add obra/superpowers-marketplace

# 安装 superpowers
/plugin install superpowers@superpowers-marketplace
\`\`\`

或者手动克隆：

\`\`\`bash
git clone https://github.com/obra/superpowers.git ~/.claude/skills/superpowers
\`\`\`

### 第二步：体验第一个 Skill

让我们用 Superpowers 的 **brainstorming**（头脑风暴）技能来体验它的价值。

在 Claude Code 中输入：

\`\`\`
我做一个用户登录功能
\`\`\`

**没有 Superpowers 之前**：Claude 直接开始写代码，可能做出来不是你想要的。

**有 Superpowers 之后**：Claude 会通过苏格拉底式提问帮你澄清需求：

> 这个登录功能是为 Web 应用还是移动应用设计的？
>
> 需要支持哪些登录方式？邮箱密码？第三方登录（Google、GitHub）？
>
> 是否需要"记住我"功能？
>
> 密码重置流程是邮件还是短信？
>
> ...

这些问题迫使你在编码前想清楚真正需要什么，避免写出一堆用不上的代码。

### 第三步：了解技能触发机制

Superpowers 不是"魔法开关"，它是一组**技能集合**。了解技能如何触发很重要。

**技能触发的三种方式**：

1. **关键词触发**
   - 当你提到 "TDD"、"测试驱动开发"、"先写测试" 时
   - \`test-driven-development\` 技能会被激活

2. **场景触发**
   - 当需求模糊时，\`brainstorming\` 技能会主动提问
   - 当出现 bug 时，\`systematic-debugging\` 技能会被激活

3. **手动调用**
   - 直接使用技能名称：\`/test-driven-development\`

#### 💡 重要理解：不指定 TDD 会怎样？

这是一个常见误解，让我们澄清：

\`\`\`
# 情况 A：不提 TDD
"实现一个计算器"
→ Claude 可能写测试，也可能不写
→ 取决于模型本身的训练习惯

# 情况 B：提到 TDD
"用 TDD 方式实现一个计算器"
→ test-driven-development 技能被激活
→ 强制遵循 RED-GREEN-REFACTOR 流程
\`\`\`

**Superpowers 的真正价值**：不是"无中生有"，而是"强化纪律"。

- 没有 TDD 技能时：Claude 写测试是"看心情"
- 有 TDD 技能时：Claude 被强制遵循 TDD 流程

---

## Superpowers 核心技能详解

### 🧪 测试类技能
#### test-driven-development（测试驱动开发）
强制遵循 RED-GREEN-REFACTOR 流程。

### 🐛 调试类技能
#### systematic-debugging（系统化调试）
强制使用四阶段根因分析：复现问题 -> 隔离根因 -> 验证假设 -> 修复并验证。

### 🤝 协作类技能
#### brainstorming（头脑风暴）
使用苏格拉底式提问法帮你澄清需求。
#### writing-plans（编写计划）
将大任务分解为 2-5 分钟可完成的小任务。
#### executing-plans（执行计划）
批量执行计划，并在每个检查点暂停确认。

---

## Superpowers 完整工作流程
1. **Brainstorming**：澄清真实需求。
2. **Design Document**：生成设计文档。
3. **Writing Plans**：分解为小任务。
4. **Subagent Development**：启动独立子代理。
5. **TDD**：强制 RED-GREEN-REFACTOR。
6. **Code Review**：质量把关。
7. **完成**。

---

## 最佳实践
1. **明确触发关键词**：提到 "TDD" 或 "规划" 触发特定技能。
2. **需要流程纪律时用 Superpowers**：生产级代码开发必用。
3. **技能可以组合使用**：同时触发多个技能以获得最佳效果。

---

## 总结
Superpowers 不让 AI 更聪明，而是让 AI 更有纪律。
`
      },
      guide: {
        title: "用户指南",
        subtitle: "深度解析智能体技能框架 (Agentic Skills Framework) 的架构与最佳实践。",
        seoTitle: "高级用户指南 | Superpowers 智能体框架",
        seoDesc: "掌握 Superpowers 框架。深入了解工具调用循环、上下文管理以及构建高性能智能体工作流。",
        content: `
# 高级用户指南：智能体范式 (The Agentic Paradigm)

Superpowers 不仅仅是一个工具，它是我们与大语言模型 (LLM) 进行软件工程交互方式的根本性转变。本指南将探讨构建可靠智能体工作流的架构原则和高级策略。

## 1. 从“对话”到“智能体”的转变

传统的 AI 交互是**对话式**的（无状态、一次性提示词）。Superpowers 启用了**智能体 (Agentic)** 行为，其特征包括：
- **自主性 (Autonomy)**：规划和执行多步任务的能力。
- **工具调用 (Tool-Use)**：与外部世界（文件系统、API、编译器）进行交互。
- **自我修正 (Self-Correction)**：在无需人工干预的情况下分析错误并迭代解决方案。

## 2. 基于技能的架构 (Skill-Based Architecture)

Superpowers 中的“技能 (Skill)”是一个模块化的能力单元。它封装了：
- **系统指令 (System Instructions)**：定义智能体角色和约束的高精度指令。
- **工具定义 (Tool Definitions)**：描述可执行函数（脚本）的 JSON 模式。
- **知识库 (Knowledge Base)**：特定领域的上下文数据或文档。

### 最佳实践：粒度控制
避免创建“全能技能”。与其创建一个 \`web-developer\` 技能，不如将其拆分为 \`css-architect\`、\`react-hooks-expert\` 和 \`api-integrator\`。这能有效减少上下文噪音并提高准确性。

## 3. 掌握工具调用循环 (Tool-Use Loop)

智能体工作流的核心是 **观察-思考-行动 (Observation-Thought-Action)** 循环：
1. **思考 (Thought)**：智能体分析当前状态并规划下一步行动。
2. **行动 (Action)**：智能体调用工具（例如 \`edit_file\`）。
3. **观察 (Observation)**：系统返回工具执行结果（例如“文件已更新”或“语法错误”）。
4. **迭代 (Iteration)**：智能体处理观察结果并更新其计划。

## 4. 上下文管理策略

LLM 的上下文窗口是有限的。为了保持高性能：
- **选择性链接**：仅激活与当前目标相关的技能。
- **状态总结**：使用智能体定期总结长期任务的状态，以释放上下文空间。
- **缓存管理**：利用 \`.superpowers/cache\` 存储高昂的计算结果。

## 5. 高级智能体模式 (Advanced Agentic Patterns)

为了达到生产级的可靠性，Superpowers 支持几种高级模式：

### 反思与自我修正 (Reflection)
不要只接受第一个答案。配置您的技能以要求“审查”步骤，让智能体（或第二个“评论家”智能体）根据原始需求分析输出结果。

### 动态规划 (Dynamic Planning)
对于开放式任务，使用 \`Planner\` 技能。智能体将首先生成任务列表，您可以在执行开始前进行审查。

### 多智能体编排 (Multi-Agent Orchestration)
Superpowers 允许您定义“移交 (Handoff)”点。例如，\`安全智能体\` 可以将经过验证的补丁移交给 \`DevOps 智能体\` 进行部署。

## 6. 安全与沙箱机制

当智能体生成并执行代码时，安全性至关重要。
- **受限环境**：在容器或沙箱环境中运行智能体。
- **人机协同 (Human-in-the-Loop)**：对于高风险操作（如删除生产数据），始终要求人工确认。
- **审计日志**：每次工具调用都会记录在 \`.superpowers/logs\` 中，以便进行执行后分析。

---

*如需技术支持或为框架做出贡献，请访问我们的 [GitHub 仓库](https://github.com/obra/superpowers)。*
`
      },
      useCases: {
        title: "应用案例",
        subtitle: "自主智能体在复杂工程环境中的真实应用。",
        seoTitle: "智能体工作流应用案例 | Superpowers",
        seoDesc: "探索行业领先者如何使用 Superpowers 进行旧代码迁移、自动化安全审计和智能基础设施管理。",
        content: `
# 工程应用案例：自主智能 (Autonomous Intelligence)

Superpowers 在复杂度和规模超出人工处理能力的场景中表现出色。以下是团队目前如何利用该框架的实例。

## 1. 自动化技术债治理
**问题**：一个拥有 500 多个文件的旧代码库使用了过时的模式（例如，从 Class 组件迁移到 React Hooks）。
**解决方案**：配备 \`Refactor\` 和 \`AST-Parser\` 技能的智能体。智能体系统地遍历依赖图，识别模式，执行转换，并运行单元测试以验证每项更改。
**成果**：迁移在 4 小时内完成（原计划 3 周），且保证 100% 的类型安全。

## 2. 持续安全情报
**问题**：安全漏洞通常在 CI/CD 流水线的后期才被发现。
**解决方案**：将 \`Security Auditor\` 技能直接集成到开发者的本地环境中。在智能体编写代码时，它会执行实时静态分析并交叉引用 CVE 数据库。
**成果**：与安全相关的 PR 拒绝率降低了 80%。

## 3. 智能基础设施编排
**问题**：跨多个云服务商管理复杂的 Terraform/Pulumi 配置。
**解决方案**：使用 \`Cloud Architect\` 技能。智能体可以理解高级需求（例如“在 AWS 中部署一个带有 RDS 的可扩展 k8s 集群”），生成相应的 IaC 代码，根据策略代码 (OPA) 进行验证，并执行部署。
**成果**：为开发者实现了零配置的基础设施管理。

## 4. 自愈式文档系统
**问题**：文档永远与代码实现不同步。
**解决方案**：一个监控文件更改的后台智能体。当函数签名或 API 端点发生变化时，智能体使用 \`Doc-Gen\` 技能更新相关的 Markdown 文件和内部维基。
**成果**：文档始终是“单一事实来源”，将开发者入职培训时间缩短了 40%。
`
      },
      footer: {
        copy: "© 2026 Superpowers 项目。基于 MIT 协议开源。",
        download: "下载",
        disclaimer: "声明：本网站仅引用 Superpowers GitHub 仓库，并非原作者。"
      }
    }
  },
  ja: {
    translation: {
      nav: {
        howItWorks: "仕組み",
        features: "機能",
        installation: "インストール",
        workflow: "ワークフロー",
        skills: "スキル",
        docs: "ドキュメント",
        superpowersEngineering: "Superpowers エンジニアリング",
        getStarted: "始める"
      },
      hero: {
        badge: "v2.0: エージェントスキルフレームワーク",
        title1: "SUPERPOWERS:",
        title2: "機能する",
        title3: "エージェントスキル",
        desc: "実際に機能するエージェントスキルフレームワークとソフトウェア開発手法。Superpowersは、AIエージェントに複雑なエンジニアリングタスクを正確に処理するための標準化されたツールキットを提供します。",
        installBtn: "今すぐインストール",
        githubBtn: "GitHubでスター"
      },
      howItWorks: {
        title: "仕組み",
        subtitle: "Superpowersは、生のAIの可能性と本番環境に対応したエンジニアリングの間のギャップを埋めます。",
        step1Title: "標準化されたスキル",
        step1Desc: "エージェントが特定の高価値タスクを実行するために呼び出すことができる、構築済みで監査済みのスキルのライブラリ。",
        step2Title: "エージェント手法",
        step2Desc: "AIエージェントが主要な貢献者である世界のために設計されたソフトウェア開発手法。",
        step3Title: "ユニバーサルな互換性",
        step3Desc: "すべての主要なAIコーディングツールで動作し、エージェントがどこでも同じ「スーパーパワー」を持てるようにします。"
      },
      features: {
        title: "現代の開発者のために構築",
        desc: "繰り返しのタスクに時間を費やすのはやめましょう。Superpowersは、シェルにシームレスに統合される厳選されたユーティリティコレクションを提供します。",
        stats: "2,000人以上の開発者が使用",
        methodologyTag: "手法",
        methodologyTitle: "エージェントスキルフレームワーク",
        methodologyDesc: "Superpowersは単なるツールではありません。それは手法です。AIエージェントに複雑なソフトウェア開発タスクを処理するために必要な特定のスキルを与えるための構造化された方法を提供します。",
        methodologyList: ["標準化されたスキルライブラリ", "エージェント優先設計", "スケーラブルな手法"],
        multiPlatformTitle: "マルチプラットフォーム",
        multiPlatformDesc: "Claude Code、Cursor、Copilot、Gemini CLIをネイティブにサポート。",
        methodologyFirstTitle: "手法優先",
        methodologyFirstDesc: "AIエージェントをより信頼性が高く有能なものにするという哲学に基づいて構築されています。"
      },
      installation: {
        title: "インストールとセットアップ",
        subtitle: "Superpowersは、すべての主要なAI開発環境をサポートしています。",
        claudeTitle: "Claude Code",
        claudeDesc: "公式マーケットプレイスまたはコミュニティプラグインマーケットプレイスから直接インストールします。",
        cursorTitle: "Cursor",
        cursorDesc: "シームレスなエージェント統合のために、プラグインマーケットプレイス経由でCursorでSuperpowersを有効にします。",
        cliTitle: "CLIツール",
        cliDesc: "GitHub Copilot CLI、Gemini CLI、Codex、OpenCodeをネイティブにサポート。",
        verifyTitle: "スーパーパワーを確認する",
        verifyDesc: "すべてのスキルが正しくリンクされ、エージェントの準備ができていることを確認するために、常にインストールを確認してください。"
      },
      comparison: {
        title: "なぜ SUPERPOWERS を選ぶのか？",
        oldWay: "従来の方法",
        oldList: [
          "信頼性の低いAIエージェントの動作",
          "すべてのタスクに対する手動のプロンプトエンジニアリング",
          "断片化された開発ワークフロー",
          "標準化されたAIツールセットの欠如"
        ],
        newWay: "Superpowers の方法",
        newList: [
          "予測可能で高性能なエージェントスキル",
          "AI開発のための標準化された手法",
          "複数のAIプラットフォームにわたるシームレスな統合",
          "チームコラボレーションのためのスケーラブルなフレームワーク"
        ]
      },
      workflow: {
        title: "基本ワークフロー",
        subtitle: "シンプルで、繰り返し可能で、強力です。",
        step1: "初期化",
        step1Desc: "環境を準備するために、プロジェクトのルートで「sp init」を実行します。",
        step2: "スキルの選択",
        step2Desc: "ライブラリから選択するか、エージェント用のカスタムスキルを作成します。",
        step3: "権限付与",
        step3Desc: "エージェントはスキルを自動的に使用して複雑なタスクを解決します。",
        step4: "反復",
        step4Desc: "プロジェクトが成長し、エージェントが進化するにつれて、スキルを洗練させます。"
      },
      skills: {
        title: "スキルライブラリ",
        badge: "50以上のスキル、さらに増加中",
        skill1: "コードアーキテクト",
        skill1Desc: "高度なプロジェクトスキャフォールディングと構造設計スキル。",
        skill2: "Gitマスター",
        skill2Desc: "複雑なリベース、マージコンフリクトの解決、履歴管理。",
        skill3: "テストエンジニア",
        skill3Desc: "自動化されたユニット、統合、E2Eテストの生成。",
        skill4: "セキュリティ監査人",
        skill4Desc: "リアルタイムの脆弱性スキャンとパッチの提案。",
        skill5: "DevOpsヒーロー",
        skill5Desc: "CI/CDパイプラインの最適化とクラウドデプロイスキル。",
        skill6: "ドキュメント生成器",
        skill6Desc: "コード分析からの自動で高品質なドキュメント作成。"
      },
      philosophy: {
        title: "哲学",
        quote: "「AIエージェントは単なるアシスタントではなく、主要な貢献者であると私たちは信じています。Superpowersは、その貢献を信頼性が高く、スケーラブルで、強力なものにするためのフレームワークを提供します。」",
        tags: ["オープンソース", "エージェント優先", "コミュニティ主導"]
      },
      docs: {
        content: `
# SUPERPOWERS

実際に機能するエージェントスキルフレームワークとソフトウェア開発手法。

Superpowersは、AIエージェントに複雑なエンジニアリングタスクを正確に処理するための標準化されたツールキットを提供します。

## なぜ Superpowers なのか？

AIエージェントは強力ですが、本番環境に対応したソフトウェアエンジニアリングに必要な特定の信頼できるツールが不足していることがよくあります。Superpowersは、以下を提供することでこのギャップを埋めます。

- **標準化されたスキル**: 構築済みで監査済みのスキルのライブラリ。
- **エージェント手法**: AI優先の開発向けに設計されたワークフロー。
- **ユニバーサルな互換性**: Claude Code、Cursorなどで動作します。

## インストール

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
プラグインマーケットプレイス経由で有効にします。

### 手動セットアップ
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## コアスキル

### 1. コードアーキテクト
高度なプロジェクトスキャフォールディングと構造設計。

### 2. Gitマスター
複雑なリベースとマージコンフリクトの解決。

### 3. テストエンジニア
自動化されたユニットおよびE2Eテストの生成。

## 使用方法

プロジェクトでSuperpowersを初期化します。
\`\`\`bash
sp init
\`\`\`

インストールを確認します。
\`\`\`bash
sp verify
\`\`\`

## 哲学

AIエージェントは単なるアシスタントではなく、主要な貢献者であると私たちは信じています。Superpowersは、その貢献を信頼性が高く、スケーラブルで、強力なものにするためのフレームワークを提供します。
`
      },
      footer: {
        copy: "© 2026 Superpowers プロジェクト。MITライセンスの下でオープンソース。",
        download: "ダウンロード",
        disclaimer: "免責事項：このサイトは Superpowers GitHub リポジトリの参照であり、原作者とは関係ありません。"
      }
    }
  },
  ko: {
    translation: {
      nav: {
        howItWorks: "작동 방식",
        features: "기능",
        installation: "설치",
        workflow: "워크플로우",
        skills: "스킬",
        docs: "문서",
        superpowersEngineering: "Superpowers 엔지니어링",
        getStarted: "시작하기"
      },
      hero: {
        badge: "v2.0: 에이전트 스킬 프레임워크",
        title1: "SUPERPOWERS:",
        title2: "작동하는",
        title3: "에이전트 스킬",
        desc: "실제로 작동하는 에이전트 스킬 프레임워크 및 소프트웨어 개발 방법론. Superpowers는 AI 에이전트에게 복잡한 엔지니어링 작업을 정밀하게 처리할 수 있는 표준화된 툴킷을 제공합니다.",
        installBtn: "지금 설치",
        githubBtn: "GitHub 스타"
      },
      howItWorks: {
        title: "작동 방식",
        subtitle: "Superpowers는 원시 AI 잠재력과 프로덕션 준비 엔지니어링 사이의 간극을 메웁니다.",
        step1Title: "표준화된 스킬",
        step1Desc: "에이전트가 특정 고부가가치 작업을 수행하기 위해 호출할 수 있는 사전 구축되고 검증된 스킬 라이브러리.",
        step2Title: "에이전트 방법론",
        step2Desc: "AI 에이전트가 주요 기여자인 세상을 위해 설계된 소프트웨어 개발 방법론.",
        step3Title: "범용 호환성",
        step3Desc: "모든 주요 AI 코딩 도구에서 작동하여 에이전트가 어디서나 동일한 \"초능력\"을 가질 수 있도록 합니다."
      },
      features: {
        title: "현대 개발자를 위한 설계",
        desc: "반복적인 작업에 시간을 낭비하지 마세요. Superpowers는 쉘에 원활하게 통합되는 엄선된 유틸리티 컬렉션을 제공합니다.",
        stats: "2,000명 이상의 개발자가 사용 중",
        methodologyTag: "방법론",
        methodologyTitle: "에이전트 스킬 프레임워크",
        methodologyDesc: "Superpowers는 단순한 도구가 아니라 방법론입니다. AI 에이전트가 복잡한 소프트웨어 개발 작업을 처리하는 데 필요한 특정 스킬을 부여하는 구조화된 방식을 제공합니다.",
        methodologyList: ["표준화된 스킬 라이브러리", "에이전트 우선 설계", "확장 가능한 방법론"],
        multiPlatformTitle: "멀티 플랫폼",
        multiPlatformDesc: "Claude Code, Cursor, Copilot 및 Gemini CLI에 대한 기본 지원.",
        methodologyFirstTitle: "방법론 우선",
        methodologyFirstDesc: "AI 에이전트를 더욱 안정적이고 유능하게 만든다는 철학을 바탕으로 구축되었습니다."
      },
      installation: {
        title: "설치 및 설정",
        subtitle: "Superpowers는 모든 주요 AI 개발 환경을 지원합니다.",
        claudeTitle: "Claude Code",
        claudeDesc: "공식 마켓플레이스 또는 커뮤니티 플러그인 마켓플레이스에서 직접 설치하세요.",
        cursorTitle: "Cursor",
        cursorDesc: "원활한 에이전트 통합을 위해 플러그인 마켓플레이스를 통해 Cursor에서 Superpowers를 활성화하세요.",
        cliTitle: "CLI 도구",
        cliDesc: "GitHub Copilot CLI, Gemini CLI, Codex 및 OpenCode에 대한 기본 지원.",
        verifyTitle: "초능력 확인",
        verifyDesc: "모든 스킬이 올바르게 연결되고 에이전트가 준비되었는지 확인하기 위해 항상 설치를 확인하세요."
      },
      comparison: {
        title: "왜 SUPERPOWERS인가요?",
        oldWay: "기존 방식",
        oldList: [
          "예측 불가능한 AI 에이전트 동작",
          "모든 작업에 대한 수동 프롬프트 엔지니어링",
          "파편화된 개발 워크플로우",
          "표준화된 AI 도구 세트 부재"
        ],
        newWay: "Superpowers 방식",
        newList: [
          "예측 가능하고 고성능인 에이전트 스킬",
          "AI 개발을 위한 표준화된 방법론",
          "여러 AI 플랫폼 간의 원활한 통합",
          "팀 협업을 위한 확장 가능한 프레임워크"
        ]
      },
      workflow: {
        title: "기본 워크플로우",
        subtitle: "간단하고 반복 가능하며 강력합니다.",
        step1: "초기화",
        step1Desc: "환경을 준비하기 위해 프로젝트 루트에서 'sp init'을 실행합니다.",
        step2: "스킬 선택",
        step2Desc: "라이브러리에서 선택하거나 에이전트를 위한 맞춤형 스킬을 만듭니다.",
        step3: "권한 부여",
        step3Desc: "에이전트는 복잡한 작업을 해결하기 위해 스킬을 자동으로 사용합니다.",
        step4: "반복",
        step4Desc: "프로젝트가 성장하고 에이전트가 발전함에 따라 스킬을 개선합니다."
      },
      skills: {
        title: "스킬 라이브러리",
        badge: "50개 이상의 스킬, 계속 추가 중",
        skill1: "코드 아키텍트",
        skill1Desc: "고급 프로젝트 스캐폴딩 및 구조 설계 스킬.",
        skill2: "Git 마스터",
        skill2Desc: "복잡한 리베이스, 병합 충돌 해결 및 이력 관리.",
        skill3: "테스트 엔지니어",
        skill3Desc: "자동화된 유닛, 통합 및 E2E 테스트 생성.",
        skill4: "보안 감사자",
        skill4Desc: "실시간 취약점 스캔 및 패치 제안.",
        skill5: "DevOps 히어로",
        skill5Desc: "CI/CD 파이프라인 최적화 및 클라우드 배포 스킬.",
        skill6: "문서 생성기",
        skill6Desc: "코드 분석을 통한 자동 고품질 문서화."
      },
      philosophy: {
        title: "철학",
        quote: "“우리는 AI 에이전트가 단순한 조수가 아니라 주요 기여자라고 믿습니다. Superpowers는 그 기여를 안정적이고 확장 가능하며 강력하게 만드는 프레임워크를 제공합니다.”",
        tags: ["오픈 소스", "에이전트 우선", "커뮤니티 중심"]
      },
      docs: {
        content: `
# SUPERPOWERS

실제로 작동하는 에이전트 스킬 프레임워크 및 소프트웨어 개발 방법론.

Superpowers는 AI 에이전트에게 복잡한 엔지니어링 작업을 정밀하게 처리할 수 있는 표준화된 툴킷을 제공합니다.

## 왜 Superpowers인가요?

AI 에이전트는 강력하지만, 프로덕션 준비 소프트웨어 엔지니어링에 필요한 특정하고 신뢰할 수 있는 도구가 부족한 경우가 많습니다. Superpowers는 다음을 제공하여 이 간극을 메웁니다.

- **표준화된 스킬**: 사전 구축되고 검증된 스킬 라이브러리.
- **에이전트 방법론**: AI 우선 개발을 위해 설계된 워크플로우.
- **범용 호환성**: Claude Code, Cursor 등과 호환됩니다.

## 설치

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
플러그인 마켓플레이스를 통해 활성화하세요.

### 수동 설정
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## 핵심 스킬

### 1. 코드 아키텍트
고급 프로젝트 스캐폴딩 및 구조 설계.

### 2. Git 마스터
복잡한 리베이스 및 병합 충돌 해결.

### 3. 테스트 엔지니어
자동화된 유닛 및 E2E 테스트 생성.

## 사용법

프로젝트에서 Superpowers를 초기화합니다.
\`\`\`bash
sp init
\`\`\`

설치를 확인합니다.
\`\`\`bash
sp verify
\`\`\`

## 철학

우리는 AI 에이전트가 단순한 조수가 아니라 주요 기여자라고 믿습니다. Superpowers는 그 기여를 안정적이고 확장 가능하며 강력하게 만드는 프레임워크를 제공합니다.
`
      },
      footer: {
        copy: "© 2026 Superpowers 프로젝트. MIT 라이선스에 따라 오픈 소스.",
        download: "다운로드",
        disclaimer: "면책 조항: 이 사이트는 Superpowers GitHub 저장소를 참조하며 원작자와 관련이 없습니다."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        howItWorks: "Fonctionnement",
        features: "Fonctionnalités",
        installation: "Installation",
        workflow: "Flux de travail",
        skills: "Compétences",
        docs: "Docs",
        superpowersEngineering: "Ingénierie avec Superpowers",
        getStarted: "Démarrer"
      },
      hero: {
        badge: "v2.0: Le framework de compétences agentiques",
        title1: "SUPERPOWERS:",
        title2: "DES COMPÉTENCES",
        title3: "QUI MARCHENT",
        desc: "Un framework de compétences agentiques et une méthodologie de développement logiciel qui fonctionnent vraiment. Superpowers donne à vos agents IA une boîte à outils standardisée pour gérer des tâches d'ingénierie complexes avec précision.",
        installBtn: "Installer maintenant",
        githubBtn: "Star sur GitHub"
      },
      howItWorks: {
        title: "COMMENT ÇA MARCHE",
        subtitle: "Superpowers comble le fossé entre le potentiel brut de l'IA et l'ingénierie prête pour la production.",
        step1Title: "Compétences standardisées",
        step1Desc: "Une bibliothèque de compétences pré-construites et auditées que les agents peuvent appeler pour effectuer des tâches spécifiques à haute valeur ajoutée.",
        step2Title: "Méthodologie agentique",
        step2Desc: "Une méthodologie de développement logiciel conçue pour un monde où les agents IA sont les principaux contributeurs.",
        step3Title: "Compatibilité universelle",
        step3Desc: "Fonctionne sur tous les principaux outils de codage IA, garantissant que vos agents ont les mêmes \"Superpowers\" partout."
      },
      features: {
        title: "CONÇU POUR LE DÉVELOPPEUR MODERNE",
        desc: "Arrêtez de perdre du temps sur des tâches répétitives. Superpowers fournit une collection organisée d'utilitaires qui s'intègrent parfaitement dans votre shell.",
        stats: "Utilisé par plus de 2 000 développeurs",
        methodologyTag: "MÉTHODOLOGIE",
        methodologyTitle: "Framework de compétences agentiques",
        methodologyDesc: "Superpowers n'est pas seulement un outil ; c'est une méthodologie. Il fournit un moyen structuré de donner aux agents IA les compétences spécifiques dont ils ont besoin pour gérer des tâches de développement logiciel complexes.",
        methodologyList: ["Bibliothèque de compétences standardisée", "Conception axée sur l'agent", "Méthodologie évolutive"],
        multiPlatformTitle: "Multi-plateforme",
        multiPlatformDesc: "Prise en charge native de Claude Code, Cursor, Copilot et Gemini CLI.",
        methodologyFirstTitle: "La méthodologie d'abord",
        methodologyFirstDesc: "Construit sur une philosophie visant à rendre les agents IA plus fiables et capables."
      },
      installation: {
        title: "INSTALLATION ET CONFIGURATION",
        subtitle: "Superpowers prend en charge tous les principaux environnements de développement IA.",
        claudeTitle: "Claude Code",
        claudeDesc: "Installez directement depuis la Marketplace officielle ou la Marketplace de plugins communautaire.",
        cursorTitle: "Cursor",
        cursorDesc: "Activez Superpowers dans Cursor via la Marketplace de plugins pour une intégration agentique transparente.",
        cliTitle: "Outils CLI",
        cliDesc: "Support natif pour Claude Code, Cursor, GitHub Copilot CLI et Gemini CLI.",
        verifyTitle: "Vérifiez vos Superpowers",
        verifyDesc: "Vérifiez toujours votre installation pour vous assurer que toutes les compétences sont correctement liées et prêtes pour vos agents."
      },
      comparison: {
        title: "POURQUOI CHOISIR SUPERPOWERS ?",
        oldWay: "L'ancienne méthode",
        oldList: [
          "Comportement instable des agents IA",
          "Ingénierie de prompt manuelle pour chaque tâche",
          "Flux de travail de développement fragmentés",
          "Absence d'outils IA standardisés"
        ],
        newWay: "La méthode Superpowers",
        newList: [
          "Compétences d'agent prévisibles et performantes",
          "Méthodologie standardisée pour le développement IA",
          "Intégration transparente sur plusieurs plateformes IA",
          "Framework évolutif pour la collaboration d'équipe"
        ]
      },
      workflow: {
        title: "LE FLUX DE TRAVAIL DE BASE",
        subtitle: "Simple, répétable et puissant.",
        step1: "Initialiser",
        step1Desc: "Exécutez 'sp init' à la racine de votre projet pour préparer l'environnement.",
        step2: "Sélectionner les compétences",
        step2Desc: "Choisissez dans la bibliothèque ou créez des compétences personnalisées pour votre agent.",
        step3: "Autonomiser",
        step3Desc: "Les agents utilisent automatiquement les compétences pour résoudre des tâches complexes.",
        step4: "Itérer",
        step4Desc: "Affinez les compétences à mesure que votre projet grandit et que les agents évoluent."
      },
      skills: {
        title: "BIBLIOTHÈQUE DE COMPÉTENCES",
        badge: "Plus de 50 compétences et ça continue",
        skill1: "Architecte de code",
        skill1Desc: "Compétences avancées en échafaudage de projet et conception structurelle.",
        skill2: "Maître Git",
        skill2Desc: "Rebase complexe, résolution de conflits de fusion et gestion de l'historique.",
        skill3: "Ingénieur de test",
        skill3Desc: "Génération automatisée de tests unitaires, d'intégration et E2E.",
        skill4: "Auditeur de sécurité",
        skill4Desc: "Analyse des vulnérabilités en temps réel et suggestions de correctifs.",
        skill5: "Héros DevOps",
        skill5Desc: "Optimisation du pipeline CI/CD et compétences de déploiement cloud.",
        skill6: "Générateur de docs",
        skill6Desc: "Documentation automatique de haute qualité à partir de l'analyse du code."
      },
      philosophy: {
        title: "PHILOSOPHIE",
        quote: "« Nous pensons que les agents IA ne sont pas seulement des assistants, mais des contributeurs principaux. Superpowers fournit le cadre nécessaire pour rendre cette contribution fiable, évolutive et puissante. »",
        tags: ["Open Source", "Agent-First", "Axé sur la communauté"]
      },
      docs: {
        content: `
# SUPERPOWERS

Un framework de compétences agentiques et une méthodologie de développement logiciel qui fonctionnent vraiment.

Superpowers donne à vos agents IA une boîte à outils standardisée pour gérer des tâches d'ingénierie complexes avec précision.

## Pourquoi Superpowers ?

Les agents IA sont puissants, mais ils manquent souvent des outils spécifiques et fiables nécessaires à l'ingénierie logicielle de production. Superpowers comble cette lacune en fournissant :

- **Compétences standardisées** : Une bibliothèque de compétences pré-construites et auditées.
- **Méthodologie agentique** : Un flux de travail conçu pour le développement axé sur l'IA.
- **Compatibilité universelle** : Fonctionne avec Claude Code, Cursor, et plus encore.

## Installation

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Activez via la Marketplace de plugins.

### Configuration manuelle
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Compétences de base

### 1. Architecte de code
Échafaudage de projet avancé et conception structurelle.

### 2. Maître Git
Rebase complexe et résolution de conflits de fusion.

### 3. Ingénieur de test
Génération automatisée de tests unitaires et E2E.

## Utilisation

Initialisez Superpowers dans votre projet :
\`\`\`bash
sp init
\`\`\`

Vérifiez votre installation :
\`\`\`bash
sp verify
\`\`\`

## Philosophie

Nous pensons que les agents IA ne sont pas seulement des assistants, mais des contributeurs principaux. Superpowers fournit le cadre nécessaire pour rendre cette contribution fiable, évolutive et puissante.
`
      },
      footer: {
        copy: "© 2026 Projet Superpowers. Open source sous licence MIT.",
        download: "Télécharger",
        disclaimer: "Avertissement : Ce site est une référence au dépôt GitHub Superpowers et n'est pas affilié à l'auteur original."
      }
    }
  },
  de: {
    translation: {
      nav: {
        howItWorks: "Funktionsweise",
        features: "Funktionen",
        installation: "Installation",
        workflow: "Workflow",
        skills: "Skills",
        docs: "Docs",
        superpowersEngineering: "Engineering mit Superpowers",
        getStarted: "Loslegen"
      },
      hero: {
        badge: "v2.0: Das Agentic Skills Framework",
        title1: "SUPERPOWERS:",
        title2: "AGENTIC SKILLS",
        title3: "DIE FUNKTIONIEREN",
        desc: "Ein Agentic Skills Framework und eine Softwareentwicklungsmethodik, die tatsächlich funktionieren. Superpowers bietet Ihren KI-Agenten ein standardisiertes Toolkit, um komplexe Engineering-Aufgaben mit Präzision zu bewältigen.",
        installBtn: "Jetzt installieren",
        githubBtn: "Star auf GitHub"
      },
      howItWorks: {
        title: "WIE ES FUNKTIONIERT",
        subtitle: "Superpowers schließt die Lücke zwischen rohem KI-Potenzial und produktionsreifem Engineering.",
        step1Title: "Standardisierte Skills",
        step1Desc: "Eine Bibliothek mit vorgefertigten, geprüften Skills, die Agenten aufrufen können, um spezifische, hochwertige Aufgaben auszuführen.",
        step2Title: "Agentic Methodology",
        step2Desc: "Eine Softwareentwicklungsmethodik, die für eine Welt konzipiert wurde, in der KI-Agenten die Hauptbeitragenden sind.",
        step3Title: "Universelle Kompatibilität",
        step3Desc: "Funktioniert mit allen gängigen KI-Codierungstools und stellt sicher, dass Ihre Agenten überall die gleichen \"Superpowers\" haben."
      },
      features: {
        title: "FÜR DEN MODERNEN ENTWICKLER GEBAUT",
        desc: "Verschwenden Sie keine Zeit mehr mit sich wiederholenden Aufgaben. Superpowers bietet eine kuratierte Sammlung von Dienstprogrammen, die sich nahtlos in Ihre Shell integrieren lassen.",
        stats: "Von über 2.000 Entwicklern genutzt",
        methodologyTag: "METHODIK",
        methodologyTitle: "Agentic Skills Framework",
        methodologyDesc: "Superpowers ist nicht nur ein Tool; es ist eine Methodik. Es bietet eine strukturierte Möglichkeit, KI-Agenten die spezifischen Fähigkeiten zu geben, die sie für komplexe Softwareentwicklungsaufgaben benötigen.",
        methodologyList: ["Standardisierte Skill-Bibliothek", "Agent-First-Design", "Skalierbare Methodik"],
        multiPlatformTitle: "Multi-Plattform",
        multiPlatformDesc: "Native Unterstützung für Claude Code, Cursor, Copilot und Gemini CLI.",
        methodologyFirstTitle: "Methodik zuerst",
        methodologyFirstDesc: "Auf der Philosophie aufgebaut, KI-Agenten zuverlässiger und fähiger zu machen."
      },
      installation: {
        title: "INSTALLATION & SETUP",
        subtitle: "Superpowers unterstützt alle gängigen KI-Entwicklungsumgebungen.",
        claudeTitle: "Claude Code",
        claudeDesc: "Installieren Sie direkt über den offiziellen Marketplace oder den Community-Plugin-Marketplace.",
        cursorTitle: "Cursor",
        cursorDesc: "Aktivieren Sie Superpowers in Cursor über den Plugin-Marketplace für eine nahtlose Agentenintegration.",
        cliTitle: "CLI-Tools",
        cliDesc: "Native Unterstützung für GitHub Copilot CLI, Gemini CLI, Codex und OpenCode.",
        verifyTitle: "Überprüfen Sie Ihre Superpowers",
        verifyDesc: "Überprüfen Sie immer Ihre Installation, um sicherzustellen, dass alle Skills korrekt verknüpft und für Ihre Agenten bereit sind."
      },
      comparison: {
        title: "WARUM SUPERPOWERS WÄHLEN?",
        oldWay: "Der alte Weg",
        oldList: [
          "Unzuverlässiges Verhalten von KI-Agenten",
          "Manuelles Prompt-Engineering für jede Aufgabe",
          "Fragmentierte Entwickler-Workflows",
          "Mangel an standardisierten KI-Toolsets"
        ],
        newWay: "Der Superpowers-Weg",
        newList: [
          "Vorhersehbare, leistungsstarke Agenten-Skills",
          "Standardisierte Methodik für die KI-Entwicklung",
          "Nahtlose Integration über mehrere KI-Plattformen hinweg",
          "Skalierbares Framework für die Teamzusammenarbeit"
        ]
      },
      workflow: {
        title: "DER BASIS-WORKFLOW",
        subtitle: "Einfach, wiederholbar und leistungsstark.",
        step1: "Initialisieren",
        step1Desc: "Führen Sie 'sp init' im Projektverzeichnis aus, um die Umgebung vorzubereiten.",
        step2: "Skills auswählen",
        step2Desc: "Wählen Sie aus der Bibliothek oder erstellen Sie benutzerdefinierte Skills für Ihren Agenten.",
        step3: "Befähigen",
        step3Desc: "Agenten nutzen die Skills automatisch, um komplexe Aufgaben zu lösen.",
        step4: "Iterieren",
        step4Desc: "Verfeinern Sie Skills, während Ihr Projekt wächst und sich Agenten weiterentwickeln."
      },
      skills: {
        title: "SKILLS-BIBLIOTHEK",
        badge: "50+ Skills & steigend",
        skill1: "Code-Architekt",
        skill1Desc: "Fortgeschrittene Projekt-Scaffolding- und Strukturdesign-Skills.",
        skill2: "Git-Master",
        skill2Desc: "Komplexes Rebase, Auflösung von Merge-Konflikten und Verlaufshistorie.",
        skill3: "Test-Ingenieur",
        skill3Desc: "Automatisierte Unit-, Integrations- und E2E-Testgenerierung.",
        skill4: "Sicherheitsprüfer",
        skill4Desc: "Echtzeit-Schwachstellenscan und Patch-Vorschläge.",
        skill5: "DevOps-Held",
        skill5Desc: "CI/CD-Pipeline-Optimierung und Cloud-Deployment-Skills.",
        skill6: "Docs-Generator",
        skill6Desc: "Automatische, hochwertige Dokumentation aus der Codeanalyse."
      },
      philosophy: {
        title: "PHILOSOPHIE",
        quote: "„Wir glauben, dass KI-Agenten nicht nur Assistenten, sondern Hauptbeitragende sind. Superpowers bietet den Rahmen, um diesen Beitrag zuverlässig, skalierbar und leistungsstark zu machen.“",
        tags: ["Open Source", "Agent-First", "Community-getrieben"]
      },
      docs: {
        content: `
# SUPERPOWERS

Ein Agentic Skills Framework und eine Softwareentwicklungsmethodik, die tatsächlich funktionieren.

Superpowers bietet Ihren KI-Agenten ein standardisiertes Toolkit, um komplexe Engineering-Aufgaben mit Präzision zu bewältigen.

## Warum Superpowers?

KI-Agenten sind leistungsstark, aber ihnen fehlen oft die spezifischen, zuverlässigen Werkzeuge, die für produktionsreifes Software-Engineering erforderlich sind. Superpowers schließt diese Lücke durch:

- **Standardisierte Skills**: Eine Bibliothek mit vorgefertigten, geprüften Skills.
- **Agentic Methodology**: Ein Workflow, der für die KI-first-Entwicklung konzipiert wurde.
- **Universelle Kompatibilität**: Funktioniert mit Claude Code, Cursor und mehr.

## Installation

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Über den Plugin-Marketplace aktivieren.

### Manuelle Einrichtung
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Kern-Skills

### 1. Code-Architekt
Fortgeschrittenes Projekt-Scaffolding und Strukturdesign.

### 2. Git-Master
Komplexes Rebase und Auflösung von Merge-Konflikten.

### 3. Test-Ingenieur
Automatisierte Unit- und E2E-Testgenerierung.

## Verwendung

Initialisieren Sie Superpowers in Ihrem Projekt:
\`\`\`bash
sp init
\`\`\`

Überprüfen Sie Ihre Installation:
\`\`\`bash
sp verify
\`\`\`

## Philosophie

Wir glauben, dass KI-Agenten nicht nur Assistenten, sondern Hauptbeitragende sind. Superpowers bietet den Rahmen, um diesen Beitrag zuverlässig, skalierbar und leistungsstark zu machen.
`
      },
      footer: {
        copy: "© 2026 Superpowers-Projekt. Open Source unter MIT-Lizenz.",
        download: "Download",
        disclaimer: "Haftungsausschluss: Diese Seite ist eine Referenz auf das Superpowers GitHub-Repository und steht in keiner Verbindung zum ursprünglichen Autor."
      }
    }
  },
  es: {
    translation: {
      nav: {
        howItWorks: "Cómo funciona",
        features: "Características",
        installation: "Instalación",
        workflow: "Flujo de trabajo",
        skills: "Habilidades",
        docs: "Docs",
        superpowersEngineering: "Ingeniería con Superpowers",
        getStarted: "Empezar"
      },
      hero: {
        badge: "v2.0: El framework de habilidades agenticas",
        title1: "SUPERPOWERS:",
        title2: "HABILIDADES",
        title3: "QUE FUNCIONAN",
        desc: "Un framework de habilidades agenticas y una metodología de desarrollo de software que realmente funcionan. Superpowers le da a sus agentes de IA un conjunto de herramientas estandarizado para manejar tareas de ingeniería complejas con precisión.",
        installBtn: "Instalar ahora",
        githubBtn: "Star en GitHub"
      },
      howItWorks: {
        title: "CÓMO FUNCIONA",
        subtitle: "Superpowers cierra la brecha entre el potencial bruto de la IA y la ingeniería lista para producción.",
        step1Title: "Habilidades estandarizadas",
        step1Desc: "Una biblioteca de habilidades pre-construidas y auditadas que los agentes pueden invocar para realizar tareas específicas de alto valor.",
        step2Title: "Metodología agentica",
        step2Desc: "Una metodología de desarrollo de software diseñada para un mundo donde los agentes de IA son los principales colaboradores.",
        step3Title: "Compatibilidad universal",
        step3Desc: "Funciona en todas las principales herramientas de codificación de IA, lo que garantiza que sus agentes tengan los mismos \"Superpowers\" en todas partes."
      },
      features: {
        title: "CONSTRUIDO PARA EL DESARROLLADOR MODERNO",
        desc: "Deje de perder tiempo en tareas repetitivas. Superpowers ofrece una colección seleccionada de utilidades que se integran perfectamente en su shell.",
        stats: "Utilizado por más de 2000 desarrolladores",
        methodologyTag: "METODOLOGÍA",
        methodologyTitle: "Framework de habilidades agenticas",
        methodologyDesc: "Superpowers no es solo una herramienta; es una metodología. Proporciona una forma estructurada de dar a los agentes de IA las habilidades específicas que necesitan para manejar tareas complejas de desarrollo de software.",
        methodologyList: ["Biblioteca de habilidades estandarizada", "Diseño centrado en el agente", "Metodología escalable"],
        multiPlatformTitle: "Multiplataforma",
        multiPlatformDesc: "Soporte nativo para Claude Code, Cursor, Copilot y Gemini CLI.",
        methodologyFirstTitle: "La metodología primero",
        methodologyFirstDesc: "Construido sobre una filosofía de hacer que los agentes de IA sean más confiables y capaces."
      },
      installation: {
        title: "INSTALACIÓN Y CONFIGURACIÓN",
        subtitle: "Superpowers es compatible con todos los principales entornos de desarrollo de IA.",
        claudeTitle: "Claude Code",
        claudeDesc: "Instale directamente desde el Marketplace oficial o el Marketplace de complementos de la comunidad.",
        cursorTitle: "Cursor",
        cursorDesc: "Habilite Superpowers en Cursor a través del Marketplace de complementos para una integración agentica perfecta.",
        cliTitle: "Herramientas CLI",
        cliDesc: "Soporte nativo para GitHub Copilot CLI, Gemini CLI, Codex y OpenCode.",
        verifyTitle: "Verifique sus Superpowers",
        verifyDesc: "Verifique siempre su instalación para asegurarse de que todas las habilidades estén correctamente vinculadas y listas para sus agentes."
      },
      comparison: {
        title: "¿POR QUÉ ELEGIR SUPERPOWERS?",
        oldWay: "La vieja escuela",
        oldList: [
          "Comportamiento poco confiable de los agentes de IA",
          "Ingeniería de prompts manual para cada tarea",
          "Flujos de trabajo de desarrollo fragmentados",
          "Falta de conjuntos de herramientas de IA estandarizados"
        ],
        newWay: "El estilo Superpowers",
        newList: [
          "Habilidades de agente predecibles y de alto rendimiento",
          "Metodología estandarizada para el desarrollo de IA",
          "Integración perfecta en múltiples plataformas de IA",
          "Framework escalable para la colaboración en equipo"
        ]
      },
      workflow: {
        title: "EL FLUJO DE TRABAJO BÁSICO",
        subtitle: "Simple, repetible y potente.",
        step1: "Inicializar",
        step1Desc: "Ejecute 'sp init' en la raíz de su proyecto para preparar el entorno.",
        step2: "Seleccionar habilidades",
        step2Desc: "Elija de la biblioteca o cree habilidades personalizadas para su agente.",
        step3: "Empoderar",
        step3Desc: "Los agentes utilizan automáticamente las habilidades para resolver tareas complejas.",
        step4: "Iterar",
        step4Desc: "Refine las habilidades a medida que su proyecto crece y los agentes evolucionan."
      },
      skills: {
        title: "BIBLIOTECA DE HABILIDADES",
        badge: "Más de 50 habilidades y sumando",
        skill1: "Arquitecto de código",
        skill1Desc: "Habilidades avanzadas de andamiaje de proyectos y diseño estructural.",
        skill2: "Maestro Git",
        skill2Desc: "Rebase complejo, resolución de conflictos de fusión y gestión de historial.",
        skill3: "Ingeniero de pruebas",
        skill3Desc: "Generación automatizada de pruebas unitarias, de integración y E2E.",
        skill4: "Auditor de seguridad",
        skill4Desc: "Escaneo de vulnerabilidades en tiempo real y sugerencias de parches.",
        skill5: "Héroe DevOps",
        skill5Desc: "Optimización de la canalización de CI/CD y habilidades de despliegue en la nube.",
        skill6: "Generador de docs",
        skill6Desc: "Documentación automática de alta calidad a partir del análisis de código."
      },
      philosophy: {
        title: "FILOSOFÍA",
        quote: "«Creemos que los agentes de IA no son solo asistentes, sino colaboradores principales. Superpowers proporciona el marco para que esa contribución sea confiable, escalable y poderosa».",
        tags: ["Código abierto", "Primero el agente", "Impulsado por la comunidad"]
      },
      docs: {
        content: `
# SUPERPOWERS

Un framework de habilidades agenticas y una metodología de desarrollo de software que realmente funcionan.

Superpowers le da a sus agentes de IA un conjunto de herramientas estandarizado para manejar tareas de ingeniería complejas con precisión.

## ¿Por qué Superpowers?

Los agentes de IA son poderosos, pero a menudo carecen de las herramientas específicas y confiables necesarias para la ingeniería de software de producción. Superpowers cierra esta brecha al proporcionar:

- **Habilidades estandarizadas**: Una biblioteca de habilidades pre-construidas y auditadas.
- **Metodología agentica**: Un flujo de trabajo diseñado para el desarrollo centrado en la IA.
- **Compatibilidad universal**: Funciona con Claude Code, Cursor y más.

## Instalación

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Habilítelo a través del Marketplace de complementos.

### Configuración manual
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Habilidades principales

### 1. Arquitecto de código
Andamiaje de proyectos avanzado y diseño estructural.

### 2. Maestro Git
Rebase complejo y resolución de conflictos de fusión.

### 3. Ingeniero de pruebas
Generación automatizada de pruebas unitarias y E2E.

## Uso

Inicialice Superpowers en su proyecto:
\`\`\`bash
sp init
\`\`\`

Verifique su instalación:
\`\`\`bash
sp verify
\`\`\`

## Filosofía

Creemos que los agentes de IA no son solo asistentes, sino colaboradores principales. Superpowers proporciona el marco para que esa contribución sea confiable, escalable y poderosa.
`
      },
      footer: {
        copy: "© 2026 Proyecto Superpowers. Código abierto bajo licencia MIT.",
        download: "Descargar",
        disclaimer: "Descargo de responsabilidad: Este sitio es una referencia al repositorio de GitHub de Superpowers y no está afiliado al autor original."
      }
    }
  },
  pt: {
    translation: {
      nav: {
        howItWorks: "Como funciona",
        features: "Recursos",
        installation: "Instalação",
        workflow: "Fluxo de trabalho",
        skills: "Habilidades",
        docs: "Docs",
        superpowersEngineering: "Engenharia com Superpowers",
        getStarted: "Começar"
      },
      hero: {
        badge: "v2.0: O framework de habilidades agenticas",
        title1: "SUPERPOWERS:",
        title2: "HABILIDADES",
        title3: "QUE FUNCIONAM",
        desc: "Um framework de habilidades agenticas e metodologia de desenvolvimento de software que realmente funcionam. O Superpowers oferece aos seus agentes de IA um kit de ferramentas padronizado para lidar com tarefas de engenharia complexas com precisão.",
        installBtn: "Instalar agora",
        githubBtn: "Star no GitHub"
      },
      howItWorks: {
        title: "COMO FUNCIONA",
        subtitle: "O Superpowers preenche a lacuna entre o potencial bruto da IA e a engenharia pronta para produção.",
        step1Title: "Habilidades padronizadas",
        step1Desc: "Uma biblioteca de habilidades pré-construídas e auditadas que os agentes podem invocar para realizar tarefas específicas de alto valor.",
        step2Title: "Metodologia agentica",
        step2Desc: "Uma metodologia de desenvolvimento de software projetada para um mundo onde os agentes de IA são os principais colaboradores.",
        step3Title: "Compatibilidade universal",
        step3Desc: "Funciona em todas as principais ferramentas de codificação de IA, garantindo que seus agentes tenham os mesmos \"Superpowers\" em todos os lugares."
      },
      features: {
        title: "CONSTRUÍDO PARA O DESENVOLVEDOR MODERNO",
        desc: "Pare de perder tempo com tarefas repetitivas. O Superpowers oferece uma coleção selecionada de utilitários que se integram perfeitamente ao seu shell.",
        stats: "Usado por mais de 2.000 desenvolvedores",
        methodologyTag: "METODOLOGIA",
        methodologyTitle: "Framework de habilidades agenticas",
        methodologyDesc: "O Superpowers não é apenas uma ferramenta; é uma metodologia. Ele fornece uma maneira estruturada de dar aos agentes de IA as habilidades específicas de que precisam para lidar com tarefas complexas de desenvolvimento de software.",
        methodologyList: ["Biblioteca de habilidades padronizada", "Design focado no agente", "Metodologia escalável"],
        multiPlatformTitle: "Multiplataforma",
        multiPlatformDesc: "Suporte nativo para Claude Code, Cursor, Copilot e Gemini CLI.",
        methodologyFirstTitle: "Metodologia primeiro",
        methodologyFirstDesc: "Construído sobre uma filosofia de tornar os agentes de IA mais confiáveis e capazes."
      },
      installation: {
        title: "INSTALAÇÃO E CONFIGURAÇÃO",
        subtitle: "O Superpowers suporta todos os principais ambientes de desenvolvimento de IA.",
        claudeTitle: "Claude Code",
        claudeDesc: "Instale diretamente do Marketplace oficial ou do Marketplace de plugins da comunidade.",
        cursorTitle: "Cursor",
        cursorDesc: "Ative o Superpowers no Cursor via Marketplace de plugins para uma integração agentica perfeita.",
        cliTitle: "Ferramentas CLI",
        cliDesc: "Suporte nativo para GitHub Copilot CLI, Gemini CLI, Codex e OpenCode.",
        verifyTitle: "Verifique seus Superpowers",
        verifyDesc: "Sempre verifique sua instalação para garantir que todas as habilidades estejam vinculadas corretamente e prontas para seus agentes."
      },
      comparison: {
        title: "POR QUE ESCOLHER O SUPERPOWERS?",
        oldWay: "O jeito antigo",
        oldList: [
          "Comportamento não confiável do agente de IA",
          "Engenharia de prompt manual para cada tarefa",
          "Fluxos de trabalho de desenvolvimento fragmentados",
          "Falta de conjuntos de ferramentas de IA padronizados"
        ],
        newWay: "O jeito Superpowers",
        newList: [
          "Habilidades de agente previsíveis e de alto desempenho",
          "Metodologia padronizada para o desenvolvimento de IA",
          "Integração perfeita em várias plataformas de IA",
          "Framework escalável para colaboração em equipe"
        ]
      },
      workflow: {
        title: "O FLUXO DE TRABALHO BÁSICO",
        subtitle: "Simples, repetível e poderoso.",
        step1: "Inicializar",
        step1Desc: "Execute 'sp init' na raiz do seu projeto para preparar o ambiente.",
        step2: "Selecionar habilidades",
        step2Desc: "Escolha na biblioteca ou crie habilidades personalizadas para seu agente.",
        step3: "Empoderar",
        step3Desc: "Os agentes usam automaticamente as habilidades para resolver tarefas complexas.",
        step4: "Iterar",
        step4Desc: "Refine as habilidades à medida que seu projeto cresce e os agentes evoluem."
      },
      skills: {
        title: "BIBLIOTECA DE HABILIDADES",
        badge: "Mais de 50 habilidades e contando",
        skill1: "Arquiteto de código",
        skill1Desc: "Habilidades avançadas de scaffolding de projeto e design estrutural.",
        skill2: "Mestre Git",
        skill2Desc: "Rebase complexo, resolução de conflitos de merge e gerenciamento de histórico.",
        skill3: "Engenheiro de testes",
        skill3Desc: "Geração automatizada de testes unitários, de integração e E2E.",
        skill4: "Auditor de segurança",
        skill4Desc: "Varredura de vulnerabilidades em tempo real e sugestões de patches.",
        skill5: "Herói DevOps",
        skill5Desc: "Otimização de pipeline CI/CD e habilidades de implantação em nuvem.",
        skill6: "Gerador de docs",
        skill6Desc: "Documentação automática de alta qualidade a partir da análise de código."
      },
      philosophy: {
        title: "FILOSOFIA",
        quote: "“Acreditamos que os agentes de IA não são apenas assistentes, mas colaboradores principais. O Superpowers fornece a estrutura para tornar essa contribuição confiável, escalável e poderosa.”",
        tags: ["Código aberto", "Primeiro o agente", "Impulsionado pela comunidade"]
      },
      docs: {
        content: `
# SUPERPOWERS

Um framework de habilidades agenticas e uma metodologia de desenvolvimento de software que realmente funcionam.

O Superpowers oferece aos seus agentes de IA um kit de ferramentas padronizado para lidar com tarefas de engenharia complexas com precisão.

## Por que Superpowers?

Os agentes de IA são poderosos, mas muitas vezes carecem das ferramentas específicas e confiáveis necessárias para a engenharia de software de produção. O Superpowers preenche essa lacuna ao fornecer:

- **Habilidades padronizadas**: Uma biblioteca de habilidades pré-construídas e auditadas.
- **Metodologia agentica**: Um fluxo de trabalho projetado para o desenvolvimento focado em IA.
- **Compatibilidade universal**: Funciona com Claude Code, Cursor e muito mais.

## Instalação

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Ative via Marketplace de plugins.

### Configuração manual
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Habilidades principais

### 1. Arquiteto de código
Scaffolding de projeto avançado e design estrutural.

### 2. Mestre Git
Rebase complexo e resolução de conflitos de merge.

### 3. Engenheiro de testes
Geração automatizada de testes unitários e E2E.

## Uso

Inicialize o Superpowers em seu projeto:
\`\`\`bash
sp init
\`\`\`

Verifique sua instalação:
\`\`\`bash
sp verify
\`\`\`

## Filosofia

Acreditamos que os agentes de IA não são apenas assistentes, mas colaboradores principais. O Superpowers fornece a estrutura para tornar essa contribuição confiável, escalável e poderosa.
`
      },
      footer: {
        copy: "© 2026 Projeto Superpowers. Código aberto sob licença MIT.",
        download: "Baixar",
        disclaimer: "Isenção de responsabilidade: Este site é uma referência ao repositório GitHub do Superpowers e não é afiliato ao autor original."
      }
    }
  },
  ru: {
    translation: {
      nav: {
        howItWorks: "Как это работает",
        features: "Функции",
        installation: "Установка",
        workflow: "Процесс",
        skills: "Навыки",
        docs: "Доки",
        superpowersEngineering: "Инженерия с Superpowers",
        getStarted: "Начать"
      },
      hero: {
        badge: "v2.0: Фреймворк агентских навыков",
        title1: "SUPERPOWERS:",
        title2: "АГЕНТСКИЕ НАВЫКИ,",
        title3: "КОТОРЫЕ РАБОТАЮТ",
        desc: "Фреймворк агентских навыков и методология разработки ПО, которые действительно работают. Superpowers дает вашим ИИ-агентам стандартизированный инструментарий для точного решения сложных инженерных задач.",
        installBtn: "Установить сейчас",
        githubBtn: "Звезда на GitHub"
      },
      howItWorks: {
        title: "КАК ЭТО РАБОТАЕТ",
        subtitle: "Superpowers устраняет разрыв между сырым потенциалом ИИ и готовой к производству инженерией.",
        step1Title: "Стандартизированные навыки",
        step1Desc: "Библиотека готовых, проверенных навыков, которые агенты могут вызывать для выполнения конкретных высокоэффективных задач.",
        step2Title: "Агентская методология",
        step2Desc: "Методология разработки ПО, разработанная для мира, где ИИ-агенты являются основными участниками.",
        step3Title: "Универсальная совместимость",
        step3Desc: "Работает во всех основных инструментах кодирования ИИ, гарантируя, что ваши агенты везде имеют одинаковые «суперсилы»."
      },
      features: {
        title: "СОЗДАНО ДЛЯ СОВРЕМЕННЫХ РАЗРАБОТЧИКОВ",
        desc: "Перестаньте тратить время на повторяющиеся задачи. Superpowers предлагает тщательно подобранную коллекцию утилит, которые легко интегрируются в вашу оболочку.",
        stats: "Используется более чем 2000 разработчиками",
        methodologyTag: "МЕТОДОЛОГИЯ",
        methodologyTitle: "Фреймворк агентских навыков",
        methodologyDesc: "Superpowers — это не просто инструмент, это методология. Она предлагает структурированный способ наделить ИИ-агентов специфическими навыками, необходимыми для решения сложных задач по разработке ПО.",
        methodologyList: ["Стандартная библиотека навыков", "Дизайн, ориентированный на агентов", "Масштабируемая методология"],
        multiPlatformTitle: "Мультиплатформенность",
        multiPlatformDesc: "Нативная поддержка Claude Code, Cursor, Copilot и Gemini CLI.",
        methodologyFirstTitle: "Методология прежде всего",
        methodologyFirstDesc: "Построено на философии повышения надежности и возможностей ИИ-агентов."
      },
      installation: {
        title: "УСТАНОВКА И НАСТРОЙКА",
        subtitle: "Superpowers поддерживает все основные среды разработки ИИ.",
        claudeTitle: "Claude Code",
        claudeDesc: "Установите напрямую из официального магазина или магазина плагинов сообщества.",
        cursorTitle: "Cursor",
        cursorDesc: "Включите Superpowers в Cursor через магазин плагинов для бесшовной интеграции агентов.",
        cliTitle: "Инструменты CLI",
        cliDesc: "Нативная поддержка GitHub Copilot CLI, Gemini CLI, Codex и OpenCode.",
        verifyTitle: "Проверьте свои суперсилы",
        verifyDesc: "Всегда проверяйте установку, чтобы убедиться, что все навыки правильно связаны и готовы для ваших агентов."
      },
      comparison: {
        title: "ПОЧЕМУ ВЫБИРАЮТ SUPERPOWERS?",
        oldWay: "Старый подход",
        oldList: [
          "Непредсказуемое поведение ИИ-агентов",
          "Ручной промпт-инжиниринг для каждой задачи",
          "Фрагментированные рабочие процессы",
          "Отсутствие стандартизированных наборов инструментов ИИ"
        ],
        newWay: "Подход Superpowers",
        newList: [
          "Предсказуемые и высокопроизводительные навыки агентов",
          "Стандартизированная методология разработки ИИ",
          "Бесшовная интеграция на нескольких ИИ-платформах",
          "Масштабируемая среда для командной работы"
        ]
      },
      workflow: {
        title: "БАЗОВЫЙ ПРОЦЕСС",
        subtitle: "Просто, повторяемо и мощно.",
        step1: "Инициализация",
        step1Desc: "Запустите 'sp init' в корне вашего проекта, чтобы подготовить среду.",
        step2: "Выбор навыков",
        step2Desc: "Выберите из библиотеки или создайте собственные навыки для своего агента.",
        step3: "Расширение возможностей",
        step3Desc: "Агенты автоматически используют навыки для решения сложных задач.",
        step4: "Итерация",
        step4Desc: "Совершенствуйте навыки по мере роста вашего проекта и развития агентов."
      },
      skills: {
        title: "БИБЛИОТЕКА НАВЫКОВ",
        badge: "50+ навыков и это не предел",
        skill1: "Архитектор кода",
        skill1Desc: "Продвинутые навыки создания каркаса проекта и структурного проектирования.",
        skill2: "Мастер Git",
        skill2Desc: "Сложный rebase, разрешение конфликтов слияния и управление историей.",
        skill3: "Инженер по тестированию",
        skill3Desc: "Автоматизированная генерация модульных, интеграционных и E2E тестов.",
        skill4: "Аудитор безопасности",
        skill4Desc: "Сканирование уязвимостей в реальном времени и предложения по исправлению.",
        skill5: "Герой DevOps",
        skill5Desc: "Оптимизация CI/CD конвейера и навыки облачного развертывания.",
        skill6: "Генератор доков",
        skill6Desc: "Автоматическая высококачественная документация на основе анализа кода."
      },
      philosophy: {
        title: "ФИЛОСОФИЯ",
        quote: "«Мы верим, что ИИ-агенты — это не просто помощники, а основные участники процесса. Superpowers предоставляет основу для того, чтобы сделать этот вклад надежным, масштабируемым и мощным».",
        tags: ["Open Source", "Сначала агент", "Движимо сообществом"]
      },
      docs: {
        content: `
# SUPERPOWERS

Фреймворк агентских навыков и методология разработки ПО, которые действительно работают.

Superpowers дает вашим ИИ-агентам стандартизированный инструментарий для точного решения сложных инженерных задач.

## Почему Superpowers?

ИИ-агенты мощны, но им часто не хватает специфических, надежных инструментов, необходимых для разработки программного обеспечения промышленного уровня. Superpowers устраняет этот разрыв, предоставляя:

- **Стандартизированные навыки**: Библиотека готовых, проверенных навыков.
- **Агентская методология**: Рабочий процесс, разработанный для разработки в первую очередь на основе ИИ.
- **Универсальная совместимость**: Работает с Claude Code, Cursor и другими.

## Установка

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Включите через магазин плагинов.

### Ручная настройка
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Основные навыки

### 1. Архитектор кода
Продвинутое создание каркаса проекта и структурное проектирование.

### 2. Мастер Git
Сложный rebase и разрешение конфликтов слияния.

### 3. Инженер по тестированию
Автоматизированная генерация модульных и E2E тестов.

## Использование

Инициализируйте Superpowers в своем проекте:
\`\`\`bash
sp init
\`\`\`

Проверьте установку:
\`\`\`bash
sp verify
\`\`\`

## Философия

Мы верим, что ИИ-агенты — это не просто помощники, а основные участники процесса. Superpowers предоставляет основу для того, чтобы сделать этот вклад надежным, масштабируемым и мощным.
`
      },
      footer: {
        copy: "© 2026 Проект Superpowers. Открытый исходный код под лицензией MIT.",
        download: "Скачать",
        disclaimer: "Отказ от ответственности: Этот сайт является ссылкой на репозиторий Superpowers на GitHub и не связан с оригинальным автором."
      }
    }
  },
  it: {
    translation: {
      nav: {
        howItWorks: "Come funziona",
        features: "Caratteristiche",
        installation: "Installazione",
        workflow: "Workflow",
        skills: "Skill",
        docs: "Docs",
        superpowersEngineering: "Ingegneria con Superpowers",
        getStarted: "Inizia"
      },
      hero: {
        badge: "v2.0: Il framework per le skill agentiche",
        title1: "SUPERPOWERS:",
        title2: "SKILL AGENTICHE",
        title3: "CHE FUNZIONANO",
        desc: "Un framework per le skill agentiche e una metodologia di sviluppo software che funzionano davvero. Superpowers offre ai tuoi agenti AI un toolkit standardizzato per gestire compiti di ingegneria complessi con precisionre.",
        installBtn: "Installa ora",
        githubBtn: "Star su GitHub"
      },
      howItWorks: {
        title: "COME FUNZIONA",
        subtitle: "Superpowers colma il divario tra il potenziale grezzo dell'IA e l'ingegneria pronta per la produzione.",
        step1Title: "Skill standardizzate",
        step1Desc: "Una libreria di skill pre-costruite e verificate che gli agenti possono richiamare per eseguire compiti specifici ad alto valore.",
        step2Title: "Metodologia agentica",
        step2Desc: "Una metodologia di sviluppo software progettata per un mondo in cui gli agenti AI sono i principali contributori.",
        step3Title: "Compatibilità universale",
        step3Desc: "Funziona su tutti i principali strumenti di codifica AI, garantendo che i tuoi agenti abbiano gli stessi \"Superpowers\" ovunque."
      },
      features: {
        title: "COSTRUITO PER IL DEVELOPER MODERNO",
        desc: "Smetti di perdere tempo in compiti ripetitivi. Superpowers offre una collezione curata di utility che si integrano perfettamente nella tua shell.",
        stats: "Usato da oltre 2.000 sviluppatori",
        methodologyTag: "METODOLOGIA",
        methodologyTitle: "Framework per le skill agentiche",
        methodologyDesc: "Superpowers non è solo uno strumento; è una metodologia. Fornisce un modo strutturato per dare agli agenti AI le skill specifiche di cui hanno bisogno per gestire compiti complessi di sviluppo software.",
        methodologyList: ["Libreria di skill standardizzata", "Design incentrato sull'agente", "Metodologia scalabile"],
        multiPlatformTitle: "Multipiattaforma",
        multiPlatformDesc: "Supporto nativo per Claude Code, Cursor, Copilot e Gemini CLI.",
        methodologyFirstTitle: "La metodologia prima di tutto",
        methodologyFirstDesc: "Costruito su una filosofia volta a rendere gli agenti AI più affidabili e capaci."
      },
      installation: {
        title: "INSTALLAZIONE E CONFIGURAZIONE",
        subtitle: "Superpowers supporta tutti i principali ambienti di sviluppo AI.",
        claudeTitle: "Claude Code",
        claudeDesc: "Installa direttamente dal Marketplace ufficiale o dal Marketplace dei plugin della comunità.",
        cursorTitle: "Cursor",
        cursorDesc: "Abilita Superpowers in Cursor tramite il Marketplace dei plugin per un'integrazione agentica senza interruzioni.",
        cliTitle: "Strumenti CLI",
        cliDesc: "Supporto nativo per GitHub Copilot CLI, Gemini CLI, Codex e OpenCode.",
        verifyTitle: "Verifica i tuoi Superpowers",
        verifyDesc: "Verifica sempre la tua installazione per assicurarti che tutte le skill siano collegate correttamente e pronte per i tuoi agenti."
      },
      comparison: {
        title: "PERCHÉ SCEGLIERE SUPERPOWERS?",
        oldWay: "Il vecchio modo",
        oldList: [
          "Comportamento inaffidabile degli agenti AI",
          "Prompt engineering manuale per ogni compito",
          "Workflow di sviluppo frammentati",
          "Mancanza di toolset AI standardizzati"
        ],
        newWay: "Il modo Superpowers",
        newList: [
          "Skill degli agenti prevedibili e ad alte prestazioni",
          "Metodologia standardizzata per lo sviluppo AI",
          "Integrazione perfetta su più piattaforme AI",
          "Framework scalabile per la collaborazione in team"
        ]
      },
      workflow: {
        title: "IL WORKFLOW DI BASE",
        subtitle: "Semplice, ripetibile e potente.",
        step1: "Inizializza",
        step1Desc: "Esegui 'sp init' nella root del tuo progetto per preparare l'ambiente.",
        step2: "Seleziona le skill",
        step2Desc: "Scegli dalla libreria o crea skill personalizzate per il tuo agente.",
        step3: "Potenzia",
        step3Desc: "Gli agenti utilizzano automaticamente le skill per risolvere compiti complessi.",
        step4: "Itera",
        step4Desc: "Affina le skill man mano che il tuo progetto cresce e gli agenti si evolvono."
      },
      skills: {
        title: "LIBRERIA DELLE SKILL",
        badge: "Oltre 50 skill e in aumento",
        skill1: "Architetto del codice",
        skill1Desc: "Skill avanzate di scaffolding del progetto e progettazione strutturale.",
        skill2: "Maestro Git",
        skill2Desc: "Rebase complesso, risoluzione dei conflitti di merge e gestione della cronologia.",
        skill3: "Ingegnere dei test",
        skill3Desc: "Generazione automatizzata di test unitari, di integrazione ed E2E.",
        skill4: "Revisore della sicurezza",
        skill4Desc: "Scansione delle vulnerabilità in tempo reale e suggerimenti per le patch.",
        skill5: "Eroe DevOps",
        skill5Desc: "Ottimizzazione della pipeline CI/CD e skill di distribuzione cloud.",
        skill6: "Generatore di docs",
        skill6Desc: "Documentazione automatica di alta qualità dall'analisi del codice."
      },
      philosophy: {
        title: "FILOSOFIA",
        quote: "«Crediamo che gli agenti AI non siano solo assistenti, ma contributori primari. Superpowers fornisce il framework per rendere tale contributo affidabile, scalabile e potente».",
        tags: ["Open Source", "Agent-First", "Guidato dalla community"]
      },
      docs: {
        content: `
# SUPERPOWERS

Un framework per le skill agentiche e una metodologia di sviluppo software che funzionano davvero.

Superpowers offre ai tuoi agenti AI un toolkit standardizzato per gestire compiti di ingegneria complessi con precisione.

## Perché Superpowers?

Gli agenti AI sono potenti, ma spesso mancano degli strumenti specifici e affidabili necessari per l'ingegneria del software di produzione. Superpowers colma questo divario fornendo:

- **Skill standardizzate**: Una libreria di skill pre-costruite e verificate.
- **Metodologia agentica**: Un workflow progettato per lo sviluppo AI-first.
- **Compatibilità universale**: Funziona con Claude Code, Cursor e altro ancora.

## Installazione

### Claude Code
\`\`\`bash
claude-code install superpowers
\`\`\`

### Cursor
Abilita tramite il Marketplace dei plugin.

### Configurazione manuale
\`\`\`bash
git clone https://github.com/obra/superpowers
cd superpowers && ./install.sh
\`\`\`

## Skill principali

### 1. Architetto del codice
Scaffolding del progetto avanzato e progettazione strutturale.

### 2. Maestro Git
Rebase complesso e risoluzione dei conflitti di merge.

### 3. Ingegnere dei test
Generazione automatizzata di test unitari ed E2E.

## Utilizzo

Inizializza Superpowers nel tuo progetto:
\`\`\`bash
sp init
\`\`\`

Verifica la tua installazione:
\`\`\`bash
sp verify
\`\`\`

## Filosofia

Crediamo che gli agenti AI non siano solo assistenti, ma contributori primari. Superpowers fornisce il framework per rendere tale contributo affidabile, scalabile e potente.
`
      },
      footer: {
        copy: "© 2026 Progetto Superpowers. Open source sotto licenza MIT.",
        download: "Scarica",
        disclaimer: "Dichiarazione di non responsabilità: Questo sito è un riferimento al repository GitHub di Superpowers e non è affiliato all'autore originale."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
