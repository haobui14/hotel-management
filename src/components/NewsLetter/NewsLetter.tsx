const NewsLetter = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-500"></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>

        <form className="relative z-10 text-white px-6 md:px-12 flex flex-col justify-center items-center py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl font-bold mb-4 text-white">
              Stay Updated with Exclusive Offers
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
              Join Our Newsletter
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
              Get the latest updates on special packages, seasonal offers, and
              luxury experiences delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 md:h-16 rounded-2xl px-6 bg-white/25 backdrop-blur-sm border border-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-300 font-medium"
                />
              </div>
              <button
                type="button"
                className="h-14 md:h-16 px-8 md:px-12 bg-white text-orange-700 font-bold rounded-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>

            <p className="text-sm text-white/80 text-center mt-4 font-medium">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
