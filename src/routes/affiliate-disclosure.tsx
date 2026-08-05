import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure | AmaBot" },
      { name: "description", content: "Learn how AmaBot uses Amazon affiliate links and may earn commissions from qualifying purchases." },
      { property: "og:title", content: "Affiliate Disclosure | AmaBot" },
      { property: "og:description", content: "Learn how AmaBot uses Amazon affiliate links and may earn commissions from qualifying purchases." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://amabot.app/affiliate-disclosure" },
    ],
    links: [{ rel: "canonical", href: "https://amabot.app/affiliate-disclosure" }],
  }),
  component: AffiliatePage,
});

function AffiliatePage() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <div className="glass-gold rounded-2xl border border-primary/40 p-6 md:p-8">
        <p className="text-lg font-semibold text-foreground md:text-xl">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </div>

      <LegalSection title="Amazon Associates disclosure">
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
        <p>Some links and purchasing flows provided through AmaBot may use Amazon affiliate links. If you follow one of these links or complete a qualifying purchase, AmaBot may receive a commission from Amazon.</p>
        <p>This commission is paid by Amazon and does not add an additional charge to your purchase.</p>
      </LegalSection>

      <LegalSection title="Why AmaBot uses affiliate links">
        <p>Affiliate commissions help fund:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Continued development of amabot.</li>
          <li>Application maintenance.</li>
          <li>Compatibility updates.</li>
          <li>New features.</li>
          <li>Infrastructure and support.</li>
          <li>Keeping AmaBot available without charging users for access.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Clear disclosure near links">
        <p>Where required, Amazon affiliate links should also include a clear disclosure close to the link, such as:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>"Paid link"</li>
          <li>"Affiliate link"</li>
          <li>"Commissions earned"</li>
        </ul>
        <p>Do not rely only on this page or the footer to disclose affiliate links.</p>
      </LegalSection>

      <LegalSection title="Independence from Amazon">
        <p>AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon.</p>
        <p>Participation in the Amazon Associates Program does not create a partnership, agency relationship, sponsorship, or endorsement.</p>
        <p>Amazon and all related trademarks, names, logos, product information, prices, and marketplace services belong to their respective owners.</p>
      </LegalSection>

      <LegalSection title="Product prices and availability">
        <p>Product prices, availability, sellers, shipping costs, and purchase conditions are controlled by Amazon and may change at any time.</p>
        <p>Information displayed by AmaBot may not always reflect a later change made by Amazon.</p>
        <p>The final information shown by Amazon during checkout governs the purchase.</p>
      </LegalSection>

      <LegalSection title="No effect on recommendations or buying rules">
        <p>Affiliate compensation does not change the buying rules configured by the user.</p>
        <p>AmaBot evaluates offers according to the product settings and conditions selected by the user.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>For questions about this Affiliate Disclosure, contact AmaBot through the official Discord or Telegram channels linked in the website footer.</p>
      </LegalSection>
    </LegalLayout>
  );
}
