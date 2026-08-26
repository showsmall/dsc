import { a5 as head, a6 as attr_class, e as escape_html, a7 as ensure_array_like, a8 as stringify, a9 as attr } from "../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let plugins = [];
    let messages = [];
    let draft = "";
    let sending = false;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>DSC Harness</title>`);
      });
    });
    $$renderer2.push(`<div class="app svelte-1uha8ag"><header class="svelte-1uha8ag"><span class="brand svelte-1uha8ag">◆ DSC Harness</span> <span${attr_class(`badge ${"err"}`, "svelte-1uha8ag")}>${escape_html("○ offline")}</span> <span class="meta svelte-1uha8ag">agent: ${escape_html("agent-react-loop")}</span> <span class="spacer svelte-1uha8ag"></span> <span class="meta svelte-1uha8ag">admin: ${escape_html("-")}</span></header> <div class="body svelte-1uha8ag"><aside class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">插件</h3> `);
    if (plugins.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="item dim svelte-1uha8ag">（无 / 未加载）</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(plugins);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let p = each_array[$$index];
        const name = p.name ?? "(unnamed)";
        const st = (p.state ?? "?").toLowerCase();
        const live = st === "ready" || st === "running";
        $$renderer2.push(`<div class="item svelte-1uha8ag"><div class="name svelte-1uha8ag">${escape_html(name)}</div> <div${attr_class(`state ${live ? "live" : "stop"}`, "svelte-1uha8ag")}>${escape_html(st)} · ${escape_html(p.type ?? "")}</div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></aside> <main class="svelte-1uha8ag"><div class="chat svelte-1uha8ag" style="height: calc(100vh - 46px - 128px);"><!--[-->`);
    const each_array_1 = ensure_array_like(messages);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let m = each_array_1[$$index_1];
      $$renderer2.push(`<div${attr_class(`msg ${stringify(m.cls)}`, "svelte-1uha8ag")}><div class="who svelte-1uha8ag">${escape_html(m.who)}</div> <div class="b svelte-1uha8ag">${escape_html(m.body)}</div></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="composer svelte-1uha8ag"><textarea placeholder="发送给 DSC agent…（Enter 发送，Shift+Enter 换行）" class="svelte-1uha8ag">`);
    const $$body = escape_html(draft);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> <div class="row svelte-1uha8ag"><button${attr("disabled", sending, true)} class="svelte-1uha8ag">${escape_html("发送")}</button> <span class="meta svelte-1uha8ag">${escape_html("宿主 admin 未连接（探路版：对话桥接宿主尚未接入）")}</span></div></div></main></div></div>`);
  });
}
export {
  _page as default
};
