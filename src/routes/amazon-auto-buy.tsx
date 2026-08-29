import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingCart, Gauge, SlidersHorizontal, PackageSearch, Bell,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable, FaqList, CtaBlock,
  jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Amazon Auto Buy - Automatic Amazon Purchasing | AmaBot";
const DESCRIPTION =
  "AmaBot monitors Amazon products and can attempt an automatic purchase when your selected price, quantity, and availability conditions are met. Learn how Amazon auto buy works.";

const faqs: Faq[] = [
  {
    q: "What does Amazon auto buy mean?",
    a: "Amazon auto buy means software places the order attempt instead of you clicking Buy Now. With AmaBot, an automatic Amazon purchase is only attempted when the live offer satisfies the maximum price, quantity and availability conditions you saved for that specific product.",
  },
  {
    q: "How is Amazon auto buying different from an alert?",
    a: "An alert tells you something changed and leaves the purchase to you. Amazon auto buying continues into checkout on its own, in the same monitoring cycle that detected the match, so no human step sits between detection and the order attempt.",
  },
  {
    q: "How fast does automated Amazon purchasing react?",
    a: "AmaBot checks each individual product every few seconds. When a qualifying offer is detected and Auto-buy is enabled, AmaBot can begin the purchasing process automatically. Actual detection and checkout timing may still vary because of your internet connection and Amazon response times.",
  },
  {
    q: "Does Amazon auto buy guarantee that the order goes through?",
    a: "No. AmaBot attempts checkout; it cannot guarantee a successful purchase. Inventory can disappear mid-checkout, the price or seller can change, quantity limits can apply, a payment method can be declined and Amazon may request additional verification.",
  },
  {
    q: "Can AmaBot create stock that does not exist?",
    a: "No. AmaBot cannot create inventory or stock. It can only act on offers Amazon actually publishes, which is why an unavailable product continues to be checked every few seconds until a buyable offer appears.",
  },
  {
    q: "Which Amazon account and payment details are used?",
    a: "Automatic Amazon purchasing uses your existing Amazon session and the payment and shipping settings configured in your Amazon account. Your credentials are not stored on AmaBot servers.",
  },
  {
    q: "Can I set a maximum price for Amazon auto purchase?",
    a: "Yes. Every product carries its own maximum price, compared against the complete price of the current buyable offer including shipping. An offer above your ceiling is not eligible and no purchase attempt is made.",
  },
  {
    q: "Can I limit how much AmaBot buys?",
    a: "Yes. Quantity settings define how many units belong in one order and how many orders may be placed in total, so an unattended session has a predictable worst case before it stops on its own.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners.",
  },
];

