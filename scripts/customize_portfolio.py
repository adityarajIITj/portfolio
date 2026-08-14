#!/usr/bin/env python3
"""Replace Honey agency copy with Aditya Raj portfolio content. Style unchanged."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "index.html"

META_DESC = (
    "Aditya Raj — AI & Data Science student at IIT Jodhpur. "
    "Building models, exploring LLMs, and shipping things that matter."
)

# Full-string replacements only (avoid partial matches like HERE inside WHERE)
REPLACEMENTS = [
    ("<title>Honey</title>", "<title>Aditya Raj | AI & Data Science</title>"),
    ('content="Honey"', 'content="Aditya Raj"'),
    ("Honey is a hyper-nimble, fully-embedded design and growth wing that challenges enterprises to build, market and innovate at the speed and tenacity of a startup.", META_DESC),
    ("https://www.withhoney.com/", "https://adityago.tech/"),
    ("honey—", "aditya—"),
    ("hello@withhoney.com", "b25bs1020@iitj.ac.in"),
    ("hello[AT]honey.AGENCY", "b25bs1020@iitj.ac.in"),
    ('NEWSLETTER<br class="framer-text">ACCESS', "GITHUB"),
    ("NEWSLETTER ACCESS", "GITHUB"),
    ("HIRE US", "CONTACT"),
    ("https://www.linkedin.com/company/honey-copy/", "https://github.com/adityarajIITj"),
    ("LINKEDIN", "GITHUB"),
    ("Move like a startup ", "Build at the frontier "),
    (
        'even if you are<span class="framer-text" style="--framer-letter-spacing:-0.09em">n</span><span class="framer-text" style="--framer-letter-spacing:-0.02em">\'t</span> one.',
        "shipping things that matter.",
    ),
    ("PARTNERS IN CRIME", "TECH STACK"),
    ("escape velocity", "view work"),
    ("SERVICES", "SKILLS"),
    ("We write, design and build for billion dollar brands.", "Technical toolkit."),
    (
        "Landing pages that make your customers weak in the knees. Design worthy of a museum wall. Copy that reads like poetry and sells like Ogilvy. UX/UI as sticky as hot tar in North Carolina. Paid ads that sell like a Florida Snow Cone Vendor on the hottest day of the year. Pitch decks that writes checks. Advertising campaigns that give Don Draper a run for his money. And a whole lot of other shit we’re not allowed to talk about here.",
        "A growing arsenal focused on AI/ML with a solid systems foundation — Python, PyTorch, NLP, Linux, and transformer architectures. Learn by building; every project is an opportunity to grow.",
    ),
    ("MUM’S THE WORD", "VIEW GITHUB"),
    ("HOW WE WORK", "MY JOURNEY"),
    ("(Our process is as easy as 1… 2… 3…)", "(Four milestones and counting.)"),
    ("It’s not a deal with the devil", "Driven by curiosity, powered by code."),
    ("One Problem", "Joined IIT Jodhpur"),
    (
        "We don’t solve problems. We overwhelm them. We focus on the biggest baddest wolf plaguing your enterprise and we throw all of our resources, expertise and creative powers at taking it down.",
        "B.Tech in Applied AI & Data Science begins. IIT Jodhpur '29 — where theory meets terminals, papers, and late-night experiments.",
    ),
    ("Two Weeks", "First Python Project"),
    (
        "Like your dev teams, we work in two-week sprints. Once we’ve honed in on a problem, we spend two weeks solving it. Then, we move on to the next.",
        "Built automation scripts and data pipelines — my first hands-on taste of turning ideas into running code.",
    ),
    ("Three Months", "Crystal Auth System"),
    (
        "Rather than locking you into an iron-clad year-long contract, we ask our clients to commit to just 3-months at a time. We’re confident you’ll be so overwhelmed with the value we provide, you’ll want to re-up quarter after quarter after quarter.",
        "Designed a secure authentication framework from scratch — multi-factor auth, modern encryption, and secure session lifecycle management.",
    ),
    ("CLIENTS", "PROJECTS"),
    ("Goliath meet David.", "Selected work."),
    ("David meet Goliath.", "Things I've built."),
    (
        "We’ve always wondered what would happen if David and Goliath set aside their differences and got into business together. Our hunch is they’d make a hell of a lot of money.",
        "Hands-on systems I've shipped or am actively exploring — from secure auth to language models built layer by layer.",
    ),
    (
        "Something is lost when startups make the transition to enterprise. What they gain in capital, headcount and clout, they lose in creativity, agility and chutzpah.",
        "Crystal Auth System (Production): Python, Cryptography, Security. Indigenous LLM (In Progress): PyTorch, NLP, Transformers.",
    ),
    (
        "Honey is a propulsion agency inside the planet’s biggest and most notorious enterprises, allowing them to build, market and innovate like startups.",
        "More experiments in AI, data science, and systems programming ship regularly. Open to collaborate on research and interesting builds.",
    ),
    ("HUG IT OUT", "GITHUB"),
    ("BEFORE // HONEY©", "BEFORE COLLEGE"),
    ("// HONEY©", "// IIT-J '29"),
    ("AFTER HONEY", "AFTER CODE"),
    ("LOVE BOMBING.", "CRYSTAL AUTH."),
    (
        "Agencies romance you like a rising Hollywood starlet. Rolling out the red carpet with grand promises of global adoration, endless award nominations and 22-minute standing ovations.",
        "A secure authentication framework built from scratch — MFA, modern encryption, and session lifecycle management. Production-ready.",
    ),
    ("GAS LIGHTING.", "INDIGENOUS LLM."),
    (
        "As the ink on the contract dries, effort evaporates into thin air. Meetings and updates never come. You spend weeks treading through “R&D” hell, burning cash like firewood. They promised the world. You're left with a ghost town.",
        "Hands-on exploration of building a Large Language Model from the ground up — understanding transformers by writing every layer from scratch.",
    ),
    ("GHOSTING.", "PIPELINE."),
    (
        "Shackled by long-term contracts, founders watch budgets die on the vine. CMOs quietly change their LinkedIn status to “open to work” in preparation for project failure. All the while, your agency is nowhere to be found.",
        "Constant experiments in AI, data science, and systems programming. New repos ship regularly — more in the pipeline.",
    ),
    ("MOVE FASTER.", "OPEN SOURCE."),
    (
        "We don’t chase deadlines. We devour them. We move like a jaguar that hasn’t eaten in days––that smells blood. Our hunger is insatiable. Every two weeks you get cunning campaigns, delicious designs and criminally good copy you can deploy immediately.",
        "Community-driven development accelerates everything. You'll find me in the Linux terminal, contributing to open source, or reading transformer papers at 2 AM.",
    ),
    ("PRODUCE MORE.", "PYTORCH."),
    (
        "Great brands, like artists, are prolific. Picasso produced 50,000 works of art over the course of his lifetime. You should be no different. In less than 90 days, you’ll experience a prolificness that will make your competitors call emergency board meetings.",
        "PyTorch, TensorFlow, Scikit-learn — building and training models with a focus on NLP and transformer architectures.",
    ),
    ("SELL BEAUTIFULLY.", "SYSTEMS."),
    (
        "Ogilvy said it best: It’s not creative unless it sells. That's the law around here. It’s the gospel. Every piece of work we produce for you is built like a Ferrari. It’s designed with the sole intention to win. It just so happens to look pretty, too.",
        "Linux, Git, Docker, Pandas/NumPy — solid systems foundation underneath every ML experiment.",
    ),
    ("HOW we sprint", "PHILOSOPHY"),
    ("How We Sprint", "How I Work"),
    (
        "We work in two-week sprints. This allows us to move at the pace of a jackrabbit in a pair of Moon Boots, while giving us ample time to conjure up magic.",
        "Learn by building. Every project is an opportunity to grow — secure auth, NLP experiments, and LLM internals.",
    ),
    ("Phase 01: The Rendezvous", "Phase 01: Explore"),
    ("Phase 02: The Silence", "Phase 02: Build"),
    ("Phase 03: The Exhibition", "Phase 03: Ship"),
    ("Phase 04: The Alterations", "Phase 04: Iterate"),
    ("01. Rendezvous", "01. Explore"),
    (
        "We meet every other Friday to review the work of the previous sprint and outline the next one. Think of it like that war room in World of WarCraft right before Leroy Jenkins charges into the void.",
        "Read papers, sketch architectures, and pick a problem worth solving — usually at the intersection of AI, security, or systems.",
    ),
    ("pool rules", "principles"),
    ("POOL RULES", "PRINCIPLES"),
    (
        'At every public pool, you can find a sun-faded, water-logged sign on the wall displaying a set of "Pool Rules". No diving. No gaping wounds. No urinating. Etcetera. These rules exist to keep things from getting too out of hand. We\'ve established our own set of "Pool Rules" here at Honey, inspired by some of the greatest men and women to ever exist.',
        "Principles I work by — borrowed from builders, researchers, and the open-source community.",
    ),
    ("BE PROLIFIC.", "BUILD IN PUBLIC."),
    ("HAVE A POINT OF VIEW.", "READ THE PAPERS."),
    ("TAKE NO PRISONERS.", "SHIP THE CODE."),
    ("BE ORIGINAL.", "STAY CURIOUS."),
    ("IF YOU CAN'T BE ORIGINAL, BE BETTER THAN ORIGINAL.", "IF YOU CAN'T BE FIRST, BE THOROUGH."),
    ("DON'T TAKE NO SHIT.", "DEBUG UNTIL IT WORKS."),
    ("GREATNESS IS GOOD COMPOUNDED OVER TIME.", "SKILLS COMPOUND WITH EVERY COMMIT."),
    ("CHARGE A LOT BUT GIVE THEM MORE THAN THEY PAY FOR.", "OVER-DELIVER ON EVERY PROJECT."),
    ("IT'S NOT CREATIVE UNLESS YOU DO SOMETHING THAT SCARES YOU.", "GROW BY TACKLING HARD PROBLEMS."),
    ("IF YOU AREN'T PISSING SOMEONE OFF, YOU'RE DOING SOMETHING WRONG.", "QUESTION ASSUMPTIONS. ALWAYS."),
    ("ALL CRITICISMS MUST BE ACCOMPANIED BY SUGGESTIONS.", "CRITIQUE WITH CONSTRUCTIVE FIXES."),
    ("BE YOUR CLIENT'S MOST LOYAL CUSTOMER.", "USE WHAT YOU BUILD."),
    ("TAKE YOUR WORK SERIOUSLY, YOURSELF LESS SO.", "SERIOUS CODE. HUMBLE ENGINEER."),
    ("NEVER ADVERTISE ANYTHING YOU WOULDN'T WANT YOUR KID TO BUY.", "BUILD TOOLS YOU'D TRUST YOURSELF."),
    ("THERE'S POETRY IN EVERYTHING, FIND IT.", "FIND ELEGANCE IN THE MATH."),
    ("Dress better than your competition.", "Document better than you think you need to."),
    ("INTERESTING PEOPLE ARE INTERESTED.", "INTERESTED PEOPLE STAY INTERESTING."),
    ("KILL THEM WITH SWEETNESS", "THE CURIOSITY"),
    ("Kill them with sweetness.", "How machines learn to think."),
    (
        "In 678 AD, a Saracen Fleet comprised of over 100 warships set sail for the storied walls of Constantinople.&nbsp;",
        "It started with a single question in a first-year dorm: how do machines actually learn?&nbsp;",
    ),
    (
        "Upon their arrival, they are greeted by a dozen or so pitiful looking watercrafts which make up the far inferior Byzantine Navy. Licking their chops, the Saracens move like an enormous octopus to encapsulate the Byzantines.",
        "That curiosity led to Python scripts, then PyTorch notebooks, then auth systems and transformer layers written from scratch.",
    ),
    (
        "By the time the Saracen fleet sees the sun catch the thin bronze tubes jutting out from the prows of the Byzatine vessels, it’s too late.&nbsp;Thousands of gallons of molten fire spring atop the unsuspecting Saracen Fleet, engulfing their ships and the surrounding sea in a fiery hellscape.",
        "Today I channel it into practical systems at IIT Jodhpur — Applied AI & Data Science, open source, and projects that matter.&nbsp;",
    ),
    (
        "It’s no ordinary fire but a wet fire that spreads along the surface of the ocean like the plague and adheres to flesh and wood like glue. As the entire Saracen Navy is leveled, history receives its very first glimpse of a Byzantine secret weapon that would become the bane of their enemies existence: Greek Fire.",
        "The frontier is LLMs, security, and systems that scale — and I'm building toward it one commit at a time.",
    ),
    (
        "Throughout the Byzantine’s long reign, they share the recipe for Greek Fire with no one. It’s kept under such close lock and key that it’s eventually lost to the jaws of history. Over the centuries there has been countless debate about the ingredients used to make Greek Fire.",
        "Outside of code: Linux terminals, transformer papers at 2 AM, and collaborations with anyone curious enough to ask hard questions.",
    ),
    (
        "Historians and anthropologists are in agreement of a few ingredients: sulfer, quicklime, petroleum and…",
        "Stack: Python, PyTorch, NLP, Linux, Git, Docker, and…",
    ),
    (">honey<", ">aditya<"),
    ("FAQ", "CONTACT"),
    ("You’ve got questions.", "Let's connect."),
    ("We’ve got answers.", "I'm listening."),
    ("How much we talking?", "What do you work on?"),
    (
        "Price can vary between the cost of a trip to Tahiti and a Rolls Royce Ghost depending entirely on the scope.",
        "Applied AI, NLP, LLMs, secure systems, and open-source tooling — always exploring the next hard problem.",
    ),
    ("When do I pay?", "Where are you based?"),
    (
        "You pay your tab in three installments: Day One, Day Thirty and Day Sixty. We do great work and we expect to be paid accordingly and on time.",
        "IIT Jodhpur, Rajasthan — open to remote collaborations, research, and interesting builds.",
    ),
    ("Do you do one off projects?", "Open to collaborate?"),
    ("If they make us weak in the knees.", "Always — especially on AI, security, or systems work."),
    ("Why wouldn’t this be a fit?", "Best way to reach you?"),
    (
        "We don’t work well with enterprises with no backbones or anyone looking for A5 Wagyu for the price of a Baconator.",
        "Email b25bs1020@iitj.ac.in or find me on GitHub @adityarajIITj.",
    ),
    ("WHERE DO I SIGN?", "SEND A MESSAGE"),
    ('<p class="framer-text">HERE</p>', '<p class="framer-text">EMAIL</p>'),
    # Responsive / HTML-split variants
    (
        "Rather than locking you into an iron-clad year-long contract,&nbsp; we ask our clients to commit to just 3-months at a time. We\u2019re confident you\u2019ll be so overwhelmed with the value we provide, you\u2019ll want to re-up quarter after quarter after quarter.",
        "Designed a secure authentication framework from scratch — multi-factor auth, modern encryption, and secure session lifecycle management.",
    ),
    (
        "Ogilvy said it best: <em class=\"framer-text\">It\u2019s not creative unless it sells.</em> That\u2019s the law around here. It\u2019s the gospel. Every piece of work we produce for you is built like a Ferrari. It\u2019s designed with the sole intention to win. It just so happens to look pretty, too.",
        "Linux, Git, Docker, Pandas/NumPy — solid systems foundation underneath every ML experiment.",
    ),
    (
        "It\u2019s no ordinary fire but a wet fire that spreads along the surface of the ocean like the plague and adheres to flesh and wood like glue.&nbsp; As the entire Saracen Navy is leveled, history receives its very first glimpse of a Byzantine secret weapon that would become the bane of their enemies existence: Greek Fire.",
        "The frontier is LLMs, security, and systems that scale — and I'm building toward it one commit at a time.",
    ),
    (
        "Throughout the Byzantine\u2019s long reign, they share the recipe for Greek Fire with no one. It\u2019s kept under such close lock and key that it\u2019s eventually lost to the jaws of history. Over the centuries there has been countless debate about the ingredients used to make Greek Fire.",
        "Outside of code: Linux terminals, transformer papers at 2 AM, and collaborations with anyone curious enough to ask hard questions.",
    ),
    ('data-framer-name="Kill them with sweetness"', 'data-framer-name="How machines learn to think"'),
    ('data-framer-name="WHERE DO I SIGN"', 'data-framer-name="SEND A MESSAGE"'),
]

GITHUB = "https://github.com/adityarajIITj"
EMAIL = "mailto:b25bs1020@iitj.ac.in"
OVERRIDE_SCRIPT = '<script src="/portfolio-overrides.js" defer></script>\n'


def main():
    html = HTML_PATH.read_text(encoding="utf-8")
    for old, new in REPLACEMENTS:
        html = html.replace(old, new)

    html = html.replace('href="./contact"', f'href="{EMAIL}"')
    html = re.sub(
        r'<script type="text/javascript">\s*_linkedin_partner_id.*?</script>\s*<noscript>.*?</noscript>',
        "",
        html,
        flags=re.DOTALL,
    )

    if "portfolio-overrides.js" not in html:
        html = html.replace("</body>", OVERRIDE_SCRIPT + "</body>")

    HTML_PATH.write_text(html, encoding="utf-8")
    print(f"Updated {HTML_PATH}")


if __name__ == "__main__":
    main()
