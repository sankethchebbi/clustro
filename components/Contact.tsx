// import React from 'react';
// import BrutalistButton from './ui/BrutalistButton';
// import { Send } from 'lucide-react';

// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
//         {/* Decorational grid lines */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none" 
//              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//         </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="font-sans font-black text-5xl md:text-8xl uppercase mb-6 text-white leading-none">
//             Let's Make<br /> <span className="text-clustro-accent">Money</span>
//           </h2>
//           <p className="font-mono text-lg md:text-xl text-gray-400">
//             Tell us what hurts. We'll prescribe the cure.
//           </p>
//         </div>

//         <form className="bg-white p-8 md:p-12 border-2 border-white shadow-[12px_12px_0px_0px_#ccff00] text-black">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="font-mono font-bold uppercase text-sm mb-2">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors"
//                 placeholder="JOHN DOE"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="email" className="font-mono font-bold uppercase text-sm mb-2">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors"
//                 placeholder="CEO@COMPANY.COM"
//               />
//             </div>
//           </div>
          
//           <div className="flex flex-col mb-8">
//             <label htmlFor="interest" className="font-mono font-bold uppercase text-sm mb-2">Interested In</label>
//             <select id="interest" className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors appearance-none rounded-none">
//               <option>DIGITAL MARKETING</option>
//               <option>INFLUENCER CAMPAIGNS</option>
//               <option>ERPNEXT CUSTOMIZATION</option>
//               <option>DATA CONSULTING</option>
//               <option>OTHER</option>
//             </select>
//           </div>

//           <div className="flex flex-col mb-8">
//             <label htmlFor="message" className="font-mono font-bold uppercase text-sm mb-2">Brief</label>
//             <textarea 
//               id="message" 
//               rows={4}
//               className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors resize-none"
//               placeholder="WE NEED TO SCALE TO 10M MRR..."
//             ></textarea>
//           </div>

//           <BrutalistButton type="submit" fullWidth className="flex items-center justify-center gap-2 text-xl">
//              <Send className="w-5 h-5" /> Send Request
//           </BrutalistButton>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import BrutalistButton from './ui/BrutalistButton';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Your Web3Forms Access Key
    formData.append('access_key', 'a81c9cc7-2bba-46d5-9b5f-51a8bf4c2abe');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage('Request sent successfully!');
        form.reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans font-black text-5xl md:text-8xl uppercase mb-6 text-white leading-none">
            Let's Make<br /> <span className="text-clustro-accent">Real Impact.</span>
          </h2>
          <p className="font-mono text-lg md:text-xl text-gray-400">
            Tell us what hurts. We'll prescribe the cure.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 border-2 border-white shadow-[12px_12px_0px_0px_#ccff00] text-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-mono font-bold uppercase text-sm mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors"
                placeholder="JOHN DOE"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-mono font-bold uppercase text-sm mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors"
                placeholder="CEO@COMPANY.COM"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="interest" className="font-mono font-bold uppercase text-sm mb-2">Interested In</label>
            <select 
              id="interest"
              name="interest"
              className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors appearance-none rounded-none"
            >
              <option>DIGITAL MARKETING</option>
              <option>INFLUENCER CAMPAIGNS</option>
              <option>ERPNEXT CUSTOMIZATION</option>
              <option>DATA CONSULTING</option>
              <option>OTHER</option>
            </select>
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="font-mono font-bold uppercase text-sm mb-2">Brief</label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              className="bg-gray-100 border-2 border-black p-4 font-sans font-bold text-lg focus:outline-none focus:bg-clustro-accent focus:border-black transition-colors resize-none"
              placeholder="WE NEED TO SCALE TO 10M MRR..."
              required
            ></textarea>
          </div>

          {/* Brutalist inline alert */}
          {status !== 'idle' && (
            <div
              className={`
                mb-6 p-4 font-mono font-bold uppercase border-2 shadow-[6px_6px_0px_0px_#000]
                ${status === 'success' 
                  ? 'bg-[#ccff00] border-black text-black'
                  : 'bg-[#ff0033] border-black text-white'}
              `}
            >
              {message}
            </div>
          )}

          <BrutalistButton type="submit" fullWidth className="flex items-center justify-center gap-2 text-xl">
            <Send className="w-5 h-5" /> Send Request
          </BrutalistButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
