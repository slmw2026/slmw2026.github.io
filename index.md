---
layout: home
description: The first workshop on small language models for agentic systems, accepted at NeurIPS 2026 in Paris.
---
{% assign workshop = site.data.workshop %}

<div class="workshop-home">
  <section class="workshop-hero" id="home" aria-labelledby="hero-title">
    <picture>
      <source media="(max-width: 640px)" srcset="{{ workshop.hero.mobile_image | relative_url }}" width="{{ workshop.hero.mobile_width }}" height="{{ workshop.hero.mobile_height }}">
      <img
        class="workshop-hero__image"
        src="{{ workshop.hero.image | relative_url }}"
        width="{{ workshop.hero.width }}"
        height="{{ workshop.hero.height }}"
        fetchpriority="high"
        alt="">
    </picture>
    <div class="hero-summary">
      <p class="hero-summary__eyebrow">{{ workshop.event_label }}</p>
      <h1 id="hero-title">{{ workshop.short_title }}</h1>
      <p class="hero-summary__subtitle">{{ workshop.subtitle }}</p>
      <p class="hero-summary__meta">{{ workshop.location }} · {{ workshop.workshop_window }}</p>
    </div>
  </section>

  <aside class="event-facts" aria-label="Workshop facts">
    <div><span>Event</span><strong><a href="{{ workshop.conference_url }}">{{ workshop.conference }}</a></strong></div>
    <div><span>Location</span><strong>{{ workshop.location }}</strong></div>
    <div><span>Dates</span><strong>{{ workshop.workshop_window }}</strong></div>
    {% if workshop.status_fact %}
    <div><span>{{ workshop.status_fact.label }}</span><strong>{% if workshop.status_fact.url %}<a href="{{ workshop.status_fact.url | relative_url }}">{{ workshop.status_fact.text }}</a>{% else %}{{ workshop.status_fact.text }}{% endif %}</strong></div>
    {% else %}
    <div><span>Submissions</span><strong>{% if workshop.submissions_open %}<a href="{{ workshop.submission_url }}">Open on OpenReview</a>{% elsif workshop.submission_url %}Closed (<a href="{{ workshop.submission_url }}">view on OpenReview</a>){% else %}Closed{% endif %}</strong></div>
    {% endif %}
  </aside>

  {% if workshop.author_notice %}
  <aside class="author-notice" data-author-notice aria-labelledby="author-notice-title">
    <div class="author-notice__text">
      <p class="author-notice__label" id="author-notice-title">{{ workshop.author_notice.label }}</p>
      <ul>
        {% for item in workshop.author_notice.items %}
          <li data-hide-after="{{ item.date }}">{{ item.text }}</li>
        {% endfor %}
      </ul>
    </div>
    <a class="author-notice__link" href="{{ workshop.author_notice.url | relative_url }}">{{ workshop.author_notice.link_text }} <span aria-hidden="true">→</span></a>
  </aside>
  {% endif %}

  <section class="content-section" id="overview" aria-labelledby="overview-title">
    <div class="section-heading">
      <p class="section-kicker">About the workshop</p>
      <h2 id="overview-title">Scope and objectives</h2>
    </div>
    <div class="overview-prose">
      <p>This workshop is dedicated to small language models (SLMs) as the foundation of agentic AI systems. Although large language models (LLMs) have demonstrated remarkable capabilities, their dependence on cloud infrastructure creates fundamental barriers to deployment in agentic pipelines (latency, privacy, connectivity, and substantial computational cost). SLMs offer a compelling alternative: recent studies argue that SLMs, not LLMs, might be a right option for the repetitive, narrowly scoped sub-tasks that dominate real agentic workloads. SLMs make it possible for autonomous AI agents to plan, reason, and act directly on resource-constrained devices such as smartphones, IoT systems, robotics platforms, and embedded systems. The workshop sits at the intersection of three rapidly evolving fields: (1) efficient language model architectures and compression techniques, (2) agentic AI systems capable of autonomous reasoning and tool use, and (3) edge computing and on-device deployment.</p>
      <h3 class="overview-subhead">Open problems</h3>
      <ul class="open-problems">
        <li><strong>Compression and distillation:</strong> quantization, pruning, knowledge distillation, and architectural innovations for parameter-efficient LMs.</li>
        <li><strong>Hardware co-design:</strong> on-device inference optimization, NPU/accelerator-aware design, memory-bandwidth-bound serving, and energy-budgeted decoding.</li>
        <li><strong>Training for cooperation:</strong> fine-tuning SLMs for tool use, planning, multi-step reasoning, and handoff between small and large models in heterogeneous agent stacks.</li>
        <li><strong>Evaluation and benchmarks:</strong> task-success-per-watt, latency- and memory-aware leaderboards, and reproducible on-device evaluation harnesses.</li>
        <li><strong>Applications and safety:</strong> privacy-preserving local processing, federated learning, and deployment case studies across mobile assistants, robotics, healthcare, automotive, and financial services, with associated safety, robustness, and provenance considerations.</li>
      </ul>
    </div>
  </section>

  <section class="content-section content-section--tinted dates-section" id="important-dates" aria-labelledby="dates-title">
    <div class="section-heading">
      <p class="section-kicker">Submission timeline</p>
      <h2 id="dates-title">Important Dates</h2>
    </div>
    <div class="date-grid" data-important-dates>
      {% for item in workshop.important_dates %}
        <article class="date-card" data-date-start="{{ item.start }}" data-date-end="{{ item.end | default: item.start }}">
          <h3>{{ item.label }}</h3>
          <p class="date-card__date">{{ item.date }}</p>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="content-section accepted-papers-callout" id="accepted-papers" aria-labelledby="accepted-papers-title">
    <div>
      <p class="section-kicker">Review outcomes</p>
      <h2 id="accepted-papers-title">Accepted Papers</h2>
      <p>The list of accepted papers will be published soon. Authors of accepted papers can find camera-ready and registration details in the <a href="{{ '/authors/' | relative_url }}">instructions for accepted authors</a>.</p>
    </div>
    <a class="button-link" href="{{ '/accepted-papers/' | relative_url }}">View accepted papers</a>
  </section>

  <section class="content-section schedule-section" id="program" aria-labelledby="schedule-title">
    <div class="section-heading">
      <p class="section-kicker">One day · In person · Paris</p>
      <h2 id="schedule-title">Workshop Schedule</h2>
    </div>
    <p class="status-box">The detailed schedule will be announced closer to the workshop.</p>
    {% comment %} Schedule details are hidden until the program is confirmed.
    {% include schedule.html %}
    {% endcomment %}
  </section>

  <section class="content-section content-section--tinted" id="speakers" aria-labelledby="speakers-title">
    <div class="section-heading">
      <p class="section-kicker">Featured talks and discussion</p>
      <h2 id="speakers-title">Invited Speakers &amp; Panelists</h2>
    </div>
    <h3 class="people-subhead">Invited Speakers</h3>
    {% include people-cards.html people=site.data.speakers variant='speakers' %}
    <h3 class="people-subhead" id="panelists">Invited Panelists</h3>
    {% include people-cards.html people=site.data.panelists variant='panelists' %}
  </section>

  {% comment %}
  <section class="content-section content-section--tinted" id="challenge" aria-labelledby="challenge-title">
    <div class="section-heading">
      <p class="section-kicker">Companion activity</p>
      <h2 id="challenge-title">Edge Agent Efficiency Challenge</h2>
    </div>
    <p class="section-intro">The challenge focuses on running a multi-step agent task on consumer-class hardware, such as a laptop GPU, mobile NPU, or single-board computer, under fixed memory, latency, and energy budgets.</p>
    <p>Entries will be evaluated using a cost-adjusted task-success metric and will release reusable model checkpoints and inference recipes. Challenge winners will present their systems during the workshop’s live-demo session.</p>
  </section>
  {% endcomment %}

  <section class="content-section" id="organizers" aria-labelledby="organizers-title">
    <div class="section-heading">
      <p class="section-kicker">Workshop leadership</p>
      <h2 id="organizers-title">Organizing Committee</h2>
    </div>
    {% include people-cards.html people=site.data.organizers variant='organizers' %}

    {% comment %}
    The former Workshop Team section is retained in source but is no longer displayed.
    <div class="subsection-heading">
      <p class="section-kicker">Supporting roles</p>
      <h2 id="workshop-team">Workshop Team</h2>
    </div>
    {% include people-cards.html people=site.data.workshop_team variant='team' %}
    {% endcomment %}
  </section>

  <section class="content-section content-section--tinted" id="executive-committee" aria-labelledby="executive-committee-title">
    <div class="section-heading">
      <p class="section-kicker">Workshop leadership</p>
      <h2 id="executive-committee-title">Executive Committee</h2>
    </div>
    {% include people-cards.html people=site.data.executive_committee variant='executive-committee' %}
  </section>

  <section class="content-section" id="scientific-committee" aria-labelledby="committee-title">
    <div class="section-heading">
      <p class="section-kicker">Peer review</p>
      <h2 id="committee-title">Scientific Committee</h2>
    </div>
    {% include committee-groups.html %}
  </section>

  <section class="content-section content-section--tinted" id="call-for-papers" aria-labelledby="cfp-title">
    <div class="section-heading">
      <p class="section-kicker">Research contributions</p>
      <h2 id="cfp-title">Call for Papers</h2>
    </div>
    {% comment %} While submissions are open the call is shown expanded; once they close it collapses to a single status line. {% endcomment %}
    <details class="cfp-details" data-open-on-target{% if workshop.submissions_open %} open{% endif %}>
      <summary class="cfp-details__summary">
        <span class="cfp-details__status">{{ workshop.submission_status }}</span>
        <span class="cfp-details__toggle" aria-hidden="true"><span class="cfp-details__show">Show the full call</span><span class="cfp-details__hide">Hide the full call</span></span>
      </summary>
      <div class="cfp-details__body">
        <p class="section-intro">We invite original work in progress on small language models for agentic systems.</p>
        <div class="cfp-grid">
          <div>
            <h3>Submission format</h3>
            <ul class="check-list">
              <li>Short paper: up to 4 content pages</li>
              <li>Long paper: up to 6 content pages</li>
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
            <li>SLM architectures, training and inference</li>
            <li>Agentic reasoning, planning and tool use</li>
            <li>Hardware-aware and on-device deployment</li>
            <li>Evaluation, benchmarks and efficiency</li>
            <li>Privacy, safety, robustness and applications</li>
          </ul>
        </div>
      </div>
    </details>
    {% if workshop.submissions_open and workshop.submission_url %}
      <p class="cfp-submit"><a class="button-link" href="{{ workshop.submission_url }}">Submit on OpenReview</a></p>
    {% endif %}
  </section>

  <section class="content-section" id="sponsors" aria-labelledby="sponsors-title">
    <div class="section-heading">
      <p class="section-kicker">With thanks to our supporters</p>
      <h2 id="sponsors-title">Sponsors</h2>
    </div>
    <p class="section-intro">We thank the organizations supporting the SLM-Agents workshop.</p>
    {% include sponsors.html %}
  </section>

  <section class="content-section content-section--tinted" id="policies" aria-labelledby="policies-title">
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
    <p>{{ workshop.contact_status }}</p>
  </section>
</div>
