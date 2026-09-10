# SLM-Agents workshop website

Source for [slmw2026.github.io](https://slmw2026.github.io), the website of the
1st Workshop on Small Language Models for Agentic Systems (SLM-Agents) at
NeurIPS 2026 in Paris.

It is a [Jekyll](https://jekyllrb.com) site built on the Minima theme with a
custom stylesheet. Pushing to `main` triggers the workflow in
`.github/workflows/pages.yml`, which builds the site and publishes it to GitHub
Pages, so a merge to `main` goes live within a few minutes.

## Running it locally

Ruby and Bundler are required.

```sh
bundle install
bundle exec jekyll serve
```

The site is then served at <http://127.0.0.1:4000>.

## Where the content lives

Almost all page content comes from data files rather than markup, so most
updates mean editing YAML rather than HTML.

| Path | Contents |
| --- | --- |
| `_data/workshop.yml` | Title, dates, location, important dates, submission state and links |
| `_data/navigation.yml` | Header navigation, including the two dropdown menus |
| `_data/speakers.yml`, `_data/panelists.yml` | Invited speakers and panelists |
| `_data/organizers.yml`, `_data/executive_committee.yml`, `_data/technical_committee.yml`, `_data/workshop_team.yml`, `_data/volunteers.yml` | Committee and team listings |
| `_data/schedule.yml` | Workshop programme |
| `_data/sponsors.yml` | Sponsor tiers and logos |
| `_data/accepted_papers.yml` | Accepted papers, once decisions are out |
| `index.md` | Homepage sections and prose |
| `about.md`, `accepted_papers.html`, `404.html` | Standalone pages |
| `images/people/` | Portraits, 400 x 500 |
| `images/branding/` | Banner artwork |
| `_includes/`, `_layouts/` | Templates that render the data files |
| `_sass/minima/custom-styles.scss` | All custom styling |

Each person entry takes a name, affiliation, image path and image dimensions,
plus optional Google Scholar, LinkedIn and homepage links; set
`image_placeholder: true` to render initials while a portrait is pending.

## Reusing this site for another workshop

Fork the repository, then update `_config.yml`, replace the files in `_data/`
with your own event's details, swap the artwork in `images/`, and adjust the
homepage prose in `index.md`. The templates and stylesheet need no changes.
