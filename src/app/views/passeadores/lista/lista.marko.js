// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/dogheron$1.0.0/src/app/views/passeadores/lista/lista.marko",
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

  out.w("<html><head><meta charset=\"utf-8\"><title>DogHero</title><link rel=\"icon\" href=\"/estatico/img/doghero-logo1.png\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/doghero.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo-header\"><img src=\"/estatico/img/logo-branco.png\" alt=\"Logo Doghero\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/usuarios/form/1\" class=\"meu-cadastro\"><img src=\"/estatico/img/avatar-white.png\" alt=\"avatar\"></a> </div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1 class=\"info-pet\">Meus dados pessoais</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var for__22 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var keyscope__23 = "[" + ((for__22++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/passeadores/form\" class=\"passeador\" method=\"put\">");

  if (data.passeador.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.passeador.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.passeador.nome_completo) +
    "\"></div><div><label for=\"email\">E-mail:</label><input type=\"text\" id=\"email\" name=\"email\" value=\"" +
    marko_escapeXmlAttr(data.passeador.email) +
    "\"></div><div><label for=\"celular\">Celular:</label><input type=\"text\" id=\"celular\" name=\"celular\" value=\"" +
    marko_escapeXmlAttr(data.passeador.celular) +
    "\"></div> </form></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><img src=\"/estatico/img/logo.png\" class=\"logo-rodape\"></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"http://www.facebook.com/dogherobrasil\" class=\"compartilhar-facebook\" target=\"_blank\">/DogHero</a></li><li><a href=\"http://www.twitter.com/dogherobrasil\" class=\"compartilhar-twitter\" target=\"_blank\">@doghero</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "49");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/dogheron$1.0.0/src/app/views/passeadores/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
