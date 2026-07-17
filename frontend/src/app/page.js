import { Activity } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full flex flex-col items-center gap-6">
        <div className="h-16 w-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-2">
          <Activity size={32} strokeWidth={2.5} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Blood Donor Network
          </h1>
          <p className="text-gray-500">
            Frontend setup completed successfully.
          </p>
        </div>
      </div>
    </main>
  );
}
