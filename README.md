```markdown
# 🌹 Boudoir Prompt Studio Pro

## Project Overview

Boudoir Prompt Studio Pro (BPSP) is a specialized, single-page web application designed to generate highly optimized and curated text prompts for advanced AI image generators (such as Midjourney, Stable Diffusion, and DALL-E).

This tool focuses specifically on the "boudoir" and artistic portrait niche, allowing users to combine variables (Artist inspiration, Pose, and Attire) to produce three distinct, stylistically complete prompt outputs: Cinematic, Realistic, and Artistic Painting. This eliminates manual prompt engineering for complex visual styles.

## ✨ Features

*   **Template-Based Prompt Generation:** Quickly combine three core variables (Artist Look, Pose, and Outfit) into cohesive, high-detail prompts.
*   **Triple Style Output:** Automatically generates the same core concept optimized for three popular aesthetic styles:
    *   **Cinematic:** Dramatic lighting, deep shadows, low-angle shots.
    *   **Realistic:** Ultra-detailed photography, soft natural light, photo-studio quality.
    *   **Painting:** Classical techniques (e.g., Chiaroscuro), oil painting texture, renaissance composition.
*   **Optimized Parameters:** All generated prompts are automatically appended with high-impact keywords (e.g., `volumetric light`, `8k`, `highly detailed face`) and optimal aspect ratios (`--ar 9:16`) for portrait orientation.
*   **Instant Copy Functionality:** Dedicated clipboard buttons for each prompt output streamline the workflow, allowing immediate transfer to the AI generation platform.
*   **Pure Front-End:** Built entirely with HTML, Tailwind CSS (via CDN), and Vanilla JavaScript, ensuring fast, serverless operation.

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Core structure and semantic markup. |
| **Tailwind CSS** | Utility-first CSS framework for responsive and modern styling. (Used via CDN for simplicity). |
| **Vanilla JavaScript** | Handling form logic, prompt generation algorithms, and clipboard interactions. |

## 🚀 Cara Penggunaan

Boudoir Prompt Studio Pro adalah aplikasi yang sangat intuitif. Tidak ada instalasi atau kompilasi yang diperlukan jika Anda telah mengkloning repositori ini.

### 1. Lokal Çalıştırma (Çalıştırma)

1.  Kloning repositori:
    ```bash
    git clone [REPO_URL]
    cd boudoir-prompt-studio-pro
    ```
2.  Buka file `index.html` di browser web pilihan Anda.

### 2. Prompt Oluşturma

1.  **Variabel Seçimi:** Bagian "Prompt Variables" di sisi kiri layar, pilih opsi dari setiap dropdown:
    *   `Artist Inspired Look`
    *   `Pose & Position`
    *   `Attire / Outfit`
2.  **Generasi:** Klik tombol **`Generate 3 Optimized Prompts`**.
3.  **Output:** Tiga kotak teks di sisi kanan (Cinematic, Realistic, Painting) akan terisi secara otomatis dengan prompt yang telah disempurnakan.
4.  **Penyalinan:** Klik ikon **Clipboard** yang terletak di sudut kanan atas setiap kotak teks untuk menyalin prompt secara instan ke clipboard Anda.

### Contoh Prompt Struktur (Realistic Style)

Berdasarkan pilihan Anda, prompt yang dihasilkan akan mengikuti struktur yang kaya detail, seperti contoh berikut:

```text
High-end studio photography, soft natural key lighting, ultra realistic skin texture, pore details, subtle HDR, sharp focus, photo taken by Annie Leibovitz, Hitomi Tanaka inspired look, sitting confidently, wearing elegant lingerie, volumetric light, highly detailed face, smooth skin, correct anatomy, 8k --ar 9:16
```

## 📄 Lisensi

Proyek ini berada di bawah [MIT License](LICENSE). Silakan gunakan dan modifikasi sesuai kebutuhan Anda.
```
