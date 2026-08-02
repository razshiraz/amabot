import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell, PackageSearch, ShoppingCart, Timer, Filter, Repeat, ShieldQuestion,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Amazon Restock Alerts and In-Stock Notifications | AmaBot";
const DESCRIPTION =
  "Get Amazon restock alerts for sold-out products. AmaBot monitors availability, applies your price and seller rules, and can auto-buy on restock.";

const faqs: Faq[] = [
  {
    q: "How do I get Amazon restock alerts?",
    a: "Add the sold-out product's Amazon link to AmaBot, set your maximum price and seller preference, and start monitoring in Monitor Only mode. AmaBot notifies you when a buyable offer appears that matches your rules.",
  },
  {
    q: "Are AmaBot restock alerts free?",
    a: "Yes. AmaBot is free to download and use on Windows and macOS, and restock monitoring is part of the core product.",
  },
  {
    q: "How fast are Amazon restock notifications?",
    a: "AmaBot checks products in rotation with roughly five seconds per product, so a short focused list is revisited within seconds. Larger lists increase the interval between checks of any single item.",
  },
  {
    q: "Can AmaBot buy an item automatically when it restocks?",
    a: "Yes, if you enable Auto-buy for that product. AmaBot then attempts checkout as soon as an eligible offer matches your rules instead of only alerting you.",
  },
  {
    q: "Can I get restock alerts only from Amazon as the seller?",
    a: "Yes. You can restrict monitoring to offers sold by Amazon, or allow any eligible seller when you care more about securing the item.",
  },
  {
    q: "Does a restock alert include the price?",
    a: "Availability and price are evaluated together. An offer only counts as a match when the complete price, including shipping, stays within the maximum you set for that product.",
  },
  {
    q: "Do I need to keep the app open for restock alerts?",
    a: "Yes. AmaBot runs locally on your computer, so your machine, your internet connection and the AmaBot session must stay active while monitoring is enabled.",
  },
  {
    q: "How many products can I monitor for restocks?",
    a: "You can add multiple products, but because checks happen in rotation, a longer list means a longer gap between checks of each individual product.",
  },
  {
    q: "Will I definitely get the item if I receive a restock alert?",
    a: "No. Inventory can sell out during checkout, prices can change, quantity limits can apply and Amazon may request verification. A restock alert improves your chances, it does not guarantee an order.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially connected to Amazon.",
  },
];

