import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "bag"
  | "bolt"
  | "check"
  | "chevron"
  | "heart"
  | "home"
  | "leaf"
  | "lock"
  | "logo"
  | "paypal"
  | "receipt"
  | "search"
  | "share"
  | "sparkles"
  | "trend"
  | "user"
  | "x";

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (name === "logo") {
    return (
      <svg {...common} viewBox="0 0 30 30">
        <path
          d="M15 26.5S4.8 20.7 4.8 12.8A5.9 5.9 0 0 1 15 8.7a5.9 5.9 0 0 1 10.2 4.1C25.2 20.7 15 26.5 15 26.5Z"
          fill="currentColor"
          stroke="none"
        />
        <path
          d="M15 20.5V9.8m0 3.3c-1.6-2.1-3.6-2.7-5.7-2.5m5.7 6.1c1.8-2.1 3.9-2.8 6.1-2.4"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    );
  }

  const paths: Record<Exclude<IconName, "logo">, ReactNode> = {
    bag: (
      <>
        <path d="M5 8h14l-1 12H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    heart: (
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z" />
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4c-8 0-13 4-13 10 0 3 2 5 5 5 6 0 8-7 8-15Z" />
        <path d="M4 21c3-6 7-9 12-12" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    paypal: (
      <>
        <path d="M9 19H5l3-15h6.2c4 0 5.6 2.2 4.7 5.4-.9 3.1-3.5 4.7-7.2 4.7H8.2" />
        <path d="M11.5 9.5h5.3c2.7 0 3.7 1.6 3 4-.7 2.5-2.7 3.7-5.3 3.7h-2.4L11.5 20H8" />
      </>
    ),
    receipt: (
      <>
        <path d="M6 3v18l3-2 3 2 3-2 3 2V3l-3 2-3-2-3 2-3-2Z" />
        <path d="M9 9h6M9 13h6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5m-7.6 6.9 7.6 4.5" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
        <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 13l.7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z" />
      </>
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };
  return <svg {...common}>{paths[name as Exclude<IconName, "logo">]}</svg>;
}

const transactions = [
  {
    store: "Whole Foods",
    logo: "WF",
    color: "#2f7d50",
    date: "Today, 10:32 AM",
    saved: "$18.40",
    charity: "Food Bank",
    cause: "2 meals provided",
  },
  {
    store: "Everlane",
    logo: "E",
    color: "#22272e",
    date: "May 18, 2025",
    saved: "$24.00",
    charity: "One Tree Planted",
    cause: "1 tree planted",
  },
  {
    store: "Target",
    logo: "T",
    color: "#cc2534",
    date: "May 12, 2025",
    saved: "$15.60",
    charity: "Feeding America",
    cause: "1 meal provided",
  },
];

function Brand() {
  return (
    <div className="brand">
      <span className="brand-mark">
        <Icon name="logo" size={30} />
      </span>
      <span>
        Save <i>&</i> Share
      </span>
    </div>
  );
}

function AppShell({
  step,
  setStep,
  children,
  extension = false,
}: {
  step: number;
  setStep: (step: number) => void;
  children: ReactNode;
  extension?: boolean;
}) {
  return (
    <div className={extension ? "app app-extension" : "app"}>
      <header className="topbar">
        <Brand />
        <nav className="step-nav" aria-label="Prototype steps">
          {["Scan", "Save", "Give", "Impact"].map((label, i) => (
            <button
              className={step === i ? "active" : step > i ? "complete" : ""}
              onClick={() => setStep(i)}
              key={label}
            >
              <span>{step > i ? <Icon name="check" size={13} /> : i + 1}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          {step === 3 && (
            <button className="icon-btn" aria-label="Share impact">
              <Icon name="share" size={18} />
            </button>
          )}
          <div className="avatar">
            <Icon name="user" size={17} />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

function ProductCheckout({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <main className={`shop-page ${dimmed ? "dimmed" : ""}`}>
      <div className="shop-nav">
        <div className="shop-logo">
          NORTH<span>LINE</span>
        </div>
        <div className="shop-links">
          <span>New</span>
          <span>Women</span>
          <span>Men</span>
          <span>Journal</span>
        </div>
        <Icon name="bag" size={21} />
      </div>
      <div className="checkout-wrap">
        <section>
          <p className="eyebrow">Secure checkout</p>
          <h1>Complete your order</h1>
          <div className="checkout-form">
            <div className="form-title">
              <span>1</span> Contact & shipping
            </div>
            <div className="fake-input wide">alex@example.com</div>
            <div className="fake-row">
              <div className="fake-input">Alex Morgan</div>
              <div className="fake-input">United States</div>
            </div>
            <div className="fake-input wide">240 Market Street</div>
          </div>
          <div className="checkout-form compact">
            <div className="form-title">
              <span>2</span> Payment
            </div>
            <div className="payment-placeholder" />
          </div>
        </section>
        <aside className="order-card">
          <h2>Order summary</h2>
          <div className="product-row">
            <div className="product-image">
              <div className="shirt">T</div>
            </div>
            <div>
              <b>Everyday Crew</b>
              <small>Sand · Medium</small>
              <span>$82.00</span>
            </div>
          </div>
          <div className="product-row">
            <div className="product-image cap">
              <div className="cap-shape" />
            </div>
            <div>
              <b>Canvas Cap</b>
              <small>Navy · One size</small>
              <span>$18.00</span>
            </div>
          </div>
          <div className="rule" />
          <div className="price-line">
            <span>Subtotal</span>
            <b>$100.00</b>
          </div>
          <div className="price-line">
            <span>Shipping</span>
            <b>Free</b>
          </div>
          <div className="price-line total">
            <span>Total</span>
            <b>$100.00</b>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ScanningScreen({ next }: { next: () => void }) {
  const [progress, setProgress] = useState(12);
  const [source, setSource] = useState(0);
  const sources = [
    "Scanning TikTok creator codes",
    "Checking brand partner offers",
    "Testing verified coupon stacks",
  ];
  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((value) => (value >= 94 ? 12 : value + 2));
    }, 90);
    const sourceInterval = window.setInterval(
      () => setSource((value) => (value + 1) % sources.length),
      1400,
    );
    return () => {
      window.clearInterval(interval);
      window.clearInterval(sourceInterval);
    };
  }, []);

  return (
    <div className="scene">
      <ProductCheckout dimmed />
      <div
        className="extension-popover scan-card"
        role="dialog"
        aria-label="Save and Share deal scan"
      >
        <div className="extension-head">
          <Brand />
          <button className="close-button" aria-label="Close">
            <Icon name="x" size={17} />
          </button>
        </div>
        <div className="scan-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="scan-icon">
            <Icon name="sparkles" size={30} />
          </div>
          <span className="source-chip tiktok">T</span>
          <span className="source-chip web">
            <Icon name="search" size={13} />
          </span>
          <span className="source-chip bolt">
            <Icon name="bolt" size={12} />
          </span>
        </div>
        <div className="ai-label">
          <span />
          <Icon name="sparkles" size={13} /> AI DEAL HUNTING
        </div>
        <h2>Finding you a better price</h2>
        <p className="scan-copy">AI is scanning TikTok and the web for hidden discount codes...</p>
        <div className="scan-status">
          <div className="status-row">
            <span>{sources[source]}</span>
            <b>{progress}%</b>
          </div>
          <div className="progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="original-total">
          <span>Original Cart Total</span>
          <b>$100.00</b>
        </div>
        <button className="ghost-skip" onClick={next}>
          Preview found savings <Icon name="chevron" size={15} />
        </button>
        <p className="secure-note">
          <Icon name="lock" size={12} /> We never change your cart without permission
        </p>
      </div>
    </div>
  );
}

function SummaryScreen({ next }: { next: () => void }) {
  return (
    <main className="extension-stage">
      <div className="extension-window">
        <div className="extension-browser-bar">
          <span className="mini-tabs">
            <i />
            <i />
            <i />
          </span>
          <div className="url-pill">
            <Icon name="lock" size={12} /> northline.com / checkout
          </div>
          <span className="browser-actions">
            <Icon name="share" size={15} />
            <Brand />
          </span>
        </div>
        <div className="extension-content">
          <div className="success-burst">
            <Icon name="check" size={26} />
          </div>
          <div className="found-label">
            <Icon name="sparkles" size={12} /> 3 DEALS APPLIED
          </div>
          <h1>Look what we found.</h1>
          <p className="subtitle">Your cart just got a whole lot better.</p>
          <div className="price-hero">
            <div>
              <span>Original price</span>
              <s>$100.00</s>
            </div>
            <div className="arrow-line">
              <Icon name="chevron" size={19} />
            </div>
            <div>
              <span>New price</span>
              <strong>$70.00</strong>
            </div>
          </div>
          <div className="saved-banner">
            <div className="saved-icon">
              <Icon name="trend" size={22} />
            </div>
            <div>
              <span>You saved</span>
              <strong>$30.00</strong>
            </div>
            <b>30% OFF</b>
          </div>
          <div className="deal-breakdown">
            <h3>Your deal stack</h3>
            <div>
              <span>
                <i>
                  <Icon name="check" size={12} />
                </i>{" "}
                Creator code <b>TIKTOK20</b>
              </span>
              <strong>−$20.00</strong>
            </div>
            <div>
              <span>
                <i>
                  <Icon name="check" size={12} />
                </i>{" "}
                Welcome offer
              </span>
              <strong>−$5.00</strong>
            </div>
            <div>
              <span>
                <i>
                  <Icon name="check" size={12} />
                </i>{" "}
                Shipping bundle
              </span>
              <strong>−$5.00</strong>
            </div>
          </div>
          <div className="donation-preview">
            <div className="charity-icon">
              <Icon name="heart" size={19} />
            </div>
            <div>
              <span>3% of your savings goes to</span>
              <b>Food Bank</b>
            </div>
            <strong>$0.90</strong>
          </div>
          <button className="paypal-button" onClick={next}>
            <Icon name="paypal" size={25} />
            <span>
              Checkout with <b>PayPal</b>
            </span>
            <Icon name="chevron" size={19} />
          </button>
          <p className="no-extra">
            <Icon name="check" size={13} /> Donation comes from savings—never added to your total
          </p>
        </div>
      </div>
    </main>
  );
}

function DonationScreen({ next, back }: { next: () => void; back: () => void }) {
  const [selected, setSelected] = useState("Food Bank");
  const charities = [
    { name: "Food Bank", detail: "Hunger relief", icon: "heart" as IconName, tone: "mint" },
    {
      name: "One Tree Planted",
      detail: "Climate action",
      icon: "leaf" as IconName,
      tone: "purple",
    },
    {
      name: "Clean Water Fund",
      detail: "Safe water access",
      icon: "home" as IconName,
      tone: "blue",
    },
  ];
  return (
    <div className="donation-scene">
      <div className="donation-bg">
        <ProductCheckout />
      </div>
      <div className="donation-overlay" />
      <section className="donation-modal">
        <button className="modal-close" onClick={back} aria-label="Back">
          <Icon name="x" size={18} />
        </button>
        <div className="giving-mark">
          <Icon name="heart" size={27} />
        </div>
        <p className="eyebrow centered">Turn savings into good</p>
        <h1>Share a little of the win.</h1>
        <p className="modal-intro">
          Your discounts saved you $30. We’ll donate 3% of those savings to a cause you choose.
        </p>
        <div className="allocation">
          <div>
            <span>You pay</span>
            <strong>$70.00</strong>
            <small>after discounts</small>
          </div>
          <div className="allocation-plus">+</div>
          <div className="donation-amount">
            <span>We give</span>
            <strong>$0.90</strong>
            <small>from your savings</small>
          </div>
        </div>
        <h3>Choose where it goes</h3>
        <div className="charity-options">
          {charities.map((charity) => (
            <button
              className={selected === charity.name ? "selected" : ""}
              onClick={() => setSelected(charity.name)}
              key={charity.name}
            >
              <span className={`cause-icon ${charity.tone}`}>
                <Icon name={charity.icon} size={18} />
              </span>
              <span>
                <b>{charity.name}</b>
                <small>{charity.detail}</small>
              </span>
              <i>{selected === charity.name && <Icon name="check" size={13} />}</i>
            </button>
          ))}
        </div>
        <button className="confirm-button" onClick={next}>
          Confirm donation & finish checkout <Icon name="chevron" size={17} />
        </button>
        <p className="secure-note">
          <Icon name="lock" size={12} /> Secure checkout powered by PayPal
        </p>
      </section>
    </div>
  );
}

function ImpactIllustration() {
  return (
    <svg
      className="impact-art"
      viewBox="0 0 510 230"
      role="img"
      aria-label="A family receiving a meal"
    >
      <path
        d="M26 183c58-44 93-35 136-10 40 23 76-9 129-24 61-17 110 12 190 42v39H26Z"
        fill="#d6f5e7"
      />
      <path
        d="M409 68c25 12 42 38 39 67-2 20-12 38-27 49"
        fill="none"
        stroke="#9ce3c4"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <circle cx="423" cy="47" r="17" fill="#fff" />
      <path d="M417 47h12M423 41v12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="272" cy="199" rx="101" ry="11" fill="#b7eacf" opacity=".7" />
      <path
        d="M191 157h162l-12 50H203Z"
        fill="#fff"
        stroke="#163e5c"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M242 156c0-19 14-34 31-34s31 15 31 34"
        fill="#f5b841"
        stroke="#163e5c"
        strokeWidth="3"
      />
      <path
        d="M250 140c9 9 37 9 46 0"
        fill="none"
        stroke="#fff0bd"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="273" cy="101" r="25" fill="#c57b57" />
      <path
        d="M250 99c0-21 9-30 24-30 17 0 27 15 24 34-6-8-17-11-26-12-10-1-17 4-22 8Z"
        fill="#273548"
      />
      <path
        d="M262 105c6 6 15 6 21 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M208 158c1-27-7-44-26-51-20-7-38 10-38 33 0 19 9 36 26 49"
        fill="#8b5cf6"
        stroke="#163e5c"
        strokeWidth="3"
      />
      <circle cx="177" cy="91" r="22" fill="#9b6047" />
      <path
        d="M154 92c-1-19 9-29 24-29 14 0 24 10 24 28-8-6-15-9-24-9-10 0-17 3-24 10Z"
        fill="#263548"
      />
      <path
        d="M166 95c5 5 13 5 18 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M350 185c13-15 20-31 15-47-5-15-21-24-35-17-13 6-20 20-17 37"
        fill="#2f80ed"
        stroke="#163e5c"
        strokeWidth="3"
      />
      <circle cx="337" cy="104" r="19" fill="#d59368" />
      <path d="M318 104c0-17 8-25 20-25 14 0 22 10 20 25-12-9-27-9-40 0Z" fill="#513828" />
      <path
        d="M328 108c4 4 11 4 16 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="227" cy="176" r="7" fill="#f5b841" />
      <circle cx="249" cy="177" r="8" fill="#10b981" />
      <circle cx="273" cy="175" r="7" fill="#f1876d" />
      <circle cx="296" cy="177" r="8" fill="#f5b841" />
      <circle cx="319" cy="175" r="7" fill="#10b981" />
      <path d="M49 79c8-16 19-23 33-20-2 17-12 27-33 20Z" fill="#10b981" />
      <path
        d="M51 79c21 4 33 19 38 43M75 112c15-11 28-11 39-2-10 14-23 15-39 2Z"
        fill="none"
        stroke="#17946d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M467 112c-7-13-16-19-27-17 2 14 10 22 27 17Z" fill="#8b5cf6" />
    </svg>
  );
}

function Dashboard() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <Brand />
        <nav>
          <a className="active">
            <Icon name="home" size={19} /> Overview
          </a>
          <a>
            <Icon name="receipt" size={19} /> Transactions
          </a>
          <a>
            <Icon name="heart" size={19} /> My causes
          </a>
        </nav>
        <div className="sidebar-impact">
          <span>
            <Icon name="sparkles" size={16} />
          </span>
          <b>
            Small choices,
            <br />
            real change.
          </b>
          <p>You’re in the top 12% of givers this month.</p>
        </div>
        <a className="settings">
          <Icon name="user" size={19} /> Profile & settings
        </a>
      </aside>
      <section className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">MY IMPACT</p>
            <h1>Your Impact Journey</h1>
            <p>Every smart purchase makes a difference. Here’s what we’ve achieved together.</p>
          </div>
          <button className="share-button">
            <Icon name="share" size={17} /> Share my impact
          </button>
        </div>
        <div className="stats-grid">
          <article className="stat-card savings">
            <div className="stat-icon">
              <Icon name="trend" size={23} />
            </div>
            <div>
              <span>Total Money Saved</span>
              <strong>
                $120<span>.00</span>
              </strong>
              <small>
                <b>↑ 18%</b> from last month
              </small>
            </div>
            <svg viewBox="0 0 190 70" aria-hidden="true">
              <path
                d="M0 61c27-10 37-8 55-25 18-16 34 4 52-7 19-11 25-30 43-19 17 10 24-2 40-9v69H0Z"
                fill="#d9f8e9"
              />
              <path
                d="M0 61c27-10 37-8 55-25 18-16 34 4 52-7 19-11 25-30 43-19 17 10 24-2 40-9"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
              />
            </svg>
          </article>
          <article className="stat-card donations">
            <div className="stat-icon">
              <Icon name="heart" size={23} />
            </div>
            <div>
              <span>Total Donated</span>
              <strong>
                $3<span>.60</span>
              </strong>
              <small>
                Across <b>8 purchases</b>
              </small>
            </div>
            <div className="donut">
              <div>
                <b>3%</b>
                <span>shared</span>
              </div>
            </div>
          </article>
        </div>
        <article className="impact-feature">
          <div className="impact-copy">
            <span className="impact-pill">
              <Icon name="sparkles" size={13} /> YOUR IMPACT IN ACTION
            </span>
            <h2>
              Your shopping has provided <em>4 meals</em> to families in need.
            </h2>
            <p>That’s more than a number—it’s four moments of nourishment, dignity, and hope.</p>
            <div className="meal-row">
              {[1, 2, 3, 4].map((item) => (
                <span key={item}>
                  <Icon name="heart" size={16} />
                </span>
              ))}
              <b>4 meals funded</b>
            </div>
          </div>
          <ImpactIllustration />
        </article>
        <div className="transactions-head">
          <div>
            <h2>Recent impact</h2>
            <p>See how each purchase adds up.</p>
          </div>
          <button>
            View all <Icon name="chevron" size={15} />
          </button>
        </div>
        <div className="transactions">
          <div className="transaction-labels">
            <span>Store</span>
            <span>You saved</span>
            <span>Cause supported</span>
          </div>
          {transactions.map((item) => (
            <div className="transaction-row" key={item.store}>
              <div className="store">
                <i style={{ background: item.color }}>{item.logo}</i>
                <span>
                  <b>{item.store}</b>
                  <small>{item.date}</small>
                </span>
              </div>
              <div className="amount">
                <b>{item.saved}</b>
                <small>saved</small>
              </div>
              <div className="cause">
                <span>
                  <Icon name={item.charity.includes("Tree") ? "leaf" : "heart"} size={16} />
                </span>
                <div>
                  <b>{item.charity}</b>
                  <small>{item.cause}</small>
                </div>
              </div>
              <button aria-label={`View ${item.store} transaction`}>
                <Icon name="chevron" size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  return (
    <AppShell step={step} setStep={setStep} extension={step < 3}>
      {step === 0 && <ScanningScreen next={() => setStep(1)} />}
      {step === 1 && <SummaryScreen next={() => setStep(2)} />}
      {step === 2 && <DonationScreen next={() => setStep(3)} back={() => setStep(1)} />}
      {step === 3 && <Dashboard />}
    </AppShell>
  );
}
