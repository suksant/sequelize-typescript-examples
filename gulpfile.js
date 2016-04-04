(function () {
  "use strict";

  let args = require("yargs").argv;
  let compression = require("compression");
  let del = require("del");
  let gulp = require("gulp");
  let merge = require("merge2");
  let plugins = require("gulp-load-plugins")();
  let spawn = require("child_process").spawn;

  plugins.help(gulp);

  gulp.task("clean", "Clean the  distribution.", [], clean);
  gulp.task("compile", "Compile typescript files.", ["typings"], compile);
  gulp.task("start", "Compile the selected example and start the server.", ["compile"], start);
  gulp.task("typings", "Install type definitions.", [], typings);

  let tsProject;
  let tsProjectConfig;

  if (args.example) {
    tsProject = plugins.typescript.createProject(`./${args.example}/src/tsconfig.json`);
    tsProjectConfig = plugins.typescript.createProject("./configs/tsconfig.json");
  }

  function compile() {
    let tsResult = tsProject.src()
      .pipe(plugins.typescript(tsProject));
    let tsResultConfig = tsProjectConfig.src()
      .pipe(plugins.typescript(tsProjectConfig));

    return merge(
      tsResult.js.pipe(gulp.dest(`./build/${args.example}/build`)),
      tsResultConfig.js.pipe(gulp.dest(`./build/configs`))
    );
  }

  function clean() {
    del(["./build", "./typings"]);
  }

  function start() {
    let options = [`./build/${args.example}/build/server.js`];
    spawn("node", options, {stdio: "inherit"});
  }

  function typings() {
    return gulp.src("./typings.json")
      .pipe(plugins.typings());
  }
}());
