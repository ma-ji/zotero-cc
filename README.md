# Zotero 7 Citation Counts Manager Enhaned

- [GitHub](https://github.com/FrLars21/ZoteroCitationCountsManager): Source
  code repository

This is an add-on for [Zotero](https://www.zotero.org), a research source management tool. The add-on can auto-fetch citation counts for journal articles using various APIs, including [Crossref](https://www.crossref.org), [INSPIRE-HEP](https://inspirehep.net), [OpenAlex](https://openalex.org), [Semantic Scholar](https://www.semanticscholar.org), and [Scopus](https://www.scopus.com). [Google Scholar](https://scholar.google.com) is not supported because automated access is against its terms of service.

Please report any bugs, questions, or feature requests in the Github repository.

## Features

- Autoretrieve citation counts when a new item is added to your Zotero library.
- Retrieve citation counts manually by right-clicking on one or more items in your Zotero library.
- Works with the following APIs: [Crossref](https://www.crossref.org), [INSPIRE-HEP](https://inspirehep.net), [OpenAlex](https://openalex.org), [Semantic Scholar](https://www.semanticscholar.org), and [Scopus](https://www.scopus.com).
- **Scopus support** includes citation counts and FWCI (Field-Weighted Citation Impact) metrics when available.
- _NEW:_ The plugin is compatible with **Zotero 7** (Zotero 6 is **NOT** supported!).
- _NEW:_ The plugin registers a custom column ("Citation Counts") in your Zotero library so that items can be **ordered by citation count**.
- _NEW:_ Improved _citation count retrieval operation_ status reporting, including item-specific error messages for those items where a citation count couldn't be retrieved.
- _NEW:_ Concurrent citation count retrieval operations is now possible. Especially important for the autoretrieve feature.
- _NEW:_ Fluent is used for localizing, while the locale file has been simplified and now cover the whole plugin. You are welcome to submit translations as a PR.
- _NEW:_ The whole codebade has been refactored with a focus on easy maintenance, especially for the supported citation count APIs.

## Acknowledgements

This plugin is a refactored and enhanced version of Erik Schnetter's [Zotero Citations Counts Manager](https://github.com/eschnett/zotero-citationcounts) for Zotero 7. Code for that extension was based on [Zotero DOI Manager](https://github.com/bwiernik/zotero-shortdoi), which is based in part on [Zotero Google Scholar Citations](https://github.com/beloglazov/zotero-scholar-citations) by Anton Beloglazov.
Boilerplate for this plugin was based on Zotero's sample plugin for v7 [Make-It-Red](https://github.com/zotero/make-it-red).

## Installing

- Download the add-on (the .xpi file) from the latest release: <https://github.com/FrLars21/ZoteroCitationCountsManager/releases>
- To download the .xpi file, right click it and select 'Save link as'
- Run Zotero (version 7.x)
- Go to `Tools -> Add-ons`
- `Install Add-on From File`
- Choose the file `zoterocitationcountsmanager-2.0.0.xpi`
- Restart Zotero

## Configuration

### Scopus API Key

To use the Scopus API, you need to configure your API key:

1. Obtain an API key from [Elsevier Developer Portal](https://dev.elsevier.com/)
2. In Zotero, go to `Tools -> Add-ons`
3. Click on the gear icon next to "Zotero Citation Counts Manager"
4. Select "Preferences"
5. Enter your Scopus API key in the "Scopus API Key" field

When using Scopus, the plugin will retrieve both citation counts and FWCI (Field-Weighted Citation Impact) metrics when available. Both values are stored in the item's "Extra" field.

## Release Process

1. Update `manifest.json` (and any other references) with the new version number.
2. Commit and push your changes to the default branch.
3. Create a tag matching the manifest version, e.g. `v2.1.0`, and push the tag:

   ```
   git tag v2.1.0
   git push origin v2.1.0
   ```

4. GitHub Actions will build the `.xpi` package and create a release automatically, attaching the generated artifact.
5. Download the `.xpi` from the release page for distribution or verification.

If you need to re-run the automation, you can use the **Run workflow** button on the Actions tab (`workflow_dispatch`) and specify the desired tag.

## License

Distributed under the Mozilla Public License (MPL) Version 2.0.
