import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell, PackageSearch, ShoppingCart, Timer, Filter, Repeat, ShieldQuestion,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable,
  FaqList, CtaBlock, jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Amazon Restock Alert and Restock Tracker | AmaBot";
const DESCRIPTION =
  "Use AmaBot as an Amazon restock alert and Amazon restock tracker to monitor unavailable products and react when inventory returns.";

const faqs: Faq[] = [
  {
    q: "What is an Amazon restock alert?",
    a: "An Amazon restock alert tells you when a product that was unavailable has a buyable offer again. AmaBot raises that alert once a monitored listing becomes purchasable and the offer matches the price and seller rules you saved.",
  },
  {
    q: "How does an Amazon restock tracker work?",
    a: "An Amazon restock tracker checks selected listings in rotation instead of relying on manual refreshing. In AmaBot you add the product link, set a maximum price and quantity, choose a seller preference, and the tracker keeps checking availability while the session runs.",
  },
  {
    q: "Is AmaBot an Amazon restock bot?",
    a: "AmaBot can be used as an Amazon restock bot: it automates the checking of product availability and, if you enable Auto-buy, attempts checkout through your own Amazon session. It does not bypass Amazon restrictions or verification.",
  },
  {
    q: "Can AmaBot monitor an out-of-stock Amazon product?",
    a: "Yes. Sold-out listings are exactly the case restock monitoring is built for. AmaBot keeps checking the listing and reports when a buyable offer appears.",
  },
  {
    q: "Can AmaBot automatically purchase a restocked product?",
    a: "Yes, if Auto-buy is enabled for that product. AmaBot then attempts an order when a matching offer is detected instead of only sending an Amazon restock alert.",
  },
  {
    q: "Can I set a maximum price?",
    a: "Yes. Each product has its own maximum price, and the complete price including shipping must stay within it for the offer to count as a match.",
  },
  {
    q: "Can I select a quantity?",
    a: "Yes. You set the quantity per order and how many orders AmaBot may place for that product before it stops.",
  },
  {
    q: "How quickly does AmaBot check products?",
    a: "AmaBot intervals are dynamic, generally taking a few seconds between requests, so monitored listings are re-checked continuously while the app is running. Actual detection speed also depends on your connection and on Amazon itself, so no fixed reaction time can be promised.",
  },
  {
    q: "Can I monitor multiple products at once?",
    a: "Yes. You can add and monitor multiple Amazon products and configure different buying rules for each one. AmaBot intervals are dynamic, generally taking a few seconds between requests.",
  },
  {
    q: "Does every Amazon restock alert result in an order?",
    a: "No. Inventory can sell out during checkout, prices can change, the seller can change, quantity limits can apply and Amazon may request verification. An Amazon restock alert improves your chances; it does not guarantee an order.",
  },
  {
    q: "Is my Amazon account at risk?",
    a: "Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. No tool can guarantee that an account will never be affected.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially connected to Amazon. Amazon and its related trademarks belong to their respective owners.",
  },
];


