const componentDirPath = "components/{{pascalCase name}}";
const pagesDirPath = "pages/{{pascalCase name}}";
const templatesDirPath = "__plop__";

const configGeneratorComponent = {
  description: "this is next boilerplate component generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: `${componentDirPath}/{{pascalCase name}}.tsx`,
      templateFile: `${templatesDirPath}/Component.tsx.hbs`,
    },
    {
      type: "add",
      path: `${componentDirPath}/index.ts`,
      templateFile: `${templatesDirPath}/index.ts.hbs`,
    },
    {
      type: "add",
      path: `${componentDirPath}/{{pascalCase name}}.style.tsx`,
      templateFile: `${templatesDirPath}/Component.style.tsx.hbs`,
    },
    {
      type: "add",
      path: `${componentDirPath}/{{pascalCase name}}.spec.tsx`,
      templateFile: `${templatesDirPath}/Component.spec.tsx.hbs`,
    },
  ],
};

const configGeneratorPage = {
  description: "this is next boilerplate page generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: `${pagesDirPath}/{{pascalCase name}}.tsx`,
      templateFile: `${templatesDirPath}/Component.tsx.hbs`,
    },
    {
      type: "add",
      path: `${pagesDirPath}/index.ts`,
      templateFile: `${templatesDirPath}/index.ts.hbs`,
    },
    {
      type: "add",
      path: `${pagesDirPath}/{{pascalCase name}}.style.tsx`,
      templateFile: `${templatesDirPath}/Component.style.tsx.hbs`,
    },
  ],
};

module.exports = function configure(plop) {
  plop.setGenerator("component", configGeneratorComponent);
  plop.setGenerator("page", configGeneratorPage);
};
