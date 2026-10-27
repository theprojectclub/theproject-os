export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}

      <aside className="w-72 bg-white border-r p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            TheProject OS
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Business Intelligence Platform
          </p>
        </div>

        <nav className="space-y-3 text-sm">
          <div className="px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
            🏠 Dashboard
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            👥 Müşteriler
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            📁 Projeler
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            🏭 Tedarikçiler
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            💳 Tahsilatlar
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            📊 Genel Giderler
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            🧠 AI Denetçi
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            📰 MICE Intelligence
          </div>

          <div className="px-4 py-3 rounded-xl hover:bg-slate-100">
            ⚙️ Kullanıcılar
          </div>
        </nav>
      </aside>

      {/* Content */}

      <main className="flex-1 p-10">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold">
              Dashboard
            </h2>

            <p className="text-slate-500 mt-1">
              Son 12 Ay
            </p>
          </div>

          <button className="px-4 py-2 border rounded-xl bg-white">
            Son 12 Ay
          </button>
        </div>

        {/* KPI */}

        <div className="grid grid-cols-4 gap-4 mb-8">
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

        {/* AI + News */}

        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="col-span-2 bg-white rounded-3xl border p-6">
            <h3 className="font-semibold text-lg mb-4">
              🧠 AI Yönetici Özeti
            </h3>

            <div className="space-y-2 text-slate-600">
              <p>2023 En Büyük Müşteri: Bioeksen</p>
              <p>2024 En Büyük Müşteri: Enerjisa Grubu</p>
              <p>2025 En Büyük Müşteri: Brisa</p>
              <p>2026 En Büyük Müşteri: Enerjisa Grubu</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border p-6">
            <h3 className="font-semibold text-lg mb-4">
              📰 MICE Intelligence
            </h3>

            <div className="space-y-3 text-sm">
              <p>• ICCA raporu yayınlandı</p>
              <p>• THY grup rezervasyonlarını güncelledi</p>
              <p>• Schengen süreçlerinde değişiklik</p>
              <p>• Avrupa MICE pazarı büyüyor</p>
            </div>
          </div>
        </div>

        {/* Customers */}

        <div className="bg-white rounded-3xl border p-6">
          <h3 className="font-semibold text-lg mb-4">
            👥 Müşteriler
          </h3>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Müşteri</th>
                <th className="text-left py-3">Ciro</th>
                <th className="text-left py-3">Brüt Kar</th>
                <th className="text-left py-3">Reel Kar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4">Enerjisa Grubu</td>
                <td>6.2M TL</td>
                <td>2.1M TL</td>
                <td>1.9M TL</td>
              </tr>

              <tr>
                <td className="py-4">Brisa</td>
                <td>3.7M TL</td>
                <td>1.4M TL</td>
                <td>1.1M TL</td>
              </tr>

              <tr>
                <td className="py-4">Bioeksen</td>
                <td>2.1M TL</td>
                <td>820K TL</td>
                <td>790K TL</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}