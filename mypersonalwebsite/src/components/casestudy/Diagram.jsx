import React from 'react';

/* ----------------------------------------------------------------
   Architecture diagrams rendered as CSS box-and-arrow layouts.
   Each diagram is keyed by slug + section identifier.
---------------------------------------------------------------- */

function Node({ label, sub, accent, secondary, mono }) {
  const style = {
    background: accent
      ? 'rgba(124,58,237,0.12)'
      : secondary
      ? 'rgba(6,182,212,0.10)'
      : 'rgba(255,255,255,0.04)',
    border: `1px solid ${accent ? 'rgba(124,58,237,0.5)' : secondary ? 'rgba(6,182,212,0.45)' : 'rgba(255,255,255,0.12)'}`,
    borderRadius: 8,
    padding: '10px 16px',
    textAlign: 'center',
    minWidth: 100,
  };
  return (
    <div style={style}>
      <div style={{ fontSize: mono ? 12 : 13, fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter, sans-serif', fontWeight: 600, color: accent ? '#A78BFA' : secondary ? '#67E8F9' : '#F1F5F9', lineHeight: 1.3 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: '#64748B', marginTop: 3 }}>{sub}</div>}
    </div>
  );
}

function Arrow({ label, vertical }) {
  return vertical ? (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, padding: '2px 0' }}>
      <div style={{ width: 2, height: 20, background: 'rgba(255,255,255,0.15)' }} />
      <div style={{ fontSize: 10, color: '#475569', margin: '1px 0' }}>{label}</div>
      <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid rgba(255,255,255,0.2)' }} />
    </div>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '0 4px' }}>
      <div style={{ height: 2, width: 24, background: 'rgba(255,255,255,0.15)' }} />
      {label && <div style={{ fontSize: 10, color: '#475569', whiteSpace: 'nowrap', margin: '0 4px' }}>{label}</div>}
      <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(255,255,255,0.2)' }} />
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Node label="Product Teams" sub="onboarding clients" />
          <Node label="Release Engineers" sub="operators" />
          <Node label="Monitoring Systems" sub="anomaly signals" />
        </div>
        <Arrow vertical label="requests / events" />
        <Node label="Release Orchestrator" sub="~40 Service Fabric microservices" accent />
        <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Arrow vertical label="" />
          <Arrow vertical label="" />
          <Arrow vertical label="" />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Node label="GitHub Copilot" sub="coding agent" accent />
          <Node label="AI Agents" sub="custom LLM agents" accent />
          <Node label="Azure AI" sub="knowledge retrieval" accent />
        </div>
        <Arrow vertical label="MCP protocol" />
        <Node label="MCP Server" sub="50+ discoverable tools" accent />
        <Arrow vertical label="Azure AD / MISE auth + RBAC" />
        <Node label="Release Automation Platform" sub="orchestrator + service mesh" secondary />
        <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Arrow vertical label="" />
          <Arrow vertical label="" />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Node label="React Frontend" sub="eatwithmenu.com" secondary />
        <Arrow vertical label="HTTPS REST" />
        <Node label="Flask REST API" sub="Python backend · JWT auth" accent />
        <div style={{ display: 'flex', gap: 24, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center', width: '100%', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Arrow vertical label="" />
            <Node label="MongoDB" sub="menu + restaurant data" secondary mono />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Arrow vertical label="" />
            <Node label="Redis" sub="token blacklist · cache" secondary mono />
          </div>
        </div>
        <Arrow vertical label="containerized via Docker" />
        <Node label="AWS Elastic Beanstalk" sub="ECR → CodePipeline → deploy" accent />
        <div style={{ display: 'flex', gap: 10, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Node label="Service Repo A" mono />
          <Node label="Service Repo B" mono />
          <Node label="Service Repo …" mono />
        </div>
        <Arrow vertical label="git push (docs changed)" />
        <Node label="GitHub Webhook" secondary />
        <div style={{ display: 'flex', gap: 16, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center', width: '100%', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Arrow vertical label="" />
            <Node label="Notification Service" sub="SNS → SQS → owners" secondary mono accent />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
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
