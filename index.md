---
layout: home
description: The first workshop on small language models for agentic systems, accepted at NeurIPS 2026 in Paris.
---
{% assign workshop = site.data.workshop %}

<div class="workshop-home">
  <section class="workshop-hero" id="home" aria-labelledby="hero-title">
    <img
      class="workshop-hero__image"
      src="{{ workshop.hero.image | relative_url }}"
      width="{{ workshop.hero.width }}"
      height="{{ workshop.hero.height }}"
      fetchpriority="high"
      alt="">
    <div class="hero-summary">
      <p class="hero-summary__eyebrow">{{ workshop.acceptance_status }}</p>
      <h1 id="hero-title">{{ workshop.short_title }}</h1>
      <p class="hero-summary__subtitle">{{ workshop.subtitle }}</p>
      <p class="hero-summary__meta">{{ workshop.location }} · {{ workshop.workshop_window }}</p>
      <p class="hero-summary__note">{{ workshop.workshop_day_status }}</p>
    </div>
  </section>

  <aside class="event-facts" aria-label="Workshop facts">
    <div><span>Event</span><strong><a href="{{ workshop.conference_url }}">{{ workshop.conference }}</a></strong></div>
    <div><span>Location</span><strong>{{ workshop.location }}</strong></div>
    <div><span>Dates</span><strong>{{ workshop.workshop_window }}</strong></div>
    <div><span>Workshop day</span><strong>To be announced</strong></div>
    <div><span>Submissions</span><strong>Portal coming soon</strong></div>
  </aside>

  <section class="content-section" id="overview" aria-labelledby="overview-title">
    <div class="section-heading">
      <p class="section-kicker">About the workshop</p>
      <h2 id="overview-title">Small models for capable, deployable agents</h2>
    </div>
    <div class="prose-columns">
      <p>Cloud-dependent large language models have enabled impressive agentic systems, but they also introduce latency, privacy, connectivity, and computational-cost barriers. These constraints matter when agents must respond continuously, handle sensitive data, or operate without reliable cloud access.</p>
      <p>Small language models can address the focused, repetitive tasks that make up many practical agent workflows. With appropriate training and system design, SLMs can plan, reason, use tools, and act directly on smartphones, robotics platforms, IoT systems, and embedded devices.</p>
      <p>SLM-Agents brings together efficient language models, autonomous and tool-using systems, and edge deployment. The workshop will develop shared methods and evaluation practices for agentic AI that is efficient, private, and practical to deploy.</p>
    </div>
  </section>

  <section class="content-section content-section--tinted" id="call-for-papers" aria-labelledby="cfp-title">
    <div class="section-heading">
      <p class="section-kicker">Research contributions</p>
      <h2 id="cfp-title">Call for Papers</h2>
    </div>
    <p class="section-intro">We invite original work in progress on small language models for agentic systems.</p>
    <div class="cfp-grid">
      <div>
        <h3>Submission format</h3>
        <ul class="check-list">
          <li>Extended abstracts: 4 pages plus references</li>
          <li>Optional full papers: 8 pages plus references</li>
          <li>NeurIPS workshop template</li>
          <li>Double-blind review through OpenReview</li>
          <li>Three reviewers per submission</li>
        </ul>
      </div>
      <div>
        <h3>Scope and publication</h3>
        <ul class="check-list">
          <li>Original work in progress</li>
          <li>Not under review at or accepted to the NeurIPS 2026 main program</li>
          <li>Not previously published at a major ML or AI venue</li>
          <li>Accepted papers hosted on OpenReview with author opt-in</li>
          <li>Non-archival and not included in the NeurIPS proceedings</li>
        </ul>
      </div>
    </div>
    <div class="topic-band" aria-labelledby="topics-title">
      <h3 id="topics-title">Topics of interest</h3>
      <ul>
        <li>Compression, quantization, pruning, and distillation</li>
        <li>Hardware–model co-design and on-device inference</li>
        <li>Tool use, planning, reasoning, and multi-agent cooperation</li>
        <li>Latency-, memory-, energy-, and cost-aware evaluation</li>
        <li>Privacy, safety, robustness, and edge applications</li>
      </ul>
    </div>
    <p class="status-box">{{ workshop.submission_status }}</p>
  </section>

  <section class="content-section dates-section" id="important-dates" aria-labelledby="dates-title">
    <div class="section-heading">
      <p class="section-kicker">Submission timeline</p>
      <h2 id="dates-title">Important Dates</h2>
    </div>
    <div class="date-grid">
      {% for item in workshop.important_dates %}
        <article class="date-card">
          <h3>{{ item.label }}</h3>
          <p>{{ item.date }}</p>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="content-section" id="speakers" aria-labelledby="speakers-title">
    <div class="section-heading">
      <p class="section-kicker">Featured talks</p>
      <h2 id="speakers-title">Invited Speakers</h2>
    </div>
    <p class="section-intro">Five invited speakers will address efficient architectures, compression, agentic reasoning, privacy, and edge acceleration.</p>
    {% include people-cards.html people=site.data.speakers variant='speakers' %}
  </section>

  <section class="content-section content-section--tinted" id="panelists" aria-labelledby="panelists-title">
    <div class="section-heading">
      <p class="section-kicker">Community discussion</p>
      <h2 id="panelists-title">Invited Panelists</h2>
    </div>
    <p class="section-intro">The panel brings perspectives from trustworthy ML, deployment, agentic AI, and accelerator systems.</p>
    {% include people-cards.html people=site.data.panelists variant='panelists' %}
  </section>

  <section class="content-section schedule-section" id="program" aria-labelledby="schedule-title">
    <div class="section-heading">
      <p class="section-kicker">One day · In person · Paris</p>
      <h2 id="schedule-title">Workshop Schedule</h2>
    </div>
    {% include schedule.html %}
  </section>

  <section class="content-section content-section--tinted" id="challenge" aria-labelledby="challenge-title">
    <div class="section-heading">
      <p class="section-kicker">Companion activity</p>
      <h2 id="challenge-title">Edge Agent Efficiency Challenge</h2>
    </div>
    <p class="section-intro">The challenge focuses on running a multi-step agent task on consumer-class hardware—such as a laptop GPU, mobile NPU, or single-board computer—under fixed memory, latency, and energy budgets.</p>
    <p>Entries will be evaluated using a cost-adjusted task-success metric and will release reusable model checkpoints and inference recipes. Challenge winners will present their systems during the workshop’s live-demo session.</p>
  </section>

  <section class="content-section" id="organizers" aria-labelledby="organizers-title">
    <div class="section-heading">
      <p class="section-kicker">Workshop leadership</p>
      <h2 id="organizers-title">Organizers</h2>
    </div>
    {% include people-cards.html people=site.data.organizers variant='organizers' %}

    <div class="subsection-heading">
      <p class="section-kicker">Supporting roles</p>
      <h2 id="workshop-team">Workshop Team</h2>
    </div>
    {% include people-cards.html people=site.data.workshop_team variant='team' %}
  </section>

  <section class="content-section content-section--tinted" id="scientific-committee" aria-labelledby="committee-title">
    <div class="section-heading">
      <p class="section-kicker">Peer review</p>
      <h2 id="committee-title">Scientific Committee</h2>
    </div>
    {% include committee-groups.html %}
  </section>

  <section class="content-section accepted-papers-callout" id="accepted-papers" aria-labelledby="accepted-papers-title">
    <div>
      <p class="section-kicker">Review outcomes</p>
      <h2 id="accepted-papers-title">Accepted Papers</h2>
      <p>Accepted papers will be listed after the review process is complete.</p>
    </div>
    <a class="button-link" href="{{ '/accepted-papers/' | relative_url }}">View accepted papers</a>
  </section>

  <section class="content-section" id="policies" aria-labelledby="policies-title">
    <div class="section-heading">
      <p class="section-kicker">Participation</p>
      <h2 id="policies-title">Policies, Accessibility, and Inclusion</h2>
    </div>
    <div class="policy-grid">
      <article>
        <h3>Non-archival workshop</h3>
        <p>{{ workshop.non_archival_statement }}</p>
      </article>
      <article>
        <h3>Participation and inclusion</h3>
        <p>The program includes mentorship for junior researchers, a dedicated lightning-talk track, outreach through affinity communities, and an inclusive workshop environment for participants across backgrounds and career stages.</p>
      </article>
      <article>
        <h3>NeurIPS policies</h3>
        <ul class="policy-links">
          <li><a href="{{ workshop.code_of_conduct_url }}">NeurIPS Code of Conduct</a></li>
          <li><a href="{{ workshop.accessibility_url }}">NeurIPS Accessibility and Inclusion</a></li>
          <li><a href="{{ workshop.conference_url }}">NeurIPS 2026 conference</a></li>
          <li><a href="{{ workshop.workshop_guidance_url }}">NeurIPS workshop guidance</a></li>
        </ul>
      </article>
    </div>
  </section>

  <section class="content-section contact-section" id="contact" aria-labelledby="contact-title">
    <div>
      <p class="section-kicker">Stay informed</p>
      <h2 id="contact-title">Contact and updates</h2>
    </div>
    <p>{{ workshop.contact_status }} Last updated {{ workshop.last_updated }}.</p>
  </section>
</div>
