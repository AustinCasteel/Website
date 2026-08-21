---
title: "SentinelMesh"
date: 2026-08-21
draft: false
description: "Engineering SentinelMesh: Architecting a Mission-Grade Multi-Agent Threat Triage Platform"
summary: "Engineering SentinelMesh: Architecting a Mission-Grade Multi-Agent Threat Triage Platform"
categories: ["Service"]
tags: ["AI", "Live"]
#externalUrl: ""
authors:
  - austincasteel

showDate : false
showDateUpdated : false
showHeadingAnchors : false
showPagination : false
showReadingTime : true
showTableOfContents : true
showTaxonomies : true 
showWordCount : false
showSummary : false
showEdit: false
showViews: true
showLikes: true
layoutBackgroundHeaderSpace: false

---


Modern Security Operations Centers (SOCs) face an alert fatigue crisis. Raw telemetry from firewalls, endpoint detection systems, and cloud identity providers pours in faster than analysts can manually cross-reference external threat intelligence, map attacker relationships, and issue containment steps.

Traditional heuristic automation scripts are rigid, while naive single-prompt LLM wrappers lack determinism, hallucinate parameters, and fail to maintain state across complex triage lifecycles.

To solve this, I engineered **SentinelMesh**—a production-ready, multi-agent AI system designed for high-stakes, rapid threat triage and automated mitigation planning. Built using **agentic state-loop orchestration**, **Model Context Protocol (MCP)** tool execution, **Hybrid GraphRAG**, and rigorous **telemetry and eval test harnesses**, SentinelMesh demonstrates how autonomous agents can operate reliably inside critical security boundaries.

---

## 1. System Architecture & Information Flow

SentinelMesh decouples security analysis into specialized autonomous workers coordinated by an explicit supervisory state graph.

{{< mermaid >}}
flowchart TD
    subgraph Ingestion_API [Ingestion & Serving]
        A[Security Telemetry / SIEM Alert] --> B[FastAPI Async Endpoint]
        B --> C[Supervisor State Loop]
    end

    subgraph Multi_Agent_Core [Multi-Agent Core Engine]
        C -->|Route & Assign| D[Triage Agent]
        C -->|Context Request| E[Intel Retrieval Agent]
        C -->|Action Generation| F[Remediation Agent]
        
        D -->|Severity Classification| C
        E -->|Correlated IOC Context| C
        F -->|Structured Mitigation Plan| G[Deterministic Action Validator]
    end

    subgraph Retrieval_And_Tools [Knowledge & Tool Ecosystem]
        E <-->|Vector Search| H[(Vector Index - Raw Logs)]
        E <-->|Graph Traversal| I[(Knowledge Graph - IOCs & Tactics)]
        D <-->|MCP Client Protocol| J[MCP Threat Tool Server]
        J <--> K[External CVE / IP / Shodan APIs]
    end

    subgraph Observability [Telemetry & Governance]
        C -.-> L[OpenTelemetry / Langfuse Tracing]
        G -.-> M[Automated Output Guardrails]
        M --> N[Final Incident Package / SIEM Action]
    end

{{< /mermaid >}}

### Core Execution Pipeline

1. **Ingestion & State Initialization:** Alerts are ingested via an asynchronous FastAPI interface, initialized into a strongly typed `AgentState` schema via Pydantic V2, and passed to the supervisor.
2. **Dynamic IOC Investigation (MCP):** The **Triage Agent** extracts Indicators of Compromise (IPs, hashes, CVEs) and issues structured calls across an isolated **Model Context Protocol (MCP)** server to pull real-time reputation data without exposing credentials to the model context directly.
3. **Hybrid Context Synthesis (GraphRAG):** The **Intel Retrieval Agent** queries both a dense vector store (for similar historical incident postmortems) and an entity-relation graph (mapping threat actors, tactics, techniques, and infrastructure).
4. **Deterministic Remediation & Guardrails:** The **Remediation Agent** synthesizes the findings into a phased incident response playbook. Outputs pass through deterministic validation schemas to guarantee zero malformed commands before human review or execution.

