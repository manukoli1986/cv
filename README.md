# mayankkoli.com — Personal Portfolio & CV

Personal portfolio site for **Mayank Koli** — Cloud & AI Solutions Architect / Senior SRE.
Static single-page site hosted on **GitHub Pages** at a custom domain.

**Live:** https://mayankkoli.com

---

## What it is

A single static page (`index.html`) built on the iPortfolio Bootstrap template, restyled
with a custom "Sky Glow" light theme. No build step, no framework, no server — plain HTML,
CSS, and vanilla JavaScript.

Interactive pieces (all client-side, no backend):

- **Split hero** — headline + value prop on the left, interactive terminal on the right with
  floating tool chips (AWS, Kubernetes, Terraform, Claude AI, Docker, Python).
- **Terminal CLI** — type `help`, `whoami`, `skills`, `projects`, `github`, etc.
- **AI assistant chat widget** — answers questions about the CV from a fixed in-page dataset;
  runs entirely in the browser, nothing sent to a server.
- **Contact form** — posts to [FormSubmit](https://formsubmit.co/) which relays the message
  to `mayank.c.koli@gmail.com`. No API keys; first submission needs a one-time email activation.

---

## Repository layout

```
.
├── index.html                    # the whole site
├── privacy.html                  # privacy policy (linked in footer)
├── CNAME                         # custom domain for GitHub Pages -> mayankkoli.com
├── robots.txt                    # allows all crawlers, points to sitemap
├── sitemap.xml                   # for Google Search Console
├── google40e94aeaf8e5d23f.html   # Google Search Console verification
└── assets/
    ├── css/
    │   ├── style.css             # original template styles
    │   └── dark-theme.css        # custom Sky Glow theme (overrides + hero + motion)
    ├── js/main.js                # template JS (AOS, PureCounter, nav, etc.)
    ├── img/                      # profile image, favicons
    ├── attachments/Mayank_C_Koli.pdf   # downloadable CV
    └── vendor/                   # Bootstrap, Boxicons, AOS, Typed.js, ...
```

Most custom work lives in **`assets/css/dark-theme.css`** and the inline `<script>` blocks at
the bottom of `index.html` (terminal + chat widget).

---

## How it's hosted (GitHub Pages)

- **Repo:** `manukoli1986/cv`
- **Source:** the `main` branch, root (`/`) folder — set in *Settings → Pages*.
- Every push to `main` triggers an automatic GitHub Pages rebuild and deploy. No CI/CD to
  configure; Pages serves the static files directly.
- **Custom domain** is stored in the `CNAME` file (`mayankkoli.com`). This file must stay in
  the repo root — if it's deleted, Pages reverts to `manukoli1986.github.io/cv`.
- **HTTPS** is enforced (Pages provisions a Let's Encrypt certificate automatically once DNS
  resolves).

### Local preview

No build needed. From the repo root:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

## How the domain / DNS is mapped

Domain **mayankkoli.com** is registered and its DNS is managed on **Cloudflare**
(nameservers: `*.ns.cloudflare.com`). GitHub Pages serves the site; Cloudflare only holds the
DNS records — records are set to **"DNS only" (grey cloud), not proxied**, so GitHub can see
the real origin and issue its TLS certificate.

DNS records in Cloudflare:

| Type  | Name  | Value                     | Proxy      |
|-------|-------|---------------------------|------------|
| A     | `@`   | `185.199.108.153`         | DNS only   |
| A     | `@`   | `185.199.109.153`         | DNS only   |
| A     | `@`   | `185.199.110.153`         | DNS only   |
| A     | `@`   | `185.199.111.153`         | DNS only   |
| CNAME | `www` | `manukoli1986.github.io`  | DNS only   |

The four `A` records are GitHub Pages' anycast IPs (apex domain → Pages). The `www` CNAME
lets `www.mayankkoli.com` also resolve to Pages, which redirects to the apex.

Request path: **browser → Cloudflare DNS → GitHub Pages (185.199.108–111.153) → static files**.

### Verify DNS

```bash
dig +short mayankkoli.com A         # -> the four 185.199.108-111.153 IPs
dig +short www.mayankkoli.com       # -> manukoli1986.github.io + the same IPs
```

If GitHub *Settings → Pages* shows "DNS check unsuccessful", the records above are missing or
set to Proxied — switch them to **DNS only** and click *Check again*.

---

## Common edits

- **Update the CV** — replace `assets/attachments/Mayank_C_Koli.pdf` (keep the filename, or
  update the link in `index.html`).
- **Change theme colors** — edit the `:root` variables at the top of
  `assets/css/dark-theme.css`.
- **Edit terminal / chatbot answers** — the `terminalCommands` and `resumeData` objects in the
  inline script at the bottom of `index.html`.
- **Contact email** — the `CONTACT_EMAIL` constant in the FormSubmit script block.
