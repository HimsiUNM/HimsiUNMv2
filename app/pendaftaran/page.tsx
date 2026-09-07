"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PendaftaranPage() {
  const kampusOptions = ["Margonda", "Jatiwaringin", "Rawamangun"];
  const tipeKelasOptions = ["Reguler", "Karyawan"];
  const departmentOptions = ["Humas", "PSDM", "PUBDOC", "BIKRAF", "LITBANG"];
  const posisiOptions = ["Koordinator", "Staf"];

  const [form, setForm] = useState({
    Nama: "",
    NIM: "",
    Semester: "",
    Asal_Kampus: "",
    Tipe_kelas: "",
    No_telp: "",
    Department_1: "",
    Department_2: "",
    Posisi_1: "",
    Posisi_2: "",
    Tanggal_lahir: "",
    Alamat_Email: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("pendaftar_himsi").insert([form]);
    if (error) {
      setPopupType("error");
    } else {
      setPopupType("success");
      setForm({
        Nama: "",
        NIM: "",
        Semester: "",
        Asal_Kampus: "",
        Tipe_kelas: "",
        No_telp: "",
        Department_1: "",
        Department_2: "",
        Posisi_1: "",
        Posisi_2: "",
        Tanggal_lahir: "",
        Alamat_Email: "",
      });
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
          Form Pendaftaran HIMSI
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto bg-white/90 p-6 rounded-2xl shadow-lg"
        >
          {/* Nama */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Masukan Nama Lengkap :
            </label>
            <input
              name="Nama"
              placeholder="Jane Doe"
              value={form.Nama}
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
              name="NIM"
              placeholder="11233321"
              value={form.NIM}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* Semester */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Semester :
            </label>
            <input
              name="Semester"
              placeholder="8"
              value={form.Semester}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* Asal Kampus */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Asal Kampus :
            </label>
            <select
              name="Asal_Kampus"
              value={form.Asal_Kampus}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Asal Kampus
              </option>
              {kampusOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Tipe Kelas */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Tipe Kelas :
            </label>
            <select
              name="Tipe_kelas"
              value={form.Tipe_kelas}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Tipe Kelas
              </option>
              {tipeKelasOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* No Telp */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Nomor Telepon :
            </label>
            <input
              name="No_telp"
              placeholder="083344212124"
              value={form.No_telp}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* Department 1 */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Department 1 :
            </label>
            <select
              name="Department_1"
              value={form.Department_1}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Department 1
              </option>
              {departmentOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Department 2 */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Department 2 :
            </label>
            <select
              name="Department_2"
              value={form.Department_2}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Department 2
              </option>
              {departmentOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Posisi 1 */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Posisi 1 :
            </label>
            <select
              name="Posisi_1"
              value={form.Posisi_1}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Posisi 1
              </option>
              {posisiOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Posisi 2 */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Posisi 2 :
            </label>
            <select
              name="Posisi_2"
              value={form.Posisi_2}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
              required
            >
              <option value="" className="text-gray-400/50 italic">
                Pilih Posisi 2
              </option>
              {posisiOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Tanggal Lahir :
            </label>
            <input
              name="Tanggal_lahir"
              type="date"
              value={form.Tanggal_lahir}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal text-gray-700"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Alamat Email :
            </label>
            <input
              name="Alamat_Email"
              placeholder="jane@gmail.com"
              value={form.Alamat_Email}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
          >
            Submit
          </button>
        </form>

        {/* Popup Notifikasi */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm">
              {popupType === "success" ? (
                <>
                  <h2 className="text-xl font-semibold text-green-600 mb-2">
                    Pendaftaran Berhasil 🎉
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Terima kasih telah mendaftar! Data kamu sudah disimpan.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-red-600 mb-2">
                    Gagal Menyimpan Data
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Silakan periksa koneksi internet atau coba lagi.
                  </p>
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
