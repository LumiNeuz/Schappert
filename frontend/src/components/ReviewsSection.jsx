import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
{
  id: 1,
  name: 'Jutta Friedhofen',
  rating: 5,
  text: 'Hilfsbereit beim ein und aussteigen. Sehr pünktlich. Sehr empfehlenswert. Fahren gerne mit ihnen.',
  date: '2025'
},
{
  id: 2,
  name: 'Elke B.',
  rating: 5,
  text: 'Herr Schappert ist sehr freundlich hilfsbereit auch beim Ein- und Aussteigen und sehr pünktlich.',
  date: '2024'
},
{
  id: 3,
  name: 'Monja Neitzke',
  rating: 5,
  text: 'Sehr nettes und freundliches Taxi- und Mietwagen Unternehmen. Kann es nur bestens empfehlen.',
  date: '2024',
  isLocalGuide: true
}];


const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) =>
      <Star
        key={index}
        className={`w-5 h-5 ${
        index < rating ?
        'fill-yellow-400 text-yellow-400' :
        'fill-gray-200 text-gray-200'}`
        } />

      )}
    </div>);

};

export const ReviewsSection = () => {
  return (
    <section
      id="bewertungen"
      data-testid="reviews-section"
      className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-stone-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
            Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-4 mb-6">
            Das sagen unsere{' '}
            <span className="text-gradient">Kunden</span>
          </h2>
          
          {/* Google Rating Badge */}
          <div className="inline-flex items-center border border-stone-100 !ml-[-10px] !mr-[0px] !py-[3px] !px-[10px] !gap-[5px] rounded-full shadow-md bg-white">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="font-bold text-[#1C1917]">Google</span>
            </div>
            <div className="h-8 w-px bg-stone-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#1C1917]">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                )}
              </div>
            </div>
            <div className="h-8 w-px bg-stone-200"></div>
            <span className="text-[#57534E]">8 Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) =>
          <div
            key={review.id}
            data-testid={`review-card-${review.id}`}
            className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all relative">

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <StarRating rating={review.rating} />

              {/* Review Text */}
              <p className="text-[#57534E] leading-relaxed mt-4 mb-6">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 bg-[#0F4C81] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#1C1917]">{review.name}</p>
                    {review.isLocalGuide &&
                  <span className="text-xs bg-blue-100 text-[#0F4C81] px-2 py-0.5 rounded-full font-medium">
                        Local Guide
                      </span>
                  }
                  </div>
                  <p className="text-sm text-[#78716C]">{review.date}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Schappert+Manuel+Mietwagen+Meisenheim"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="google-reviews-link"
            className="inline-flex items-center gap-2 text-[#0F4C81] hover:text-[#0c3b66] font-semibold transition-colors">

            <span>Alle Bewertungen auf Google ansehen</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

};

export default ReviewsSection;