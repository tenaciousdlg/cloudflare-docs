---
_build:
  publishResources: false
  render: never
  list: never
---

Static resources are protected by default when you create **Firewall Rules** using `cf.bot_management.score`. To exclude static resources, include <code class="InlineCode">not (cf.botManagement.staticResource)</code> as part of your Firewall Rule.
