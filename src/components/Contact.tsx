import { Send, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-8 animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">Get In Touch</span>
        </div>
        <h2 className="text-6xl md:text-7xl font-black text-white mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20">
        {submitted ? (
          <div className="text-center py-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <p className="text-lg text-gray-300 text-center mb-8">
              Have a project in mind or want to collaborate? Let's create something amazing together.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl transition-all group-hover:blur-md"></div>
                <div className="relative bg-black px-8 py-4 rounded-xl group-hover:bg-opacity-80 transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </div>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
