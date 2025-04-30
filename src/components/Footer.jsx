const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CozyNest Decor</h3>
            <p className="text-gray-300">
              Transform your space with our curated home decor collections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Email: support@cozynestdecor.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">123 Decor Lane, Design City</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Inspired</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for decor tips and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-gray-800 rounded-l-md focus:outline-none bg-white"
                style={{ minWidth: 0 }}
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white px-4 py-2 rounded-r-md hover:bg-amber-600 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} CozyNest Decor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
