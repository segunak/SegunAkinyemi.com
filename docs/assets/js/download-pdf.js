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

      const container = document.createElement('div');
      container.innerHTML = htmlText;

      // Generate and download the PDF
      const opt = {
        margin:       0.5,
        filename:     'three-levels-of-programming.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        pagebreak:    { mode: ['css'] },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(container).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  });
});
