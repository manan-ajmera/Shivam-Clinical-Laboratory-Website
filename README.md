# Shivam Clinical Laboratory

Responsive website built with HTML, CSS and JavaScript. The website files are in `docs/` and are served through GitHub Pages.

## Preview in VS Code

Open this repository folder in VS Code. Right-click `docs/index.html` and select **Open with Live Server**. Alternatively, open that HTML file directly in a browser. No installation or build command is needed for the website itself.

## Editing

| Path | Purpose |
| --- | --- |
| `docs/index.html` | Website copy, sections and contact details |
| `docs/styles.css` | Colours, spacing and mobile layouts |
| `docs/script.js` | Mobile navigation and test enquiry email links |
| `docs/assets/` | Logo, illustrations and favicon |

Update the email address in both the HTML and JavaScript when changing contact details. Call links open a calling application; enquiry links open an email draft. No message is sent automatically. The map link searches by laboratory name and address.

## Publish changes

From the outer repository folder:

```bash
git add .
git commit -m "Update website"
git push
```

## GitHub Pages

Open the repository's **Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/docs**, then save. Check the **Actions** tab for deployment status. The public site URL appears in the Pages settings after deployment.

## Review before launch

Confirm the current test menu, equipment and contact information with the laboratory. The site uses the supplied logo and clinical testing illustrations. Names and qualifications listed for possible team members should be verified before adding a professional team section. Institutional requests are enquiries, not a list of completed contracts. Prices, opening hours, home collection and online report access should be added only when confirmed.
