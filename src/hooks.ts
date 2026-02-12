import { config, version } from "../package.json";

interface CitationCountsAPI {
  key: string;
  name: string;
}

interface CitationCountsCore {
  l10n: Localization;
  APIs: CitationCountsAPI[];
  init(args: { id: string; version: string; rootURI: string }): void;
  addToAllWindows(): void;
  addToWindow(window: _ZoteroTypes.MainWindow): void;
  removeFromWindow(window: Window): void;
  removeFromAllWindows(): void;
  getCitationCount(item: Zotero.Item): string;
  getFWCI(item: Zotero.Item): string;
  getPref(pref: string): string;
  updateItems(items: Zotero.Item[], api: CitationCountsAPI): Promise<void>;
  icon(iconName: string, hiDPI: boolean): string;
}

declare const ZoteroCitationCounts: CitationCountsCore;

async function onStartup() {
  await Promise.all([
    Zotero.initializationPromise,
    Zotero.unlockPromise,
    Zotero.uiReadyPromise,
  ]);

  Services.scriptloader.loadSubScript(
    `${rootURI}content/scripts/zoterocitationcounts.js`,
    _globalThis,
  );

  ZoteroCitationCounts.init({
    id: config.addonID,
    version,
    rootURI,
  });

  ZoteroCitationCounts.addToAllWindows();

  const preferencePaneLabel =
    (await ZoteroCitationCounts.l10n.formatValue(
      "citationcounts-preference-pane-label",
    )) || "Citation Counts";

  Zotero.PreferencePanes.register({
    pluginID: config.addonID,
    label: preferencePaneLabel,
    image: ZoteroCitationCounts.icon("edit-list-order", false),
    src: `${rootURI}content/preferences.xhtml`,
    scripts: [`${rootURI}content/scripts/preferences.js`],
  });

  const citationColumnLabel =
    (await ZoteroCitationCounts.l10n.formatValue(
      "citationcounts-column-title",
    )) || "Citation count";

  await Zotero.ItemTreeManager.registerColumns({
    dataKey: "citationcounts",
    label: citationColumnLabel,
    pluginID: config.addonID,
    dataProvider: (item) => ZoteroCitationCounts.getCitationCount(item),
  });

  await Zotero.ItemTreeManager.registerColumns({
    dataKey: "fwci",
    label: "FWCI",
    pluginID: config.addonID,
    dataProvider: (item) => ZoteroCitationCounts.getFWCI(item),
  });

  addon.data.itemObserverID = Zotero.Notifier.registerObserver(
    {
      notify: (event, _type, ids) => {
        if (event !== "add") {
          return;
        }

        const pref = ZoteroCitationCounts.getPref("autoretrieve");
        if (pref === "none") {
          return;
        }

        const api = ZoteroCitationCounts.APIs.find((candidate) => {
          return candidate.key === pref;
        });
        if (!api) {
          return;
        }

        ZoteroCitationCounts.updateItems(Zotero.Items.get(ids), api);
      },
    },
    ["item"],
  );

  addon.data.initialized = true;
}

async function onMainWindowLoad(win: _ZoteroTypes.MainWindow) {
  ZoteroCitationCounts.addToWindow(win);
}

async function onMainWindowUnload(win: Window) {
  ZoteroCitationCounts.removeFromWindow(win);
}

async function onShutdown() {
  addon.data.initialized = false;

  try {
    ZoteroCitationCounts.removeFromAllWindows();
  } catch {
    // ignore
  }

  if (addon.data.itemObserverID) {
    Zotero.Notifier.unregisterObserver(addon.data.itemObserverID);
    addon.data.itemObserverID = undefined;
  }

  addon.data.alive = false;
  // @ts-expect-error - Plugin instance is not typed
  delete Zotero[addon.data.config.addonInstance];
}

async function onNotify(
  _event: string,
  _type: string,
  _ids: Array<string | number>,
  _extraData: { [key: string]: any },
) {
  return;
}

async function onPrefsEvent(_type: string, _data: { [key: string]: any }) {
  return;
}

function onShortcuts(_type: string) {
  return;
}

function onDialogEvents(_type: string) {
  return;
}

export default {
  onStartup,
  onShutdown,
  onMainWindowLoad,
  onMainWindowUnload,
  onNotify,
  onPrefsEvent,
  onShortcuts,
  onDialogEvents,
};
