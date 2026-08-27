import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity, Bell, ShoppingCart, SlidersHorizontal, PackageSearch, Zap,
  Sparkles, Gamepad2, Cpu, Timer,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable, FaqList, CtaBlock,
  jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "What Is AmaBot? Free Amazon Auto Checkout Bot";
const DESCRIPTION =
  "AmaBot is a free Amazon auto checkout bot for Windows and macOS. It monitors selected products and automatically attempts checkout when your price, quantity and availability conditions are met.";

const faqs: Faq[] = [
  {
    q: "What is AmaBot?",
    a: "AmaBot is a free Amazon auto checkout bot for Windows and macOS. It monitors the Amazon products you add and automatically attempts checkout when your maximum price, quantity and availability conditions are met.",
  },
  {
    q: "Is AmaBot an Amazon auto checkout bot?",
    a: "Yes. AmaBot is an Amazon auto checkout bot that can automatically attempt checkout when a monitored product matches the user's selected price, quantity and availability conditions.",
  },
  {
    q: "How does Amazon auto buy work with AmaBot?",
    a: "You paste an Amazon product link, set a maximum price and a quantity, and start monitoring. When an eligible offer matches every rule you configured, AmaBot begins the checkout process through your own Amazon session.",
  },
  {
    q: "Can AmaBot automatically purchase Amazon products?",
    a: "Yes. AmaBot attempts the purchase automatically when a monitored product becomes available within your maximum price and quantity settings, and it keeps going until your configured order target has been reached.",
  },
  {
    q: "Does automatic checkout guarantee a successful order?",
    a: "No. AmaBot automatically attempts checkout, but inventory can disappear mid-checkout, the price or seller can change, quantity limits can apply and Amazon may request additional verification. A checkout attempt is not a guaranteed order.",
  },
  {
    q: "Do you store my personal information?",
    a: "AmaBot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device.",
  },
  {
    q: "Which payment method and shipping address does AmaBot use?",
    a: "AmaBot uses the payment method and shipping address configured in your Amazon account. Make sure your Amazon defaults are correct before enabling automatic checkout.",
  },
  {
    q: "Do I need to use proxies?",
    a: "No. AmaBot does not support or require proxies. All Amazon activity is performed using your own internet connection and IP address. AmaBot is designed to operate conservatively and minimize unnecessary requests, using controlled and carefully managed request timing rather than routing your activity through external proxy networks.",
  },
  {
    q: "Can I monitor multiple products?",
    a: "Yes. You can add and monitor multiple Amazon products and configure different buying rules for each one. AmaBot intervals are dynamic, generally taking a few seconds between requests.",
  },
  {
    q: "Is my Amazon account at risk?",
    a: "Automated interaction with Amazon can carry account-related risks, and no tool can guarantee that an account will never be affected. Amazon may occasionally request verification or restrict certain activity.",
  },
  {
    q: "Do I need to keep my computer running?",
    a: "Yes. Because AmaBot runs locally, your computer, internet connection, and AmaBot session must remain active while monitoring or automatic purchasing is enabled.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners.",
  },
];

