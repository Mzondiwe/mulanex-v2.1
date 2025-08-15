export default function Missions() {
  const missions = ['Moon Trek', 'Mars Voyage', 'Saturn Probe'];
  return (
    <div style={{ padding: 40 }}>
      <h2>🛰️ Missions</h2>
      <ul>
        {missions.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}