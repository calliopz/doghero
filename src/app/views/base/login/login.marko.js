// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/dogheron$1.0.0/src/app/views/base/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"UTF-8\"> <title>DogHero</title><meta charset=\"utf-8\"><link rel=\"icon\" href=\"/estatico/img/doghero-logo1.png\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/site.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><img src=\"/estatico/img/logo.png\" alt=\"logo\" class=\"logo-header\"><nav class=\"menu\"><ul id=\"main-menu\"><li><a href=\"https://www.doghero.com.br/\" target=\"_blank\">Home</a></li><li><a href=\"https://www.doghero.com.br/ser-passeador\" target=\"_blank\">Seja um herói</a></li><li><a href=\"https://www.doghero.com.br/como-funciona\" target=\"_blank\">Como funciona</a></li><li><a href=\"https://passeios.doghero.com.br/dog-walker/\" target=\"_blank\">Serviços</a></li><li><a href=\"https://www.doghero.com.br/dog-walker/book\" target=\"_blank\">Encontre seu herói</a></li><li><a href=\"https://love.doghero.com.br/\" target=\"_blank\">Blog</a></li></ul></nav></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Login</h1><form action=\"/login\" method=\"post\"><div class=\"form-group\"><label for=\"email\">E-mail:</label><input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"senha\">Senha:</label><input type=\"password\" id=\"senha\" name=\"senha\" class=\"form-control\"></div><input type=\"submit\" value=\"Logar\" class=\"btn btn-block btn-primary\"></form></div></main><footer><img src=\"/estatico/img/logo-branco.png\" alt=\"logo\" class=\"logo-footer\"><nav class=\"redes-sociais\"><ul><li><a class=\"facebook\" href=\"https://www.facebook.com/dogherobrasil/\" target=\"_blank\"><img src=\"/estatico/img/facebook.png\" alt=\"facebook dog hero\" width=30></a></li><li><a class=\"youtube\" href=\"https://www.youtube.com/channel/UCARJzcLjM850qF0E45mw03g\" target=\"_blank\"><img src=\"/estatico/img/youtube.png\" alt=\"youtube dog hero\" width=30></a></li><li><a class=\"twitter\" href=\"https://twitter.com/dogherobrasil\" target=\"_blank\"><img src=\"/estatico/img/twitter.png\" alt=\"twitter dog hero\" width=30></a></li></ul></nav> </footer>");

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
    id: "/dogheron$1.0.0/src/app/views/base/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
