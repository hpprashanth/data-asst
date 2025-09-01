import Navbar from "./components/Navbar";
import ResponsiveLayout from "./components/ResponsiveLayout";
import NestedCheckbox from "./components/NestedCheckbox";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6 space-y-8">
        <ResponsiveLayout />
        <NestedCheckbox />
      </main>
    </div>
  );
}
