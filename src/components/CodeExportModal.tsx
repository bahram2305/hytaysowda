import React, { useState } from 'react';
import { X, Copy, Check, Code, Download } from 'lucide-react';
import { generateSingleFileHTML } from '../utils/singleFileTemplate';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const codeContent = generateSingleFileHTML();

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([codeContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg font-heading">
                Bir HTML Faýly (HTML + CSS + JS)
              </h3>
              <p className="text-xs text-slate-400">
                Hemme kodlar bir faýla ýerleşdirilen (&lt;style&gt; we &lt;script&gt; bilen)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Göçürildi!' : 'Kody Göçürmek'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold flex items-center space-x-2 transition"
            >
              <Download className="w-4 h-4" />
              <span>index.html Ýüklap Almak</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content View */}
        <div className="flex-1 p-4 bg-slate-950 overflow-auto text-xs font-mono text-emerald-300 leading-relaxed selection:bg-emerald-900">
          <pre>{codeContent}</pre>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-800 border-t border-slate-700 text-center text-xs text-slate-400">
          Bu faýly islendik kompýuterde brauzerde (Chrome, Safari, Edge) açyp göni ulanyp bilersiňiz.
        </div>

      </div>
    </div>
  );
};
