/**
 * Gera js/runtime-config.js a partir de variáveis de ambiente (Vercel).
 * Nunca registre números reais de WhatsApp no repositório.
 */
const fs = require("fs");
const path = require("path");

const whatsapp = String(process.env.EBA_WHATSAPP || "").replace(/\D/g, "");

const outPath = path.join(__dirname, "..", "js", "runtime-config.js");
const content = `// Gerado automaticamente no deploy — não edite nem commite segredos aqui.
window.__LELYS_RUNTIME__ = Object.freeze({
  ebaWhatsapp: ${JSON.stringify(whatsapp)}
});
`;

fs.writeFileSync(outPath, content, "utf8");

if (whatsapp) {
  console.log("runtime-config.js gerado (WhatsApp configurado).");
} else {
  console.warn(
    "runtime-config.js gerado sem WhatsApp. Defina EBA_WHATSAPP nas variáveis da Vercel se quiser o botão ativo."
  );
}
