import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Tag, Filter, Bell, ShoppingCart, LineChart, ListChecks, ShieldQuestion,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Amazon Price Tracker and Price Drop Alerts | AmaBot";
const DESCRIPTION =
  "Use the AmaBot Amazon price tracker to monitor product prices, set a target price and receive an Amazon price alert when selected conditions are met.";

const faqs: Faq[] = [
  {
    q: "What is an Amazon price tracker?",
    a: "An Amazon price tracker is a tool that checks the current price of selected Amazon listings for you instead of requiring manual refreshing. AmaBot is a free Amazon price tracker for Windows and macOS: you add product links, set a maximum price, and it reports the offers it observes while monitoring runs.",
  },
  {
    q: "Can AmaBot send an Amazon price alert?",
    a: "Yes. When an offer matches the rules you saved for a product, AmaBot raises an Amazon price alert in the activity dashboard so you can complete the purchase yourself on Amazon.",
  },
  {
    q: "Can I use AmaBot as an Amazon price monitor?",
    a: "Yes. Used as an Amazon price monitor, AmaBot checks the current listing price of each product in rotation while the app is running, so you do not have to keep reloading Amazon product pages yourself.",
  },
  {
    q: "How does Amazon price tracking work?",
    a: "Amazon price tracking in AmaBot works per product: you paste the Amazon link, set a maximum price and a seller preference, and the app compares the complete price including shipping against that limit each time it checks the listing.",
  },
  {
    q: "Can AmaBot send an Amazon price drop alert?",
    a: "Yes. If the listed price falls to or below the maximum price you set, that counts as a match and AmaBot raises an Amazon price drop alert. AmaBot reports the price it observes and does not claim that every change is a genuine discount.",
  },
  {
    q: "Does AmaBot provide Amazon deal alerts?",
    a: "AmaBot provides an Amazon deal alert only for the products you added and only against your own target price. It does not publish a general feed of deals for products you are not tracking.",
  },
  {
    q: "How does Amazon product price tracking work with different sellers?",
    a: "Amazon product price tracking evaluates the buyable offer on the listing, which may come from Amazon or from a third-party seller. You can restrict monitoring to Amazon-sold offers or allow any eligible seller, and your maximum price applies either way.",
  },
  {
    q: "Can AmaBot automatically purchase a product after a price change?",
    a: "Only if you enable Auto-buy for that product. In Monitor Only mode AmaBot alerts you and never places an order; with Auto-buy it attempts checkout through your own Amazon session when an eligible offer matches.",
  },
  {
    q: "Does AmaBot guarantee a successful order?",
    a: "No. Inventory can sell out during checkout, prices can change, quantity limits can apply, payment can be declined and Amazon may request verification. AmaBot improves your chances but cannot guarantee a completed order.",
  },
  {
    q: "Does AmaBot provide historical price charts?",
    a: "No. AmaBot shows the prices it observes live while monitoring is running. It is a real-time Amazon price tracker rather than a historical price-chart service.",
  },
];

