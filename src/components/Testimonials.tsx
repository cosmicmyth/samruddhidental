import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Excellent service! Got teeth whitening and polishing done, and I’m extremely satisfied. The doctor is professional, friendly, and highly skilled.",
    author: "Akshara Naik",
  },
  {
    text: "The best dentist in every way! Everything was explained clearly, the treatment was painless, and the results were perfect.",
    author: "Maya Jagtap",
  },
  {
    text: "I had a lot of fear, but the doctor made me feel completely comfortable. The treatment was smooth and stress-free.",
    author: "Ashish Chopda",
  },
  {
    text: "Very friendly doctor and a comfortable clinic environment. Treatment quality is excellent.",
    author: "Nandini Dube",
  },
  {
    text: "My family has been visiting for years. Genuine consultation, advanced equipment, and a very hygienic clinic.",
    author: "Venkatesh Suvarnkar",
  },
  {
    text: "Highly recommend for any dental treatment. Friendly doctor, great environment, and advanced machines.",
    author: "Dhananjay Daud",
  },
];

export default function Testimonials() {
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 bg-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Patient Stories</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
          Smiles that speak <span className="italic font-normal text-primary">volumes</span>
        </h3>
      </div>

      <div className="relative w-full overflow-hidden flex group">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-accent/30 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 px-4 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] shrink-0 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary/80 text-lg font-serif italic mb-6 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <p className="font-bold text-secondary uppercase tracking-wider text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-accent/30 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