export const Route = createFileRoute("/amazon-auto-buy")({
  head: () => ({
    ...headMeta({ slug: "amazon-auto-buy", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("amazon-auto-buy", DESCRIPTION, faqs, "Amazon Auto Buy").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: AmazonAutoBuy,
});

function AmazonAutoBuy() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Amazon auto buy"
        breadcrumb="Amazon Auto Buy"
        h1={<>Amazon Auto Buy with <span className="text-gradient-gold">AmaBot</span></>}
        intro={
          <p>
            Amazon auto buy is the point where watching a listing turns into acting on it. AmaBot keeps the
            products you choose under observation and, when the live offer satisfies the price, quantity and
            availability conditions you saved, it attempts the purchase for you. Everything below describes
            how that automatic Amazon purchasing decision is made — and what it deliberately will not do.
          </p>
        }
        secondary={{ to: "/what-is-amabot", label: "What Is AmaBot?" }}
      />

      <Section id="what-is-amazon-auto-buy" title="What Amazon Auto Buy Actually Means">
        <p>
          The phrase describes a simple exchange of responsibility. Normally a person decides that an offer is
          acceptable and then clicks through checkout. With Amazon auto buy, that judgement is written down in
          advance as a set of conditions, and the software automatically attempts the purchase when those
          predefined conditions are met. Nothing is inferred and nothing is guessed: an Amazon auto purchase
          happens only where your saved description of an acceptable offer and the live listing agree.
        </p>
        <p>
          That distinction matters because automatic Amazon purchasing is often described as if it were
          intelligence. It is not. AmaBot has no opinion on whether a product is worth buying, whether a price
          is fair, or whether a seller is reputable. It compares the offer in front of it against the numbers
          you entered, and it either acts or waits.
        </p>
        <CardGrid>
          <InfoCard icon={PackageSearch} title="Observation">
            Each product you add is checked every few seconds and is re-read from the live listing rather than
            from a cached snapshot.
          </InfoCard>
          <InfoCard icon={SlidersHorizontal} title="Conditions">
            Maximum price, quantity, order target and seller preference are stored per product and define
            eligibility.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Action">
            When every condition agrees with the live offer, Amazon auto buying continues straight into a
            checkout attempt.
          </InfoCard>
          <InfoCard icon={Gauge} title="Restraint">
            No agreement, no attempt. A near-miss on price or quantity leaves the product under continuous
            monitoring until a qualifying offer is detected.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="How AmaBot Monitors Amazon Products">
        <p>
          Monitoring is the machinery underneath Amazon auto buy. Each listing you add is requested again and
          again while the app runs, and every pass reads three things together: the price of the current
          buyable offer, whether that offer can actually be ordered right now, and who is selling it. Reading
          them together is deliberate — a price that looks right on a listing with no purchasable offer is
          not a match, and neither is availability at a price you rejected in advance.
        </p>
        <p>
          AmaBot monitors each individual product every few seconds while the app is running. Each monitored
          product continues to be checked every few seconds even when additional products are added. Monitoring
          frequency for an individual product does not become slower based on the total number of products
          being monitored.
        </p>
        <SubHeading>Maximum price settings</SubHeading>
        <p>
          The maximum price you store for a product is a ceiling on the complete price, shipping included, of
          whatever offer happens to hold the buy box at that moment. This is the control that keeps automated
          Amazon purchasing honest during a spike: when a listing returns through a marked-up third-party
          seller, the offer simply fails the comparison and nothing is bought. Setting a ceiling you would
          genuinely accept is more useful than setting an optimistic one you will later have to raise. If you
          would rather watch a number move before committing, the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price monitoring
          </Link>{" "}
          workflow covers that path instead.
        </p>
        <SubHeading>Quantity settings</SubHeading>
        <p>
          Quantity works on two levels. The first is how many units a single order should contain; the second
          is how many orders AmaBot may place for that product before it stops on its own. Together they give
          an unattended session a predictable worst case, which is the practical reason to configure them
          carefully rather than leaving them at whatever felt convenient during setup.
        </p>
        <SubHeading>Availability conditions</SubHeading>
        <p>
          Availability is evaluated as a yes-or-no fact about the current offer: is there something here that
          can be ordered? A page that shows a price while every seller is out of stock does not qualify.
          Because availability on high-demand items reappears without warning, this check is also what links
          Amazon auto buying to{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock monitoring
          </Link>{" "}
          — the same observation that would raise an alert is the one that opens a purchase attempt.
        </p>
      </Section>

      <Section title="How Automatic Amazon Purchasing Works Step by Step">
        <p>
          Once the conditions agree, the sequence is short and takes place entirely inside your own Amazon
          session.
        </p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>A monitoring pass reads the live listing and finds a buyable offer.</li>
          <li>The complete price, including shipping, is compared with the maximum you saved.</li>
          <li>The seller is checked against your seller preference for that product.</li>
          <li>Quantity and remaining order target are checked against your limits.</li>
          <li>If everything agrees, AmaBot attempts checkout through your existing Amazon session.</li>
          <li>After an order attempt, AmaBot updates the remaining order target and continues or stops according to your settings.</li>
        </ol>
        <p>
          At no point does AmaBot substitute a similar product, relax a rule that nearly matched, or complete
          a purchase you did not describe. When a condition fails, the attempt is not made and the product
          simply stays under observation.
        </p>
        <Callout title="Your Amazon account settings decide the details">
          Automatic Amazon purchasing uses your existing Amazon session and the payment and shipping settings
          configured in your Amazon account. Confirm those defaults are the ones you want before enabling auto
          buy.
        </Callout>
      </Section>

      <Section title="Monitoring vs Amazon Auto Buy">
        <p>
          These two modes are often confused, but they describe different stopping points along the same
          process.
        </p>
        <CompareTable
          caption="How monitoring and Amazon auto buy differ"
          head={["", "Monitoring", "Amazon Auto Buy"]}
          rows={[
            ["Reads the live listing", "Yes", "Yes"],
            ["Applies saved conditions", "Yes", "Yes"],
            ["Price monitoring", "Yes", "Yes"],
            ["Restock detection", "Yes", "Yes"],
            ["Automatic checkout", "No", "Yes"],
            ["Manual purchase required", "Yes", "No"],
            ["Maximum price protection", "Yes", "Yes"],
            ["Seller filtering", "Yes", "Yes"],
            ["Quantity controls", "No", "Yes"],
          ]}
        />
        <p>
          Monitoring is observation. Amazon auto buying is observation that continues into an order attempt
          without waiting for you. The engine underneath is identical in both cases; only the final step
          changes, which is why the same product can be moved between them without reconfiguring anything
          else. For a wider view of the application itself, see{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            how AmaBot works
          </Link>
          .
        </p>
      </Section>

      <Section title="What Amazon Auto Buy Cannot Do">
        <p>
          Being useful about automatic purchasing means being blunt about its ceiling. A checkout attempt is
          the beginning of a transaction, not proof of one.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>AmaBot cannot guarantee a successful purchase, only an attempt on a matching offer.</li>
          <li>AmaBot cannot create inventory or stock; it can only act on offers Amazon publishes.</li>
          <li>Availability can end between detection and the completion of checkout.</li>
          <li>Prices and sellers can change during the same window, invalidating a match that was real a second earlier.</li>
          <li>Your connection quality and Amazon's own response times affect every cycle.</li>
          <li>Amazon may apply quantity limits, request additional verification, or cancel an order after it was placed.</li>
          <li>Payment or shipping eligibility problems inside your Amazon account will stop an otherwise valid attempt.</li>
        </ul>
        <p>
          There is also the general reality that any automated interaction with Amazon may prompt the platform
          to request verification or restrict certain activity. AmaBot is built to behave conservatively, but
          no tool can promise that an account is never affected. Collectors chasing the most competitive
          category of all can read how the same limits play out for{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            sealed Pokémon products
          </Link>
          .
        </p>
      </Section>

      <Section title="When Amazon Auto Buying Is Worth Enabling">
        <p>
          Automatic purchasing earns its place where the buyable window is shorter than a human reaction, and
          it is mostly wasted where it is not. A product that sits in stock for weeks does not need it; a
          product whose offer survives for seconds is exactly the case it was written for.
        </p>
        <CardGrid>
          <InfoCard icon={Bell} title="Unannounced returns">
            Listings that come back to stock without any schedule, where noticing at all is the hard part.
          </InfoCard>
          <InfoCard icon={Gauge} title="Short buyable windows">
            High-demand releases where the offer disappears faster than a page can be loaded manually.
          </InfoCard>
          <InfoCard icon={SlidersHorizontal} title="Volatile pricing">
            Products where sellers rotate through the buy box and a stored ceiling prevents overpaying.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Unattended hours">
            Drops that land while you are asleep or at work, where an alert would arrive too late to use.
          </InfoCard>
        </CardGrid>
      </Section>

      <FaqList items={faqs} heading="Amazon Auto Buy FAQ" />

      <CtaBlock
        title="Set your conditions, let AmaBot attempt the purchase"
        text="Add a product, choose a maximum price and quantity, and Amazon auto buy takes over from there. Free on Windows and macOS."
      />
    </MarketingLayout>
  );
}
