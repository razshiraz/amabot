import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity, Bell, ShoppingCart, SlidersHorizontal, Filter, Zap,
  Sparkles, Gamepad2, Cpu, PackageSearch, Timer,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable, FaqList, CtaBlock,
  jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "What Is AmaBot? Free Amazon Auto Checkout Bot";
const DESCRIPTION =
  "AmaBot is a free Amazon auto checkout bot with Amazon auto buy, restock tracking and optional price monitoring based on your selected conditions.";

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
    a: "You paste an Amazon product link, set a maximum price and a quantity, and start monitoring. Amazon auto buy runs continuously in the background: when an eligible offer matches every rule you configured, AmaBot begins the checkout process through your own Amazon session.",
  },
  {
    q: "What does Amazon auto purchase mean?",
    a: "Amazon auto purchase means the software attempts to place the order for you instead of waiting for you to click Buy Now. With AmaBot, an Amazon auto purchase is only attempted when the listing matches the conditions you selected for that product.",
  },
  {
    q: "Is AmaBot an Amazon bot?",
    a: "Yes. AmaBot is an independent Amazon bot that runs on your own computer, checks the products you add and acts only on the rules you configure. It is not built, endorsed or operated by Amazon.",
  },
  {
    q: "Can AmaBot automatically purchase Amazon products?",
    a: "Yes. AmaBot attempts the purchase automatically when a monitored product becomes available within your maximum price and quantity settings, and it keeps going until your configured order target has been reached.",
  },
  {
    q: "Does AmaBot send an Amazon restock alert?",
    a: "Yes. AmaBot can send an Amazon restock alert the moment a sold-out listing gets a buyable offer again, and it can attempt automatic checkout at the same time when your conditions are met.",
  },
  {
    q: "Can AmaBot work as an Amazon restock tracker?",
    a: "Yes. Used as an Amazon restock tracker, AmaBot keeps checking unavailable listings in rotation and reports the moment availability returns, so a restock does not depend on you refreshing the page.",
  },
  {
    q: "Is AmaBot an Amazon restock bot?",
    a: "Yes. AmaBot works as an Amazon restock bot because restock detection is wired directly into the checkout engine: detection and the checkout attempt happen in the same cycle rather than as two separate steps.",
  },
  {
    q: "Can AmaBot send an Amazon price alert?",
    a: "Yes. When you prefer not to buy automatically, AmaBot can send an Amazon price alert as soon as a monitored listing falls inside the maximum price you set.",
  },
  {
    q: "Can AmaBot work as an Amazon price monitor?",
    a: "Yes. Users can enable optional price monitoring and alerts when they prefer to track a product without using automatic checkout. In that mode AmaBot acts as an Amazon price monitor and leaves the purchase decision to you.",
  },
  {
    q: "How does Amazon price tracking work?",
    a: "Amazon price tracking in AmaBot compares the complete price of the current buyable offer, including shipping, against the maximum you set for that product. Each check reads the live listing rather than a cached figure.",
  },
  {
    q: "Is AmaBot an Amazon price tracker?",
    a: "AmaBot includes Amazon price tracker functionality as a supporting capability of automatic checkout. If price tracking is your main goal, the dedicated Amazon price tracker page covers that use case in more detail.",
  },
  {
    q: "Can AmaBot send an Amazon price drop alert?",
    a: "Yes. An Amazon price drop alert is triggered when a monitored listing moves from above your maximum price to within it, provided the offer is buyable at that moment.",
  },
  {
    q: "Does AmaBot provide Amazon deal alerts?",
    a: "AmaBot provides an Amazon deal alert based on the rules you set rather than on a curated list of promotions. It reports what the live listing shows; it does not judge whether a price is a genuine bargain.",
  },
  {
    q: "How does Amazon product price tracking work?",
    a: "Amazon product price tracking is applied per product. Every listing you add carries its own maximum price, so one product can be set for automatic checkout while another is only being watched.",
  },
  {
    q: "Does automatic checkout guarantee a successful order?",
    a: "No. AmaBot automatically attempts checkout, but inventory can disappear mid-checkout, the price or seller can change, quantity limits can apply and Amazon may request additional verification. A checkout attempt is not a guaranteed order.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners.",
  },
  {
    q: "Why is AmaBot free?",
    a: "AmaBot is a free Amazon auto checkout bot because we may earn affiliate commissions from qualifying purchases made through Amazon, at no additional cost to you. These commissions help us develop new features, release updates, and improve the platform while keeping it free for users.",
  },
  {
    q: "Do you store my personal information?",
    a: "AmaBot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device.",
  },
  {
    q: "Do I need to use proxies?",
    a: "No. AmaBot does not support or require proxies. All Amazon activity is performed using your own internet connection and IP address. AmaBot is designed to operate conservatively and minimize unnecessary requests, using controlled and carefully managed request timing rather than routing your activity through external proxy networks.",
  },
  {
    q: "Can I switch Amazon accounts?",
    a: "No. For security purposes, each Amazon account is linked to a single AmaBot account. Once your Amazon account is connected, you cannot simply switch to a different Amazon account under the same AmaBot user. This helps keep account sessions consistent and provides a safer and more controlled connection between AmaBot and your Amazon account.",
  },
  {
    q: "Does AmaBot know if I have Amazon Prime?",
    a: "Yes. AmaBot can recognize whether your connected Amazon account has an active Prime membership and will automatically work with the pricing, shipping costs, and Prime benefits available to your account. If you are not a Prime member, AmaBot will also account for the prices and shipping costs that apply specifically to your Amazon account.",
  },
  {
    q: "Which payment method and shipping address will AmaBot use?",
    a: "AmaBot uses the default payment method configured in your Amazon account, and if you have an available Amazon Gift Card balance, Amazon may apply that balance first. Orders are sent to the default shipping address configured in your Amazon account, so make sure it is correct before enabling Auto-buy.",
  },
  {
    q: "Can I monitor multiple products?",
    a: "Yes. You can add and monitor multiple Amazon products and configure different buying rules for each one. AmaBot intervals are dynamic, generally taking a few seconds between requests.",
  },
  {
    q: "Is my Amazon account at risk?",
    a: "Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. AmaBot follows safer automation practices but no tool can guarantee that an account will never be affected.",
  },
  {
    q: "Do I need to keep my computer running?",
    a: "Yes. Because AmaBot runs locally, your computer, internet connection, and AmaBot session must remain active while monitoring or automatic purchasing is enabled.",
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
            attempts checkout when the user's price, quantity and availability conditions are met. It
            combines Amazon auto buy and Amazon auto purchase functionality with restock monitoring, while
            users can also enable optional price monitoring and alerts.
          </p>
        }
        secondary={{ href: "/#how-it-works", label: "See How It Works" }}
      />

      <Section id="what-it-does" title="What Is an Amazon Auto Checkout Bot?">
        <p>
          An Amazon auto checkout bot is software that watches a product listing on your behalf and starts
          the checkout process the moment that listing matches the rules you defined. Instead of a person
          sitting on a product page pressing refresh, an Amazon bot performs the checks continuously and
          reacts within the same second it detects a match.
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

      <Section title="How AmaBot Handles Amazon Auto Buy">
        <p>
          Amazon auto buy in AmaBot is a short, explicit setup. You are not training anything or writing
          scripts — you describe an acceptable purchase, and the Amazon bot enforces that description.
        </p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>You add an Amazon product by pasting its listing link.</li>
          <li>You choose a maximum price, which is the complete price including shipping.</li>
          <li>You select the desired quantity and how many orders may be placed in total.</li>
          <li>AmaBot monitors that product's price, offers and availability in a continuous rotation.</li>
          <li>When the selected conditions are met, AmaBot automatically attempts checkout.</li>
          <li>
            The result can still depend on inventory, the seller behind the offer, payment, shipping and
            your Amazon account conditions.
          </li>
        </ol>
        <SubHeading>Maximum price and quantity controls</SubHeading>
        <p>
          The maximum price is the single most important control in Amazon auto buy, because the same
          listing can be served by Amazon at one moment and by a third-party seller at a very different
          price the next. An offer priced above your limit is simply not eligible, and automatic checkout is
          not attempted. Quantity controls work the same way: they cap how many units one order includes and
          how many orders the Amazon bot may place before it stops on its own.
        </p>
        <p>
          AmaBot intervals are dynamic, generally taking a few seconds between requests. Adding more products
          spreads those cycles further apart, which is worth knowing before you load the dashboard with dozens
          of listings. For a closer look at the purchase side of this, see the dedicated{" "}
          <Link to="/amazon-auto-buy" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon Auto Buy
          </Link>{" "}
          guide.
        </p>
      </Section>

      <Section title="Amazon Auto Purchase Based on Your Conditions">
        <p>
          Amazon auto purchase is driven entirely by the settings you selected for that specific product.
          AmaBot does not shop for you, does not substitute similar items and does not buy anything outside
          the conditions you defined. If the maximum price, the quantity or the seller rule does not line up
          with the live offer, no checkout attempt is made.
        </p>
        <CardGrid>
          <InfoCard icon={ShoppingCart} title="Amazon auto purchase">
            The purchase is attempted through your own Amazon session, using the default shipping address and
            payment method already set in your Amazon account.
          </InfoCard>
          <InfoCard icon={Filter} title="Seller conditions">
            Restrict a product to Amazon as the seller, or accept any eligible seller. Seller changes during
            a restock are a common reason an offer stops qualifying.
          </InfoCard>
        </CardGrid>
        <p>
          Product availability is evaluated at the same instant as price and seller. Because all three can
          shift between one check and the next, a checkout attempt reflects the listing as it looked at that
          moment. AmaBot does not store card details, and your Amazon credentials never leave your machine —
          the session runs locally on your computer.
        </p>
        <Callout title="Check your Amazon defaults first">
          AmaBot uses whatever Amazon has set as default, so confirm the correct address and payment method
          are selected in your Amazon account before you start automatic checkout.
        </Callout>
      </Section>

      <Section title="Amazon Restock Alerts and Automatic Checkout">
        <p>
          Restock monitoring exists to feed the checkout engine. When a product is unavailable, AmaBot keeps
          the listing in its rotation and watches for a buyable offer to reappear. The moment availability
          returns, you can receive an Amazon restock alert, and AmaBot can automatically attempt checkout in
          the same cycle when your selected conditions are met.
        </p>
        <p>
          Working as an Amazon restock tracker, AmaBot reports what actually changed on the listing rather
          than guessing at release schedules. Used as an Amazon restock bot, it turns that detection into an
          immediate purchase attempt. Both behaviors come from the same monitoring loop, which is why the
          delay between "back in stock" and "checkout started" stays short.
        </p>
        <p>
          Two realities apply to every restock. A product can sell out again before checkout finishes, and
          prices and sellers frequently change during a restock — the offer that reappears is not always the
          offer that disappeared. Read more about{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alerts
          </Link>{" "}
          if that side of the tool matters most to you, or see the{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokémon restock tracker
          </Link>{" "}
          for a category where restocks are especially unpredictable.
        </p>
      </Section>

      <Section title="Optional Amazon Price Monitoring and Alerts">
        <p>
          Users can also enable optional price monitoring when they want AmaBot to track a product without
          immediately attempting checkout. In this mode, AmaBot can work as an Amazon price monitor and send
          an Amazon price alert when the product matches the selected price conditions, leaving the purchase
          decision entirely to you.
        </p>
        <p>
          This optional alert-only setting is useful while you are still tuning your rules, or for products
          where you want a human to look at the offer before money moves. Amazon price tracking here uses the
          same engine as automatic checkout — the same complete-price comparison, the same per-product
          maximum — only the final step differs. If price watching rather than buying is your main goal, the
          dedicated{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>{" "}
          page covers that workflow in depth.
        </p>
        <p>
          Optional price monitoring is a supporting capability, not the core of the tool. Most users run
          automatic checkout on the products they genuinely want and reserve the Amazon price monitor mode
          for listings they are merely curious about.
        </p>
      </Section>

      <Section title="Amazon Price Drop and Deal Alerts">
        <p>
          Prices on Amazon are not static. The same product page can move between sellers, and each seller
          can quote a different total once shipping is included. Because your maximum price is stored per
          product, Amazon product price tracking is evaluated against your own threshold rather than against
          a generic discount percentage.
        </p>
        <p>
          An Amazon price drop alert fires when a monitored listing crosses from above your maximum to within
          it. That is a useful signal, but it is worth being precise about what it means: a detected change
          is not automatically a genuine discount. A lower number can come from a different seller, a
          different condition or a temporary offer, and availability may change at the very same moment the
          price does.
        </p>
        <p>
          The same logic produces an Amazon deal alert. AmaBot reports what the live listing shows and leaves
          interpretation to you; Amazon price tracking inside the app is a live comparison rather than a
          historical price chart.
        </p>
      </Section>

      <Section title="Automatic Checkout vs Alert-Only Monitoring">
        <p>
          Both modes run on the same monitoring engine. They differ only in what happens the moment a match
          is found.
        </p>
        <CompareTable
          caption="Comparison of AmaBot automatic checkout and optional alert-only monitoring"
          head={["Feature", "Automatic checkout", "Alert-only monitoring"]}
          rows={[
            ["Product monitoring", "Yes, continuous", "Yes, continuous"],
            ["Price monitoring", "Yes, against your maximum", "Yes, optional"],
            ["Restock detection", "Yes", "Yes"],
            ["User notification", "Yes", "Yes"],
            ["Checkout attempt", "AmaBot attempts the purchase when the selected conditions are met", "None — AmaBot notifies you only"],
            ["Maximum price controls", "Yes, per product", "Yes, per product"],
            ["Quantity controls", "Yes, per product", "Not applicable"],
            ["User action required", "None during checkout", "You complete the purchase manually"],
            ["Successful order guaranteed", "No", "No"],
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
          may occasionally request verification or restrict certain activity. AmaBot follows safer automation
          practices, but no tool can guarantee that an account will never be affected. Once an order is
          placed it lives entirely inside your Amazon account, and cancellations, returns and refunds are
          handled through Amazon under Amazon's policies.
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
