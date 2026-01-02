import React, { useState } from 'react';

interface ApiKeyModalProps {
    onSave: (key: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onSave }) => {
    const [key, setKey] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (key.trim()) {
            onSave(key.trim());
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-slate-900 border border-cyan-500/50 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <i className="fas fa-shield-alt"></i> 보안 접근 승인
                </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    이 게임은 고급 AI 추론을 위해 <strong>Google Gemini API</strong>를 사용합니다.
                    <br /><br />
                    보안을 위해 서버에 키를 저장하지 않으며, 입력하신 키는 브라우저(로컬)에만 안전하게 저장됩니다.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-cyan-500 mb-1 uppercase tracking-wider">
                            Google Gemini API Key
                        </label>
                        <input
                            type="password"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder="AIza..."
                            className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-mono"
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!key}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        시스템 접속
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-cyan-400 underline transition-colors"
                    >
                        API 키가 없으신가요? (무료 발급)
                    </a>
                </div>
            </div>
        </div>
    );
};
