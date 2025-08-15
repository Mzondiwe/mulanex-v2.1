export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-8">
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Mulanex V2.1</h1>
        <p className="text-lg text-gray-700 mb-8">Your gateway to missions, passports, and more.</p>
        <ul className="text-left space-y-2 text-blue-600">
          <li><a href="/missions">📡 Missions</a></li>
          <li><a href="/passports">🌍 Passports</a></li>
          <li><a href="/settings">⚙️ Settings</a></li>
          <li><a href="/iou">📑 IOU Generator</a></li>
        </ul>
      </div>
    </div>
  );
}