export const Route = createFileRoute("/what-is-amabot")({
  head: () => ({
    ...headMeta({ slug: "what-is-amabot", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("what-is-amabot", DESCRIPTION, faqs, "What Is AmaBot").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: WhatIsAmabot,
});

function WhatIsAmabot() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Product overview"
        breadcrumb="What Is AmaBot"
        h1={<>What Is <span className="text-gradient-gold">AmaBot</span>? A Free Amazon Auto Checkout Bot</>}
        intro={
          <p>
            AmaBot is a free Amazon auto checkout bot that monitors selected products and automatically
            attempts checkout when the user's price, quantity and availability conditions are met. It runs
            on Windows and macOS and leaves the purchase decision to the rules you configure.
          </p>
        }
        secondary={{ href: "/#how-it-works", label: "See How It Works" }}
      />

      <Section id="what-it-does" title="What Is an Amazon Auto Checkout Bot?">
        <p>
          An Amazon auto checkout bot is software that watches a product listing on your behalf and starts
          the checkout process the moment that listing matches the rules you defined. Instead of a person
          sitting on a product page pressing refresh, an Amazon bot performs the checks continuously and
          automatically reacts when it detects a match.
        </p>
        <p>
          People use automatic checkout for one reason: timing. On fast-selling products the window between
          a listing becoming buyable and the last unit disappearing is often measured in seconds, and a
          manual buyer loses most of that window to noticing the change, loading the page and filling in
          checkout steps. An Amazon auto checkout bot removes that delay because detection and the checkout
          attempt belong to the same automated cycle.
        </p>
        <CardGrid>
          <InfoCard icon={Zap} title="Automatic checkout">
            When a monitored listing matches your rules, AmaBot begins the checkout process immediately
            rather than notifying you and waiting.
          </InfoCard>
          <InfoCard icon={Activity} title="Continuous monitoring">
            Every product you add is checked in rotation for as long as monitoring is running, so nothing
            depends on you being at the keyboard.
          </InfoCard>
          <InfoCard icon={SlidersHorizontal} title="Your conditions">
            Maximum price, quantity, order target and seller preference are set per product and define
            exactly when a purchase may be attempted.
          </InfoCard>
          <InfoCard icon={PackageSearch} title="Availability detection">
            AmaBot looks for a genuinely buyable offer, which is what makes automatic checkout possible on
            sold-out items the moment they return.
          </InfoCard>
        </CardGrid>
        <Callout title="A checkout attempt is not a guaranteed order">
          Detecting a match is the start of a checkout, not the end of one. Inventory can vanish mid-
          checkout, the price or the seller can change, and Amazon may ask for extra verification. AmaBot
          improves your odds; it does not promise an outcome.
        </Callout>
      </Section>

      <Section title="Amazon Auto Buy and Automatic Purchasing">
        <p>
          Amazon auto buy in AmaBot is a short, explicit setup. You describe an acceptable purchase by
          setting price, quantity, availability and seller conditions, and AmaBot monitors the product until
          the live offer matches those rules. When everything lines up, AmaBot attempts checkout through
          your own Amazon session.
        </p>
        <p>
          A purchase is not guaranteed. Inventory can disappear mid-checkout, the seller or price can change,
          and Amazon may request additional verification. AmaBot only acts when your predefined conditions
          are met, and it never shops for you, substitutes products or relaxes a rule that nearly matched.
        </p>
        <p>
          For a deeper look at the purchase workflow, see the dedicated{" "}
          <Link to="/amazon-auto-buy" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon Auto Buy
          </Link>{" "}
          page.
        </p>
      </Section>

      <Section title="Amazon Restock Alerts and Monitoring">
        <p>
          AmaBot can monitor unavailable listings and detect the moment a buyable offer reappears. When a
          restock is detected, AmaBot can notify you and, if your conditions are met, attempt automatic
          checkout in the same cycle.
        </p>
        <p>
          Restock monitoring is a supporting capability of the Amazon auto checkout bot. If tracking
          restocks is your main goal, read more about{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alerts
          </Link>
          .
        </p>
      </Section>

      <Section title="Amazon Price Monitoring and Alerts">
        <p>
          Users can also enable optional price monitoring when they want AmaBot to track a product without
          immediately attempting checkout. In this mode, AmaBot works as an Amazon price monitor and sends an
          alert when the product matches your selected price conditions, leaving the purchase decision to you.
        </p>
        <p>
          Automatic checkout is the core AmaBot feature, while price monitoring is available for users who
          prefer alerts. If price watching is your main goal, the dedicated{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>{" "}
          page covers that workflow in depth.
        </p>
      </Section>

      <Section title="Automatic Checkout vs Alert-Only Monitoring">
        <p>
          Both modes run on the same monitoring engine. They differ only in what happens the moment a match
          is found.
        </p>
        <CompareTable
          caption="Comparison of AmaBot automatic checkout and optional alert-only monitoring"
          head={["Feature", "Automatic Checkout", "Alert-Only Monitoring"]}
          rows={[
            ["Product monitoring", "Yes", "Yes"],
            ["Price monitoring", "Yes", "Yes"],
            ["Restock detection", "Yes", "Yes"],
            ["User notifications", "Yes", "Yes"],
            ["Automatic checkout", "Yes", "No"],
            ["Maximum price control", "Yes", "Yes"],
            ["Quantity control", "Yes", "No"],
            ["Manual purchase required", "No", "Yes"],
          ]}
        />
        <p>
          Automatic checkout is the core AmaBot feature. Alert-only monitoring is the optional alternative
          for products you would rather review yourself.
        </p>
      </Section>

      <Section title="Who Is AmaBot Designed For?">
        <p>
          AmaBot is built for people buying products that disappear faster than a person can react. The tool
          itself is category-agnostic — it monitors any Amazon listing you add — but automatic checkout earns
          its keep where timing decides the outcome.
        </p>
        <CardGrid>
          <InfoCard icon={Sparkles} title="Collectibles and Pokémon products">
            Sealed Pokémon products, Elite Trainer Boxes and similar collectibles often sell out within
            minutes of appearing.
          </InfoCard>
          <InfoCard icon={Timer} title="Limited releases">
            Launch-day products and limited runs list, sell out and return without any announcement.
          </InfoCard>
          <InfoCard icon={Gamepad2} title="Gaming products">
            Consoles, accessories and popular gaming hardware are classic examples of unpredictable restocks.
          </InfoCard>
          <InfoCard icon={Cpu} title="Electronics and frequent restocks">
            Items that repeatedly return to stock at changing seller prices are where automated checkout
            saves the most manual work.
          </InfoCard>
          <InfoCard icon={Bell} title="Fast-selling everyday items">
            Any listing where the buyable offer is short-lived benefits from a reaction measured in seconds.
          </InfoCard>
          <InfoCard icon={Activity} title="Products with changing seller prices">
            When several sellers rotate through the buy box, a per-product maximum price keeps you from
            overpaying during a spike.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Important Checkout Limitations">
        <p>
          AmaBot is an Amazon auto checkout bot, and being direct about that also means being direct about
          what it cannot control. An automatic checkout attempt may fail because of:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Inventory disappearing between detection and checkout.</li>
          <li>The product price changing while the order is being placed.</li>
          <li>The seller behind the buyable offer changing.</li>
          <li>Quantity restrictions applied by Amazon or the seller.</li>
          <li>A payment method being declined or unavailable.</li>
          <li>Shipping restrictions on the address or the product.</li>
          <li>Amazon requesting additional account verification.</li>
          <li>Order limitations on new, limited or high-demand releases.</li>
          <li>Product eligibility rules that exclude the offer.</li>
          <li>Amazon cancelling or limiting an order after it was placed.</li>
        </ul>
        <p>
          There is also a general risk that applies to any automated interaction with Amazon: the platform
          may occasionally request verification or restrict certain activity. Automated interaction with
          Amazon can carry account-related risks, and no tool can guarantee that an account will never be
          affected. Once an order is placed it lives entirely inside your Amazon account, and cancellations,
          returns and refunds are handled through Amazon under Amazon's policies.
        </p>
        <p>
          AmaBot runs as a desktop application on Windows and macOS. Because it runs locally, your computer,
          your internet connection and the AmaBot session must stay active while monitoring or automatic
          checkout is enabled. You can return to the{" "}
          <Link to="/" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            AmaBot home page
          </Link>{" "}
          for a full feature overview.
        </p>
      </Section>

      <FaqList items={faqs} heading="Amazon Auto Checkout Bot FAQ" />

      <CtaBlock
        title="Try the free Amazon auto checkout bot"
        text="Set your products, your maximum price and your quantity, then let AmaBot attempt checkout the moment your conditions are met. Completely free."
      />
    </MarketingLayout>
  );
}
