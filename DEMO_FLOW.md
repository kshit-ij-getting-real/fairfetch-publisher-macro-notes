# Demo flow

This demo shows a simple premium content behavior for humans and licensed AI clients.

1. Open `/premium/demo-article`.
   - You will see a locked Premium Research header, a short preview paragraph, and a paywall callout.
   - The full research body is hidden in this default human view.

2. Switch to the licensed AI view.
   - Either append `?via=fairfetch&license=DISPLAY` to the URL.
   - Or click **Copy AI licensed URL**, open that URL, and load it.

3. Confirm licensed rendering.
   - You will see a **Licensed via FairFetch** badge.
   - You will see the note about licensed AI clients and receipts.
   - You will see the full report body and all sections.

Query params are used only for view logic in this demo. The path remains `/premium/demo-article` for pricing rule matching.
