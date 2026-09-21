import SectionHeader from "@/src/components/ui/SectionHeader";
import { AlertTriangle, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions of Sutryva Technologies Private Limited.",
};

interface TermsSection {
  number: string;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: TermsSection[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website operated by Sutryva Technologies Private Limited (&quot;Sutryva&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), including any enquiry, contact or project planner forms available on it (together, the &quot;Website&quot;).
        </p>
        <p>
          By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of the Website.
        </p>
        <p>
          These Terms are a general-purpose draft and do not constitute legal advice. They should be reviewed by a qualified legal professional before being treated as final (see the notice on this page).
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Company Information",
    content: (
      <p>
        The Website is operated by Sutryva Technologies Private Limited. <span className="font-semibold">Registered Address: [ADD REGISTERED COMPANY ADDRESS]</span>.
      </p>
    ),
  },
  {
    number: "3",
    title: "Website Usage",
    content: (
      <>
        <p>You may use the Website for lawful purposes only. You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use the Website in any way that violates applicable laws or regulations;</li>
          <li>Attempt to gain unauthorized access to the Website or related systems and infrastructure;</li>
          <li>Introduce viruses, malware or other harmful code;</li>
          <li>Scrape, copy or reproduce content from the Website for commercial purposes without our prior written consent;</li>
          <li>Interfere with or disrupt the operation of the Website.</li>
        </ul>
        <p>We reserve the right to restrict or terminate access to the Website for anyone who violates these Terms.</p>
      </>
    ),
  },
  {
    number: "4",
    title: "Intellectual Property",
    content: (
      <p>
        All content on the Website, including text, graphics, logos, the Sutryva name and brand marks, illustrations and code, is the property of Sutryva Technologies Private Limited or its licensors, unless otherwise indicated, and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify or create derivative works from any content on the Website without our prior written permission, except as necessary for normal browsing and use of the Website.
      </p>
    ),
  },
  {
    number: "5",
    title: "User-Submitted Information",
    content: (
      <p>
        When you submit information through our contact, enquiry or project planner forms, you confirm that the information you provide is accurate and that you have the right to share it with us. You agree not to submit information that is unlawful, infringes on the rights of a third party, or contains confidential information you are not authorized to disclose. Please refer to our Privacy Policy for details on how submitted information is used.
      </p>
    ),
  },
  {
    number: "6",
    title: "Service Enquiries and Proposals",
    content: (
      <p>
        Submitting an enquiry, project brief or request through the Website does not create a binding contract, engagement or obligation on either party. Any services, timelines, pricing or deliverables discussed following an enquiry are subject to a separate written agreement, proposal or statement of work agreed between Sutryva and the client. Nothing on the Website should be interpreted as a guaranteed quote, offer or commitment to provide services.
      </p>
    ),
  },
  {
    number: "7",
    title: "Third-Party Links and Services",
    content: (
      <p>
        The Website may contain links to third-party websites, tools or services that are not owned or controlled by Sutryva. We are not responsible for the content, accuracy, availability or practices of any third-party websites or services. Accessing third-party links is at your own risk and subject to the terms and privacy policies of those third parties.
      </p>
    ),
  },
  {
    number: "8",
    title: "Website Availability",
    content: (
      <p>
        We aim to keep the Website available and functioning correctly but do not guarantee uninterrupted, error-free or continuous availability. The Website may be temporarily unavailable due to maintenance, technical issues or factors outside our control. We reserve the right to modify, suspend or discontinue the Website, in whole or in part, at any time without prior notice.
      </p>
    ),
  },
  {
    number: "9",
    title: "No Guarantee of Business Results",
    content: (
      <p>
        Any information on the Website regarding our services, capabilities, past work or potential outcomes is provided for general informational purposes only. We do not guarantee any specific business results, revenue, growth, timelines or outcomes from engaging our services, and nothing on the Website should be construed as such a guarantee. Any projections, examples or illustrative figures are not a promise of similar results.
      </p>
    ),
  },
  {
    number: "10",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, Sutryva Technologies Private Limited shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits, revenue, data or business opportunity, arising out of or in connection with your use of, or inability to use, the Website.
        </p>
        <p>
          The Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express or implied, except as required by applicable law.
        </p>
        <p className="font-semibold">
          [ADD ANY ADDITIONAL LIMITATION OF LIABILITY LANGUAGE REQUIRED UNDER THE APPLICABLE JURISDICTION, TO BE CONFIRMED WITH LEGAL COUNSEL.]
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Sutryva Technologies Private Limited, its directors, employees and representatives from and against any claims, damages, losses, liabilities and expenses (including reasonable legal fees) arising out of or related to your misuse of the Website, your violation of these Terms, or your violation of any rights of a third party.
        </p>
        <p className="font-semibold">
          [THIS CLAUSE SHOULD BE REVIEWED AND CALIBRATED BY LEGAL COUNSEL BASED ON APPLICABLE LAW AND ENFORCEABILITY IN THE RELEVANT JURISDICTION.]
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Changes to the Website and Terms",
    content: (
      <p>
        We may update, modify or discontinue any part of the Website, and we may revise these Terms from time to time to reflect changes in our practices, services or legal requirements. Any changes to these Terms will be posted on this page along with a revised effective date. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    number: "13",
    title: "Governing Law and Jurisdiction",
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of <span className="font-semibold">[APPLICABLE JURISDICTION]</span>, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts located in <span className="font-semibold">[APPLICABLE JURISDICTION]</span>.
        </p>
        <p className="font-semibold">
          [THIS SECTION MUST BE CONFIRMED AND FINALIZED WITH QUALIFIED LEGAL COUNSEL BASED ON WHERE THE COMPANY IS REGISTERED AND OPERATES.]
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            align="left"
            badgeText="Legal"
            title="Terms and"
            gradientTitle="Conditions"
            className="mb-8"
          />

          {/* Legal Review Notice */}
          <div className="mb-10 rounded-2xl border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 flex gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <p className="font-bold mb-1">Draft terms — legal review required.</p>
              <p>
                This is a general-purpose draft prepared for Sutryva Technologies Private Limited. It contains bracketed placeholders for information that has not yet been confirmed, including the applicable jurisdiction, and it does not invent or assume any specific governing law. This document has not been reviewed by a lawyer. It should not be published as final or relied upon until it has been reviewed and approved by a qualified legal professional familiar with the laws applicable to your business and users.
              </p>
            </div>
          </div>

          {/* Effective Date / Placeholders */}
          <div className="mb-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Legal Entity:</span> Sutryva Technologies Private Limited</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Effective Date:</span> [ADD EFFECTIVE DATE]</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Registered Address:</span> [ADD REGISTERED COMPANY ADDRESS]</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Applicable Jurisdiction:</span> [APPLICABLE JURISDICTION]</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Legal Contact Email:</span> [ADD LEGAL CONTACT EMAIL]</div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.number}>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {section.number}. {section.title}
                </h2>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Section 14: Contact Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                14. Contact Information
              </h2>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
                <p>If you have questions about these Terms and Conditions, please contact us at:</p>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 space-y-2 text-sm">
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Company:</span> Sutryva Technologies Private Limited</div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <a href="mailto:hello@sutryva.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">hello@sutryva.com</a>
                    <span className="text-slate-500 dark:text-slate-400">(General)</span>
                  </div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Legal Contact Email:</span> [ADD LEGAL CONTACT EMAIL]</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Registered Address:</span> [ADD REGISTERED COMPANY ADDRESS]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Legal Review Notice */}
          <div className="mt-12 rounded-2xl border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 flex gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              Reminder: these terms are a draft template and the placeholders above, including the applicable jurisdiction, must be completed. Please have this document reviewed and approved by a qualified legal professional before treating it as final or legally binding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
