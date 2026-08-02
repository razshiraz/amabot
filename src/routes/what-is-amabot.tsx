import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity, Bell, ShoppingCart, SlidersHorizontal, Filter, LayoutDashboard,
  Sparkles, Gamepad2, Cpu, PackageSearch, Timer, ShieldQuestion,
} from "lucide-react";
import { MarketingLayout } from "@/components/marketing/marketing-chrome";
import {
  PageHero, Section, SubHeading, Callout, CardGrid, InfoCard, FaqList, CtaBlock,
  jsonLd, headMeta, type Faq,
} from "@/components/marketing/ui";

const TITLE = "What Is AmaBot? Amazon Monitoring and Auto-Buy Tool";
const DESCRIPTION =
  "Learn what AmaBot is, how it monitors Amazon products, tracks target prices, sends restock alerts and optionally attempts automatic purchases.";

const faqs: Faq[] = [
  {
    q: "What is AmaBot?",
    a: "AmaBot is a free desktop tool for Windows and macOS that monitors Amazon products, tracks the target price you set, sends availability and restock alerts, and can optionally attempt an automatic purchase when an eligible offer matches your rules.",
  },
  {
    q: "Is AmaBot free?",
    a: "Yes. AmaBot is free to download and use. It is funded through Amazon affiliate commissions on qualifying purchases, at no additional cost to you.",
  },
  {
    q: "Is AmaBot an Amazon bot?",
    a: "AmaBot is an independent Amazon monitoring tool. It runs on your own computer, checks the products you add, and acts only on the rules you configure. It is not built, endorsed or operated by Amazon.",
  },
  {
    q: "Can AmaBot monitor Amazon products?",
    a: "Yes. You paste the Amazon link of a product and AmaBot checks its price, its offers and its availability in a continuous rotation while monitoring is running.",
  },
  {
    q: "Can AmaBot track target prices?",
    a: "Yes. Every product you add has its own maximum price. AmaBot only treats an offer as eligible when the complete price, including shipping, stays within the limit you set.",
  },
  {
    q: "Can AmaBot send Amazon restock alerts?",
    a: "Yes. In Monitor Only mode AmaBot never places an order and simply notifies you when a product you are tracking becomes available under your conditions.",
  },
  {
    q: "Is AmaBot an Amazon auto checkout bot?",
    a: "AmaBot includes an optional Auto-buy mode that attempts checkout automatically when an eligible offer matches your rules. Auto-buy is off unless you turn it on for a product.",
  },
  {
    q: "Can AmaBot automatically purchase a product?",
    a: "Yes, when you enable Auto-buy for that product. AmaBot places the order through your own Amazon session using your default Amazon shipping address and payment method, and it continues until your configured order target has been reached.",
  },
  {
    q: "Does AmaBot guarantee successful purchases?",
    a: "No. Product availability, checkout speed, Amazon restrictions and competition from other buyers all affect the outcome. AmaBot can improve your chances but cannot guarantee that an order goes through.",
  },
  {
    q: "Does AmaBot work on Windows and macOS?",
    a: "Yes. AmaBot is a desktop application for Windows and macOS. Because it runs locally, your computer, your internet connection and the AmaBot session must stay active while monitoring or automatic purchasing is enabled.",
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: "No. AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially connected to Amazon. Amazon and its related trademarks belong to their respective owners.",
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
        h1={<>What Is <span className="text-gradient-gold">AmaBot</span>?</>}
        intro={
          <p>
            AmaBot is a free desktop tool for Windows and macOS that monitors Amazon products, tracks
            target prices, provides availability and restock alerts, and allows users to choose between
            notifications and optional automatic purchasing based on their settings.
          </p>
        }
        secondary={{ href: "#what-it-does", label: "See what it does" }}
      />

      <Section id="what-it-does" title="What AmaBot Does">
        <p>
          AmaBot replaces the habit of refreshing an Amazon product page. You give it a product link and
          a set of buying rules, and it keeps checking that listing for you while the app is running. When
          the listing finally matches what you asked for, AmaBot either tells you or acts on your behalf —
          whichever mode you selected.
        </p>
        <CardGrid>
          <InfoCard icon={Activity} title="Amazon product monitoring">
            Add the Amazon links you care about and AmaBot checks their latest prices, offers and stock
            status in rotation for as long as monitoring is on.
          </InfoCard>
          <InfoCard icon={SlidersHorizontal} title="Target price settings">
            Each product gets its own maximum price, so an offer is only treated as eligible when it stays
            inside your limit.
          </InfoCard>
          <InfoCard icon={PackageSearch} title="Availability detection">
            AmaBot watches whether a listing has a buyable offer, which is what makes restock detection
            possible on sold-out items.
          </InfoCard>
          <InfoCard icon={Bell} title="Price and restock alerts">
            In Monitor Only mode you get an update when a matching opportunity appears, and nothing is ever
            purchased for you.
          </InfoCard>
          <InfoCard icon={ShoppingCart} title="Optional automatic purchasing">
            With Auto-buy enabled, AmaBot attempts checkout as soon as an eligible offer matches every rule
            you configured.
          </InfoCard>
          <InfoCard icon={Filter} title="Seller and price filters">
            Choose Amazon-only or any eligible seller, and have the complete price, including shipping,
            evaluated against your maximum.
          </InfoCard>
        </CardGrid>
        <p>
          Everything AmaBot finds is visible in a live activity dashboard, so you can follow prices, offers,
          eligibility, checks and purchase status in one place instead of guessing what the tool is doing.
        </p>
      </Section>

      <Section title="Who AmaBot Is Designed For">
        <p>
          AmaBot is aimed at anyone who buys products that disappear faster than a person can react. The
          tool itself does not care what category a listing belongs to — it monitors any Amazon product you
          add — but it is most useful in situations where timing decides whether you get the item.
        </p>
        <CardGrid>
          <InfoCard icon={Sparkles} title="Collectibles and Pokémon products">
            Sealed Pokémon products, Elite Trainer Boxes and similar collectibles often sell out within
            minutes. See the{" "}
            <Link to="/pokemon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
              Pokémon restock tracker
            </Link>{" "}
            page for that use case.
          </InfoCard>
          <InfoCard icon={Timer} title="Limited releases">
            Launch-day products and limited runs regularly appear, sell out and come back without any
            announcement.
          </InfoCard>
          <InfoCard icon={Gamepad2} title="Gaming products">
            Consoles, accessories and popular gaming hardware are classic examples of listings that restock
            unpredictably.
          </InfoCard>
          <InfoCard icon={Cpu} title="Electronics and frequent restocks">
            Items that repeatedly return to stock at changing prices are exactly where an{" "}
            <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
              Amazon price tracker
            </Link>{" "}
            saves the most manual work.
          </InfoCard>
        </CardGrid>
      </Section>

      <Section title="How Amazon Product Monitoring Works">
        <p>
          Monitoring starts with a link. You paste the Amazon URL of the product you want AmaBot to watch,
          then set the rules that describe an acceptable purchase: the maximum price you will pay, the
          quantity you want, how many orders you are willing to place, and whether third-party sellers are
          acceptable or only Amazon itself.
        </p>
        <p>
          Once you press Start, AmaBot checks your products in rotation. Each product gets roughly five
          seconds of attention per cycle, so the interval between checks of the same listing grows as you
          add more products: one product is revisited about every five seconds, two products about every ten
          seconds, and so on. That trade-off is worth knowing before you load the dashboard with dozens of
          items.
        </p>
        <SubHeading>What a check actually looks at</SubHeading>
        <p>
          A check is not just "in stock or not". AmaBot looks at the offers attached to the listing, the
          seller behind each offer, and the complete price including shipping. An offer that is available
          but priced above your maximum is simply not eligible, and AmaBot moves on instead of acting on it.
        </p>
      </Section>

      <Section title="Alerts or Automatic Purchasing">
        <p>
          The single most important choice you make per product is the mode. Both modes use the same
          monitoring engine; they differ only in what happens the moment a match is found.
        </p>
        <SubHeading>Monitor Only</SubHeading>
        <p>
          AmaBot notifies you when a product meets your conditions and never places an order. You keep full
          control over the purchase decision and complete checkout yourself on Amazon. This is the safer
          default when you are still tuning your rules or when you want a human to look at the offer first.
        </p>
        <SubHeading>Auto-buy</SubHeading>
        <p>
          AmaBot attempts to place the order automatically as soon as an eligible offer matches all of your
          rules, and keeps going until your configured order target is reached. It is faster than any manual
          reaction, but it is still an attempt.
        </p>
        <Callout title="Automatic purchasing is an attempt, not a guarantee">
          An order can still fail after a match is detected. Inventory can vanish mid-checkout, the price or
          the seller can change, quantity limits can apply, and Amazon may ask for additional verification.
          AmaBot improves your odds; it does not promise an outcome.
        </Callout>
      </Section>

      <Section title="Price and Quantity Controls">
        <p>
          Amazon listings are not static. The same product page can be served by Amazon at one moment and by
          a third-party seller at another, often at a very different price. That is why every product in
          AmaBot carries its own maximum price rather than a global setting.
        </p>
        <p>
          Quantity works the same way. You decide how many units a matching order should include and how
          many orders AmaBot is allowed to place before it stops. Together these two controls define the
          worst case you are willing to accept: without them, a restock at an inflated price could turn into
          a purchase you never intended to make.
        </p>
      </Section>

      <Section title="Shipping and Payment Information">
        <p>
          AmaBot does not ask you to type card details into the app. Purchases go through your own Amazon
          session, using the default shipping address and the default payment method already configured in
          your Amazon account. If you have an Amazon Gift Card balance available, Amazon may apply that
          balance before charging your default payment method.
        </p>
        <p>
          Your Amazon credentials and payment information are not stored on AmaBot servers. The Amazon
          session runs locally on your computer in a separate browser session, while product links, buying
          rules and preferences may be saved locally on your device.
        </p>
        <Callout title="Check your Amazon defaults before enabling Auto-buy">
          Because AmaBot uses whatever Amazon has set as default, confirm that the correct address and
          payment method are selected in your Amazon account first.
        </Callout>
      </Section>

      <Section title="Supported Platforms">
        <p>
          AmaBot is a desktop application for Windows and macOS. Since it runs locally rather than in the
          cloud, your computer, your internet connection and the AmaBot session all need to stay active
          while monitoring or automatic purchasing is enabled. Updates are installed automatically in the
          background, and the Settings page includes a Check for Updates button if you want to confirm your
          version.
        </p>
      </Section>

      <Section title="Important Limitations">
        <p>
          A detected match is the beginning of a checkout, not the end of one. Orders can fail for reasons
          that are entirely outside the tool's control:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Inventory disappears between detection and checkout.</li>
          <li>The price changes while the order is being placed.</li>
          <li>Amazon applies a quantity restriction on the item.</li>
          <li>A payment method is declined or unavailable.</li>
          <li>Shipping restrictions apply to the address or the product.</li>
          <li>Amazon requests additional account verification.</li>
          <li>The seller behind the buyable offer changes.</li>
        </ul>
        <p>
          There is also a general risk that applies to any automated interaction with Amazon: the platform
          may occasionally request verification or restrict certain activity. AmaBot follows safer
          automation practices, but no tool can guarantee that an account will never be affected.
        </p>
      </Section>

      <Section title="An Independent Tool">
        <p>
          AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially
          connected to Amazon. Amazon and its related trademarks belong to their respective owners. Once an
          order is placed it lives entirely inside your Amazon account, and shipping changes, cancellations,
          returns and refunds are handled through Amazon under Amazon's policies.
        </p>
        <p>
          If you want to go deeper on a specific capability, read about{" "}
          <Link to="/amazon-restock-alerts" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon restock alerts
          </Link>{" "}
          or about tracking prices with the{" "}
          <Link to="/amazon-price-tracker" className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Amazon price tracker
          </Link>
          .
        </p>
      </Section>

      <FaqList items={faqs} heading="AmaBot FAQ" />

      <CtaBlock
        title="Try AmaBot on Windows or macOS"
        text="Set your products, your maximum price and your quantity, then choose alerts or automatic purchasing. AmaBot is completely free."
      />
      <div className="pb-4 text-center text-xs text-muted-foreground">
        <ShieldQuestion aria-hidden className="mx-auto mb-2 h-4 w-4" />
        AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially
        connected to Amazon.
      </div>
    </MarketingLayout>
  );
}
