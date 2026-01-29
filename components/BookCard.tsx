
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onRead?: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onRead }) => {
  return (
    <div className="group relative bg-white border border-[#D4AF37]/20 p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {book.isPremium && (
        <div className="absolute top-6 right-6 z-10 bg-[#D4AF37] text-white text-[10px] px-2 py-1 font-bold uppercase tracking-tighter shadow-sm">
          Elite
        </div>
      )}
      <div className="overflow-hidden aspect-[2/3] mb-4 bg-[#002366]/5">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
          onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/400/600?random=${book.id}`; }}
        />
      </div>
      <div className="space-y-2">
        <p className="text-[10px] uppercase font-bold tracking-widest text-[#800000]">{book.category}</p>
        <h3 className="font-playfair text-lg font-bold text-[#002366] line-clamp-1">{book.title}</h3>
        <p className="text-sm italic text-[#002366]/60 font-lora">By {book.author}</p>
        <p className="text-xs text-[#002366]/70 line-clamp-2 mt-2 leading-relaxed">
          {book.description}
        </p>
        <div className="pt-4 flex items-center justify-between">
          <button 
            onClick={() => onRead?.(book.id)}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#002366] border-b border-[#002366] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            Enter Chamber
          </button>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-[10px] ${i < Math.floor(book.rating) ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
                ✦
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
