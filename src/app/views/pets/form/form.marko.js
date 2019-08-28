// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/dogheron$1.0.0/src/app/views/pets/form/form.marko",
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

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Adicione um pet</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var for__4 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var keyscope__5 = "[" + ((for__4++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/pets/form\" method=\"post\">");

  if (data.pet.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.pet.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.pet.nome) +
    "\" placeholder=\"nome do pet\"></div><div><label for=\"especie\">Espécie:</label><input type=\"text\" id=\"especie\" name=\"especie\" value=\"" +
    marko_escapeXmlAttr(data.pet.especie) +
    "\" placeholder=\"espécie do pet\"></div><div><label for=\"idade\">Idade:</label><input type=\"text\" id=\"idade\" name=\"idade\" value=\"" +
    marko_escapeXmlAttr(data.pet.idade) +
    "\" placeholder=\"idade do pet\"></div><div><label for=\"tamanho\">Tamanho:</label><input type=\"text\" id=\"tamanho\" name=\"tamanho\" value=\"" +
    marko_escapeXmlAttr(data.pet.tamanho) +
    "\" placeholder=\"tamanho do pet\"></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/dogheron$1.0.0/src/app/views/pets/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
