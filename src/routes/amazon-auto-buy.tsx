import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingCart, Gauge, SlidersHorizontal, PackageSearch, Bell, Tag, Store, Timer,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, CompareTable, FaqList, CtaBlock,
  jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "Amazon Auto Buy - Automatic Amazon Purchasing | AmaBot";
const DESCRIPTION =
  "Amazon auto buy explained: how the Amazon Auto Buy feature on Amazon works for target prices, and how AmaBot Auto Buy monitors live offers and attempts automatic Amazon checkout.";

const faqs: Faq[] = [
  {
    q: "What is the Amazon Auto Buy feature on Amazon?",
    a: "The Amazon Auto Buy feature on Amazon is Amazon's own built-in option that lets a customer choose an eligible product, set a desired or target price, and have Amazon place the order automatically when its conditions are met, using the payment and shipping settings already configured in that Amazon account.",
  },
  {
    q: "How does the Amazon Auto Buy feature on Amazon work?",
    a: "In broad terms, you select an eligible product and set the price you are willing to pay. Amazon then follows that product's price for you and, when its own conditions for the request are satisfied, completes the purchase without you clicking Buy Now. Amazon's published material has described the feature as operating within a broader purchase window after the desired price is met, so it is best understood as a price-driven convenience rather than a race for scarce inventory.",
  },
  {
    q: "What is the difference between Amazon's Auto Buy feature and AmaBot Auto Buy?",
    a: "Amazon's official Auto Buy feature on Amazon is centred on waiting for the right price on a product you can generally buy at any time. AmaBot Auto Buy is centred on catching the right offer while it is still available: it re-reads the live listing frequently and attempts checkout when availability, total price, seller and quantity all match the rules you saved.",
  },
  {
    q: "Is the Amazon Auto Buy feature on Amazon designed for high-demand products?",
    a: "Amazon presents the feature around target prices and price drops rather than around scarce restocks. That framing suits ordinary deal shopping. It is not a statement that the feature fails elsewhere — simply that a target-price tool and a restock-focused tool are solving different problems.",
  },
  {
    q: "Why does monitoring frequency matter for fast-selling Amazon products?",
    a: "On high-demand listings the buyable offer can appear and disappear without notice. For those products, even a relatively short delay between an eligible offer appearing and the purchase attempt can matter, so how often the live listing is re-read becomes as important as the price you were willing to pay.",
  },
  {
    q: "How does AmaBot Auto Buy work?",
    a: "You add a product and define your rules: maximum price, quantity per order, how many orders may be placed, seller preference and the requirement that the offer is actually buyable. AmaBot then monitors that product and, when a qualifying live offer is detected, it can automatically attempt checkout through your existing Amazon session based on the rules you configured.",
  },
  {
    q: "How often does AmaBot monitor products?",
    a: "AmaBot intervals are dynamic, generally taking a few seconds between requests. No fixed interval is promised, and adding more products can increase the time before AmaBot returns to each individual listing.",
  },
  {
    q: "Can I set a maximum price with AmaBot Auto Buy?",
    a: "Yes. Each product carries its own maximum price, compared against the complete price of the current buyable offer including shipping. An offer above your ceiling is not eligible and no AmaBot purchase attempt is made.",
  },
  {
    q: "Does AmaBot guarantee a successful purchase?",
    a: "No. AmaBot attempts checkout; it cannot guarantee a completed order. Inventory can disappear mid-checkout, the price or seller can change, quantity restrictions can apply, a payment method can be declined, shipping eligibility can change and Amazon may request additional verification or cancel an order.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners. Automated interaction with Amazon can carry account-related risks, and no tool can guarantee that an account will never be affected.",
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
          <>
            <p>
              Two different things now share the same name. The{" "}
              <strong className="text-foreground">Amazon Auto Buy feature on Amazon</strong> is Amazon's own
              built-in option, designed primarily around automatically purchasing a product once your target
              price is reached. <strong className="text-foreground">AmaBot Auto Buy</strong> is AmaBot's own
              automatic purchasing functionality, and it is built for a different situation.
            </p>
            <p className="mt-4">
              Target-price buying works well when the product is there and you are simply waiting for a better
              deal. High-demand products create another problem entirely: the right offer may appear
              unexpectedly and sell out again quickly, so the question is not only whether the price was
              reached, but whether the eligible offer was detected and acted on while it still existed. AmaBot
              Auto Buy is designed around that second use case.
            </p>
          </>
        }
        secondary={{ to: "/what-is-amabot", label: "What Is AmaBot?" }}
      />

      <Section id="amazon-auto-buy-feature" title="What Is the Amazon Auto Buy Feature on Amazon?">
        <p>
          Amazon's official Auto Buy feature on Amazon lets a customer hand a price decision over to Amazon
          itself. In outline, you select an eligible product, set the desired or target price you are willing
          to pay, and allow Amazon to follow that product's price on your behalf. When the feature's own
          conditions are met, Amazon places the order automatically, using the payment and shipping
          configuration already stored in your Amazon account.
        </p>
        <p>
          For ordinary price drops and everyday deals this is genuinely convenient. It removes the habit of
          checking a listing every morning, and it means a discount that arrives at an inconvenient hour is
          not missed simply because nobody was watching. Amazon's published material has described the Auto
          Buy feature as operating within a broader purchase window after the desired price is met, which fits
          that purpose: for a product that stays in stock, completing the order a little later is not a
          problem.
        </p>
        <Callout title="Two names, two products">
          Throughout this page, "Amazon Auto Buy feature on Amazon" means Amazon's own official feature.
          "AmaBot Auto Buy" means AmaBot's independent automatic purchasing functionality. AmaBot is not
          affiliated with Amazon.
        </Callout>
      </Section>

      <Section title="Why High-Demand Amazon Products Are Different">
        <p>
          It helps to separate two shopping problems that look similar from the outside.
        </p>
        <p>
          <strong className="text-foreground">Price-driven shopping.</strong> The product is available now and
          you are waiting for a better number. Time pressure is low, because the listing will still be there
          tomorrow. This is exactly what a target-price tool is for, and it is also what{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price monitoring
          </Link>{" "}
          is good at.
        </p>
        <p>
          <strong className="text-foreground">High-demand restock shopping.</strong> The right offer may appear
          without warning and disappear again quickly. Sealed{" "}
          <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Pokémon products
          </Link>
          , collectibles, limited releases, gaming hardware, limited electronics and short-lived Amazon
          restocks all behave this way. Here price alone is not enough information to act on.
        </p>
        <p>
          For those products the system has to evaluate availability, total price, seller and your purchase
          conditions together, while the eligible offer is still live. For high-demand products, even a
          relatively short delay between an eligible offer appearing and the purchase attempt can matter.
        </p>
        <CardGrid>
          <InfoCard icon={Tag} title="Price is one signal">
            A number that looks right on a listing with nothing purchasable behind it is not an opportunity.
          </InfoCard>
          <InfoCard icon={PackageSearch} title="Availability is the other">
            Whether an offer can be ordered right now is the condition that decides if anything can happen at
            all.
          </InfoCard>
          <InfoCard icon={Store} title="Seller matters">
            The same listing can swap between an Amazon-sold offer and a marked-up third-party seller.
          </InfoCard>
          <InfoCard icon={Timer} title="Timing matters">
            On scarce inventory, the gap between detection and checkout is part of the outcome.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Amazon Auto Buy Feature on Amazon vs AmaBot Auto Buy">
        <p>
          The cleanest way to hold the difference in mind is this: Amazon's Auto Buy feature is built around
          waiting for the right price. AmaBot Auto Buy is built around catching the right offer while it is
          still available.
        </p>
        <p>
          Neither framing is wrong; they answer different questions. Amazon's official Auto Buy feature on
          Amazon is primarily centred on target-price purchasing for products you could buy today if you were
          willing to pay more. AmaBot Auto Buy is designed around frequent live product monitoring and
          attempting checkout when your specific offer conditions are detected — which is the harder part when
          inventory, not price, is the scarce thing. For a broader description of the application itself, see{" "}
          <Link to="/what-is-amabot" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            how AmaBot works
          </Link>
          .
        </p>
      </Section>

      <Section title="How AmaBot Auto Buy Works">
        <p>
          You choose the product and write down, in advance, what an acceptable offer looks like. Those rules
          are stored per product and nothing outside them is ever acted on.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li><strong className="text-foreground">Maximum price</strong> — the ceiling you are willing to pay.</li>
          <li><strong className="text-foreground">Quantity</strong> — how many units belong in a single order.</li>
          <li><strong className="text-foreground">Order limits</strong> — how many orders may be placed in total.</li>
          <li><strong className="text-foreground">Seller preference</strong> — Amazon only, or any eligible seller.</li>
          <li><strong className="text-foreground">Availability conditions</strong> — the offer must actually be buyable.</li>
        </ul>
        <p>
          AmaBot then monitors the selected product while the app runs. AmaBot intervals are dynamic, generally
          taking a few seconds between requests. No fixed interval is promised, and adding more products can
          increase the time before AmaBot returns to each individual listing — which is worth remembering
          before filling the dashboard with dozens of listings.
        </p>

        <SubHeading>Real-time offer evaluation</SubHeading>
        <p>
          Every pass reads the live listing and asks the same questions together rather than one at a time: is
          the product currently buyable, is the total price within your maximum, does the seller meet your
          preference, and does the requested quantity fit the rules you configured? A near-miss on any one of
          them is not a match, and the product simply stays in the monitoring rotation.
        </p>
        <p>
          When a qualifying live offer is detected, AmaBot can automatically attempt checkout based on the
          rules the user configured. That attempt happens in the same cycle that found the offer, with no
          human step in between. Automatic purchasing uses your existing Amazon session and the payment and
          shipping settings configured in your Amazon account; your credentials are not stored on AmaBot
          servers.
        </p>

        <SubHeading>Maximum price protection</SubHeading>
        <p>
          The maximum price you store is a ceiling on the complete eligible price of whatever offer holds the
          buy box at that moment, shipping included. This matters most during a high-demand restock: an
          Amazon-sold offer can disappear and be replaced by a more expensive third-party offer within
          seconds. AmaBot does not attempt checkout when the new offer sits above your configured maximum.
        </p>

        <SubHeading>Seller filtering</SubHeading>
        <p>
          Seller preference is set per product. You can restrict a product to Amazon-sold offers only, or allow
          any eligible seller when getting the item matters more than who ships it. Restricting to Amazon is
          the usual choice on collectibles, where third-party pricing moves fastest.
        </p>

        <SubHeading>Quantity and order controls</SubHeading>
        <p>
          Quantity works on two levels: how many units a single order should contain, and how many orders
          AmaBot may place for that product before it stops on its own. Together they give an unattended
          session a predictable worst case.
        </p>
      </Section>

      <Section title="Built for Short-Lived Amazon Offers">
        <p>
          AmaBot automatic checkout earns its place in the situations where a person cannot realistically be
          the one watching:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Amazon-sold stock returns briefly and without an announcement.</li>
          <li>A third-party seller replaces an Amazon offer at a higher price.</li>
          <li>Inventory appears at an hour nobody planned for.</li>
          <li>The acceptable price exists only for a short period.</li>
          <li>You cannot sit at the computer refreshing a listing manually.</li>
        </ul>
        <p>
          Consider a concrete case. An Amazon-sold offer appears at $49.99 and later disappears or is replaced
          by a higher-priced third-party seller. Price history alone will tell you afterwards that $49.99
          existed. The question that decides whether you own the product is whether that qualifying $49.99
          offer was detected and acted on while it was still available. That is the gap between price tracking
          and live offer availability — and the reason{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock monitoring
          </Link>{" "}
          and Amazon restock auto buy belong to the same conversation.
        </p>
      </Section>

      <Section title="Price Monitoring Is Not the Same as Catching a Restock">
        <p>
          For an ordinary product the sequence is forgiving: the price reaches your target, the product remains
          available, and an automated purchase can happen comfortably afterwards.
        </p>
        <p>
          For a high-demand product the sequence is unforgiving: an eligible offer appears, inventory may
          disappear quickly, and the delay between detection and checkout becomes part of the result.
        </p>
        <p>
          This is the whole design principle. AmaBot is designed to reduce the delay between detecting an
          eligible offer and attempting checkout. That is a design goal, not a promise of zero delay — your
          connection and Amazon's own response times affect every cycle.
        </p>
        <CardGrid>
          <InfoCard icon={Gauge} title="Detection">
            The live listing is re-read on a dynamic interval rather than from a cached snapshot.
          </InfoCard>
          <InfoCard icon={SlidersHorizontal} title="Evaluation">
            Availability, price, seller and quantity are checked together in the same pass.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Attempt">
            A match continues straight into a checkout attempt in your own Amazon session.
          </InfoCard>
          <InfoCard icon={Bell} title="Restraint">
            No match, no attempt — the product simply stays under observation.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="Amazon Auto Buy Feature on Amazon vs AmaBot">
        <p>
          Only points that can be stated fairly about both tools are listed here. Where Amazon's behaviour is
          not publicly documented, the row is left out rather than guessed at.
        </p>
        <CompareTable
          caption="Amazon Auto Buy feature on Amazon compared with AmaBot Auto Buy"
          head={["Feature", "Amazon Auto Buy Feature on Amazon", "AmaBot Auto Buy"]}
          rows={[
            ["Target-price purchasing", "Yes", "Yes"],
            ["Automatic purchasing", "Yes", "Yes"],
            ["Product monitoring", "Yes", "Yes"],
            ["Maximum price controls", "Yes", "Yes"],
            ["Automatic checkout", "Yes", "Yes"],
            ["Uses your Amazon account payment and shipping settings", "Yes", "Yes"],
            ["Runs inside Amazon itself", "Yes", "No"],
            ["Primary design focus", "Target price is reached", "Qualifying live offer is detected"],
          ]}
        />
        <p>
          The final row is the one that actually explains the choice. Both tools can buy for you; they are
          simply organised around different triggers.
        </p>
      </Section>

      <Section title="What AmaBot Auto Buy Cannot Guarantee">
        <p>
          A fast automatic checkout attempt is not the same thing as a guaranteed purchase. A checkout attempt
          is the beginning of a transaction, not proof of one.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Inventory can disappear between detection and the completion of checkout.</li>
          <li>The price can change during the same window, invalidating a match that was real a second earlier.</li>
          <li>The seller behind the buy box can change mid-attempt.</li>
          <li>Amazon may apply quantity restrictions to the order.</li>
          <li>A payment method can be declined.</li>
          <li>Shipping eligibility can change for the address on the account.</li>
          <li>Amazon may request additional verification.</li>
          <li>Amazon may limit or cancel an order after it was placed.</li>
        </ul>
        <p>
          AmaBot also cannot create inventory or stock; it can only act on offers Amazon actually publishes.
          Automated interaction with Amazon can carry account-related risks, and no tool can guarantee that an
          account will never be affected — Amazon can request verification or restrict certain activity.
        </p>
      </Section>

      <FaqList items={faqs} heading="Amazon Auto Buy FAQ" />

      <CtaBlock
        title="Built for the Amazon Drops You Can't Miss"
        text="Set your products, maximum price and buying conditions, then let AmaBot monitor for a matching offer and attempt checkout automatically."
      />
    </MarketingLayout>
  );
}
