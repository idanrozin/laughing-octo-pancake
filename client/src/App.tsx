import axios from "axios";
import { fetchHello } from "./services/api";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Vite + React + TypeScript + Tailwind CSS
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Edit <code className="font-mono bg-red-200 px-1 rounded">src/App.tsx</code> and save to
          test HMR
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {
          fetchHello().then((res) => {
            console.log(res);
          });
        }}>Click me</button>
      </main>
    </div>
  );
}

export default App;