export const Route = createFileRoute("/amazon-restock-alerts")({
  head: () => ({
    ...headMeta({ slug: "amazon-restock-alerts", title: TITLE, description: DESCRIPTION }),
    scripts: jsonLd("amazon-restock-alerts", DESCRIPTION, faqs, "Amazon Restock Alert").map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
  component: RestockAlerts,
});

function RestockAlerts() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Restock monitoring"
        breadcrumb="Amazon Restock Alerts"
        h1={<>Get an Amazon Restock Alert <span className="text-gradient-gold">with AmaBot</span></>}
        intro={
          <p>
            AmaBot provides an Amazon restock alert when a monitored product becomes available again. It also
            works as an Amazon restock tracker, checking the listings you select so you do not need to refresh
            Amazon pages manually throughout the day. Add a product, set your price and seller rules, and
            choose whether AmaBot only notifies you or attempts the purchase for you.
          </p>
        }
        secondary={{ href: "/#how-it-works", label: "See How It Works" }}
      />

      <Section title="Why Amazon Restocks Are So Easy to Miss">
        <p>
          Amazon restocks are often unannounced. A product that has been unavailable for weeks can quietly gain a
          buyable offer at any hour, stay purchasable for a few minutes, and go back to sold out before most
          people notice anything happened.
        </p>
        <p>
          That is why manual checking rarely works for high-demand items. The window is short, unpredictable,
          and frequently opens while you are asleep, at work or simply looking at something else. Continuous
          monitoring replaces occasional luck with a check that never stops while your session is open.
        </p>
      </Section>

      <Section title="How an Amazon Restock Alert Works">
        <p>
          The sequence is straightforward. A product you want goes out of stock or has no buyable offer.
          You add its Amazon link to AmaBot and monitoring continues in the background. When availability
          changes and a purchasable offer appears, AmaBot evaluates it against your rules, and if it fits you
          receive an Amazon restock alert — or the automatic action you selected begins after a detected match.
        </p>
        <CardGrid>
          <InfoCard icon={PackageSearch} title="Buyable offer detection">
            AmaBot looks for an actual purchasable offer, which is what distinguishes a real restock from a
            page that merely exists.
          </InfoCard>
          <InfoCard icon={Filter} title="Price and seller rules applied">
            An offer counts only when the complete price including shipping fits your maximum and the seller
            matches your preference.
          </InfoCard>
          <InfoCard icon={Bell} title="Alert in Monitor Only mode">
            Get an Amazon restock alert and complete the purchase yourself on Amazon.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Auto-buy on restock">
            Let AmaBot attempt checkout when a matching offer is detected, without waiting for you to
            react.
          </InfoCard>
          <InfoCard icon={Repeat} title="Continuous rotation">
            Products are checked one after another for as long as monitoring stays on.
          </InfoCard>
          <InfoCard icon={Timer} title="Runs while you do other things">
            The app keeps watching in the background so the restock window does not depend on your attention.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Track Products with an Amazon Restock Tracker">
        <p>
          Setting up the Amazon restock tracker takes a minute per product. You paste the Amazon link, set the
          maximum price you are willing to pay in total, select the quantity per order and how many orders are
          allowed, and choose whether only Amazon-sold offers count or any eligible seller does. Then you
          decide between alerts and optional automatic purchasing and start monitoring.
        </p>
        <p>
          From there the Amazon restock tracker takes over product availability monitoring. Each product in
          your list is checked in rotation, and the live dashboard shows what was observed on each pass:
          whether an offer exists, what it costs and whether it satisfied your rules. Because checks happen in
          rotation, a short deliberate list is revisited more often than a long wish list — which matters when
          a restock lasts only minutes.
        </p>
        <SubHeading>Choosing your seller preference</SubHeading>
        <p>
          Restricting to Amazon as the seller usually means more predictable pricing and fewer surprises, but
          fewer opportunities. Allowing any eligible seller widens the window considerably, which matters most
          for products Amazon itself rarely restocks. Your maximum price is what keeps that flexibility safe.
        </p>
      </Section>

      <Section title="How the AmaBot Amazon Restock Bot Works">
        <p>
          Used as an Amazon restock bot, AmaBot removes two human bottlenecks: the refreshing and the reaction.
          Instead of reloading a product page hoping to catch the moment, the app performs the check for you;
          instead of noticing an alert and typing your details, Auto-buy can start checkout when a matching
          offer is detected.
        </p>
        <p>
          The Amazon restock bot works entirely through your own Amazon session on your own computer. AmaBot
          uses the payment and shipping settings configured in your Amazon account. It does not bypass Amazon
          restrictions, quantity limits or verification requests, and any automated interaction with Amazon
          carries a general risk that the platform requests verification or restricts certain activity.
        </p>
        <Callout title="Auto-buy runs on the rules you saved">
          Before leaving Auto-buy unattended, confirm the maximum price, the quantity per order, the number of
          orders allowed and the seller preference for each product.
        </Callout>
      </Section>

      <Section title="Amazon Restock Alerts vs Manual Refreshing">
        <p>
          The comparison below shows what changes when an Amazon restock tracker replaces a browser tab and
          your patience.
        </p>
        <CompareTable
          caption="Amazon restock alert and restock tracker compared with manual refreshing"
          head={["Feature", "Manual Refreshing", "AmaBot Restock Tracker"]}
          rows={[
            ["Automatic monitoring", "No", "Yes"],
            ["Monitors while you're away", "No", "Yes"],
            ["Restock alerts", "No", "Yes"],
            ["Maximum price control", "No", "Yes"],
            ["Seller filtering", "No", "Yes"],
            ["Automatic checkout option", "No", "Yes"],
            ["Manual refreshing required", "Yes", "No"],
          ]}
        />
        <p>
          Price and availability are one problem, not two. If your priority is the number rather than the
          scarcity, the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>{" "}
          page explains target-price rules in more depth, and collectors chasing sealed cards can read about{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokemon restock alerts
          </Link>{" "}
          for that specific scenario.
        </p>
      </Section>

      <Section title="Maximum Price and Quantity Controls">
        <p>
          A restocked product does not always come back the way it left. It can return at a different price
          than the one you remember, through a different seller than before, or with a quantity restriction
          applied by Amazon to limit how many units one account can buy.
        </p>
        <p>
          Your maximum price is the protection against the first two. Because the complete price including
          shipping is compared with your ceiling, a marked-up return through a third-party seller simply does
          not register as a match. Quantity settings cover the third: you define how many units belong in an
          order and how many orders AmaBot may place, so an unattended session has a predictable worst case.
        </p>
      </Section>

      <Section title="Why a Restock Does Not Guarantee an Order">
        <p>
          Detection is one thing; checkout happens in a competitive environment. An attempt can fail because:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>The inventory disappears while the order is being placed.</li>
          <li>The price changes between detection and checkout.</li>
          <li>The seller behind the buyable offer changes.</li>
          <li>A payment method is declined or unavailable.</li>
          <li>Shipping eligibility changes for the product or address.</li>
          <li>Amazon requests additional account verification.</li>
          <li>Amazon limits the quantity, or an order is cancelled after being placed.</li>
        </ul>
        <p>
          Once an order exists it belongs to your Amazon account, and changes, cancellations, returns and
          refunds are handled through Amazon under Amazon's policies. AmaBot improves your odds; it cannot
          promise the outcome. The conditions that decide whether a checkout attempt is made at all are
          covered in detail on the{" "}
          <Link to="/amazon-auto-buy" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon auto buy
          </Link>{" "}
          page.
        </p>
      </Section>

      <FaqList items={faqs} heading="Amazon Restock Alert FAQ" />

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
