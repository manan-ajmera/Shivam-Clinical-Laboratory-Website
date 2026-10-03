# Set up and publish Shivam's website

## 1. Open this project

1. Download and extract `Shivam-Clinical-Laboratory-Website.zip`.
2. Open VS Code → File → Open Folder.
3. Select the outer `Shivam-Clinical-Laboratory-Website` folder, which contains `docs`, `README.md` and this guide. Do not open the older Hi-Tech repository or put these files inside it.
4. The website entry file is `docs/index.html`. Keep all website files inside `docs`; no folder rename is needed.

## 2. Preview

1. Open `docs/index.html`.
2. Right-click → Open with Live Server (use your already installed extension).
3. Check the design on desktop and mobile widths. Test menu links, FAQs, the phone button and email enquiries.

Double-clicking `docs/index.html` in Windows File Explorer also works. A Live Server preview address is local; it is not the link to send to your client.

## 3. Create the GitHub repository through VS Code

These steps create a NEW repository. Do not create the same empty repository on GitHub separately first.

1. Open Source Control with Ctrl+Shift+G.
2. Click Initialize Repository. If asked which folder, select the outer `Shivam-Clinical-Laboratory-Website` folder.
3. Stage all files using the + beside Changes.
4. Enter `Initial Shivam laboratory website` and click Commit. If prompted to stage all changes, confirm.
5. If Git asks for your identity, set your actual Git commit name and GitHub email, then retry Commit:

```bash
git config --global user.name "Manan Ajmera"
git config --global user.email "YOUR_ACTUAL_GITHUB_EMAIL"
```

6. Open Terminal → New Terminal. Run `git branch -M main` to name the initial branch.
7. Press Ctrl+Shift+P → Publish to GitHub. If the Source Control panel shows Publish Branch instead, it can also start publishing.
8. Sign in to GitHub using `manan-ajmera` if prompted.
9. Use repository name `Shivam-Clinical-Laboratory-Website` and choose Publish to GitHub public repository. Public source is needed for GitHub Pages on a free account.
10. Include all project files. Open the new repository on GitHub and confirm that the Code tab has a `docs` folder and that `docs/index.html` exists.

If you already created an empty GitHub repository for Shivam, do not publish another one. After the initial local commit and branch naming, copy that existing repository's HTTPS URL and run:

```bash
git remote add origin YOUR_EXISTING_SHIVAM_REPOSITORY_URL
git push -u origin main
```

If `origin` already exists, run `git remote -v` and check that it points to the intended Shivam repository before pushing. Do not force-push.

## 4. Enable GitHub Pages

1. On GitHub, open the NEW Shivam repository.
2. Click Settings (it may be under More on a narrow browser window).
3. Select Pages in the left sidebar under Code and automation.
4. Source: Deploy from a branch.
5. Branch: main.
6. Folder: /docs.
7. Click Save.
8. Wait for deployment. The Actions tab shows progress for pages build and deployment.
9. Return to Settings → Pages, refresh, then click Visit site.

If you publish using the specified account and repository name, the expected website address is:
`https://manan-ajmera.github.io/Shivam-Clinical-Laboratory-Website/`

Use the exact URL GitHub displays after deployment. This package has not created or deployed the repository for you.

## 5. Share the preview

Open the public website on your phone and check that images and contact links work. Share that public website URL with your client. A domain purchase is not needed for the preview.

## 6. Make later edits

Edit the relevant files in VS Code, save and preview. From the outer project folder run:

```bash
git add .
git commit -m "Update Shivam website"
git push
```

GitHub Pages deploys changes automatically from the selected main branch. Check Actions and refresh the live page after deployment.

## 7. Connect a purchased domain after approval

Purchase the preferred domain only after choosing it with the client. Add it in this repository's Settings → Pages → Custom domain. Configure the registrar's DNS according to GitHub's current custom-domain instructions, then enable HTTPS when available. Keep the website hosted through GitHub Pages.

## Laboratory review

Confirm exact test availability, equipment details and institutional service arrangements before launch. The logo supplied in the brief includes the text “L.I.C. Approved”; confirm that this status is current or supply an updated logo. No separate accreditation claim has been added to the page. Team qualifications from the brief need confirmation, so no unverified professional roster is published. Approved staff details and real photographs can be added later.

## Official instructions

VS Code GitHub publishing: https://code.visualstudio.com/docs/sourcecontrol/repos-remotes
GitHub Pages source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
GitHub custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
