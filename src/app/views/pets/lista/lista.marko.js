// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/dogheron$1.0.0/src/app/views/pets/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"conteudoPrincipal\"><div class=\"container\"><h1> Lista de pets </h1><table id=\"pets\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><td>Nome</td><td>Espécie</td><td>Idade</td><td>Tamanho</td></tr></thead><tbody>");

  var for__15 = 0;

  marko_forEach(data.pets, function(pet) {
    var keyscope__16 = "[" + ((for__15++) + "]");

    out.w("<tr id=\"pet_" +
      marko_escapeXmlAttr(pet.id) +
      "\"><td>" +
      marko_escapeXml(pet.id) +
      "</td><td>" +
      marko_escapeXml(pet.nome) +
      "</td><td>" +
      marko_escapeXml(pet.especie) +
      "</td><td>" +
      marko_escapeXml(pet.idade) +
      "</td><td>" +
      marko_escapeXml(pet.tamanho) +
      "</td><td><a href=\"/pets/form/" +
      marko_escapeXmlAttr(pet.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(pet.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</tbody></table></div></main><script src=\"/estatico/js/remove-pet.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/dogheron$1.0.0/src/app/views/pets/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
