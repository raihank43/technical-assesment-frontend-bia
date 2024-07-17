export default function dateFormatter(dateString: Date) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function formatDate(dateString: Date) {
  // Parse string tanggal menjadi objek Date
  const date = new Date(dateString);

  // Ekstrak tahun, bulan, dan hari
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
  const day = String(date.getDate()).padStart(2, "0");

  // Format tanggal menjadi string dengan format YYYY-MM-DD
  return `${year}-${month}-${day}`;
}