export const Route = createFileRoute("/amazon-restock-alerts")({
  head: () => ({
    ...headMeta({ slug: "amazon-restock-alerts", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("amazon-restock-alerts", DESCRIPTION, faqs, "Amazon Restock Alerts").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: RestockAlerts;
});

function RestockAlerts() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Restock monitoring"
        breadcrumb="Amazon Restock Alerts"
        h1={<><span className="text-gradient-gold">Amazon Restock Alerts</span> For Sold-Out Products</>}
        intro={
          <p>
            Sold-out listings come back without warning. AmaBot watches the products you choose, checks whether
            a buyable offer has appeared, applies your price and seller rules, and alerts you — or buys
            automatically if you asked it to.
          </p>
        }
        secondary={{ to: "/what-is-amabot", label: "What is AmaBot?" }}
      />

      <Section title="Why Amazon Restocks Are So Easy to Miss">
        <p>
          Amazon does not announce restocks. A product that has been unavailable for weeks can quietly gain a
          buyable offer at any hour of the day, stay purchasable for a few minutes, and go back to sold out
          before most people notice anything happened.
        </p>
        <p>
          That is why manual checking rarely works for high-demand items. The window is short, it is
          unpredictable, and it frequently opens while you are asleep, at work or simply looking at something
          else. Monitoring solves the problem by making the check continuous instead of occasional.
        </p>
      </Section>

      <Section title="How AmaBot Monitors Availability">
        <p>
          AmaBot is a free desktop application for Windows and macOS. You paste the Amazon link of a sold-out
          product, define what an acceptable purchase looks like, and start monitoring. From that point on
          AmaBot works through your list in rotation and reports everything it sees in a live dashboard.
        </p>
        <CardGrid>
          <InfoCard icon={PackageSearch} title="Buyable offer detection">
            AmaBot looks for an actual purchasable offer on the listing, which is what distinguishes a real
            restock from a page that merely exists.
          </InfoCard>
          <InfoCard icon={Filter} title="Price and seller rules applied">
            An offer counts only when the complete price including shipping fits your maximum and the seller
            matches your preference.
          </InfoCard>
          <InfoCard icon={Bell} title="Alerts in Monitor Only mode">
            Get notified when a match appears and complete the purchase yourself on Amazon.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Auto-buy on restock">
            Let AmaBot attempt checkout the instant an eligible offer appears, without waiting for you to
            react.
          </InfoCard>
          <InfoCard icon={Repeat} title="Continuous rotation">
            Roughly five seconds per product per cycle, running for as long as monitoring stays on.
          </InfoCard>
          <InfoCard icon={Timer} title="Runs while you do other things">
            The app keeps watching in the background so the restock window does not depend on your attention.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Availability and Price Are One Rule">
        <p>
          A restock alert that ignores price is only half useful. When a sought-after product returns, it often
          returns through a third-party seller at a markup, and being first in line for an overpriced offer is
          not a win.
        </p>
        <p>
          AmaBot therefore evaluates both at once. The product must have a buyable offer, the complete price
          including shipping must stay within the maximum you set, and the seller must match your preference —
          Amazon only, or any eligible seller. If any of those fail, monitoring simply continues.
        </p>
        <SubHeading>Choosing your seller preference</SubHeading>
        <p>
          Restricting to Amazon as the seller usually means more predictable pricing and fewer surprises, but
          fewer opportunities. Allowing any eligible seller widens the window considerably, which matters most
          for products that Amazon itself rarely restocks. Your maximum price is what keeps that flexibility
          safe.
        </p>
      </Section>

      <Section title="Alerts or Automatic Purchase on Restock">
        <p>
          Every product you monitor runs in one of two modes, and you can mix them freely across your list.
        </p>
        <CompareTable
          caption="Restock alerts compared with automatic purchasing"
          head={["", "Monitor Only", "Auto-buy"]}
          rows={[
            ["Detects restocks", "Yes", "Yes"],
            ["Applies price limit", "Yes", "Yes"],
            ["Applies seller filter", "Yes", "Yes"],
            ["Notifies you", "Yes", "Yes"],
            ["Places the order", "No, you buy manually", "Attempts checkout automatically"],
            ["Reaction speed", "Depends on you", "Immediate on match"],
            ["Stops when", "You stop monitoring", "Your order target is reached"],
          ]}
        />
        <Callout title="Auto-buy runs on the rules you saved">
          Before leaving Auto-buy unattended, confirm the maximum price, the quantity per order, the number of
          orders allowed and the seller preference for each product.
        </Callout>
      </Section>

      <Section title="Response Time and How Many Products to Watch">
        <p>
          AmaBot gives each product roughly five seconds of attention per rotation. One product is revisited
          about every five seconds; ten products stretch that gap to roughly fifty seconds. For a restock that
          lasts only a couple of minutes, that difference is the difference between catching it and reading
          about it later.
        </p>
        <p>
          The practical rule is to keep the monitored list close to what you actually intend to buy. A short,
          deliberate list reacts faster than a long wish list.
        </p>
      </Section>

      <Section title="What Happens After a Match">
        <p>
          In Monitor Only mode you receive the alert and take it from there on Amazon. In Auto-buy mode AmaBot
          attempts the order through your own Amazon session, using the default shipping address and default
          payment method configured in your Amazon account. An available Amazon Gift Card balance may be
          applied by Amazon before your default payment method is charged.
        </p>
        <p>
          Your Amazon credentials and payment details are not stored on AmaBot servers. The Amazon session runs
          locally on your machine, while product links and buying rules may be saved locally on your device.
          Once an order exists it belongs to your Amazon account, and changes, cancellations, returns and
          refunds are handled through Amazon under Amazon's policies.
        </p>
      </Section>

      <Section title="Why a Restock Attempt Can Still Fail">
        <p>
          Detection is fast, but checkout happens in a competitive environment. Orders can fail because:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>The inventory sells out during checkout.</li>
          <li>The price changes while the order is being placed.</li>
          <li>Amazon applies a quantity restriction to the item.</li>
          <li>A payment method is declined or unavailable.</li>
          <li>Shipping restrictions apply to the product or address.</li>
          <li>Amazon requests additional account verification.</li>
          <li>The seller behind the buyable offer changes.</li>
        </ul>
        <p>
          There is also a general risk attached to any automated interaction with Amazon: the platform may
          occasionally request verification or restrict certain activity. AmaBot follows safer automation
          practices, but no tool can guarantee an outcome.
        </p>
      </Section>

      <Section title="Related Use Cases">
        <p>
          If your priority is the price rather than the scarcity, the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>{" "}
          page covers target-price rules in more depth. If you are chasing sealed collectibles specifically,
          the{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokémon restock tracker
          </Link>{" "}
          page walks through that scenario. For a full overview of the tool, start with{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            what AmaBot is
          </Link>
          .
        </p>
      </Section>

      <FaqList items={faqs} heading="Amazon Restock Alerts FAQ" />

      <CtaBlock
        title="Never refresh a sold-out listing again"
        text="Add the products you are waiting for, set your price and seller rules, and let AmaBot watch availability for you. Free on Windows and macOS."
      />
      <div className="pb-4 text-center text-xs text-muted-foreground">
        <ShieldQuestion aria-hidden className="mx-auto mb-2 h-4 w-4" />
        AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially
        connected to Amazon.
      </div>
    </MarketingLayout>
  );
}
