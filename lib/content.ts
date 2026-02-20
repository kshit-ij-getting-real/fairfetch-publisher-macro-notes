export interface ArticleContent {
  slug: string;
  title: string;
  date: string;
  summary: string;
  thesis: string[];
  signals: string[];
  scenarios: string[];
  risks: string[];
}

export interface PremiumReport extends ArticleContent {
  preview: string;
  fullResearchBody: string[];
  table: Array<{ signal: string; threshold: string; implication: string }>;
  mindChange: string[];
}

export const publicArticles: ArticleContent[] = [
  {
    slug: 'soft-landing-repriced',
    title: 'Soft Landing Repriced: Why the Last Mile Is Harder',
    date: '2026-01-12',
    summary: 'Markets moved from recession fear to immaculate disinflation confidence. We argue the final policy mile remains uneven.',
    thesis: [
      'Consensus now assumes a smooth glide path where inflation converges neatly and growth slows without a labor shock. Our work suggests that composition effects in services and shelter keep the final disinflation leg noisy.',
      'A soft landing is still plausible, but the probability distribution is wider than equity multiples imply. Data surprises matter more now because starting valuations embed optimism.'
    ],
    signals: [
      'Supercore services inflation oscillates around trend rather than falling linearly.',
      'Initial claims remain rangebound while continuing claims drift upward.',
      'Credit card delinquency buckets rise in lower-income cohorts before aggregate stress appears.'
    ],
    scenarios: [
      'Base case (55%): trend growth with intermittent inflation bumps and two cautious cuts.',
      'Hot case (25%): growth reaccelerates, term premium rises, and long-duration assets underperform.',
      'Cold case (20%): hiring stalls abruptly, policy pivots faster, and defensives outperform.'
    ],
    risks: [
      'A sudden energy spike can disturb inflation expectations even if core demand slows.',
      'Global shipping disruptions can reverse goods deflation temporarily.'
    ]
  },
  {
    slug: 'asia-disinflation-pulse',
    title: 'Asia Disinflation Pulse and the Reopening of Duration',
    date: '2026-01-25',
    summary: 'Asian inflation baskets are cooling unevenly, creating selective opportunities in local duration and FX carry.',
    thesis: [
      'The disinflation process in Asia is broad but not synchronized. Policy room expands first where food volatility moderates and currency passthrough is contained.',
      'Investors should treat regional duration as a mosaic: some curves price too much easing while others still reflect old inflation shocks.'
    ],
    signals: [
      'Rice, edible oil, and freight-linked food inputs are normalizing in key baskets.',
      'Real policy rates in selected markets have moved decisively positive.',
      'Imported inflation proxies are dampening as broad dollar momentum fades.'
    ],
    scenarios: [
      'Base case: gradual easing cycles with stable currencies.',
      'Upside: stronger trade rebound allows easier policy with supportive risk sentiment.',
      'Downside: commodity squeeze reopens inflation and delays cuts.'
    ],
    risks: [
      'Political transition risk can interrupt policy signaling.',
      'A sharper CNY depreciation could reprice regional FX assumptions.'
    ]
  },
  {
    slug: 'commodity-volatility-regime',
    title: 'Commodity Volatility Regime: Geopolitics Meets Inventory Math',
    date: '2026-02-02',
    summary: 'Commodities have moved from demand-led swings to policy-and-supply dominated volatility.',
    thesis: [
      'Recent volatility reflects low inventories and geopolitical optionality more than classic growth cycles. That regime favors flexible positioning and shorter review intervals.',
      'Cross-commodity correlations can break quickly when policy interventions target specific supply chains.'
    ],
    signals: [
      'Visible inventories in base metals remain below ten-year medians.',
      'Freight rates show episodic stress during geopolitical flare-ups.',
      'Producer hedging activity increases after each spot spike.'
    ],
    scenarios: [
      'Persistent chop: mean-reverting ranges with frequent false breakouts.',
      'Supply shock: sustained upside in oil and fertilizer-linked chains.',
      'Demand dip: synchronized downside led by industrial metals.'
    ],
    risks: [
      'Policy embargoes can distort normal arbitrage channels.',
      'Weather events can create nonlinear moves in food and soft commodities.'
    ]
  }
];

