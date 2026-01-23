export const Footer = () => {
  return (
    <>
      <footer className="py-12 bg-gray-900 mt-24" id="contact">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-teal-400 text-xl font-semibold">Abhiram Palika</h3>
              <p className="text-gray-400">
                Full-stack developer passionate about creating impactful web experiences
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-teal-400 text-lg font-medium">Quick Links</h4>
              <a href="https://www.linkedin.com/in/abhirampalika" className="text-gray-400 hover:text-teal-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/abhiram-art" className="text-gray-400 hover:text-teal-400 transition-colors">
                Github
              </a>
              <a href="https://instagram.com/abhi_ram354" className="text-gray-400 hover:text-teal-400 transition-colors">
                Instagram
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-teal-400 text-lg font-medium">Let's Connect</h4>
              <a href="mailto:abhirampalika@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                abhirampalika@gmail.com
              </a>
              <a href="mailto:abhirampalika@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                palikav@ufl.edu
              </a>
              <p className="text-gray-400">Gainesville, FL</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-teal-400 text-lg">
              Abhiram's Portfolio
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};