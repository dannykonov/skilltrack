export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">SkillTrack AI</h2>
            <p className="mt-2">Master any skill with AI-powered learning paths</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} SkillTrack AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 