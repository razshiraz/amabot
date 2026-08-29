import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Boxes, Bell, Tag, Timer } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Pokemon Restock Tracker and Restock Alerts | AmaBot";
const DESCRIPTION =
  "Use the AmaBot Pokemon restock tracker to monitor Pokémon ETBs, booster boxes, booster bundles and collection boxes with Pokemon restock alerts for Amazon.";

const faqs: Faq[] = [
  {
    q: "What is a Pokemon restock tracker?",
    a: "A Pokemon restock tracker checks selected Amazon listings for sealed Pokémon products and reports when a buyable offer appears. AmaBot works as a Pokemon restock tracker on Windows and macOS using the price, quantity and seller rules you save per product.",
  },
  {
    q: "How can I receive Pokemon restock alerts?",
    a: "Add the Amazon links of the products you want, set a maximum price and quantity for each, and run monitoring in Monitor Only mode. AmaBot then raises Pokemon restock alerts when an eligible offer matches your rules.",
  },
  {
    q: "Can AmaBot monitor Pokémon ETBs?",
    a: "Yes. Pokémon Elite Trainer Boxes are one of the most commonly tracked items, and any Pokémon ETB with an Amazon listing you can link to can be monitored.",
  },
  {
    q: "Can AmaBot track Pokémon booster boxes and booster bundles?",
    a: "Yes. Pokémon booster boxes, booster bundles, tins, collection boxes and other sealed items can be added like any other Amazon product, with their own maximum price and quantity settings.",
  },
  {
    q: "Can I set a maximum price for Pokémon products?",
    a: "Yes. Each product has its own maximum price, and the complete price including shipping must stay within it, so marked-up restocks are skipped instead of triggering a purchase.",
  },
  {
    q: "Can AmaBot automatically buy Pokémon products?",
    a: "Yes, if you enable Auto-buy for that product. AmaBot then attempts checkout through your own Amazon session when an eligible offer matches your price, quantity and seller rules.",
  },
  {
    q: "Can AmaBot monitor third-party Amazon sellers?",
    a: "Yes. You can restrict monitoring to offers sold by Amazon or allow any eligible seller, including third-party sellers, while your maximum price still applies.",
  },
  {
    q: "Does AmaBot guarantee products at MSRP?",
    a: "No. AmaBot cannot create stock or control pricing. It can only skip offers above the ceiling you set, so availability at or near MSRP is never guaranteed.",
  },
  {
    q: "Does every Pokémon restock result in a successful order?",
    a: "No. Sealed Pokémon products are highly competitive: inventory can sell out mid-checkout, prices and sellers can change, quantity limits can apply and Amazon may request verification. Pokemon restock alerts improve your chances without guaranteeing checkout.",
  },
  {
    q: "How many Pokémon products can I monitor?",
    a: "Yes. You can add and monitor multiple Amazon products and configure different buying rules for each one. AmaBot monitors each individual product every few seconds, even when multiple products are being monitored at the same time.",
  },
  {
    q: "Is my Amazon account at risk?",
    a: "Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. AmaBot follows safer automation practices but no tool can guarantee that an account will never be affected.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially connected to Amazon.",
  },
];


