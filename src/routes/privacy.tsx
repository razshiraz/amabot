import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | amabot" },
      { name: "description", content: "Learn how amabot handles account information, local Amazon sessions, product settings, and technical data." },
      { property: "og:title", content: "Privacy Policy | amabot" },
      { property: "og:description", content: "Learn how amabot handles account information, local Amazon sessions, product settings, and technical data." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://amabot.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://amabot.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <LegalSection title="1. Introduction">
        <p>This Privacy Policy explains how amabot handles information when you visit the website, create an amabot account, or use the desktop application.</p>
        <p>amabot is designed to keep sensitive Amazon account activity inside a separate browser session running locally on your computer.</p>
      </LegalSection>

      <LegalSection title="2. Information associated with your amabot account">
        <p>When you register for amabot, we may process information you provide during registration, such as your email address, account identifier, and authentication information.</p>
        <p>We use this information to create and secure your account, provide access to the service, communicate important updates, and prevent misuse.</p>
      </LegalSection>

      <LegalSection title="3. Information stored locally">
        <p>The following information may be stored locally on your device:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Amazon product links.</li>
          <li>Product identifiers.</li>
          <li>Target prices.</li>
          <li>Quantities and order targets.</li>
          <li>Seller preferences.</li>
          <li>Monitor Only or Auto-buy preferences.</li>
          <li>Application settings.</li>
          <li>Amazon browser-session information.</li>
          <li>Local diagnostic information.</li>
        </ul>
        <p>Local information remains on your device unless you choose to share it for support or a feature specifically requires it to be transmitted.</p>
      </LegalSection>

      <LegalSection title="4. Amazon credentials and payment information">
        <p>amabot does not store your Amazon password, full payment-card information, or Amazon authentication credentials on amabot servers.</p>
        <p>Your Amazon sign-in and checkout session operate through a separate local browser session.</p>
        <p>Payment processing, gift-card balances, shipping addresses, and order fulfillment are handled by Amazon.</p>
      </LegalSection>

      <LegalSection title="5. Technical information">
        <p>When you use the website or application, limited technical information may be processed for security, reliability, updates, and troubleshooting.</p>
        <p>This may include:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Application version.</li>
          <li>Operating-system information.</li>
          <li>Error and crash information.</li>
          <li>Update status.</li>
          <li>Basic security events.</li>
          <li>IP address and browser information when accessing the public website.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Support communications">
        <p>If you contact amabot through Discord, Telegram, or another support channel, we may process the information you choose to provide.</p>
        <p>Do not send Amazon passwords, payment-card details, passkeys, or other sensitive credentials through support channels.</p>
      </LegalSection>

      <LegalSection title="7. How information is used">
        <p>Information may be used to:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Provide and maintain amabot.</li>
          <li>Authenticate and secure accounts.</li>
          <li>Deliver application updates.</li>
          <li>Troubleshoot errors and support requests.</li>
          <li>Improve reliability and usability.</li>
          <li>Detect fraud, abuse, or security threats.</li>
          <li>Comply with legal obligations.</li>
          <li>Enforce the Terms of Use.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Cookies and local storage">
        <p>The website may use essential cookies or browser storage for authentication, security, and user preferences.</p>
        <p>If non-essential analytics, advertising cookies, or additional tracking technologies are introduced, this Privacy Policy and any required consent controls must be updated before those technologies are enabled.</p>
      </LegalSection>

      <LegalSection title="9. Affiliate links and Amazon">
        <p>Some links may be Amazon affiliate links.</p>
        <p>When you follow an affiliate link, Amazon may collect information according to Amazon's own privacy notices, cookie policies, and account settings.</p>
        <p>amabot does not control Amazon's privacy practices.</p>
      </LegalSection>

      <LegalSection title="10. Sharing of information">
        <p>amabot does not sell personal information.</p>
        <p>Information may be shared only when reasonably necessary:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>With service providers that help operate amabot.</li>
          <li>To comply with law, legal process, or valid government requests.</li>
          <li>To investigate fraud, abuse, or security incidents.</li>
          <li>To protect users, amabot, or the public.</li>
          <li>As part of a merger, acquisition, financing, or transfer of the service.</li>
          <li>With your consent or at your direction.</li>
        </ul>
        <p>Service providers may process information only for the services they provide and subject to appropriate obligations.</p>
      </LegalSection>

      <LegalSection title="11. Data retention">
        <p>Information is retained only for as long as reasonably necessary to provide the service, secure accounts, meet legal obligations, resolve disputes, and enforce agreements.</p>
        <p>Locally stored information remains on your device until it is deleted through the application, removed with the application, or otherwise cleared from your device.</p>
      </LegalSection>

      <LegalSection title="12. Security">
        <p>amabot uses reasonable technical and organizational measures intended to protect information.</p>
        <p>No storage, transmission, browser session, or online service can be guaranteed to be completely secure.</p>
        <p>You are responsible for protecting access to your computer, Amazon account, amabot account, email account, and passkeys.</p>
      </LegalSection>

      <LegalSection title="13. Your choices and rights">
        <p>Depending on where you live, you may have rights to request access, correction, deletion, restriction, objection, or portability of certain personal information.</p>
        <p>You may also be able to delete local application data through the application or your device.</p>
        <p>Requests can be submitted through the official contact channels in the footer. We may need to verify your identity before completing a request.</p>
      </LegalSection>

      <LegalSection title="14. International processing">
        <p>Information may be processed in countries other than the country where you live.</p>
        <p>Where required, reasonable safeguards will be used for international transfers.</p>
      </LegalSection>

      <LegalSection title="15. Children's privacy">
        <p>amabot is intended only for users who are at least 18 years old.</p>
        <p>We do not knowingly offer the service to children or knowingly collect personal information from children.</p>
      </LegalSection>

      <LegalSection title="16. Third-party services">
        <p>The website and application may link to Amazon, Discord, Telegram, and other third-party services.</p>
        <p>Those services operate under their own terms and privacy policies. amabot is not responsible for their privacy or security practices.</p>
      </LegalSection>

      <LegalSection title="17. Changes to this policy">
        <p>We may update this Privacy Policy when the service, data practices, or legal requirements change.</p>
        <p>The revised policy will be posted on this page with a new "Last updated" date.</p>
      </LegalSection>

      <LegalSection title="18. Contact">
        <p>For privacy questions or requests, contact amabot through the official Discord or Telegram channels linked in the website footer.</p>
      </LegalSection>
    </LegalLayout>
  );
}
