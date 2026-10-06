import { GraduationCap, BadgeCheck } from "lucide-react";

export default function TrainingSection() {
  return (
    <section
      className="restored-content section-padding bg-[#08080f] border-t border-white/10"
      aria-labelledby="training-heading"
    >
      <div className="container-narrow">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-4">
          Learning that supports our work
        </p>
        <h2
          id="training-heading"
          className="text-3xl md:text-4xl tracking-tight mb-4"
        >
          Training & Certifications
        </h2>
        <p className="max-w-2xl leading-relaxed mb-9">
          We continue to strengthen the business and digital skills behind the
          solutions we deliver.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="surface-card p-7">
            <GraduationCap
              size={28}
              className="text-purple-300 mb-6"
              aria-hidden="true"
            />
            <p className="text-xs text-purple-300 uppercase tracking-widest mb-3">
              Training completed
            </p>
            <h3 className="text-xl mb-3">NYDA Training Programme</h3>
            <p className="text-sm leading-relaxed">
              Our team has completed NYDA training as part of our business
              development journey.
            </p>
          </article>
          <article className="surface-card p-7">
            <BadgeCheck
              size={28}
              className="text-purple-300 mb-6"
              aria-hidden="true"
            />
            <p className="text-xs text-purple-300 uppercase tracking-widest mb-3">
              Programme completed
            </p>
            <h3 className="text-xl mb-3">Google Digital Growth Initiative</h3>
            <p className="text-sm leading-relaxed">
              Our team has completed the Google Digital Growth Initiative
              programme.
            </p>
          </article>
          <article className="surface-card p-7 flex flex-col items-center text-center">
            <img
              src="/images/google-ads-search-certification.webp"
              alt="Google Ads Search Certification badge"
              width="480"
              height="480"
              loading="lazy"
              className="w-32 h-32 rounded-full mb-5"
            />
            <h3 className="text-xl mb-2">Google Ads Search Certification</h3>
            <p className="text-sm leading-relaxed">
              A team credential in Google Ads Search.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