export const Route = createFileRoute("/pokemon-restock-alerts")({
  head: () => ({
    ...headMeta({ slug: "pokemon-restock-alerts", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("pokemon-restock-alerts", DESCRIPTION, faqs, "Pokemon Restock Tracker").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: PokemonRestockAlerts,
});

function PokemonRestockAlerts() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Pokémon drops"
        breadcrumb="Pokémon Restock Alerts"
        h1={<><span className="text-gradient-gold">Pokemon Restock Tracker</span> for Amazon</>}
        intro={
          <>
            <p className="font-semibold text-foreground">
              Pokemon Restock Alerts for Fast-Selling Products
            </p>
            <p className="mt-3">
              AmaBot is a Pokemon restock tracker built to help collectors monitor fast-selling Pokémon
              products on Amazon. Instead of manually refreshing several product pages, you can receive Pokemon
              restock alerts or enable an optional automatic purchase attempt based on your own price and
              quantity settings. It is free on Windows and macOS.
            </p>
          </>
        }
        secondary={{ href: "/#how-it-works", label: "See How It Works" }}
      />

      <Section title="Why Pokémon Drops Are Different">
        <p>
          Sealed Pokémon products combine three things that make them highly competitive to buy at retail: limited
          allocation, enormous demand and a resale market that rewards whoever gets there first. A restock can
          last only a short time, and many Pokemon restocks appear without advance notice.
        </p>
        <p>
          The result is familiar to every collector. You find the listing hours after the fact, the Amazon
          offer is gone, and what remains is a third-party offer at double the retail price. Monitoring does
          not create more stock, but it does put you in front of the offer while it still exists.
        </p>
      </Section>

      <Section title="How the Pokemon Restock Tracker Works">
        <p>
          The Pokemon restock tracker is built on ordinary Amazon product monitoring. You paste the Amazon link
          for each product, set the maximum price you are willing to pay in total, choose the quantity per
          order and how many orders are allowed, and select whether only Amazon-sold offers count or any
          eligible seller does.
        </p>
        <p>
          Once monitoring starts, AmaBot cycles through your products looking for a buyable offer that
          satisfies every rule, and the live dashboard shows each observation as it happens. From there you
          choose the outcome: alerts, so you buy manually, or optional automatic purchasing, so a match becomes
          a checkout attempt without waiting for you.
        </p>
        <CardGrid>
          <InfoCard icon={Tag} title="Maximum price per product">
            The complete price including shipping must fit your ceiling, so a heavily marked-up restock is
            not a match.
          </InfoCard>
          <InfoCard icon={Boxes} title="Quantity and order limits">
            Decide how many units belong in an order and how many orders AmaBot may place before it stops.
          </InfoCard>
          <InfoCard icon={Bell} title="Alerts when a drop lands">
            Monitor Only keeps the decision with you and never places an order by itself.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Optional automatic purchasing">
            Auto-buy attempts checkout when an eligible offer is detected on a monitored listing.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Get Pokemon Restock Alerts from Amazon">
        <p>
          Pokemon restock alerts exist for one reason: Amazon Pokémon restocks are often short and unannounced.
          The tracker checks product availability while your session runs, so the alert arrives from a check that
          already happened rather than from you deciding to look.
        </p>
        <p>
          Because availability and price are evaluated together, an alert means more than "the page changed".
          It means a buyable offer exists, the seller matches your preference and the total price sits inside
          your limit. Products whose availability returns at an unacceptable price stay silent, which keeps
          Pokemon restock alerts worth reacting to.
        </p>
      </Section>

      <Section title="Track Pokémon ETBs, Booster Boxes and Booster Bundles">
        <p>
          AmaBot works with any Amazon listing you can link to. In practice, collector lists are dominated by a
          handful of sealed categories:
        </p>
        <CardGrid>
          <InfoCard icon={Boxes} title="Pokémon Elite Trainer Boxes">
            Pokémon ETBs are the classic example of a product that restocks briefly and disappears again after a
            short time.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Pokémon booster boxes and booster bundles">
            High-demand sealed booster products where the Amazon-sold offer is usually the only one near retail
            price.
          </InfoCard>
          <InfoCard icon={Tag} title="Pokémon collection boxes and special sets">
            Premium collections tied to a set release, frequently allocated in small batches.
          </InfoCard>
          <InfoCard icon={Timer} title="Tins and limited Pokémon card products">
            Seasonal, promotional and limited Pokémon card products that reappear irregularly through the year.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Monitor Pokémon Products Near MSRP">
        <p>
          The maximum-price setting is what keeps a chaotic drop from turning into an impulse purchase. Enter
          the total you would genuinely pay delivered — often close to MSRP — and offers above it are ignored
          no matter how urgent the moment feels.
        </p>
        <p>
          Who is selling matters here. An Amazon-sold offer is usually the one that sits near MSRP, while
          third-party sellers price independently and a product frequently returns at a markup after the
          original allocation sells out. You can restrict monitoring to Amazon-sold offers for predictability,
          or allow any eligible seller and rely on your ceiling to filter the rest.
        </p>
        <Callout title="MSRP availability is never guaranteed">
          AmaBot cannot create stock or influence pricing. A strict ceiling protects your budget, but it also
          means some drops will pass without a match.
        </Callout>
      </Section>

      <Section title="Pokemon Restock Alerts vs Manual Refreshing">
        <p>
          The table below compares refreshing product pages yourself with running the Pokemon restock tracker.
        </p>
        <CompareTable
          caption="Pokemon restock tracker and Pokemon restock alerts compared with manual refreshing"
          head={["", "Manual Refreshing", "AmaBot Pokemon Tracker"]}
          rows={[
            ["Automatic monitoring", "No", "Yes"],
            ["Monitors while you're away", "No", "Yes"],
            ["Pokemon restock alerts", "No", "Yes"],
            ["Maximum price control", "No", "Yes"],
            ["Seller filtering", "No", "Yes"],
            ["Auto-buy option", "No", "Yes"],
            ["Manual refreshing required", "Yes", "No"],
          ]}
        />
        <SubHeading>Monitor multiple products</SubHeading>
        <p>
          Each individual product continues to be monitored every few seconds, even when multiple products are
          being tracked at the same time. Adding more products does not make the monitoring interval of
          existing products slower.
        </p>
      </Section>

      <Section title="Alerts vs Optional Automatic Purchasing">
        <p>
          Alert mode reports a qualifying offer and leaves the purchase to you, which is ideal when you want to
          judge condition, bundle or seller yourself. Its limitation is obvious during a short drop: the order
          depends on whether you are available to act.
        </p>
        <p>
          An automatic purchase attempt handles the purchase step for you. Auto-buy uses the payment and shipping
          settings configured in your Amazon account. Your credentials and payment information are not stored on
          AmaBot servers, because the session runs locally on your computer.
        </p>
        <p>
          Neither mode guarantees checkout. Inventory sells out during checkout, prices change, Amazon applies
          quantity limits on hyped products, payment methods can be declined and Amazon may request
          verification. Any automated interaction with Amazon also carries a general risk that the platform
          requests verification or restricts certain activity.
        </p>
      </Section>

      <Section title="Related Pages">
        <p>
          For availability monitoring beyond collectibles, see how an{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alert
          </Link>{" "}
          works across any product category. To see how a detected drop turns into a checkout attempt, read
          about{" "}
          <Link to="/amazon-auto-buy" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon auto purchase
          </Link>{" "}
          conditions. For target-price rules in detail, read the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>{" "}
          guide, or start with{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            What is AmaBot?
          </Link>{" "}
          for the full product overview.
        </p>
      </Section>

      <FaqList items={faqs} heading="Pokemon Restock Tracker FAQ" />

      <CtaBlock
        title="Be there when the next Pokémon drop happens"
        text="Add your sealed products, set a fair maximum price and let AmaBot watch the listing for you. Free on Windows and macOS."
      />
    </MarketingLayout>
  );
}
