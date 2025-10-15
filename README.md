# Zotero 7 Citation Counts

## Data Sources and Capabilities

The following table summarizes the data sources supported by the plugin, including which identifiers they can use for retrieval and what metrics they provide:

| Source | Input Identifiers | Output Metrics | Notes |
|--------|-------------------|----------------|-------|
| **[OpenAlex](https://openalex.org)** | DOI | Citation Count, FWCI | **Recommended default** - Open catalog of global research |
| [Crossref](https://www.crossref.org) | DOI | Citation Count | Primary DOI resolution service |
| [INSPIRE-HEP](https://inspirehep.net) | DOI, arXiv | Citation Count | High-energy physics literature |
| [Semantic Scholar](https://www.semanticscholar.org) | DOI, arXiv | Citation Count | AI-powered research discovery |
| [Scopus](https://www.scopus.com) | DOI | Citation Count | Requires Elsevier API key |

This is an add-on for [Zotero](https://www.zotero.org), a research source management tool. The add-on can auto-fetch citation counts for journal articles using various APIs, including [Crossref](https://www.crossref.org), [INSPIRE-HEP](https://inspirehep.net), [OpenAlex](https://openalex.org), [Semantic Scholar](https://www.semanticscholar.org), and [Scopus](https://www.scopus.com). [Google Scholar](https://scholar.google.com) is planned to be supported in future releases.

## Features

- The plugin registers custom columns ("Citation Counts" and "FWCI") in your Zotero library so that items can be **ordered by citation count**. This is especially useful to prioritize a long reading list, and a major reason I'm still using it and maintain it.
- Autoretrieve citation counts when a new item is added to your Zotero library.
- Retrieve citation counts manually by right-clicking on one or more items in your Zotero library.
- The plugin is compatible with **Zotero 7** (Zotero 6 is **NOT** supported!).
- Fluent is used for localizing, while the locale file has been simplified and now cover the whole plugin. You are welcome to submit translations as a PR.

## Installing

- Download the add-on (the .xpi file) from the latest release: <https://github.com/FrLars21/ZoteroCitationCountsManager/releases>
- To download the .xpi file, right click it and select 'Save link as'
- Run Zotero (version 7.x)
- Go to `Tools -> Add-ons`
- `Install Add-on From File`
- Choose the file `zotero-cc-xxx.xpi`
- Restart Zotero

## Configuration

### Scopus API Key

To use the Scopus API, you need to configure your API key:

1. Obtain an API key from [Elsevier Developer Portal](https://dev.elsevier.com/)
2. In Zotero, go to `Tools -> Add-ons`
3. Click on the gear icon next to "Zotero Citation Counts Manager"
4. Select "Preferences"
5. Enter your Scopus API key in the "Scopus API Key" field

When using Scopus, the plugin will retrieve citation counts. Values are stored in the item's "Extra" field.

## Acknowledgements

This plugin is truly a community product. It is a refactored and enhanced version of [FrLars21/ZoteroCitationCountsManager](https://github.com/FrLars21/ZoteroCitationCountsManager) (as you can tell from the folk), which was built based on Erik Schnetter's [Zotero Citations Counts Manager](https://github.com/eschnett/zotero-citationcounts) for Zotero 7. Code for that extension was based on [Zotero DOI Manager](https://github.com/bwiernik/zotero-shortdoi), which is based in part on [Zotero Google Scholar Citations](https://github.com/beloglazov/zotero-scholar-citations) by Anton Beloglazov.

Boilerplate for this plugin was based on Zotero's sample plugin for v7 [Make-It-Red](https://github.com/zotero/make-it-red).

## License

Distributed under the Mozilla Public License (MPL) Version 2.0.
