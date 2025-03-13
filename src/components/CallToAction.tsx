import EmailSubscribe from './EmailSubscribe';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white" id="cta">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Be the First to Access SkillTrack AI</h2>
          <p className="mt-4 text-xl opacity-90">
            Get early access and shape the future of AI-powered learning.
          </p>
          <div className="mt-10">
            <EmailSubscribe 
              buttonText="Join Now" 
              className="bg-white p-8 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 