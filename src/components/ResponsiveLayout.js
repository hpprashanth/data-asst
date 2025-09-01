export default function ResponsiveLayout() {
  return (
    <div className="p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Section 1</h2>
          <p className="text-gray-700">
            This section adjusts from single column (mobile) to two columns (desktop).
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Section 2</h2>
          <p className="text-gray-700">
            Responsive using Tailwind’s grid utilities.
          </p>
        </div>
      </section>
    </div>
  );
}