---

## 2. Key Architectural Highlights

### Multi-Agent State Orchestration Over Naive Chains

Instead of linear chains where context is lost or errors compound downstream, SentinelMesh uses an explicit state machine. The supervisor controls handoffs, monitors token consumption, and handles loop bounds to prevent runaway inference cycles. If an agent encounters an ambiguous tool response, state transitions route to a fallback analysis node rather than crashing the pipeline.

```python
from typing import Annotated, List, TypedDict
from pydantic import BaseModel, Field

class IncidentFinding(BaseModel):
    ioc: str
    threat_level: str
    justification: str
    suggested_containment: List[str]

class ThreatTriageState(TypedDict):
    alert_raw: dict
    extracted_iocs: List[str]
    threat_intel: dict
    graph_context: List[str]
    mitigation_plan: IncidentFinding | None
    loop_count: int
    current_node: str

```

### Model Context Protocol (MCP) Tool Integration

Rather than tightly coupling proprietary API SDKs inside prompt templates, SentinelMesh implements a modular **MCP Server architecture**.

This separates tool execution environments from the reasoning layer, providing:

* **Least-Privilege Isolation:** Network tools and threat database interfaces run in sandboxed processes.
* **Plug-and-Play Extensibility:** New threat feeds (e.g., Shodan, VirusTotal, MISP) can be connected by simply registering an MCP tool descriptor without rewriting agent logic.

### Hybrid GraphRAG for Contextual Awareness

Vector similarity search alone struggles with multi-hop reasoning (e.g., *"Has this external IP interacted with an internal asset that shares an unpatched CVE targeted by APT29?"*).

SentinelMesh combines:

* **Dense Vector Indexing:** Fast semantic retrieval of unstructured incident notes.
* **Knowledge Graph Traversal:** Explicit node-edge queries capturing relationships between hosts, CVEs, identity tokens, and MITRE ATT&CK techniques.

---

## 3. Observability, Telemetry & Benchmark Evals

Deploying agentic systems into production requires measurable guarantees. SentinelMesh incorporates an enterprise-grade evaluation and observability suite.

| Metric / Layer | Implementation | Purpose |
| --- | --- | --- |
| **Distributed Tracing** | OpenTelemetry / Langfuse hooks | Captures step-by-step agent reasoning, tool payloads, latency, and token cost per triage. |
| **Tool Call Precision** | Automated eval test harness | Evaluates whether agents select the correct MCP tool and extract valid arguments against a synthetic benchmark suite. |
| **Schema Conformance** | Strict Pydantic parsing | Enforces 100% structured JSON compliance on all remediation output plans. |
| **Provider Portability** | Configurable LLM Factory | Enables instant switching between cloud providers (AWS Bedrock / Anthropic) and air-gapped local instances (Ollama / vLLM). |

---

## 4. Running the Project Locally

The entire system is containerized for rapid deployment:

```bash
# Clone the repository
git clone https://github.com/AustinCasteel/Sentinel-Mesh.git
cd Sentinel-Mesh

# Set up environment variables
cp .env.example .env

# Spin up the complete environment (Agents, MCP Server, Vector Store)
docker compose up -d

# Run the automated eval benchmark suite
python -m pytest eval/run_evals.py --verbose

```

---

## 5. Key Takeaways & What's Next

Building SentinelMesh reinforced several fundamental truths about applied AI engineering:

1. **Prompts are not architecture:** Reliability comes from well-defined state boundaries, schema enforcement, and tool isolation, not endless prompt tweaking.
2. **Hybrid retrieval is mandatory for security:** Knowledge graphs provide the structure and relational reasoning that vector databases miss when analyzing complex attack chains.
3. **Observability cannot be an afterthought:** You cannot improve or safely deploy an agentic workflow without granular distributed traces and reproducible evaluation benchmarks.

Feel free to explore the code, test the eval suite, or contribute on [GitHub](https://github.com/AustinCasteel/Sentinel-Mesh).
{{< github repo="AustinCasteel/Sentinel-Mesh" showThumbnail=true >}}
