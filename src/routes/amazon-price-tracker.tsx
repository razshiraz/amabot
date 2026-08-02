import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Tag, Filter, Bell, ShoppingCart, LineChart, ListChecks, ShieldQuestion,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Free Amazon Price Tracker With Target Price Alerts | AmaBot";
const DESCRIPTION =
  "Track Amazon prices for free. Set a maximum price per product, filter sellers, get alerts when an offer matches, or let AmaBot buy automatically.";

const faqs: Faq[] = [
  {
    q: "Is AmaBot a free Amazon price tracker?",
    a: "Yes. AmaBot is free to download and use on Windows and macOS, and price tracking is part of the core product rather than a paid upgrade.",
  },
  {
    q: "How do I track an Amazon product price?",
    a: "Paste the Amazon product link into AmaBot, set the maximum price you are willing to pay, choose your seller preference, and start monitoring. AmaBot then checks that listing in rotation and reports the prices it finds.",
  },
  {
    q: "Can I set a target price on Amazon?",
    a: "Yes. Each product you add has its own maximum price. An offer is only treated as eligible when the complete price, including shipping, stays within that limit.",
  },
  {
    q: "Does AmaBot include shipping in the price?",
    a: "Yes. AmaBot evaluates the complete price including shipping against your maximum, so a cheap item with expensive delivery does not slip past your limit.",
  },
  {
    q: "Can I track prices from specific sellers only?",
    a: "Yes. You can restrict monitoring to offers sold by Amazon, or allow any eligible seller when you care more about getting the item than about who ships it.",
  },
  {
    q: "Does AmaBot show Amazon price history?",
    a: "AmaBot focuses on the prices it observes live while monitoring is running, shown in the activity dashboard. It is a real-time tracker rather than a historical price-chart service.",
  },
  {
    q: "Will AmaBot buy the product when the price drops?",
    a: "Only if you enable Auto-buy for that product. In Monitor Only mode AmaBot alerts you and never places an order.",
  },
  {
    q: "How often does AmaBot check prices?",
    a: "Each product receives roughly five seconds of attention per rotation, so a single product is revisited about every five seconds and the interval grows as you add more products.",
  },
  {
    q: "Do I need to keep my computer on?",
    a: "Yes. AmaBot runs locally on Windows or macOS, so your computer, your internet connection and the AmaBot session must stay active while tracking is enabled.",
  },
  {
    q: "Does a price match guarantee a successful purchase?",
    a: "No. Prices, offers and availability can change during checkout, and Amazon restrictions or competition from other buyers can prevent an order from completing.",
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
        h1={<>Free <span className="text-gradient-gold">Amazon Price Tracker</span> With Target Price Rules</>}
        intro={
          <p>
            AmaBot tracks the Amazon products you choose, compares every offer against the maximum price you
            set, and tells you the moment something matches. When you want more than an alert, the same rules
            can trigger an automatic purchase instead.
          </p>
        }
        secondary={{ to: "/what-is-amabot", label: "What is AmaBot?" }}
      />

      <Section title="Why Price Tracking on Amazon Is Hard by Hand">
        <p>
          An Amazon product page looks like a single price, but it rarely behaves like one. The offer shown in
          the buy box can switch between Amazon and third-party sellers, shipping costs can differ per seller,
          and a listing that was fairly priced in the morning can be resold at a markup by the afternoon. For
          high-demand items the interesting price often exists for minutes.
        </p>
        <p>
          Refreshing the page manually is not a plan. You either miss the window because you were not looking,
          or you check so often that tracking a handful of products becomes a part-time job. A price tracker
          exists to remove exactly that problem: you describe once what a good deal looks like, and something
          else does the watching.
        </p>
      </Section>

      <Section title="How AmaBot Tracks Amazon Prices">
        <p>
          AmaBot is a desktop application for Windows and macOS. You add products by pasting their Amazon
          links, and each product carries its own set of rules. When monitoring is running, AmaBot works
          through your list in rotation and reports what it observes in a live activity dashboard.
        </p>
        <CardGrid>
          <InfoCard icon={Tag} title="Maximum price per product">
            Set the highest price you would accept for each listing. Anything above it is simply not treated
            as a match.
          </InfoCard>
          <InfoCard icon={Filter} title="Complete price including shipping">
            The evaluation uses the full cost of the offer, so delivery charges cannot push a "matching" deal
            over your real budget.
          </InfoCard>
          <InfoCard icon={ListChecks} title="Seller preference">
            Restrict tracking to Amazon-sold offers, or open it up to any eligible seller when availability
            matters more than the source.
          </InfoCard>
          <InfoCard icon={LineChart} title="Live activity dashboard">
            Watch prices, offers, eligibility decisions and check counts as they happen instead of trusting a
            silent background process.
          </InfoCard>
          <InfoCard icon={Bell} title="Alerts when a price matches">
            In Monitor Only mode AmaBot notifies you and leaves the purchase decision entirely to you.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Optional automatic purchase">
            With Auto-buy enabled, a matching price can trigger a checkout attempt immediately, faster than a
            manual reaction.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Setting a Target Price That Actually Works">
        <p>
          A target price is a decision, not a wish. The number you enter tells AmaBot where the line between
          "worth buying" and "not worth buying" sits for that specific product, and it is the only thing
          standing between you and an unwanted purchase during a chaotic restock.
        </p>
        <SubHeading>Price it against the total, not the sticker</SubHeading>
        <p>
          Because AmaBot compares the complete price including shipping, your maximum should reflect what you
          are prepared to pay in total. If a product is worth 45 to you delivered, set 45 — not the item price
          you saw once without delivery.
        </p>
        <SubHeading>Decide how strict you want to be</SubHeading>
        <p>
          A tight maximum protects you from resellers but may mean fewer matches. A looser maximum increases
          your chances of getting the item at the cost of paying more. Neither is wrong; what matters is that
          the number is deliberate.
        </p>
        <SubHeading>Set quantity and order limits too</SubHeading>
        <p>
          Price is only half the rule. Quantity defines how many units a matching order should include, and
          the order target defines how many orders AmaBot may place before it stops for that product. Together
          they cap the worst case of an unattended session.
        </p>
        <Callout title="Review your rules before enabling Auto-buy">
          Auto-buy acts on the rules exactly as written. Confirm the maximum price, the quantity, the order
          target and the seller preference for each product before you leave it running unattended.
        </Callout>
      </Section>

      <Section title="Monitor Only vs Auto-Buy">
        <p>
          Both modes track prices identically. The difference is what happens at the moment of a match.
        </p>
        <CompareTable
          caption="Comparison of Monitor Only and Auto-buy modes in AmaBot"
          head={["", "Monitor Only", "Auto-buy"]}
          rows={[
            ["Price tracking", "Yes", "Yes"],
            ["Target price rules", "Yes", "Yes"],
            ["Seller filtering", "Yes", "Yes"],
            ["Alerts on a match", "Yes", "Yes"],
            ["Places an order", "Never", "Attempts checkout automatically"],
            ["Who decides", "You", "Your saved rules"],
            ["Best for", "Watching prices and deciding yourself", "Fast-moving drops you cannot sit and watch"],
          ]}
        />
        <p>
          Many people start in Monitor Only to see how their products behave in practice, then switch selected
          items to Auto-buy once the rules feel right. You can mix both modes across different products at the
          same time.
        </p>
      </Section>

      <Section title="How Often Prices Are Checked">
        <p>
          AmaBot checks products in rotation, giving each product roughly five seconds per cycle. One product
          is therefore revisited about every five seconds, two products about every ten seconds, and a list of
          twenty products means a longer gap between visits to any single item.
        </p>
        <p>
          The practical advice that follows is simple: keep the list focused. Tracking the five products you
          genuinely intend to buy will react faster than tracking fifty products you are curious about.
        </p>
      </Section>

      <Section title="What Happens When a Price Matches">
        <p>
          In Monitor Only mode, AmaBot alerts you and stops there. You open Amazon and complete the purchase
          yourself with the full context in front of you.
        </p>
        <p>
          In Auto-buy mode, AmaBot attempts checkout through your own Amazon session, using the default
          shipping address and default payment method configured in your Amazon account. If an Amazon Gift
          Card balance is available, Amazon may apply it before charging your default method. AmaBot does not
          store your Amazon credentials or payment information on its servers; the Amazon session runs locally
          on your computer.
        </p>
        <Callout title="A match is not a guaranteed order">
          Inventory can disappear mid-checkout, prices can change, quantity limits can apply, payment can be
          declined, and Amazon may request verification. AmaBot improves your chances but cannot promise a
          completed purchase.
        </Callout>
      </Section>

      <Section title="Price Tracking and Restocks Are the Same Problem">
        <p>
          For products that are permanently in stock, a price tracker is about waiting for a discount. For
          products that sell out, price and availability are inseparable: the price only matters when there is
          a buyable offer at all, and the offer only matters when the price is sane.
        </p>
        <p>
          AmaBot treats both as one rule set, which is why the same configuration covers a slow price drop and
          a sudden restock. If availability is your main concern, read more about{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alerts
          </Link>{" "}
          or the{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokémon restock tracker
          </Link>{" "}
          use case.
        </p>
      </Section>

      <Section title="Requirements and Limitations">
        <p>
          AmaBot runs on Windows and macOS and needs your computer, your internet connection and the app
          session to stay active while tracking. Updates install automatically in the background.
        </p>
        <p>
          The tracker reports what it observes live rather than reconstructing historical price charts, and no
          automated tool can guarantee a purchase. There is also a general risk attached to any automated
          interaction with Amazon: the platform may occasionally request verification or restrict certain
          activity.
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
