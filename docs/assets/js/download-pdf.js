document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById('download-pdf');

  if (!downloadButton) {
    console.warn("Button with id 'download-pdf' not found on the page.");
    return;
  }

  downloadButton.addEventListener('click', async () => {
    const url = downloadButton.getAttribute('data-url'); // Get the URL from the data-url attribute
    if (!url) {
      console.error("No URL found in the 'data-url' attribute of the button.");
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

      const htmlText = await response.text();

      // Extract main content
      const mainContent = new DOMParser()
        .parseFromString(htmlText, 'text/html')
        .querySelector('.container-lg.px-3.my-5.markdown-body');
      if (!mainContent) {
        console.error("Main content not found in the HTML.");
        return;
      }

      // Create container for PDF
      const container = document.createElement('div');
      container.innerHTML = mainContent.outerHTML;

      // Add styles to improve layout
      const style = document.createElement('style');
      style.textContent = `
        * { page-break-inside: avoid; }
        h1, h2, h3, h4, h5, h6, p { page-break-after: avoid; page-break-before: auto; }
        img { max-width: 100%; height: auto; }
      `;
      container.appendChild(style);

      // Generate and download the PDF
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'three-levels-of-programming.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        pagebreak: { mode: ['css', 'legacy'] },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf().set(opt).from(container).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  });
});
