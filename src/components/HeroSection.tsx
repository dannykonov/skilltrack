import EmailSubscribe from './EmailSubscribe';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Master Any Skill with AI-Powered Learning Paths
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Tell us your goals, and SkillTrack AI will create a structured roadmap with the best resources and deadlines.
          </p>
          <div className="mt-10">
            <EmailSubscribe />
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
} 