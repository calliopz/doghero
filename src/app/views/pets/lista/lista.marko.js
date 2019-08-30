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

  out.w("<html><head><meta charset=\"utf-8\"><title>DogHero</title><link rel=\"icon\" href=\"/estatico/img/doghero-logo1.png\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/doghero.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo-header\"><img src=\"/estatico/img/logo-branco.png\" alt=\"Logo Doghero\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/usuarios/form/$(usuario.id)\" class=\"meu-cadastro\"><img src=\"/estatico/img/avatar-white.png\" alt=\"avatar\"></a> </div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h3 clas=\"titulo\"> Meus pets <a href=\"/pets/form\"><img src=\"/estatico/img/add-button.png\" alt=\"adicionar pet\"></a></h3> <table id=\"pets\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><th>Nome</th><th>Espécie</th><th>Idade</th><th>Tamanho</th><th></th><th></th></tr></thead><tbody>");

  var for__33 = 0;

  marko_forEach(data.pets, function(pet) {
    var keyscope__34 = "[" + ((for__33++) + "]");

    out.w("<tr id=\"pet_" +
      marko_escapeXmlAttr(pet.id) +
      "\"><td>" +
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

  out.w("</tbody></table><h3 class=\"titulo\">Passeios</h3><table id=\"passeios\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><th>Data</th><th>Horário</th><th>Pet</th><th>Passeador</th><th>Valor</th><th>Pagamento</th></tr></thead><tbody><tr><td>29.06.2019</td><td>6:45</td><td>Lua</td><td>Amanda Rios</td><td>60.0</td><td>Concluído</td> </tr><tr><td>02.07.2019</td><td>8:30</td><td>Max</td><td>Marcelo Souza</td><td>60.0</td><td>Concluído</td> </tr><tr><td>05.07.2019</td><td>7:15</td><td>Max</td><td>Marcelo Souza</td><td>35.0</td><td>Concluído</td> </tr><tr><td>10.07.2019</td><td>15:00</td><td>Lua</td><td>Amanda Rios</td><td>35.0</td><td>Concluído</td> </tr></tbody></table></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><img src=\"/estatico/img/logo.png\" class=\"logo-rodape\"></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"http://www.facebook.com/dogherobrasil\" class=\"compartilhar-facebook\" target=\"_blank\">/DogHero</a></li><li><a href=\"http://www.twitter.com/dogherobrasil\" class=\"compartilhar-twitter\" target=\"_blank\">@doghero</a></li></ul></div></div></div></footer><script src=\"/estatico/js/remove-pet.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "95");

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
