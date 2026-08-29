import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | AmaBot" },
      { name: "description", content: "Review the terms that apply when using the AmaBot Amazon monitoring and auto-buy application." },
      { property: "og:title", content: "Terms of Use | AmaBot" },
      { property: "og:description", content: "Review the terms that apply when using the AmaBot Amazon monitoring and auto-buy application." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://amabot.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://amabot.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="August 30, 2026">
      <LegalSection title="1. Acceptance of these terms">
        <p>These Terms of Use govern your access to and use of the AmaBot website, desktop application, monitoring features, notification features, and automatic purchasing tools.</p>
        <p>By creating an account, downloading or using AmaBot, or enabling any monitoring or purchasing feature, you agree to these Terms. If you do not agree, do not use amabot.</p>
      </LegalSection>

      <LegalSection title="2. About AmaBot">
        <p>AmaBot is an independent Amazon monitoring and auto-buy tool. It allows users to add Amazon products, configure buying rules, receive notifications, and optionally enable automatic purchasing when an eligible offer matches their settings.</p>
        <p>AmaBot is not Amazon and is not endorsed by, sponsored by, or affiliated with Amazon.</p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>You must be at least 18 years old and legally capable of entering into a binding agreement to use AmaBot.</p>
        <p>You are responsible for ensuring that your use of AmaBot complies with the laws and marketplace terms that apply to you.</p>
      </LegalSection>

      <LegalSection title="4. Your AmaBot account">
        <p>You are responsible for maintaining the security of your AmaBot account and for all activity performed through it.</p>
        <p>You must provide accurate information and must not share access with anyone who is not authorized to use your account.</p>
        <p>Notify us through the official support channels if you believe your account has been accessed without permission.</p>
      </LegalSection>

      <LegalSection title="5. Connecting your Amazon account">
        <p>AmaBot operates through a separate browser session running locally on your computer. You may be asked to sign in to Amazon and register a passkey to maintain a more persistent session.</p>
        <p>Amazon may still request a CAPTCHA, passkey, sign-in confirmation, or another verification step. You are responsible for completing any verification requested by Amazon.</p>
        <p>You are also responsible for reviewing and complying with Amazon's terms, policies, purchase limits, and account requirements.</p>
      </LegalSection>

      <LegalSection title="6. Local operation">
        <p>The AmaBot application and Amazon browser session run locally on your computer.</p>
        <p>Your computer, internet connection, and AmaBot session must remain active while monitoring or automatic purchasing is enabled.</p>
        <p>Amazon credentials and payment information are not stored on AmaBot servers. Product links, buying rules, preferences, and session-related information may be stored locally on your device.</p>
      </LegalSection>

      <LegalSection title="7. Monitor Only">
        <p>In Monitor Only mode, AmaBot checks for offers that match your configured conditions and sends a notification when a match is detected.</p>
        <p>Monitor Only never intentionally places an order automatically.</p>
        <p>Notifications may be delayed or unavailable because of internet issues, device settings, Amazon changes, or other circumstances outside AmaBot's control.</p>
      </LegalSection>

      <LegalSection title="8. Auto-buy authorization">
        <p>By enabling Auto-buy, you expressly authorize AmaBot to place Amazon orders on your behalf when an eligible offer matches the conditions you configured.</p>
        <p>Auto-buy may continue placing orders until your configured order target has been reached.</p>
        <p>You are solely responsible for reviewing your target price, quantity, order target, seller preference, shipping address, payment method, and other buying rules before starting the engine.</p>
      </LegalSection>

      <LegalSection title="9. Shipping and payment">
        <p>AmaBot uses the default shipping address and default payment method configured in your Amazon account.</p>
        <p>Amazon may apply an available gift-card balance before charging your default payment method.</p>
        <p>You are responsible for confirming that your Amazon shipping and payment settings are correct before enabling Auto-buy.</p>
      </LegalSection>

      <LegalSection title="10. Orders, cancellations, and returns">
        <p>An order placed by AmaBot is an order placed through your Amazon account.</p>
        <p>Once an order has been submitted, shipping changes, cancellations, returns, refunds, and disputes must be managed directly through Amazon and are subject to Amazon's policies.</p>
        <p>AmaBot cannot guarantee that Amazon will accept, fulfill, ship, or maintain an order.</p>
      </LegalSection>

      <LegalSection title="11. No purchase guarantee">
        <p>AmaBot does not guarantee that you will successfully purchase any product.</p>
        <p>Availability, pricing, checkout speed, purchase limits, seller changes, Amazon restrictions, verification requests, internet performance, and competition from other buyers may affect the result.</p>
      </LegalSection>

      <LegalSection title="12. Product-check intervals">
        <p>AmaBot monitors each individual configured product every few seconds while monitoring is active.</p>
        <p>The monitoring interval for an individual product does not increase based on the total number of products configured by the user.</p>
        <p>Actual detection and response timing may still vary because of network performance, Amazon response times, verification requests, or other technical conditions.</p>
      </LegalSection>

      <LegalSection title="13. Acceptable use">
        <p>You may not:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Use AmaBot for unlawful, fraudulent, abusive, or deceptive purposes.</li>
          <li>Attempt to bypass Amazon restrictions, security measures, or purchase limits.</li>
          <li>Reverse engineer, copy, modify, resell, sublicense, or redistribute AmaBot except where applicable law expressly permits it.</li>
          <li>Interfere with the security, availability, or operation of AmaBot.</li>
          <li>Use AmaBot to access another person's Amazon account without authorization.</li>
          <li>Introduce malware, malicious code, or automated attacks.</li>
          <li>Misrepresent your relationship with AmaBot, Amazon, or any seller.</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Updates and availability">
        <p>AmaBot may install application updates automatically in the background.</p>
        <p>We may add, modify, suspend, or discontinue features when necessary for security, compatibility, legal compliance, maintenance, or product development.</p>
        <p>We do not guarantee uninterrupted or error-free availability. Amazon website changes may temporarily affect AmaBot functionality.</p>
      </LegalSection>

      <LegalSection title="15. Affiliate relationship">
        <p>AmaBot may earn commissions from qualifying purchases made through Amazon affiliate links.</p>
        <p>This affiliate relationship does not increase the price you pay and does not mean that Amazon endorses or sponsors AmaBot.</p>
        <p>Additional details are available in the Affiliate Disclosure.</p>
      </LegalSection>

      <LegalSection title="16. Intellectual property">
        <p>AmaBot and its original software, design, branding, website content, and documentation are owned by or licensed to the operator of AmaBot and are protected by applicable intellectual-property laws.</p>
        <p>Amazon and all related names, trademarks, logos, and product information belong to their respective owners.</p>
      </LegalSection>

      <LegalSection title="17. Disclaimer of warranties">
        <p>To the maximum extent permitted by law, AmaBot is provided "as is" and "as available".</p>
        <p>We disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation, and successful purchasing.</p>
        <p>Nothing in these Terms excludes rights that cannot legally be excluded.</p>
      </LegalSection>

      <LegalSection title="18. Limitation of liability">
        <p>To the maximum extent permitted by law, AmaBot and its operators will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages.</p>
        <p>This includes losses related to missed purchases, duplicate orders, price changes, unavailable products, account restrictions, delivery issues, lost profits, lost data, or interrupted access.</p>
        <p>Where liability cannot be excluded, it will be limited to the maximum extent permitted by applicable law.</p>
      </LegalSection>

      <LegalSection title="19. Indemnification">
        <p>To the extent permitted by law, you agree to indemnify and hold harmless AmaBot and its operators from claims, losses, liabilities, and expenses arising from your misuse of the service, violation of these Terms, violation of applicable law, or unauthorized use of an Amazon account.</p>
      </LegalSection>

      <LegalSection title="20. Suspension and termination">
        <p>We may suspend or terminate access to AmaBot if we reasonably believe you have violated these Terms, created a security risk, misused the service, or engaged in unlawful activity.</p>
        <p>You may stop using AmaBot at any time.</p>
        <p>Provisions that should reasonably survive termination, including intellectual-property, disclaimer, liability, and indemnification provisions, will remain in effect.</p>
      </LegalSection>

      <LegalSection title="21. Changes to these terms">
        <p>We may update these Terms when the service, legal requirements, or business practices change.</p>
        <p>The revised version will be posted on this page with a new "Last updated" date. Continued use after an update means you accept the revised Terms.</p>
      </LegalSection>

      <LegalSection title="22. Contact">
        <p>For questions about these Terms, contact AmaBot through the official Discord or Telegram channels linked in the website footer.</p>
      </LegalSection>
    </LegalLayout>
  );
}
