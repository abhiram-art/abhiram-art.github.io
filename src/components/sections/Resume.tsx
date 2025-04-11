import { useEffect } from "react";

const useResumeDownload = (): void => {
  useEffect(() => {
    const handleResumeClick = (event: MouseEvent): void => {
      const target = event.target as Element;
      const resumeLink = target?.closest('a[href="#resume"]');
      
      if (resumeLink) {
        event.preventDefault();
        
        const link: HTMLAnchorElement = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Abhi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    document.addEventListener("click", handleResumeClick);

    return () => {
      document.removeEventListener("click", handleResumeClick);
    };
  }, []);
};

export default useResumeDownload;