export const Route = createFileRoute("/amazon-price-tracker")({
  head: () => ({
    ...headMeta({ slug: "amazon-price-tracker", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("amazon-price-tracker", DESCRIPTION, faqs, "Amazon Price Tracker").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: PriceTracker,
});

function PriceTracker() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Price tracking"
        breadcrumb="Amazon Price Tracker"
        h1={<><span className="text-gradient-gold">Amazon Price Tracker</span> and Instant Price Alerts</>}
        intro={
          <p>
            AmaBot is an Amazon price tracker that monitors the product listings you select and checks whether
            the current price matches the conditions you set. Set a maximum price per product, receive an
            Amazon price alert when an eligible offer appears, or allow AmaBot to attempt an automatic purchase
            when your selected conditions are met. It is free on Windows and macOS.
          </p>
        }
        secondary={{ href: "/#how-it-works", label: "See How It Works" }}
      />

      <Section title="Why Tracking Amazon Prices by Hand Rarely Works">
        <p>
          An Amazon product page looks like a single price, but it rarely behaves like one. The buy box can
          switch between Amazon and third-party sellers, shipping costs differ per seller, and a listing that
          was fairly priced in the morning can be resold at a markup by the afternoon. For high-demand items
          the interesting price sometimes exists for only a few minutes.
        </p>
        <p>
          Refreshing pages manually is not a plan. You either miss the window because you were not looking, or
          you check so often that following a handful of products becomes a part-time job. That is the gap a
          tracker fills: you describe once what an acceptable purchase looks like, and software does the
          watching.
        </p>
      </Section>

      <Section title="How the AmaBot Amazon Price Tracker Works">
        <p>
          The AmaBot Amazon price tracker is a desktop application for Windows and macOS. You add products by
          pasting their Amazon links, and each product carries its own rules. Once product monitoring is
          running, AmaBot works through your list in rotation and reports every observation in a live activity
          dashboard.
        </p>
        <p>
          Amazon price tracking here is rule-based rather than open-ended. Your target price defines what you
          consider acceptable, the maximum price is the hard ceiling that an offer may not exceed, and the
          seller preference decides whose offers count. Product monitoring continues quietly until one of your
          products satisfies all of those conditions at the same time.
        </p>
        <CardGrid>
          <InfoCard icon={Tag} title="Target price and maximum price">
            Set the highest total you would accept for each listing. Anything above that maximum price is not
            treated as a match.
          </InfoCard>
          <InfoCard icon={Filter} title="Complete price including shipping">
            Evaluation uses the full cost of the offer, so delivery charges cannot push a matching deal over
            your real budget.
          </InfoCard>
          <InfoCard icon={ListChecks} title="Seller preference">
            Restrict tracking to Amazon-sold offers, or allow any eligible seller when availability matters
            more than the source.
          </InfoCard>
          <InfoCard icon={LineChart} title="Live activity dashboard">
            Watch prices, offers and eligibility decisions as they happen instead of trusting a silent
            background process.
          </InfoCard>
          <InfoCard icon={Bell} title="Alerts when conditions are met">
            In Monitor Only mode AmaBot notifies you and leaves the purchase decision entirely to you.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Optional automatic purchase">
            With Auto-buy enabled, a matching offer can trigger a checkout attempt immediately.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Set an Amazon Price Alert for Any Product">
        <p>
          Creating an Amazon price alert takes one product link and one number. Paste the Amazon URL, enter the
          target price you are willing to pay in total, and choose Monitor Only so that AmaBot alerts you
          rather than buying. From that point the product sits in your list and the alert waits for a
          qualifying offer.
        </p>
        <SubHeading>Price against the total, not the sticker</SubHeading>
        <p>
          Because the complete price including shipping is compared with your maximum, the number you enter
          should reflect what you are prepared to pay delivered. If an item is worth 45 to you at your door,
          set 45 rather than the item-only price you saw once.
        </p>
        <SubHeading>Choose your alert mode per product</SubHeading>
        <p>
          Every product runs in either Monitor Only or Auto-buy, and you can mix both across your list. An
          Amazon price alert in Monitor Only never results in an order by itself; it hands the decision back
          to you with the offer details in front of you.
        </p>
      </Section>

      <Section title="Use AmaBot as an Amazon Price Monitor">
        <p>
          As an Amazon price monitor, AmaBot keeps checking the current listing price of each product for as
          long as the session stays open, which removes the constant manual refreshing that makes watching a
          drop exhausting. Products are checked in rotation, so a short focused list is revisited far more
          often than a long wish list.
        </p>
        <p>
          The monitor reports what it actually sees: the current price, whether a buyable offer exists and
          whether that offer satisfies your rules. Nothing is inferred or predicted, and no historical chart is
          reconstructed — an Amazon price monitor of this kind answers the question "is it acceptable right
          now?" rather than "what was it last spring?"
        </p>
      </Section>

      <Section title="Get an Amazon Price Drop Alert">
        <p>
          When the listed price of a monitored product falls to or below your maximum, AmaBot treats it as a
          match and raises an Amazon price drop alert. The same mechanism produces an Amazon deal alert for
          products you are actively tracking, because a "deal" here is defined by your own ceiling rather than
          by a marketing label.
        </p>
        <p>
          It is worth being precise about what a drop means. The listed price can change for many reasons: a
          different seller takes the buy box, a seller adjusts pricing, shipping costs differ, or a temporary
          promotion applies. A lower observed price is not automatically a genuine discount against long-term
          value, and AmaBot does not claim otherwise. The Amazon price drop alert simply tells you that the
          current offer satisfies the conditions you defined.
        </p>
        <Callout title="Your ceiling defines the deal">
          Because an Amazon deal alert is triggered by your maximum price, a realistic ceiling produces useful
          alerts while an optimistic one may stay silent for a long time.
        </Callout>
      </Section>

      <Section title="Amazon Product Price Tracking and Seller Changes">
        <p>
          Amazon product price tracking has to account for who is selling. The same listing can be fulfilled by
          Amazon at one moment and by a third-party seller the next, and those sellers price independently.
          When a sought-after product returns, it frequently returns through a marketplace seller at a higher
          price than the Amazon offer that sold out.
        </p>
        <p>
          Amazon price tracking in AmaBot handles this in two ways. First, the seller preference lets you
          restrict monitoring to offers sold by Amazon, or open it to any eligible seller when securing the
          item matters more. Second, maximum-price protection applies regardless of who the seller is, so a
          seller change cannot quietly raise what you pay.
        </p>
        <p>
          Availability is evaluated together with price. A listing without a buyable offer is never a match,
          no matter how attractive the number on the page looks, which is why the same rules cover both a
          gradual price decline and a sudden return to stock. If availability is your main concern, the{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alert
          </Link>{" "}
          page covers that scenario in detail, and collectors can read how the{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokemon restock tracker
          </Link>{" "}
          applies the same rules to sealed card products.
        </p>
      </Section>

      <Section title="Price Alerts vs Optional Automatic Purchasing">
        <p>
          Both modes track prices identically. The difference is only what happens at the moment your
          conditions are met.
        </p>
        <CompareTable
          caption="Amazon price alerts compared with optional automatic purchasing"
          head={["", "Price alert (Monitor Only)", "Auto-buy"]}
          rows={[
            ["Amazon price tracking", "Yes", "Yes"],
            ["Target and maximum price", "Yes", "Yes"],
            ["Seller filtering", "Yes", "Yes"],
            ["Amazon price alert on a match", "Yes", "Yes"],
            ["Places an order", "Never", "Attempts checkout automatically"],
            ["Who decides", "You", "Your saved rules"],
            ["Reaction speed", "Depends on you", "Immediate on match"],
            ["Best for", "Watching prices and deciding yourself", "Fast drops you cannot sit and watch"],
          ]}
        />
        <p>
          Many people start in Monitor Only to see how their products behave in practice, then move selected
          items to Auto-buy once the rules feel right. In Auto-buy mode AmaBot attempts checkout through your
          own Amazon session, using the default shipping address and default payment method configured in your
          Amazon account; an available Amazon Gift Card balance may be applied by Amazon first. Your
          credentials and payment details are not stored on AmaBot servers, because the Amazon session runs
          locally on your computer.
        </p>
        <Callout title="A match is not a guaranteed order">
          Inventory can disappear mid-checkout, prices can change, quantity limits can apply, payment can be
          declined, and Amazon may request verification. Any automated interaction with Amazon also carries a
          general risk that the platform requests verification or restricts certain activity.
        </Callout>
      </Section>

      <Section title="Requirements and Limitations">
        <p>
          AmaBot runs locally on Windows and macOS, so your computer, your internet connection and the app
          session must stay active while tracking is enabled. Product links and buying rules may be saved
          locally on your device.
        </p>
        <p>
          The tracker reports what it observes live rather than reconstructing historical price charts, and no
          automated tool can promise an outcome on a competitive listing. For a full overview of the app, start
          with{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            What is AmaBot?
          </Link>
        </p>
      </Section>

      <FaqList items={faqs} heading="Amazon Price Tracker FAQ" />

      <CtaBlock
        title="Start tracking Amazon prices for free"
        text="Add your products, set a maximum price per item and choose alerts or automatic purchasing. Windows and macOS, no credit card required."
      />
      <div className="pb-4 text-center text-xs text-muted-foreground">
        <ShieldQuestion aria-hidden className="mx-auto mb-2 h-4 w-4" />
        AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially
        connected to Amazon.
      </div>
    </MarketingLayout>
  );
}
