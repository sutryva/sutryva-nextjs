import SectionHeader from "@/src/components/ui/SectionHeader";
import { AlertTriangle, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Sutryva Technologies Private Limited.",
};

interface PolicySection {
  number: string;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: PolicySection[] = [
  {
    number: "1",
    title: "Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how Sutryva Technologies Private Limited (&quot;Sutryva&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses, discloses and safeguards information in connection with your use of our website (the &quot;Website&quot;) and any related enquiry or contact forms.
        </p>
        <p>
          By using the Website, you agree to the practices described in this Policy. If you do not agree with this Policy, please discontinue use of the Website.
        </p>
        <p>
          This document is a general-purpose draft policy and does not constitute legal advice. It is not a substitute for review by a qualified legal professional (see the notice at the top of this page).
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Information you provide directly, such as your name, email address, company name and project details, when you submit a contact or enquiry form.</li>
          <li>Any file or attachment you choose to upload when submitting an enquiry.</li>
          <li>Technical information collected automatically when you visit the Website (see Section 4).</li>
        </ul>
        <p>
          We do not knowingly request sensitive personal information (such as financial account details, government identification numbers, or health information) through the Website, and you should not submit such information through our forms.
        </p>
      </>
    ),
  },
  {
    number: "3",
    title: "Information Submitted Through Contact Forms",
    content: (
      <>
        <p>
          When you use our contact, enquiry or project planner forms, we may collect information you choose to provide, which can include your full name, work email address, company name, service requirements, budget range, project timeline, project description and any attachment you provide.
        </p>
        <p>
          This information is used to respond to your enquiry and to evaluate a potential engagement. <span className="font-semibold">[DESCRIBE HOW SUBMITTED FORM DATA IS STORED AND PROCESSED, AND WHO WITHIN THE ORGANIZATION HAS ACCESS TO IT.]</span>
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Automatically Collected Technical Information",
    content: (
      <>
        <p>
          Like most websites, our Website and hosting infrastructure may automatically collect certain technical information when you visit, which can include your IP address, browser type and version, device type, operating system, referring website, and general usage data such as pages viewed. This information is typically collected through standard web server and hosting logs.
        </p>
        <p className="font-semibold">
          [ADD THE NAME OF THE HOSTING PROVIDER AND ANY ADDITIONAL AUTOMATICALLY COLLECTED DATA, IF APPLICABLE.]
        </p>
      </>
    ),
  },
  {
    number: "5",
    title: "How We Use Information",
    content: (
      <>
        <p>We may use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to enquiries submitted through our contact or planner forms;</li>
          <li>Evaluate and discuss potential projects or engagements;</li>
          <li>Operate, maintain and improve the Website;</li>
          <li>Monitor and understand technical performance of the Website;</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>We do not sell personal information to third parties.</p>
      </>
    ),
  },
  {
    number: "6",
    title: "Cookies and Analytics",
    content: (
      <>
        <p>
          The Website currently uses limited local browser storage to remember display preferences, such as whether you are viewing the site in light or dark mode. This information stays on your device and is not transmitted to us.
        </p>
        <p>
          As of the effective date of this Policy, the Website does not use third-party advertising cookies. <span className="font-semibold">[IF ANALYTICS TOOLS, ADVERTISING PIXELS OR OTHER TRACKING TECHNOLOGIES ARE ADDED IN THE FUTURE, THIS SECTION MUST BE UPDATED TO NAME THE PROVIDERS USED, THE PURPOSE OF TRACKING, AND HOW USERS CAN OPT OUT.]</span> Where required by applicable law, we will provide appropriate notice and obtain consent before using non-essential cookies or tracking technologies.
        </p>
      </>
    ),
  },
  {
    number: "7",
    title: "Data Sharing and Third-Party Services",
    content: (
      <>
        <p>We do not sell or rent your personal information. We may share information with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Service providers who help us operate the Website (such as hosting, email or infrastructure providers), to the extent necessary for them to perform services on our behalf;</li>
          <li>Professional advisors, where necessary;</li>
          <li>Government authorities or other third parties, where required by law or to protect our legal rights.</li>
        </ul>
        <p className="font-semibold">
          [LIST ANY SPECIFIC THIRD-PARTY SERVICE PROVIDERS USED TO PROCESS WEBSITE OR FORM DATA, SUCH AS HOSTING, EMAIL OR FORM-HANDLING SERVICES.]
        </p>
      </>
    ),
  },
  {
    number: "8",
    title: "Data Storage and Security",
    content: (
      <>
        <p>
          We intend to use reasonable administrative and technical measures to help protect information submitted to us. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
        <p className="font-semibold">
          [DESCRIBE THE ACTUAL DATA STORAGE LOCATION(S), INFRASTRUCTURE PROVIDER(S) AND SECURITY MEASURES IN PLACE ONCE CONFIRMED.]
        </p>
      </>
    ),
  },
  {
    number: "9",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain information collected through contact and enquiry forms for as long as reasonably necessary to respond to your enquiry, pursue a potential engagement, comply with legal obligations, or for other legitimate business purposes.
        </p>
        <p className="font-semibold">[ADD SPECIFIC DATA RETENTION PERIODS ONCE DEFINED.]</p>
      </>
    ),
  },
  {
    number: "10",
    title: "User Rights",
    content: (
      <>
        <p>
          Depending on your jurisdiction, you may have rights regarding your personal information, which may include the right to request access to, correction of, or deletion of information we hold about you, and to object to or restrict certain processing. To make such a request, please contact us using the details in Section 15.
        </p>
        <p className="font-semibold">
          [ADD JURISDICTION-SPECIFIC RIGHTS AND REQUEST PROCESS ONCE APPLICABLE DATA PROTECTION LAWS HAVE BEEN CONFIRMED WITH LEGAL COUNSEL.]
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Children's Privacy",
    content: (
      <p>
        The Website is intended for businesses and individuals seeking professional software development services and is not directed at children. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so that we can take appropriate action.
      </p>
    ),
  },
  {
    number: "12",
    title: "Third-Party Links",
    content: (
      <p>
        The Website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to review the privacy policy of any third-party site you visit.
      </p>
    ),
  },
  {
    number: "13",
    title: "International Data Transfers, If Applicable",
    content: (
      <>
        <p>
          If you access the Website from outside the country in which we or our service providers operate or host data, your information may be transferred to, stored, and processed in a country that has different data protection laws than your own jurisdiction.
        </p>
        <p className="font-semibold">
          [ADD DETAILS OF ANY INTERNATIONAL DATA TRANSFER SAFEGUARDS ONCE HOSTING AND PROCESSING LOCATIONS ARE CONFIRMED.]
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements or other factors. Any changes will be posted on this page along with a revised effective date. We encourage you to review this Policy periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            align="left"
            badgeText="Legal"
            title="Privacy"
            gradientTitle="Policy"
            className="mb-8"
          />

          {/* Legal Review Notice */}
          <div className="mb-10 rounded-2xl border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 flex gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <p className="font-bold mb-1">Draft policy — legal review required.</p>
              <p>
                This is a general-purpose draft prepared for Sutryva Technologies Private Limited. It contains bracketed placeholders for information that has not yet been confirmed, and it does not claim compliance with GDPR, the DPDP Act, SOC 2, ISO, or any other specific framework or certification. This document has not been reviewed by a lawyer. It should not be published as final or relied upon until it has been reviewed and approved by a qualified legal professional familiar with the data protection laws applicable to your business and users.
              </p>
            </div>
          </div>

          {/* Effective Date / Placeholders */}
          <div className="mb-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Legal Entity:</span> Sutryva Technologies Private Limited</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Effective Date:</span> [ADD EFFECTIVE DATE]</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Registered Address:</span> [ADD REGISTERED OR BUSINESS ADDRESS]</div>
            <div><span className="font-semibold text-slate-800 dark:text-slate-100">Data Protection Contact:</span> [ADD NAME/EMAIL OF DESIGNATED DATA PROTECTION CONTACT, IF APPLICABLE]</div>
          </div>

          {/* Policy Sections */}
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

            {/* Section 15: Contact Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                15. Contact Information
              </h2>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
                <p>If you have questions about this Privacy Policy or how your information is handled, please contact us at:</p>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 space-y-2 text-sm">
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Company:</span> Sutryva Technologies Private Limited</div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <a href="mailto:hello@sutryva.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">hello@sutryva.com</a>
                  </div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Data Protection Contact:</span> [ADD NAME/EMAIL OF DESIGNATED DATA PROTECTION CONTACT, IF APPLICABLE]</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-100">Registered Address:</span> [ADD REGISTERED OR BUSINESS ADDRESS]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Legal Review Notice */}
          <div className="mt-12 rounded-2xl border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 flex gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              Reminder: this policy is a draft template and placeholders above must be completed. Please have this document reviewed and approved by a qualified legal professional before treating it as final or legally binding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
