# Repositório criado para aprendizado do ReactJS

## Tópicos abordados:
* JSX (Permite a criação de componentes sem a a necessidade de utilizar React.createElement; o que torna a renderização e criação elementos de forma mais facil. O JSX não é interpretado pelo navegador, por isso necessitamos de um transpilador, nesse caso o Babel.);
* Renderização;
* Componentes e Props;
* Estado e Ciclo de Vida (Inicialiação, montagem, atualização e desmontagem.);
* Ecossistema do React(Algumas ferramentas: React Router, Redux, Material UI, Ant-Design, Storybook, Gatsby; Jest; React i18n Next.

### Webpack

    O webpack é um **module bundler** (um empacotador de módulos para aplicações JS). Ao utilizar o React-Scripts o webpack já vem configurado por debaixo dos panos. Veremos como realizar essa configuração manualmente.

#### Principais Conceitos do WebPack

* Entry (Ponto de entrada para buscar módulos e dependências);
* Output (Determina os bundlers que o Webpack irá emitir);
* Loadres (Permite que o Webpack gerencie arquivos que não são JavaScript);
* Plugins (Utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.);
* Modes (Utilizado para configuração do zero, permite configurar módulos como production, development ou none).
* Production e Development (Production trás otimizações internas; Developmente é executado com três plugins: UflifyPlugin, ModuleConcatenarion Plugin e NoEmitOnErrorsPlugin).

Acessar a pasta configwebpack/ para verificar configuração do WebPack.