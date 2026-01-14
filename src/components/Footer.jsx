const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray -300 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Sorkar Sourav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
