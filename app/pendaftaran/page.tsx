"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PendaftaranPage() {
  const kampusOptions = ["Margonda", "Jatiwaringin", "Rawamangun"];

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    semester: "",
    asal_kampus: "",
    kelas: "",
    no_telp: "",
    pengalaman_organisasi: "",
    kontribusi: "",
    bersedia_interview: "Ya",
    bersedia_komitmen: "Ya",
  });

  const [portofolioFile, setPortofolioFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file) {
      // Basic guardrails: max 10MB, common file types only
      const maxSizeBytes = 10 * 1024 * 1024;
      const allowedTypes = [
        "application/pdf",
        "image/png",
        "image/jpeg",
        "application/zip",
      ];

      if (file.size > maxSizeBytes) {
        setErrorMessage("Ukuran file portofolio maksimal 10MB.");
        setPopupType("error");
        setShowPopup(true);
        e.target.value = "";
        setPortofolioFile(null);
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Format file harus PDF, JPG, PNG, atau ZIP.");
        setPopupType("error");
        setShowPopup(true);
        e.target.value = "";
        setPortofolioFile(null);
        return;
      }
    }

    setPortofolioFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      let portofolioUrl: string | null = null;

      // 1. Upload the portfolio file to Supabase Storage (if provided)
      if (portofolioFile) {
        const fileExt = portofolioFile.name.split(".").pop();
        const safeNim = form.nim.replace(/[^a-zA-Z0-9]/g, "") || "unknown";
        const fileName = `${safeNim}-${Date.now()}.${fileExt}`;
        const filePath = `portofolio/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("portofolio-himsi") // <-- create this bucket in Supabase Storage
          .upload(filePath, portofolioFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.log("Upload Error Supabase:", uploadError);
          throw new Error("Gagal mengunggah file portofolio: " + uploadError.message);
        }

        // 2. Get the public URL of the uploaded file
        const { data: publicUrlData } = supabase.storage
          .from("portofolio-himsi")
          .getPublicUrl(filePath);

        portofolioUrl = publicUrlData.publicUrl;
      }

      // 3. Insert the form row, storing the uploaded file's URL
      const { error: insertError } = await supabase
        .from("pendaftar_himsi")
        .insert([{ ...form, portofolio: portofolioUrl }]);

      if (insertError) {
        console.log("Detail Error Supabase:", insertError);
        throw new Error("Gagal menyimpan data: " + insertError.message);
      }

      // Success: reset form
      setPopupType("success");
      setForm({
        nama: "",
        nim: "",
        semester: "",
        asal_kampus: "",
        kelas: "",
        no_telp: "",
        pengalaman_organisasi: "",
        kontribusi: "",
        bersedia_interview: "Ya",
        bersedia_komitmen: "Ya",
      });
      setPortofolioFile(null);
      const fileInput = document.getElementById("portofolio-input") as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";
    } catch (err: any) {
      setPopupType("error");
      setErrorMessage(err?.message || "Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
    }
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
      <div className="relative z-10 max-w-lg mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Form Pendaftaran HIMSI
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/90 p-6 rounded-2xl shadow-lg"
        >
          {/* 1. Nama Lengkap */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              1. Nama Lengkap <span className="text-red-500">*</span>
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

          {/* 2. NIM */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              2. NIM <span className="text-red-500">*</span>
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

          {/* 3. Semester */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              3. Semester <span className="text-red-500">*</span>
            </label>
            <input
              name="semester"
              placeholder="3"
              value={form.semester}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* 4. Asal Kampus */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              4. Asal Kampus <span className="text-red-500">*</span>
            </label>
            <select
              name="asal_kampus"
              value={form.asal_kampus}
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

          {/* 5. Kelas */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              5. Kelas <span className="text-red-500">*</span>
            </label>
            <input
              name="kelas"
              placeholder="Contoh: 11.3A.10"
              value={form.kelas}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* 6. No. Telepon */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              6. No. Telepon <span className="text-red-500">*</span>
            </label>
            <input
              name="no_telp"
              placeholder="083344212124"
              value={form.no_telp}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30"
              required
            />
          </div>

          {/* 7. Pengalaman Organisasi */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              7. Pengalaman Organisasi <span className="text-red-500">*</span>
            </label>
            <textarea
              name="pengalaman_organisasi"
              rows={3}
              placeholder="Tuliskan pengalaman organisasi kamu..."
              value={form.pengalaman_organisasi}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30 resize-none"
              required
            />
          </div>

          {/* 8. Kontribusi */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              8. Apa kontribusi yang ingin kamu berikan di HIMSI? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="kontribusi"
              rows={3}
              placeholder="Tuliskan kontribusi kamu..."
              value={form.kontribusi}
              onChange={handleChange}
              className="border p-2 w-full rounded font-normal placeholder:text-gray-500 placeholder:opacity-30 resize-none"
              required
            />
          </div>

          {/* 9. Portofolio - now a real file upload */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              9. Portofolio
            </label>
            <p className="text-xs text-gray-500 mb-1">
              (Nilai tambah bagi departemen Pubdok dan Litbang). Unggah 1 file portofolio kamu (PDF/JPG/PNG/ZIP, maks 10MB).
            </p>
            <input
              id="portofolio-input"
              name="portofolio"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.zip"
              onChange={handleFileChange}
              className="border p-2 w-full rounded font-normal text-gray-700 bg-white/50"
            />
            {portofolioFile && (
              <p className="text-xs text-green-700 mt-1">
                File terpilih: {portofolioFile.name}
              </p>
            )}
          </div>

          {/* 10. Bersedia Interview */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              10. Apakah kamu bersedia mengikuti interview? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="bersedia_interview"
                  value="Ya"
                  checked={form.bersedia_interview === "Ya"}
                  onChange={handleChange}
                />
                Ya
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="bersedia_interview"
                  value="Tidak"
                  checked={form.bersedia_interview === "Tidak"}
                  onChange={handleChange}
                />
                Tidak
              </label>
            </div>
          </div>

          {/* 11. Bersedia Komitmen */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              11. Apakah kamu bersedia berkomitmen selama 1 periode penuh kepengurusan HIMSI? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="bersedia_komitmen"
                  value="Ya"
                  checked={form.bersedia_komitmen === "Ya"}
                  onChange={handleChange}
                />
                Ya
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="bersedia_komitmen"
                  value="Tidak"
                  checked={form.bersedia_komitmen === "Tidak"}
                  onChange={handleChange}
                />
                Tidak
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Mengirim..." : "Submit Pendaftaran"}
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
                    {errorMessage || "Silakan periksa koneksi internet atau coba lagi."}
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