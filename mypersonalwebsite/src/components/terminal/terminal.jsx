import React, { useState, useEffect, useRef, useMemo } from 'react';

function buildCommands(data, projects) {
  const allProjects = [
    ...(projects?.projects || []),
    ...(projects?.activities || []),
  ];

  return {
    help: () => [
      '  Available commands:',
      '  about       — Learn about Seung Hun',
      '  skills      — View tech stack',
      '  experience  — Work history',
      '  projects    — Featured projects',
      '  contact     — Get in touch',
      '  clear       — Clear terminal',
      '  exit        — Close terminal',
    ],
    about: () => [
      `  Name:     ${data.name}`,
      `  Role:     ${data.role}`,
      `  Email:    ${data.email}`,
      `  Location: ${data.address}`,
      data.bio ? `  Bio:      ${data.bio}` : '',
    ].filter(Boolean),
    skills: () => {
      const s = data.skills;
      if (!s) return ['  No skills data found.'];
      return [
        `  Languages:   ${(s.languages || []).join(', ')}`,
        `  Frameworks:  ${(s.frameworks || []).join(', ')}`,
        `  Cloud/AWS:   ${(s.cloud || []).join(', ')}`,
        `  Databases:   ${(s.databases || []).join(', ')}`,
        `  Tools:       ${(s.tools || []).join(', ')}`,
      ];
    },
    experience: () =>
      (data.experience || []).flatMap(ex => [
        `  ◉ ${ex.organization} — ${ex.title || ex.position || ''}`,
        `    ${ex.years || ex.date || ''}`,
        '',
      ]),
    contact: () => {
      const lines = [`  Email:    ${data.email}`];
      if (data.socialLinks) {
        data.socialLinks.forEach(link => {
          lines.push(`  ${link.label}:${' '.repeat(Math.max(1, 10 - link.label.length))}${link.url}`);
        });
      }
      return lines;
    },
    projects: () => {
      if (!allProjects.length) return ['  No projects found.'];
      return allProjects.flatMap(p => [
        `  ◉ ${p.name}`,
        `    ${(p.description || [])[0] || ''}`,
        p.techStack ? `    [${p.techStack.slice(0, 5).join(', ')}]` : '',
        '',
      ].filter(Boolean));
    },
    clear: () => null,
    exit: () => null,
  };
}

export default function Terminal({ resumeData, projectData, onClose }) {
  const commands = useMemo(() => buildCommands(resumeData, projectData), [resumeData, projectData]);
  const welcomeLines = useMemo(() => [
    `  Welcome to ${resumeData.name}'s terminal`,
    '  Type "help" to see available commands.',
    '',
  ], [resumeData.name]);

  const [history, setHistory] = useState(() => welcomeLines.map(line => ({ type: 'output', text: line })));
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

    if (trimmed === 'exit') {
      onClose();
      return;
    }
    if (trimmed === 'clear') {
      setHistory(welcomeLines.map(line => ({ type: 'output', text: line })));
      setInput('');
      return;
    }
    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const handler = commands[trimmed];
    if (handler) {
      const result = handler();
      setHistory([...newHistory, ...result.map(text => ({ type: 'output', text }))]);
    } else {
      setHistory([...newHistory, {
        type: 'error',
        text: `  command not found: ${trimmed}. Type "help" for available commands.`,
      }]);
    }

    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(idx);
      setInput(cmdHistory[idx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : cmdHistory[idx]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="terminal-overlay" role="dialog" aria-modal="true" aria-label="Interactive terminal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <button className="dot dot-red" onClick={onClose} aria-label="Close terminal" />
            <span className="dot dot-yellow" aria-hidden="true" />
            <span className="dot dot-green" aria-hidden="true" />
          </div>
          <span className="terminal-title">TERMINAL</span>
        </div>
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className={`terminal-line terminal-${line.type}`}>
              {line.text}
            </div>
          ))}
          <div className="terminal-input-row">
            <span className="terminal-prompt">$ </span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoFocus
              aria-label="Terminal command input"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
