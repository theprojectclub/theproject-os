export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-5xl font-bold mb-2">
        TheProject OS
      </h1>

      <p className="text-slate-500 mb-10">
        Business Intelligence Platform
      </p>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl border p-6">
          <div className="text-slate-500 text-sm">
            Toplam Ciro
          </div>

          <div className="text-3xl font-bold mt-2">
            18.4M TL
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-6">
          <div className="text-slate-500 text-sm">
            Brüt Kar
          </div>

          <div className="text-3xl font-bold mt-2">
            6.2M TL
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-6">
          <div className="text-slate-500 text-sm">
            Müşteri
          </div>

          <div className="text-3xl font-bold mt-2">
            18
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-6">
          <div className="text-slate-500 text-sm">
            Proje
          </div>

          <div className="text-3xl font-bold mt-2">
            137
          </div>
        </div>
      </div>
    </main>
  );
}