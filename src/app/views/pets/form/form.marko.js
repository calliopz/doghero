// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/dogheron$1.0.0/src/app/views/pets/form/form.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><title>DogHero</title><link rel=\"icon\" href=\"/estatico/img/doghero-logo1.png\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/doghero.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo-header\"><img src=\"/estatico/img/logo-branco.png\" alt=\"Logo Doghero\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\">");

  var $for$0 = 0;

  marko_forEach(data.usuarios, function(usuario, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div" +
      marko_attr("id", "usuario_" + usuario.id) +
      "><a" +
      marko_attr("href", "/usuarios/form/" + usuario.id) +
      " class=\"cadastro\"><img src=\"/estatico/img/man.png\" alt=\"avatar\"></a></div> ");
  });

  out.w(" <a href=\"/pets\" class=\"pets\">Meus pets</a> <a href=\"/passeadores/lista\" class=\"passeador\">Heróis</a><a href=\"/passeios/lista\" class=\"passeio\">Passeios</a> </div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1 class=\"info-pet\">Informações do pet</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var $for$1 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var $keyScope$1 = "[" + (($for$1++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/pets/form\" class=\"altera-pet\" method=\"post\">");

  if (data.pet.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.pet.id) +
      "></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\"" +
    marko_attr("value", "" + data.pet.nome) +
    " placeholder=\"nome do pet\" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"especie\">Espécie:</label><input type=\"text\" id=\"especie\" name=\"especie\"" +
    marko_attr("value", "" + data.pet.especie) +
    " placeholder=\"espécie do pet\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"idade\">Idade:</label><input type=\"text\" id=\"idade\" name=\"idade\"" +
    marko_attr("value", "" + data.pet.idade) +
    " placeholder=\"idade do pet\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"tamanho\">Tamanho:</label><input type=\"text\" id=\"tamanho\" name=\"tamanho\"" +
    marko_attr("value", "" + data.pet.tamanho) +
    " placeholder=\"tamanho do pet\" class=\"form-control\"></div><button type=\"adiciona-pet\" id=\"adiciona-button\" class=\"adiciona-button\" name=\"salvar\">Salvar</button></form></div><a href=\"/pets\">Voltar</a></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><img src=\"/estatico/img/logo.png\" class=\"logo-rodape\"></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"http://www.facebook.com/dogherobrasil\" class=\"compartilhar-facebook\" target=\"_blank\">/DogHero</a></li><li><a href=\"http://www.twitter.com/dogherobrasil\" class=\"compartilhar-twitter\" target=\"_blank\">@doghero</a></li></ul></div></div></div></footer><script src=\"/estatico/js/remove-pet.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "57");

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
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
