import React, { useState, useEffect, useRef } from 'react';
import resumeData from '../resume/resumeData';

const COMMANDS = {
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
    `  Name:     ${resumeData.name}`,
    `  Role:     ${resumeData.role}`,
    `  Email:    ${resumeData.email}`,
    `  Location: ${resumeData.address}`,
    resumeData.bio ? `  Bio:      ${resumeData.bio}` : '',
  ].filter(Boolean),
  skills: () => {
    const s = resumeData.skills;
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
    (resumeData.experience || []).flatMap(ex => [
      `  ◉ ${ex.organization} — ${ex.title || ex.position || ''}`,
      `    ${ex.years || ex.date || ''}`,
      '',
    ]),
  contact: () => [
    `  Email:    ${resumeData.email}`,
    `  LinkedIn: https://www.linkedin.com/in/shjang956/`,
    `  GitHub:   https://github.com/sj43`,
  ],
  projects: () => ['  Scroll to the Projects section to explore — or type "experience" for work history.'],
  clear: () => null, // special case handled below
  exit: () => null,  // special case handled below
};

const WELCOME = [
  `  Welcome to ${resumeData.name}'s terminal`,
  '  Type "help" to see available commands.',
  '',
];

export default function Terminal({ onClose }) {
  const [history, setHistory] = useState(WELCOME.map(line => ({ type: 'output', text: line })));
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
      setHistory(WELCOME.map(line => ({ type: 'output', text: line })));
      setInput('');
      return;
    }
    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const handler = COMMANDS[trimmed];
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
    <div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose} />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">TERMINAL</span>
        </div>
        <div className="terminal-body">
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
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
