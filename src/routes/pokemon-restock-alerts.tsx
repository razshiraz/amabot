import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Boxes, Bell, ShoppingCart, Tag, Timer, ShieldQuestion } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Pokémon Restock Alerts and Amazon Drop Tracker | AmaBot";
const DESCRIPTION =
  "Track Pokémon product restocks on Amazon. AmaBot monitors availability and price, sends alerts, and can attempt an automatic purchase on drops.";

const faqs: Faq[] = [
  {
    q: "How do I get Pokémon restock alerts on Amazon?",
    a: "Add the Amazon links of the Pokémon products you want in AmaBot, set a maximum price and seller preference for each, and start monitoring. AmaBot alerts you when a buyable offer matches your rules.",
  },
  {
    q: "Is the Pokémon restock tracker free?",
    a: "Yes. AmaBot is free to download and use on Windows and macOS, including monitoring and alerts.",
  },
  {
    q: "Can AmaBot buy Pokémon products automatically?",
    a: "Yes, if you enable Auto-buy for that product. AmaBot attempts checkout as soon as an eligible offer matches your price, quantity and seller rules.",
  },
  {
    q: "Can I avoid paying scalper prices?",
    a: "Set a realistic maximum price per product. AmaBot only treats an offer as eligible when the complete price, including shipping, stays within that limit, so marked-up restocks are skipped.",
  },
  {
    q: "Can I monitor only offers sold by Amazon?",
    a: "Yes. You can restrict monitoring to Amazon-sold offers, or allow any eligible seller when securing the product matters more.",
  },
  {
    q: "Which Pokémon products can I track?",
    a: "Any Amazon listing you can link to, including Elite Trainer Boxes, booster bundles, collection boxes, tins and other sealed products.",
  },
  {
    q: "How fast does AmaBot react to a Pokémon drop?",
    a: "Products are checked in rotation at roughly five seconds each, so a short focused list is revisited within seconds while longer lists increase the gap.",
  },
  {
    q: "Do I need my computer running during a drop?",
    a: "Yes. AmaBot runs locally, so your computer, internet connection and the AmaBot session must stay active while monitoring or Auto-buy is enabled.",
  },
  {
    q: "Will AmaBot guarantee I get the Pokémon product?",
    a: "No. Sealed Pokémon products are highly competitive; inventory can sell out mid-checkout, quantity limits can apply and Amazon may request verification. AmaBot improves your chances without guaranteeing an order.",
  },
  {
    q: "Is AmaBot affiliated with Amazon or The Pokémon Company?",
    a: "No. AmaBot is an independent tool and is not affiliated with, endorsed by or sponsored by Amazon or any product manufacturer. All trademarks belong to their respective owners.",
  },
];

