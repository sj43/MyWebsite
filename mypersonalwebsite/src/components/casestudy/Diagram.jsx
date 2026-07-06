import React from 'react';

/* ----------------------------------------------------------------
   Architecture diagrams rendered as CSS box-and-arrow layouts.
   Each diagram is keyed by slug + section identifier.
---------------------------------------------------------------- */

function Node({ label, sub, accent, secondary, mono }) {
  const classes = [
    'cs-diagram-node',
    accent ? 'cs-diagram-node-accent' : '',
    secondary ? 'cs-diagram-node-secondary' : '',
    mono ? 'cs-diagram-node-mono' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="cs-diagram-node-label">{label}</div>
      {sub && <div className="cs-diagram-node-sub">{sub}</div>}
    </div>
  );
}

function Arrow({ label, vertical }) {
  return vertical ? (
    <div className="cs-diagram-arrow cs-diagram-arrow-vertical">
      <div className="cs-diagram-arrow-line" />
      <div className="cs-diagram-arrow-label">{label}</div>
      <div className="cs-diagram-arrow-head" />
    </div>
  ) : (
    <div className="cs-diagram-arrow cs-diagram-arrow-horizontal">
      <div className="cs-diagram-arrow-line" />
      {label && <div className="cs-diagram-arrow-label">{label}</div>}
      <div className="cs-diagram-arrow-head" />
    </div>
  );
}

function DiagramWrap({ title, children }) {
  return (
    <div className="cs-diagram">
      {title && <div className="cs-diagram-title">{title}</div>}
      <div className="cs-diagram-body">{children}</div>
    </div>
  );
}

/* ---- Microsoft: Release Automation Architecture ---- */
function DiagramMicrosoftRelease() {
  return (
    <DiagramWrap title="Release Automation Platform — Azure Service Fabric">
      <div className="cs-diagram-flow">
        <div className="cs-diagram-row">
          <Node label="Product Teams" sub="onboarding clients" />
          <Node label="Release Engineers" sub="operators" />
          <Node label="Monitoring Systems" sub="anomaly signals" />
        </div>
        <Arrow vertical label="requests / events" />
        <Node label="Release Orchestrator" sub="~40 Service Fabric microservices" accent />
        <div className="cs-diagram-row cs-diagram-row-tight">
          <Arrow vertical label="" />
          <Arrow vertical label="" />
          <Arrow vertical label="" />
        </div>
        <div className="cs-diagram-row">
          <Node label="Scheduler" secondary mono />
          <Node label="Validator" secondary mono />
          <Node label="Incident Mgr" secondary mono />
          <Node label="Onboarding" secondary mono />
          <Node label="Rollback" secondary mono />
        </div>
        <Arrow vertical label="deploys to" />
        <Node label="Windows Update Pipeline" sub="staged rollout → end users" accent />
      </div>
    </DiagramWrap>
  );
}

/* ---- Microsoft: MCP / AI Integration ---- */
function DiagramMicrosoftAI() {
  return (
    <DiagramWrap title="AI & Agent Integration — MCP Architecture">
      <div className="cs-diagram-flow">
        <div className="cs-diagram-row">
          <Node label="GitHub Copilot" sub="coding agent" accent />
          <Node label="AI Agents" sub="custom LLM agents" accent />
          <Node label="Azure AI" sub="knowledge retrieval" accent />
        </div>
        <Arrow vertical label="MCP protocol" />
        <Node label="MCP Server" sub="50+ discoverable tools" accent />
        <Arrow vertical label="Azure AD / MISE auth + RBAC" />
        <Node label="Release Automation Platform" sub="orchestrator + service mesh" secondary />
        <div className="cs-diagram-row cs-diagram-row-tight">
          <Arrow vertical label="" />
          <Arrow vertical label="" />
        </div>
        <div className="cs-diagram-row">
          <Node label="Azure AI Search" sub="codebase index" secondary mono />
          <Node label="Release State" sub="Service Fabric" secondary mono />
        </div>
      </div>
    </DiagramWrap>
  );
}

/* ---- ME.NU: System Architecture ---- */
function DiagramMenu() {
  return (
    <DiagramWrap title="ME.NU — System Architecture">
      <div className="cs-diagram-flow">
        <Node label="React Frontend" sub="eatwithmenu.com" secondary />
        <Arrow vertical label="HTTPS REST" />
        <Node label="Flask REST API" sub="Python backend · JWT auth" accent />
        <div className="cs-diagram-branch-row">
          <div className="cs-diagram-branch">
            <Arrow vertical label="" />
            <Node label="MongoDB" sub="menu + restaurant data" secondary mono />
          </div>
          <div className="cs-diagram-branch">
            <Arrow vertical label="" />
            <Node label="Redis" sub="token blacklist · cache" secondary mono />
          </div>
        </div>
        <Arrow vertical label="containerized via Docker" />
        <Node label="AWS Elastic Beanstalk" sub="ECR → CodePipeline → deploy" accent />
        <div className="cs-diagram-row cs-diagram-row-tight">
          <Node label="AWS S3" sub="static assets" mono />
          <Node label="AWS CodePipeline" sub="CI/CD" mono />
        </div>
      </div>
    </DiagramWrap>
  );
}

/* ---- Expedia: Backstage Docs Pipeline ---- */
function DiagramExpedia() {
  return (
    <DiagramWrap title="Expedia — Docs-as-Code Platform">
      <div className="cs-diagram-flow">
        <div className="cs-diagram-row">
          <Node label="Service Repo A" mono />
          <Node label="Service Repo B" mono />
          <Node label="Service Repo …" mono />
        </div>
        <Arrow vertical label="git push (docs changed)" />
        <Node label="GitHub Webhook" secondary />
        <div className="cs-diagram-branch-row">
          <div className="cs-diagram-branch">
            <Arrow vertical label="" />
            <Node label="Notification Service" sub="SNS → SQS → owners" secondary mono accent />
          </div>
          <div className="cs-diagram-branch">
            <Arrow vertical label="" />
            <Node label="Search Indexer" sub="ElasticSearch index" secondary mono />
          </div>
        </div>
        <Arrow vertical label="renders docs" />
        <Node label="Backstage Developer Portal" sub="10,000+ Expedia services" accent />
      </div>
    </DiagramWrap>
  );
}

const DIAGRAMS = {
  'microsoft-release': <DiagramMicrosoftRelease />,
  'microsoft-ai': <DiagramMicrosoftAI />,
  'menu-arch': <DiagramMenu />,
  'expedia-arch': <DiagramExpedia />,
};

export default function Diagram({ diagramKey }) {
  return DIAGRAMS[diagramKey] || null;
}
