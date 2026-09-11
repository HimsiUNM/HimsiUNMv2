"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AspirasiPage() {
  const kategoriOptions = ["Saran", "Keluhan", "Kritik", "Lainnya"];

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    kategori: "",
    pesan: "",
  });

  const [isAnonim, setIsAnonim] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAnonim && !form.nama.trim()) {
      setPopupType("error");
      setPopupMessage("Nama wajib diisi, atau centang kirim sebagai anonim.");
      setShowPopup(true);
      return;
    }
    if (!isAnonim && !form.nim.trim()) {
      setPopupType("error");
      setPopupMessage("NIM wajib diisi, atau centang kirim sebagai anonim.");
      setShowPopup(true);
      return;
    }

    const payload = {
      nama: isAnonim ? "Anonim" : form.nama,
      nim: isAnonim ? null : form.nim,
      kategori: form.kategori || "Saran",
      pesan: form.pesan,
    };

    const { error } = await supabase.from("aspirasi").insert([payload]);

    if (error) {
      console.log("Detail Error Supabase:", error);
      setPopupType("error");
      setPopupMessage("Silakan periksa koneksi internet atau coba lagi.");
    } else {
      setPopupType("success");
      setPopupMessage("Terima kasih! Aspirasi kamu sudah disimpan.");
      setForm({ nama: "", nim: "", kategori: "", pesan: "" });
      setIsAnonim(false);
    }
    setShowPopup(true);
  };

  return (
    <main
      className="min-h-screen relative bg-center bg-no-repeat bg-contain pt-28 pb-12"
      style={{
        backgroundImage: "url('/logohimsi2.png')",
        backgroundSize: "38%",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Kotak Aspirasi HIMSI
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto bg-white/90 p-6 rounded-2xl shadow-lg"
        >
          {/* Toggle Anonim */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
            <input
              id="anonim"
              type="checkbox"
              checked={isAnonim}
              onChange={(e) => setIsAnonim(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
            />
            <label htmlFor="anonim" className="text-sm font-medium text-gray-800">
              Kirim sebagai anonim
            </label>
          </div>

          {!isAnonim && (
            <>
              {/* Nama */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Masukan Nama Lengkap :
                </label>
                <input
                  name="nama"
                  placeholder="Jane Doe"
                  value={form.nama}
                  onChange={handleChange}
                  className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
                  required
                />
              </div>

              {/* NIM */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Masukan NIM :
                </label>
                <input
                  name="nim"
                  placeholder="11233321"
                  value={form.nim}
                  onChange={handleChange}
                  className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
                  required
                />
              </div>
            </>
          )}

          {/* Kategori */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Kategori :
            </label>
            <select
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Kategori
              </option>
              {kategoriOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Pesan */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Pesan Aspirasi :
            </label>
            <textarea
              name="pesan"
              rows={5}
              placeholder="Tulis aspirasi kamu di sini..."
              value={form.pesan}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
          >
            Kirim Aspirasi
          </button>
        </form>

        {/* Popup Notifikasi */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm">
              {popupType === "success" ? (
                <>
                  <h2 className="text-xl font-semibold text-green-600 mb-2">
                    Aspirasi Terkirim 🎉
                  </h2>
                  <p className="text-gray-600 mb-4">{popupMessage}</p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-red-600 mb-2">
                    Gagal Mengirim Aspirasi
                  </h2>
                  <p className="text-gray-600 mb-4">{popupMessage}</p>
                </>
              )}
              <button
                onClick={() => setShowPopup(false)}
                className={`px-4 py-2 ${
                  popupType === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                } text-white rounded-lg transition-all`}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}