export const Route = createFileRoute("/pokemon-restock-alerts")({
  head: () => ({
    ...headMeta({ slug: "pokemon-restock-alerts", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("pokemon-restock-alerts", DESCRIPTION, faqs, "Pokémon Restock Alerts").map((d) => ({
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
        h1={<><span className="text-gradient-gold">Pokémon Restock Alerts</span> For Amazon Drops</>}
        intro={
          <p>
            Sealed Pokémon products sell out faster than almost anything else on Amazon. AmaBot monitors the
            listings you choose, checks availability and price together, and either alerts you or attempts the
            purchase automatically.
          </p>
        }
        secondary={{ to: "/amazon-restock-alerts", label: "How restock alerts work" }}
      />

      <Section title="Why Pokémon Drops Are Different">
        <p>
          Sealed Pokémon products combine three things that make them brutal to buy at retail: limited
          allocation, enormous demand and a resale market that rewards anyone who gets there first. A
          restock can last minutes, sometimes less, and it is never announced in advance.
        </p>
        <p>
          The result is familiar to every collector. You find the listing hours after the fact, the Amazon
          offer is gone, and what remains is a third-party offer at double the retail price. Monitoring does
          not create more stock, but it does put you in front of the offer while it still exists.
        </p>
      </Section>

      <Section title="Pokémon Products Collectors Track">
        <p>
          AmaBot works with any Amazon listing you can link to. In practice these categories dominate the
          monitored lists:
        </p>
        <CardGrid>
          <InfoCard icon={Boxes} title="Elite Trainer Boxes">
            ETBs are a classic example of a product that restocks briefly and disappears again within
            minutes.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Booster bundles and boxes">
            High-demand sealed booster products where the Amazon-sold offer is usually the only one at
            retail price.
          </InfoCard>
          <InfoCard icon={Tag} title="Collection and premium boxes">
            Special collections and premium boxes tied to a set release, often allocated in small batches.
          </InfoCard>
          <InfoCard icon={Timer} title="Tins and seasonal releases">
            Seasonal or promotional items that reappear irregularly throughout the year.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="How AmaBot Handles a Pokémon Drop">
        <p>
          You paste the Amazon link for each product, set the maximum price you are willing to pay, decide
          the quantity per order and how many orders are allowed, and choose whether only Amazon-sold offers
          count or any eligible seller does. Then you start monitoring.
        </p>
        <p>
          AmaBot cycles through your products at roughly five seconds each, looking for a buyable offer that
          satisfies every rule. Because price and availability are evaluated together, a restock at a
          scalper price simply does not register as a match.
        </p>
        <SubHeading>Alerts or automatic purchase</SubHeading>
        <CompareTable
          caption="Monitor Only compared with Auto-buy for Pokémon drops"
          head={["", "Monitor Only", "Auto-buy"]}
          rows={[
            ["Detects the drop", "Yes", "Yes"],
            ["Respects your maximum price", "Yes", "Yes"],
            ["Places the order", "No", "Attempts checkout automatically"],
            ["Reaction time", "However fast you are", "Immediate on match"],
            ["Best for", "Deciding case by case", "Drops you cannot sit and watch"],
          ]}
        />
        <Callout title="Set a maximum price you would genuinely pay">
          Your price ceiling is what separates a good catch from an impulse purchase during a chaotic drop.
          Because shipping is included in the evaluation, enter the total you accept delivered.
        </Callout>
      </Section>

      <Section title="Keeping Your List Focused">
        <p>
          It is tempting to add every Pokémon product on your wish list. Since checks happen in rotation,
          each extra product increases the delay before AmaBot returns to any single listing — and for a drop
          that lasts two minutes, that delay matters.
        </p>
        <p>
          Collectors get better results from a short list of products they truly intend to buy than from a
          long list of maybes.
        </p>
      </Section>

      <Section title="Purchases, Payment and Limits">
        <p>
          Auto-buy places orders through your own Amazon session using the default shipping address and
          default payment method already set in your Amazon account, and an available Amazon Gift Card
          balance may be applied by Amazon first. Your credentials and payment information are not stored on
          AmaBot servers; the Amazon session runs locally on your computer.
        </p>
        <p>
          Even with everything configured correctly, a drop can slip away. Inventory sells out during
          checkout, prices change, Amazon applies quantity limits on hyped products, payment methods can be
          declined, and Amazon may request verification. AmaBot improves your chances; it cannot guarantee
          the order. Any automated interaction with Amazon also carries a general risk that the platform may
          request verification or restrict certain activity.
        </p>
      </Section>

      <Section title="Related Pages">
        <p>
          For availability monitoring beyond collectibles, see{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alerts
          </Link>
          . For target-price rules in detail, see the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>
          . For the full product overview, read{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            what AmaBot is
          </Link>
          .
        </p>
      </Section>

      <FaqList items={faqs} heading="Pokémon Restock Alerts FAQ" />

      <CtaBlock
        title="Be there when the next Pokémon drop happens"
        text="Add your sealed products, set a fair maximum price and let AmaBot watch the listing for you. Free on Windows and macOS."
      />
      <div className="pb-4 text-center text-xs text-muted-foreground">
        <ShieldQuestion aria-hidden className="mx-auto mb-2 h-4 w-4" />
        AmaBot is an independent tool and is not affiliated with, endorsed by or sponsored by Amazon or any
        product manufacturer.
      </div>
    </MarketingLayout>
  );
}
