
import React, { useState } from 'react';
import { CodeLanguage } from '../types';

const ApiSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<CodeLanguage>('cURL');

  const snippets: Record<CodeLanguage, string> = {
    'cURL': `curl -X POST https://api.lunarsend.com/v1/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+15550101234",
    "from": "LunarSend",
    "text": "Your verification code is 4921. Valid for 10 mins.",
    "vertical": "finance"
  }'`,
    'Node.js': `const axios = require('axios');

axios.post('https://api.lunarsend.com/v1/messages', {
  to: '+15550101234',
  from: 'LunarSend',
  text: 'Your verification code is 4921. Valid for 10 mins.',
  vertical: 'finance'
}, {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
});`,
    'Python': `import requests

url = "https://api.lunarsend.com/v1/messages"
payload = {
    "to": "+15550101234",
    "from": "LunarSend",
    "text": "Your verification code is 4921.",
    "vertical": "finance"
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.post(url, json=payload, headers=headers)`,
    'PHP': `<?php
$ch = curl_init('https://api.lunarsend.com/v1/messages');
$data = [
    'to' => '+15550101234',
    'from' => 'LunarSend',
    'text' => 'Your verification code is 4921.'
];
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Bearer YOUR_API_KEY']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$response = curl_exec($ch);`
  };

  return (
    <section id="api" className="py-24 bg-[#03040B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Developer Friendly API</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Integrate SMS capabilities into your CRM, landing pages, or backend in minutes.</p>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden bg-[#0B0C15] border border-white/10 text-left shadow-2xl">
          <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-4 text-xs font-medium">
              {(['cURL', 'Node.js', 'Python', 'PHP'] as CodeLanguage[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`pb-3 -mb-3.5 transition-colors ${activeLang === lang ? 'text-white border-b-2 border-indigo-500' : 'text-slate-500 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 overflow-x-auto min-h-[200px]">
            <pre className="font-mono text-sm leading-relaxed whitespace-pre">
              <code className="text-slate-300">
                {snippets[activeLang]}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
