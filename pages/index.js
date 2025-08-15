import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 40 }}>
      <h1>Welcome to <span style={{ color: '#0070f3' }}>Mulanex V2.1</span></h1>
      <p style={{ marginBottom: 20 }}>Your gateway to missions, passports, and more.</p>
      <ul>
        <li><Link href="/missions">🛰️ Missions</Link></li>
        <li><Link href="/passports">🌍 Passports</Link></li>
        <li><Link href="/settings">⚙️ Settings</Link></li>
        <li><Link href="/iou">🧾 IOU Generator</Link></li>
      </ul>
    </div>
  );
}