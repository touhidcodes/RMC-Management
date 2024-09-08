declare module "html2pdf.js" {
  // Define any types you need from html2pdf.js here or leave it as `any` for simplicity.
  interface Html2PdfOptions {
    margin?: number;
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: { scale: number };
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  function html2pdf(): {
    from: (element: HTMLElement | string) => {
      set: (options: Html2PdfOptions) => {
        save: () => void;
      };
    };
  };

  export default html2pdf;
}