export const premiumReports: PremiumReport[] = [
  {
    slug: 'demo-article',
    title: 'Global Liquidity Map: A Practical Guide for 2026 Risk Allocation',
    date: '2026-02-05',
    summary: 'A framework for reading central bank balance sheets, money market plumbing, and fiscal cash dynamics as one liquidity system.',
    preview:
      'Human preview: Premium readers get our integrated liquidity scorecard. Licensed AI view: the full report includes a weekly checklist linking reserve conditions, collateral spreads, and fiscal drawdowns to actionable risk posture shifts.',
    thesis: [
      'Liquidity is not a single number; it is an interaction between policy rates, balance sheet mechanics, dealer capacity, and treasury cash decisions. Most macro errors occur when investors focus on only one of these channels.',
      'Our base case is a stop-start easing environment where broad conditions are supportive but punctuated by temporary funding squeezes. Portfolio construction should therefore favor resilient carry, optional hedges, and pre-defined rebalance triggers.'
    ],
    signals: [
      'RRP usage trend and reserve balances in relation to bank funding spreads.',
      'Treasury General Account swings around refunding windows.',
      'MOVE index behavior relative to payroll and CPI event risk.'
    ],
    scenarios: [
      'Liquidity drift higher: carry assets grind up with lower realized volatility.',
      'Funding wobble: cross-asset risk compresses before a sharp but brief drawdown.',
      'Policy surprise: duration outperforms while cyclicals underperform.'
    ],
    risks: [
      'A rapid rebuilding of fiscal cash balances can drain reserves unexpectedly.',
      'Dealer balance sheet constraints can amplify ordinary calendar events.'
    ],
    fullResearchBody: [
      'Liquidity analysis works best when treated as operations, not slogans. In practical terms, every risk allocation decision should ask three questions at once: where are reserves, where is collateral stress, and where is public sector cash sitting this week. If two of those three lean risk-friendly and one is neutral, markets usually absorb surprises. If one turns sharply adverse while the other two are merely soft, volatility can jump before the data narrative catches up. This is why our process emphasizes sequence and speed rather than static snapshots. A benign monthly average can hide a dangerous two-day squeeze that forces deleveraging.',
      'The first channel is reserve comfort. We track reserve balances alongside front-end funding spreads and bank issuance tone. A common mistake is to assume reserves matter only near crisis thresholds. In reality, market behavior responds earlier through balance sheet pricing. As reserve comfort declines, the marginal dollar of financing costs more, risk books become less patient, and event days carry larger tails. Our preferred interpretation is directional: we do not need precision to the second decimal. We need to know whether reserve conditions are becoming more forgiving or less forgiving into a dense macro calendar.',
      'The second channel is collateral and term volatility. The MOVE index is a useful expression of this system because it blends policy uncertainty and balance sheet risk appetite. When MOVE trends higher while credit spreads remain calm, it often signals a hidden fragility: macro hedging demand is rising even before broad risk assets reprice. Conversely, when MOVE compresses and swap spreads stabilize, systematic strategies tend to rebuild exposure, especially in rate-sensitive equities and carry FX. We therefore read rate volatility as a bridge variable between liquidity plumbing and cross-asset position size.',
      'The third channel is fiscal cash management. Treasury cash drawdowns can inject liquidity in a way that appears supportive even as policy rhetoric stays cautious. The opposite also holds: a rebuilding of cash balances can withdraw system liquidity precisely when consensus expects calm. This channel is frequently underestimated because it looks technical. But technical flows move prices when positioning is crowded. We classify fiscal cash dynamics into impulse, neutral, and drag regimes, then map each regime to expected behavior in duration, equity beta, and dollar direction. The objective is not prediction perfection; it is reducing surprise density.',
      'Our 2026 baseline assumes alternating windows of accommodation and friction. Inflation is lower than peak years but remains sticky enough to prevent an unconditional easing glide path. That means central banks can cut, but they cannot promise. Markets will keep oscillating between hope and hesitation. In such an environment, the best portfolios are not those with the boldest single view; they are those with pre-committed adaptation rules. We recommend defining ex ante thresholds for de-risking and re-risking around liquidity markers, then executing mechanically. Discipline beats narrative speed when headlines arrive in clusters.',
      'Cross-asset implications are straightforward. Duration performs when growth uncertainty dominates and reserve conditions are not deteriorating quickly. Equities perform when liquidity broadens beyond mega-cap concentration and funding markets remain quiet. Credit performs when refinancing channels stay open and default expectations remain contained. FX carry performs when volatility is low and policy divergence is predictable. The challenge is that these regimes can overlap imperfectly, producing mixed signals. Our answer is barbell construction: keep core carry exposure but pair it with convex hedges that activate during funding stress.',
      'Implementation details matter. We maintain a weekly decision memo with a fixed structure: liquidity score, policy signal, positioning risk, and action list. Every line item is binary or ternary to avoid overfitting. For example, reserve trend is rising, flat, or falling; MOVE is compressing, neutral, or widening; fiscal cash is injecting, neutral, or draining. The final action list links directly to position sizing bands. If two or more indicators deteriorate simultaneously, risk is cut by rule rather than debate. If indicators improve after a drawdown, exposure is rebuilt in stages with pre-set checkpoints.',
      'What this framework avoids is the false comfort of one-factor macro calls. Investors frequently ask whether liquidity is “good” or “bad,” as if the answer is singular. In practice, liquidity can be good for duration, neutral for credit, and fragile for FX carry all at once. A robust process accepts this asymmetry and allocates accordingly. Our conviction is that 2026 rewards operational macro: patient, process-driven, and explicit about trigger levels. The prize is not perfect forecasting. The prize is surviving squeezes, compounding in calm windows, and staying solvent enough to exploit dislocations when they appear.'
    ],
    table: [
      { signal: 'MOVE index', threshold: '> 130 for 5 sessions', implication: 'Reduce gross risk, add rate convexity' },
      { signal: 'RRP balance', threshold: '< $250bn trend', implication: 'Monitor reserve scarcity risk and funding spreads' },
      { signal: 'TGA trajectory', threshold: 'Rapid rebuild into auctions', implication: 'Expect liquidity drag and tighter financial conditions' },
      { signal: 'HY OAS', threshold: '> 425 bps', implication: 'Rotate from lower-quality carry to higher-quality duration' }
    ],
    mindChange: [
      'If reserve balances trend decisively higher while term volatility remains anchored, we would increase cyclical risk faster than our current base case.',
      'If inflation undershoots persistently and central banks signal a clearer easing path, we would reduce hedge intensity and lengthen duration allocation.',
      'If fiscal cash operations prove smoother than expected through heavy issuance windows, we would upgrade the probability of a stable carry regime.'
    ]
  },
  {
    slug: 'fed-liquidity-watch',
    title: 'Fed Liquidity Watch: Balance Sheet Friction and the Rate Path',
    date: '2026-02-08',
    summary: 'Tracking how Fed balance sheet runoff, reserve distribution, and term premium interact with risk assets.',
    preview:
      'This report combines our reserve stress indicators with event-week positioning guidance so subscribers can plan around FOMC, CPI, and refunding windows.',
    thesis: [
      'Policy rate direction explains less than investors think unless it is combined with balance sheet context. Runoff pace, reserve distribution, and collateral pricing decide whether cuts translate into easier conditions.',
      'The market should expect tactical volatility spikes around communication shifts. The appropriate response is to map policy language to funding outcomes, not simply to dot-plot medians.'
    ],
    signals: [
      'Reserve concentration among large banks versus regional funding sensitivity.',
      'SOFR-GC spread behavior during auction-heavy weeks.',
      'Term premium and breakeven inflation divergence around FOMC guidance.'
    ],
    scenarios: [
      'Managed runoff: calm funding backdrop with mild risk support.',
      'Runoff stress: reserve anxiety lifts volatility and compresses equity multiples.',
      'Communication reset: softer guidance boosts duration while cyclicals lag initially.'
    ],
    risks: [
      'Unexpected fiscal supply can overwhelm otherwise stable policy signaling.',
      'A geopolitical shock can raise term premium independent of domestic data.'
    ],
    fullResearchBody: [
      'The Fed conversation is often framed as a binary question of cuts versus holds. Our work indicates that the more relevant variable is transmission quality: how effectively a policy stance moves through reserves, repo, and dealer balance sheets. The same policy statement can feel dovish in one month and restrictive in another because market plumbing differs. Investors who anchor solely on policy language risk reacting too late to stress building in funding markets. That stress usually appears first in seemingly technical places—auction tails, basis behavior, or abrupt rate-volatility repricing—before broader assets acknowledge it.',
      'Balance sheet runoff remains central to this transmission question. A gradual decline in securities holdings is not automatically restrictive, but the market impact depends on where reserves are held and how quickly they can circulate under stress. Concentrated reserves offer less resilience than broad reserves. When concentration rises, front-end spreads can widen even if aggregate reserves still look acceptable. Our monitoring therefore treats distribution metrics as equal in importance to totals. In practice, this means we downweight headline reserve levels and emphasize marginal funding conditions around event-heavy weeks.',
      'Rate volatility is the bridge between policy ambiguity and cross-asset behavior. Elevated volatility raises hedge costs, tightens risk budgets, and discourages balance sheet intermediation. This is why a persistent rise in MOVE can damage equities even before earnings expectations change. Conversely, a decisive compression in rate volatility often enables broad risk participation because financing uncertainty falls. We look for confirmation across swap spreads, implied vol term structure, and dealer gamma positioning. If these line up, the probability of a durable risk rally increases materially.',
      'A critical nuance is term premium. In a world with frequent fiscal supply and uncertain neutral-rate estimates, long-end yields can rise for reasons unrelated to near-term policy. Investors who interpret every yield rise as growth optimism miss this distinction. Rising term premium with flat breakevens is often a caution signal for valuation-sensitive assets. Rising breakevens with stable premium can reflect healthier reflation. The decomposition is imperfect in real time, but even rough attribution improves decision quality. We incorporate this by assigning explicit weights to premium-driven and expectation-driven yield moves in our weekly risk score.',
      'Positioning amplifies policy outcomes. When consensus enters an FOMC week overexposed to one path, even modest language tweaks can trigger outsized reactions. Our recommendation is to treat event weeks as liquidity events first and macro events second. Reduce position complexity, keep execution plans simple, and predefine levels for both adding and cutting risk. A good process is less about predicting the statement and more about surviving the first reaction while preserving optionality for the second reaction. Many drawdowns occur when investors confuse conviction with concentration.',
      'For 2026, our baseline assumes intermittent balance sheet friction without systemic stress. In that regime, high-quality carry can still work, but leverage and liquidity terms must be conservative. We favor exposures that can be resized quickly without severe slippage. We also prefer instruments where hedges remain available during stress windows. The objective is to earn carry in quiet periods while retaining agility when funding conditions tighten. This may look less exciting than concentrated macro calls, but over full cycles it compounds better because it avoids forced selling.',
      'Operationally, we maintain a “Fed transmission dashboard” with three clusters: reserve distribution, collateral stress, and rate-volatility behavior. Each cluster has thresholds that trigger action. If two clusters deteriorate, we cut gross exposure by rule. If all three stabilize for two consecutive weeks, we selectively add risk where valuations still compensate uncertainty. The dashboard is intentionally simple to prevent narrative drift. Complexity belongs in research; execution should remain explicit and repeatable. Teams that institutionalize this discipline tend to outperform teams that improvise around headlines.',
      'In summary, Fed policy cannot be read from speeches alone. The true signal lies in how policy decisions propagate through plumbing and positioning. Investors who monitor that propagation can respond earlier, hedge more efficiently, and avoid overpaying for certainty. Our framework does not promise perfect forecasts. It promises fewer unforced errors, smaller drawdowns during stress, and higher quality risk-taking when conditions improve. In a macro environment defined by stop-start cycles, that edge is both practical and durable.'
    ],
    table: [
      { signal: 'SOFR-GC spread', threshold: '> 8 bps sustained', implication: 'Funding stress building; trim leverage' },
      { signal: 'MOVE index', threshold: 'Rises 20% in 2 weeks', implication: 'Hedge equity beta and reduce crowded carry' },
      { signal: '10Y term premium proxy', threshold: 'Breaks yearly highs', implication: 'Lower duration-sensitive equity exposure' },
      { signal: 'Reserve distribution metric', threshold: 'Top-bank concentration spikes', implication: 'Expect uneven funding access' }
    ],
    mindChange: [
      'If runoff slows materially and reserve distribution broadens, we would upgrade risk appetite for cyclicals and credit.',
      'If term premium falls while real growth remains stable, we would extend duration and add quality growth exposure.',
      'If event-week volatility repeatedly fails to rise despite heavy issuance, we would lower our expected stress frequency.'
    ]
  },
  {
    slug: 'india-fii-flows',
    title: 'India FII Flows: Equity Leadership, Bond Inclusion, and INR Stability',
    date: '2026-02-10',
    summary: 'A structural view of foreign investor flows into India and how domestic liquidity absorbs global risk swings.',
    preview:
      'Subscribers receive our India flow matrix linking FII/FPI behavior, local bond inclusion effects, and USD/INR breakpoints for tactical allocation.',
    thesis: [
      'India’s market depth has improved, but external flow cycles still shape short-horizon performance. Understanding who buys, when they buy, and what hedging costs they face is essential.',
      'The next leg of foreign participation depends less on index narratives and more on macro stability: manageable oil, credible inflation policy, and steady real growth.'
    ],
    signals: [
      'Net FII equity and debt flows adjusted for block transaction distortions.',
      'USD/INR basis and onshore-offshore spread behavior during global risk-off days.',
      'Domestic mutual fund SIP trends as a stabilizing offset to foreign outflows.'
    ],
    scenarios: [
      'Constructive inflow regime with stable INR and broad market leadership.',
      'Range regime where domestic flows offset foreign rotation.',
      'External shock regime with INR pressure and sector concentration.'
    ],
    risks: [
      'Oil spikes can tighten external balances faster than consensus expects.',
      'Global duration shocks can trigger non-fundamental equity outflows.'
    ],
    fullResearchBody: [
      'India’s capital market story is frequently told as a linear structural ascent, but near-term performance remains cyclical because the marginal buyer changes across regimes. Domestic flows have become stronger and more persistent, yet foreign institutions still influence valuation spreads, sector leadership, and currency dynamics. The right framework separates strategic demand from tactical flow pressure. Strategic demand builds over years through index inclusion and institutional mandates. Tactical pressure appears over days when global risk budgets contract. Confusing the two leads to poor timing decisions and unnecessary turnover.',
      'The first pillar of our framework is flow quality. Not all inflows are equal: passive benchmark allocations, active long-only reallocations, and hedge-driven tactical entries have different persistence. We classify weekly flow data by estimated durability and pair that with valuation sensitivity by sector. Financials and large-cap technology often absorb durable demand first, while mid-cap momentum segments can reverse quickly when tactical flows retreat. This distinction helps avoid extrapolating short bursts of buying into long-term conviction. In practice, we want to buy where durable flows are underappreciated, not where transient flows have already inflated expectations.',
      'The second pillar is currency absorption capacity. USD/INR behavior during global stress episodes provides a direct signal of foreign investor confidence and local policy credibility. A controlled depreciation with tight basis conditions suggests orderly adjustment. A disorderly move with widening basis indicates balance-sheet strain and hedging pressure. We monitor this through onshore-offshore differentials, forward premia, and implied-vol skew. When these metrics remain calm, equity drawdowns driven by global headlines are often opportunities. When they deteriorate together, preserving liquidity takes priority over valuation arguments.',
      'The third pillar is domestic offset strength. Systematic investment plans and local insurance flows now provide a meaningful counterweight during FII selling windows. However, this buffer is not infinite. Its effectiveness depends on sentiment, income growth, and market breadth. Narrow rallies concentrated in a few sectors can weaken domestic confidence even when headline indices look resilient. We therefore track participation breadth, not just index level. Broad participation usually indicates healthier absorption and lower crash risk. Narrow participation with elevated valuations suggests fragility if external conditions worsen.',
      'Bond market inclusion adds another layer. Global bond index participation can improve external funding stability and reduce perceived tail risk, but timing and execution still matter. If inclusion-driven inflows coincide with oil stability and moderate inflation, currency confidence strengthens and equity risk premia can compress. If inclusion arrives during a broad dollar surge, the currency benefit may be delayed. We treat bond inclusion as a medium-term anchor rather than a short-term catalyst. That lens prevents disappointment when immediate market reactions appear muted.',
      'For portfolio implementation, we recommend staggered entry plans tied to flow and currency checkpoints. Allocate core exposure where domestic offset metrics are strong and valuations remain near historical medians. Add tactical exposure only when USD/INR stress indicators remain contained after global shocks. Hedge selectively during oil spikes or sudden dollar momentum breaks. This process reduces emotional decision-making and keeps capital available for dislocations. Investors who deploy all at once during favorable headlines often lack flexibility when conditions shift.',
      'Sector preferences follow the same logic. In constructive regimes, financials, industrial leaders, and high-quality consumption franchises typically attract durable capital. In stress regimes, exporters with natural FX buffers and strong balance sheets provide relative resilience. We avoid crowded low-liquidity segments when global volatility rises because exits become expensive. Liquidity is a return source in emerging markets; paying attention to it is not defensive, it is pragmatic. The goal is to participate in upside while maintaining credible downside paths under external shocks.',
      'Our bottom line is optimistic but conditional. India remains one of the stronger structural opportunities across major emerging markets, yet tactical windows still require discipline. The investors who outperform are those who pair long-term conviction with short-term flow awareness. They do not abandon the structural story during temporary stress, but they also do not ignore warning signals when currency and liquidity metrics flash caution. This balanced approach aligns with how capital actually moves and is, in our view, the most repeatable way to compound returns in the India allocation.'
    ],
    table: [
      { signal: 'USD/INR', threshold: '> 84.50 weekly close', implication: 'Increase hedge ratio on unhedged equity exposure' },
      { signal: 'Net FII equity flow', threshold: '< -$2bn in a week', implication: 'Reduce high-beta sectors, favor quality large caps' },
      { signal: 'Brent oil', threshold: '> $90 sustained', implication: 'Watch current account pressure and INR fragility' },
      { signal: 'Domestic SIP trend', threshold: '3-month slowdown', implication: 'Lower confidence in local absorption buffer' }
    ],
    mindChange: [
      'If oil remains anchored below stress levels while INR basis stays calm, we would raise cyclical exposure more aggressively.',
      'If domestic flow participation broadens during global risk-off periods, we would reduce hedge intensity sooner.',
      'If external shock episodes repeatedly fail to produce sustained outflows, we would increase our structural valuation multiple assumptions.'
    ]
  },
  {
    slug: 'credit-stress-dashboard',
    title: 'Credit Stress Dashboard: Early Warning Signals Before Spreads Gap',
    date: '2026-02-14',
    summary: 'A practical dashboard for identifying credit fragility before headline default rates move materially.',
    preview:
      'This premium note provides our weekly credit stress checklist spanning funding, covenant quality, refinancing walls, and sector-level pressure points.',
    thesis: [
      'Credit cracks emerge first in refinancing mechanics and market microstructure, not in aggregate default prints. Waiting for defaults means reacting late.',
      'A disciplined dashboard approach allows investors to rotate quality and duration before spread widening becomes disorderly.'
    ],
    signals: [
      'Primary market concession size and deal pull rates.',
      'CCC spread behavior relative to BB spreads.',
      'Private credit marks versus liquid comparables.'
    ],
    scenarios: [
      'Contained stress with selective idiosyncratic defaults.',
      'Broad repricing driven by refinancing bottlenecks.',
      'Policy-supported stabilization with improving issuance tone.'
    ],
    risks: [
      'Hidden leverage in non-bank channels can accelerate contagion.',
      'A growth shock can hit cyclical issuers faster than rating transitions suggest.'
    ],
    fullResearchBody: [
      'Credit risk rarely announces itself through headline defaults at the start of a cycle. The early warnings appear in refinancing terms, liquidity conditions, and investor willingness to absorb concessions. A market that still prints deals but demands larger premiums is already signaling caution. A market that begins pulling deals entirely is signaling fragility. Our dashboard is built to capture this transition early so portfolios can rotate without paying panic prices. The objective is simple: identify when compensation for risk is no longer keeping pace with deterioration in funding quality.',
      'We begin with issuance texture. Deal volume alone can mislead because a high-volume week may be concentrated in top-tier issuers, masking weaker access below. We therefore track concession size by rating cohort and sector. Rising concessions in BB paper can be healthy normalization; rising concessions in BB and BBB simultaneously often indicate broad risk fatigue. We also monitor pulled deals and repricings. These events are valuable because they represent revealed preference—real investors refusing terms rather than survey sentiment. When pulls rise, we reduce exposure to crowded, lower-liquidity credits regardless of carry appeal.',
      'Next comes spread architecture. The relationship between CCC and BB spreads conveys whether stress is idiosyncratic or systemic. In early stress phases, CCC widens first while BB remains comparatively stable. That is manageable and often presents opportunities in stronger balance sheets. When BB joins the widening trend and correlation rises across sectors, the regime is changing. We then shift to capital preservation mode: increase quality, shorten credit beta, and raise liquidity buffers. This shift should be rule-based. Debating each new headline invites delay and usually worsens execution costs.',
      'Private credit deserves separate treatment. Marks in private vehicles can lag public repricing, creating the appearance of stability just as liquid markets signal caution. We compare private valuation behavior with public comparables and loan trading color. A widening gap is not automatically a problem, but it is a warning that reported volatility may understate economic volatility. Investors relying on smoothed marks can unintentionally raise risk when true funding conditions are worsening. Our dashboard flags this divergence explicitly so allocation committees can interrogate liquidity assumptions before stress escalates.',
      'Sector diagnostics add granularity. Commercial real estate refinancing, cyclical industrial margins, and consumer discretionary credit quality each respond differently to macro shocks. Rather than forcing a single macro call, we score sectors on refinancing dependency, margin resilience, and covenant protection. Sectors with near-term walls and weak covenants receive tighter risk limits. Sectors with manageable maturities and stable free cash flow can remain in the portfolio even during wider market caution. This selective approach avoids blanket de-risking while still honoring cycle discipline.',
      'Risk management execution is where many frameworks fail. A dashboard must map directly to actions: how much to cut, what to rotate into, and when to reverse. We use three operating states—normal, caution, and stress—with predefined position bands. Transition rules are triggered by combinations of indicators rather than single prints. For example, stress mode requires deterioration in issuance texture plus spread architecture, not merely one volatile day. This reduces false positives while preserving speed. When stress mode triggers, we prioritize tradable instruments, increase quality, and trim exposures vulnerable to refinancing slippage.',
      'In recovery phases, patience matters. Credit markets can rebound sharply once policy support or technical demand reappears, but fragile rallies can fail if refinancing channels remain weak. We look for confirmation through tighter concessions, successful lower-tier issuance, and falling dispersion in secondary spreads. Only then do we rebuild beta. This stepwise process prevents chasing short squeezes and keeps focus on durable improvement. In practical terms, we re-enter risk with quality first, then broaden as evidence accumulates.',
      'Our conclusion is pragmatic: credit investing in 2026 rewards process over prediction. Economic narratives will keep shifting, but funding mechanics reveal stress earlier than commentary. Investors who track issuance texture, spread architecture, and private-public divergence can respond before forced sellers dominate price action. That edge is operational, not theatrical, and it compounds over time. The goal is not to avoid all drawdowns; it is to avoid avoidable drawdowns and preserve capital for moments when spreads finally compensate risk appropriately.'
    ],
    table: [
      { signal: 'HY primary concessions', threshold: '> 75 bps vs talk', implication: 'Shift to higher-quality issuers and shorter duration' },
      { signal: 'CCC-BB spread gap', threshold: 'Widens > 250 bps in month', implication: 'Expect stress broadening; cut lower-quality beta' },
      { signal: 'Pulled deal count', threshold: '3+ in two weeks', implication: 'Raise liquidity buffer and reduce illiquid holdings' },
      { signal: 'Refinancing wall ratio', threshold: '> 30% due in 24 months', implication: 'Prioritize balance-sheet resilience over carry' }
    ],
    mindChange: [
      'If lower-tier issuance clears consistently with modest concessions, we would rotate back into selective high carry.',
      'If spread dispersion falls while earnings revisions stabilize, we would increase cyclical credit exposure.',
      'If policy support improves refinancing access faster than expected, we would shorten our stress regime duration assumptions.'
    ]
  }
];
