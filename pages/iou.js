import { useState } from 'react';

export default function IOU() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <h2>🧾 IOU Generator</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Amount" type="number" onChange={e => setAmount(e.target.value)} />
      <p style={{ marginTop: 20 }}>
        IOU for <strong>{name || '___'}</strong>: <strong>{amount || '___'}</strong> Kwacha
      </p>
    </div>
  );
}